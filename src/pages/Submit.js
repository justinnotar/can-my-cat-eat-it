import React from "react";
import NavBar from "../components/NavBar";
import TopBlur from "../components/TopBlur";
import SubmitForm from "../components/SubmitForm";
import BottomBlur from "../components/BottomBlur";

export default function Submit() {
  return (
    <div className="isolate min-h-screen overflow-y-hidden bg-purple-100">
      <TopBlur />
      <BottomBlur />
      <NavBar />
      <main>
        <div className="relative mx-auto max-w-3xl">
          {/* <h1 className="text-5xl pb-4 font-bold text-purple-900 text-center tracking-tight"> */}
          <h1 className="p-4 pt-[12.5vh] text-center text-5xl font-bold text-purple-900">
            submit a food
          </h1>
          <SubmitForm />
        </div>
      </main>
    </div>
  );
}
