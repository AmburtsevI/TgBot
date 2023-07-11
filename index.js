import { chatBot, channelBot } from './utils/botsEnterPoint.js'
import mongoose from "mongoose";
import PortfolioModel from "./Models/PortfolioModel.js";
import downloader from "./middleware/downloader.js";
import { mainMenuOptions }  from "./middleware/inline_keyboard.js";
import { menuRouter } from './middleware/menuRouter.js';

mongoose
	.connect(process.env.MONGODB_CONNECT)
	.then(() => console.log("db connected"))
	.catch("db errored");


chatBot.setMyCommands([
	{
		command: '/start', 
		description: 'Открыть меню'
	},
])


/*
 * --------------------------------	
 * 		  Канал UNDERWORLD
 * --------------------------------	
 */


const startChannelBot = async () => {
	channelBot.on("channel_post", async (msg) => {
		console.log(msg)
		if (msg.photo && msg.caption.toLowerCase().includes("#арт")) {
			const fileId = msg.photo[3].file_id;

			const fileName = "new_meme";
			const path = `./Portfolio/${fileName + ".jpg"}`;

			channelBot.getFileLink(fileId).then(async (link) => {
				downloader(link, fileName, path);
				try {
					const post = new PortfolioModel({
						pic: path,
						style: "meme" + Math.floor(Math.random() * 100),
						genre: "new meme 2",
					});
					const newModel = await post.save();
				} catch (error) {
					console.log(error);
				}
			});
		}
	});
};

/*
 * --------------------------------	
 * 		   Бот UNDERWORLD
 * --------------------------------	
 */

const startChatBot = () => {
	chatBot.onText(/\/start/, msg => {
		const chatId = msg.chat.id
		console.log(msg)
		chatBot.sendMessage(chatId, 'Приветствую!', mainMenuOptions)
	})

	chatBot.on('callback_query', msg => {
		console.log(msg)
		chatBot.answerCallbackQuery(msg.id).then(() => {
			menuRouter(msg.message.chat.id, msg.data)
		  })
	})
};

startChannelBot()
startChatBot()

