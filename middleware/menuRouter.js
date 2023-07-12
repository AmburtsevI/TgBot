<<<<<<< HEAD
import { chatBot } from "../utils/botsEntryPoint.js";
import { getFiles } from "./getFiles.js";
import { mainMenuOptions, portfolioMenuOptions } from "./inline_keyboard.js";

const about = (chatId, data) => {
	chatBot.sendMessage(chatId, data);
};

let current = 0;
let currentFilesIds = [];
const files = getFiles();

console.log()

export const menuRouter = (chatId, data) => {
	const actions = {
		about: () => about(chatId, data),
		portfolio: () => {
			console.log(files[current])
			chatBot
				.sendMediaGroup(chatId, files[current])
				.then(
					(msg) => (
						chatBot.sendMessage(chatId, "Смотреть другие работы", portfolioMenuOptions),
						msg.map((data, index) => currentFilesIds.push(data.message_id))
					)
				);
		},
		ask: () => chatBot.sendMessage(chatId, data),
		order: () => chatBot.sendMessage(chatId, data),
		message: () => chatBot.sendMessage(chatId, data),
		next: () => {
			console.log(files.length);
			current < files.length
				? (current++,
					// console.log(currentFilesIds),
					currentFilesIds.map((obj, index) => {
						let filesToSend = files[current]
						// console.log(filesToSend[index])
						chatBot.editMessageMedia(filesToSend[index], { chat_id: chatId, message_id: obj })
					})
				)
				: current = files.length ? " " : " "
		},
		prev: () => {
			current !== 0
				? (current--,
					// console.log(currentFilesIds),
					currentFilesIds.map((obj, index) => {
						let filesToSend = files[current]
						// console.log(filesToSend[index])
						chatBot.editMessageMedia(filesToSend[index], { chat_id: chatId, message_id: obj })
					})
				)
				: "";
		},
		first: () => {
			current = 0;
			currentFilesIds.map((obj, index) => {
				let filesToSend = files[current]
				// console.log(filesToSend[index])
				chatBot.editMessageMedia(filesToSend[index], { chat_id: chatId, message_id: obj })
			})
		},
	};

	return actions[data]?.();
};
=======
import { chatBot } from "../utils/botsEnterPoint.js"

const about = (chatId, data) => {
    chatBot.sendMessage(chatId, data)
}


export const menuRouter = (chatId, data) => {

    const actions = {
        about: () => about(chatId, data),
        portfolio: () => chatBot.sendMessage(chatId, data),
        ask: () => chatBot.sendMessage(chatId, data),
        order: () => chatBot.sendMessage(chatId, data),
        message: () => chatBot.sendMessage(chatId, data)
    }

    return actions[data]?.()

}
>>>>>>> 7aa9916557873b2383769cdc2639b969bf8601a4
