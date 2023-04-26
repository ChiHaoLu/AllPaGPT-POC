export async function chat(openai, role, content) {
    return await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: role, content: content
        }],
    });
}