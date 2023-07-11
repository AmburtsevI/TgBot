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