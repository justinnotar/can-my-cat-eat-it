import OpenAI from "openai";

export default async function request(word) {
    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
    })

    const response = await openai.chat.completions.create({
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
    console.log(response)
    return response.choices[0].message.content;
}