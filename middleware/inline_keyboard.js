<<<<<<< HEAD

export const mainMenuOptions = {
    parse_mode: 'HTML',
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Об авторе", callback_data: "about"}],
            [{text: "Портфолио", callback_data: "portfolio"}],
            [{text: "Частые вопросы", callback_data: "ask"}],
            [{text: "Заказать арт", callback_data: "order"}],
            [{text: "Сообщение Автору", callback_data: "message"}],
        ]
    })
};

export const portfolioMenuOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "◀️", callback_data: "prev"},{text: "⏺", callback_data: "first"},{text: '▶️', callback_data: "next"}]
        ]
    })
};
=======

export const mainMenuOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Об авторе", callback_data: "about"}],
            [{text: "Портфолио", callback_data: "portfolio"}],
            [{text: "Частые вопросы", callback_data: "ask"}],
            [{text: "Заказать арт", callback_data: "order"}],
            [{text: "Сообщение Автору", callback_data: "message"}],
        ]
    })
};
>>>>>>> 7aa9916557873b2383769cdc2639b969bf8601a4
