import React from "react";
import NavBar from "../components/NavBar";
import TopBlur from "../components/TopBlur";
import BottomBlur from "../components/BottomBlur";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-y-auto bg-purple-100">
      <TopBlur />
      <BottomBlur />
      <NavBar />
      <main>
        <div className="relative mx-auto max-w-5xl text-center text-purple-900">
          <h1 className="pb-8 pt-10 text-5xl font-bold transition-all">about us</h1>
          <h2 className="text-3xl">
            why was <i>canmycateat.xyz</i> created?
          </h2>
          <p className="p-4">
            searching google for a one-word answer to anything can pretty
            difficult, let alone whether a certain food is safe for your cat to
            eat. there are thousands of articles that cover cat health and
            feline nutrition, yet none that present a simple yes or no answer.
            the goal of this site is to provide you just that.
          </p>
          <h2 className="text-3xl">
            who created <i>canmycateat.xyz</i>?
          </h2>
          <p className="p-4 ">
            <a href="https://notar.dev">
              <u>justin</u>
            </a>{" "}
          </p>
          <h2 className="text-3xl ">
            how can i support <i>canmycateat.xyz</i>?
          </h2>
          <p className="p-4 ">
            vote for us on{" "}
            <a href="https://notar.dev">
              <u>product hunt</u>
            </a>
            !
          </p>
        </div>
      </main>
    </div>
  );
}
