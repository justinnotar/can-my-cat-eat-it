import '../index.css'
import { useState } from 'react'
import { pages } from '../assets/content'
import { Combobox } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/outline'

export default function SubmitForm() {
    
    return (
        <Combobox 
        as="div" 
        className="p-10 pt-4 pb-20 overflow-y-auto">
            <div className="p-4 max-w-xl mx-auto text-xl rounded-xl text-purple-900 bg-white ring-1 ring-black/5 shadow-2xl divide-y divide-purple-300">
                
            </div>
        </Combobox>
    )
}