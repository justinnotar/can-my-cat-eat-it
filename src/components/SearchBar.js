import { useState } from "react"
import { Combobox } from "@headlessui/react"
import { SearchIcon } from "@heroicons/react/outline"
import { pages } from '../assets/content'

export default function SearchBar() {

    const [query, setQuery] = useState('')
    const filteredPages = pages.filter(page => page.name.toLowerCase().startsWith(query.toLowerCase()))
    
    return (
        <div className="fixed inset-0 bg-purple-300">
            <Combobox 
            as="div" 
            className="fixed inset-0 p-4 pt-[40vh] overflow-y-auto">
                <div className="p-4 max-w-xl mx-auto text-xl rounded-xl text-purple-900 bg-purple-100 ring-1 ring-black/5 shadow-2xl divide-y divide-purple-300">
                    <div className="flex items-center pb-1">
                        <SearchIcon className="h-6 w-6"/>
                        <Combobox.Input 
                        onChange={(event) => {
                            setQuery(event.target.value)
                        }}
                        className="p-2 w-full bg-transparent focus:ring-0 outline-0 text-gray-800 placeholder-gray-500 h-8"
                        placeholder="search..."
                        />
                    </div>
                    {filteredPages.length > 0 && (
                        <Combobox.Options static className="pt-1 max-h-36 overflow-y-auto">
                            {filteredPages.map((page) => (
                                <Combobox.Option key={page.url} className="mr-3">
                                    {({ active }) => (
                                        <a className="visited:text-purple-900 hover:text-purple-900 text-purple-900" href={page.url} target="_blank">
                                            <div className={`p-1 pl-2 font-medium ${active ? `bg-purple-900 text-purple-100 rounded-lg` : ``}`}>
                                                {page.name}
                                            </div>
                                        </a>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    )}
                    {
                        query && filteredPages.length == 0 && 
                        <div className="pt-1.5 pb-0.5">
                            <p className="pl-2 pt-1 pb-1">no results found</p>
                        </div>
                    }
                </div>
            </Combobox>
        </div>
    )
}