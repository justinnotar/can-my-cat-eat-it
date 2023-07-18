export default async function request(word) {
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        {
        "role": "user",
        "content": `In general, can cats eat ${word}? Start your response with either "yes" or no" followed by a period. Then, give a short reason for why cats can or cannot eat ${word}. If you're not sure about an answer, or the question doesn't make sense, then just resonse "oof".`
        }
    ],
    temperature: 0,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    });
    return response.data.choices[0].message.content;
}