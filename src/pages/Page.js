import { pages } from "../assets/content";
import NavBar from "../components/NavBar";
import TopBlur from "../components/TopBlur";
import BottomBlur from "../components/BottomBlur";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import request from "../request";

function formatText(input) {
  let answer = ''
  if (input.charAt(0) == 'y') {
    answer = 'yes'
  }
  else answer = 'no'
  input = input.substring(4)
  return {answer: answer, input: input}
}

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [answer, setAnswer] = useState(null)
  const [reason, setReason] = useState(null)
  const food = useParams().id;

  useEffect(() => {
    const data = request(food)
    data.then(
      result => {
        setIsLoading(false);
        setAnswer(formatText(result).answer)
        setReason(formatText(result).input)
      }
    )
  }, [food]);

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
            <i className="text-purple-500">{food}</i>
          </b>
          &nbsp;?
        </h1>
        <BottomBlur />
        {isLoading && <div className="text-purple-900">loading...</div>}
        {!isLoading && <div className="text-purple-900">{answer}</div>}
        {!isLoading && <div>{reason}</div>}
      </div>
    </main>
  </div>
  )

}
