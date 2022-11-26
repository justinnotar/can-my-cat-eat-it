import React from 'react'
import NavBar from '../components/NavBar'
import TopBlur from '../components/TopBlur'
import SubmitForm from '../components/SubmitForm'
import BottomBlur from '../components/BottomBlur'

export default function Submit() {
  return (
    <div className="isolate bg-purple-100 overflow-y-hidden min-h-screen">
      <TopBlur />
      <BottomBlur />
      <NavBar />
      <main>
        <div className="relative mx-auto max-w-3xl">
            {/* <h1 className="text-5xl pb-4 font-bold text-purple-900 text-center tracking-tight"> */}
            <h1 className="text-5xl p-4 pt-[12.5vh] font-bold text-purple-900 text-center">
              submit a food
            </h1>
            <SubmitForm />
        </div>
      </main>
    </div>
  )
  
}