import React from 'react'
import NavBar from '../components/NavBar'
import TopBlur from '../components/TopBlur'
import SearchBar from '../components/SearchBar'
import BottomBlur from '../components/BottomBlur'

export default function Home() {
  return (
    <div className="isolate bg-purple-100 overflow-y-hidden min-h-screen">
      <TopBlur />
      <BottomBlur />
      <NavBar />
      <main>
        <div className="pt-[12.5vh] relative mx-auto max-w-3xl">
            {/* <h1 className="text-5xl pb-4 font-bold text-purple-900 text-center tracking-tight"> */}
            <h1 className="text-5xl p-4 pt-0 font-bold text-purple-900 text-center">
              can my 🐈 eat <b><i className='text-purple-500'>xyz</i></b>&nbsp;?
            </h1>
            <SearchBar />
        </div>
      </main>
    </div>
  )
  
}