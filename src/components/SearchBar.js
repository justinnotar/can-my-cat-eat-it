import '../index.css'
import { useState } from 'react'
import { pages } from '../assets/content'
import { Combobox } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/outline'

export default function SearchBar() {

    const [query, setQuery] = useState('')
    const filteredPages = pages.filter(page => page.name.toLowerCase().startsWith(query.toLowerCase()))
    
    return (
        <Combobox 
        as="div" 
        className="p-10 pt-4 pb-20 overflow-y-auto"
        onChange={(page) => {
            window.location.href=`/${page.url}`
        }}
        >
            <div className="p-4 max-w-xl mx-auto text-xl rounded-xl text-purple-900 bg-white ring-1 ring-black/5 shadow-2xl divide-y divide-purple-300">
                <div className="flex items-center pb-1">
                    <SearchIcon className="h-6 w-6"/>
                    <Combobox.Input 
                    onChange={(event) => {
                        setQuery(event.target.value)
                    }}
                    className="p-2 w-full bg-transparent focus:ring-0 outline-0 text-gray-800 placeholder-gray-400 h-8"
                    placeholder="search"
                    />
                </div>
                {filteredPages.length > 0 && (
                    <Combobox.Options static className="pt-1 overflow-y-auto comboboxMaxHeight">
                        {filteredPages.map((page) => (
                            <Combobox.Option key={page.url} value={page} className="mr-3">
                                {({ active }) => (
                                    <a className="visited:text-purple-900 hover:text-purple-900 text-purple-900" href={page.url}>
                                        <div className={`p-1 pl-2 font-medium ${active ? `bg-purple-900 text-white rounded-lg` : ``}`}>
                                            {page.name}
                                        </div>
                                    </a>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
                {
                    query && filteredPages.length === 0 && 
                    <div className="pl-2 pt-2 pb-1">no results found</div>
                }
            </div>
        </Combobox>
    )
}