import React from 'react';
import SearchBar from '../components/SearchBar';
import TopBlur from '../components/TopBlur'
import BottomBlur from '../components/BottomBlur'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className="isolate bg-purple-100 overflow-y-hidden min-h-screen">
      <TopBlur />
      <NavBar />
      <main>
        <div className="pt-[25vh] relative mx-auto max-w-3xl h-screen">
            <h1 className="text-5xl pb-4 font-bold text-purple-900 text-center tracking-tight">
              can my 🐈 eat <b><i className='text-purple-300'>it</i></b> ?
            </h1>
            <SearchBar />
            <BottomBlur />
        </div>
      </main>
    </div>
  )
  
}