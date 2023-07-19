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
        "content": `In general, can cats eat ${word}? Start your response with either "Yes." or "No.". Then, in 2-3 complete sentences, give a reason for why cats can or cannot eat ${word}. If you don't have an answer or the question doesn't make sense, then just return "Oof. Sorry! Please try a different food.".`
        }
    ],
    temperature: 0,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    });
    return response.data.choices[0].message.content;
}