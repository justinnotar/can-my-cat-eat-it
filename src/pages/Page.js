import { pages } from "../assets/content";
import NavBar from "../components/NavBar";
import TopBlur from "../components/TopBlur";
import { useParams } from "react-router-dom";
import BottomBlur from "../components/BottomBlur";
import React, { useState, useEffect } from "react";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default function Page() {
  const [name, setName] = useState();
  const [answer, setAnswer] = useState();
  const id = useParams().id;

  useEffect(() => {
    for (var i = 0; i < pages.length; i++) {
      var page = pages[i];
      if (page === id) {
        setName(page);
        generateAnswer(page)
      }
    }
  }, [id]);

  const generateAnswer = async (word) => {
    console.log(word);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Can my cat eat ${word}? Please give a yes or no answer with a short explanation of your answer.`,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.8,
      presence_penalty: 0.0,
    });
    console.log(response.data.choices[0].text)
    setAnswer(response.data.choices[0].text);
    window.stop();
  };

  return (
    <div className="isolate min-h-screen overflow-y-hidden bg-purple-100">
      <TopBlur />
      <NavBar />
      <main>
        <div className="relative mx-auto h-screen max-w-3xl pt-[25vh]">
          {/* <h1 className="text-5xl pb-4 font-bold text-purple-900 text-center tracking-tight"> */}
          <h1 className="p-4 pt-0 text-center text-5xl font-bold text-purple-900">
            can my 🐈 eat{" "}
            <b>
              <i className="text-purple-500">{name}</i>
            </b>
            &nbsp;?
          </h1>
          <BottomBlur />
          <div>{answer}</div>
          {/* <div id={answer}>{answer}</div>
          <div>{reason}</div>
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            source
          </a>
          <div>{author}</div> */}
        </div>
      </main>
    </div>
  );
}
