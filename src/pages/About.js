import React from 'react'
import NavBar from '../components/NavBar'
import TopBlur from '../components/TopBlur'
import BottomBlur from '../components/BottomBlur'

export default function Home() {
  return (
    <div className="isolate relative bg-purple-100 overflow-y-auto min-h-screen">
      <TopBlur />
      <BottomBlur />
      <NavBar />
      <main>
        <div className="relative mx-auto max-w-5xl text-purple-900">
          {/* <h1 className="text-5xl pb-4 font-bold text-purple-900 text-center tracking-tight"> */}
          <h1 className="text-5xl pb-8 pt-10 font-bold text-center">
            about us
          </h1>
          <h1 className="text-3xl text-center">why was <i><b>canmycateat.xyz</b></i> created?</h1>
          <p className="p-4">searching google for a one-word answer to anything can pretty difficult, let alone whether a certain food is safe for your cat to eat. there are thousands of articles that cover cat health and feline nutrition, yet none that present a simple yes or no answer. the goal of this site is to provide you just that.</p>
          <h1 className="text-3xl text-center">who was <i><b>canmycateat.xyz</b></i> created by?</h1>
          <p className="p-4 text-center"><a href="https://notar.dev"><u>justin</u></a> and allisa</p>
        </div>
      </main>
    </div>
  )
  
}