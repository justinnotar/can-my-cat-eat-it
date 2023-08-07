import NavBar from "../components/NavBar";
import TopBlur from "../components/TopBlur";
import BottomBlur from "../components/BottomBlur";
import CatLoader from "../components/CatLoader";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import request from "../request";
import '../App.css'

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [answer, setAnswer] = useState(null)
  const [reason, setReason] = useState(null)
  const food = useParams().id;

  function formatText(input) {
    let answer = ''
    if (input.charAt(0) === 'Y') {
      answer = 'yup'
    }
    else if (input.charAt(0) === 'O') {
      answer = 'oof'
    }
    else answer = 'nope'
    input = input.substring(4)
    return {answer: answer, input: input}
  }

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
    <div className="isolate text-center min-h-screen overflow-y-hidden bg-purple-100">
    <TopBlur />
    <NavBar />
    <main>
      <div className="relative mx-auto max-w-3xl px-4 pt-[6.25vh] sm:pt-[12.5vh]">
        {/* <h1 className="text-5xl pb-4 font-bold text-purple-900 tracking-tight"> */}
        <h1 className="text-5xl font-bold text-purple-900">
          can my 🐈 eat{" "}
          <b>
            <i className="text-purple-500">{food}</i>
          </b>
          &nbsp;?
        </h1>
        <BottomBlur />
        {isLoading &&
          <div className="pt-12">
            <div className="text-5xl text-purple-900 font-bold">hmm<span className="dot dot1">.</span><span className="dot dot2">.</span><span className="dot dot3">.</span></div>
            <div className="py-12"><CatLoader/></div>
            <a className="font-bold text-xl text-purple-500" href='/'>cancel</a>
          </div>
        }
        {!isLoading && <div className={`font-bold text-5xl pt-12 ${answer}`}>{answer}</div>}
        {!isLoading && 
          <>
            <div className="text-xl text-purple-900 py-12">{reason}</div>
            <a className="font-bold text-xl text-purple-500" href='/'>have another food in mind?</a>
          </>
        }
      </div>
    </main>
  </div>
  )

}
