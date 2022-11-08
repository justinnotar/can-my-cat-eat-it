import { Combobox } from "@headlessui/react"
import { SearchIcon } from "@heroicons/react/outline"
import { pages } from '../assets/content'

export default function SearchBar() {

    // const pages = content.map((page) => <><a href={page.url}>{page.name}</a><br/></>);


    return (
        <div className="fixed inset-0 bg-purple-300">
            <Combobox 
            onChange={() => {

            }}
            as="div" 
            className="fixed inset-0 p-4 pt-[35vh] overflow-y-auto">
                <div className="p-4 max-w-xl mx-auto text-xl rounded-xl text-purple-900 bg-purple-200 ring-1 ring-black/5 shadow-2xl divide-y divide-purple-300">
                    <div className="flex items-center pb-1">
                        <SearchIcon className="h-6 w-6"/>
                        <Combobox.Input 
                        onChange={() => {

                        }}
                        className="p-2 w-full bg-transparent outline-0 text-gray-800 placeholder-gray-400 h-8"
                        placeholder="Search..."
                        />
                    </div>
                    <Combobox.Options static className="max-h-40 overflow-y-auto">
                        {pages.map((page) => (
                            <Combobox.Option key={page.url} className="pt-1">
                                {({ active }) => (
                                    <div className={`p-1 pl-2 font-medium ${active ? `bg-purple-300 rounded-lg` : ``}`}>
                                        {page.name}
                                    </div>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                </div>
            </Combobox>
        </div>
    )
}