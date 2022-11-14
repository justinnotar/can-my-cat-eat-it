import React from 'react'
import NavBar from '../components/NavBar'
import TopBlur from '../components/TopBlur'
import BottomBlur from '../components/BottomBlur'

export default function Home() {
  return (
    <div className="isolate bg-purple-100 overflow-y-hidden min-h-screen">
      <TopBlur />
      <NavBar />
      <main>
        <div className="pt-[25vh] relative mx-auto max-w-3xl h-screen">
            {/* <h1 className="text-5xl pb-4 font-bold text-purple-900 text-center tracking-tight"> */}
            <h1 className="text-5xl pb-4 font-bold text-purple-900 text-center">
              submit a food
            </h1>
            <BottomBlur />
        </div>
      </main>
    </div>
  )
  
}