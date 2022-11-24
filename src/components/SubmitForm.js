import '../index.css'
import { Combobox } from '@headlessui/react'

export default function SubmitForm() {
    
    return (
        <Combobox 
        as="div" 
        className="p-10 pt-4 pb-20 overflow-y-auto">
            <div className="p-4 max-w-xl mx-auto text-xl rounded-xl text-purple-900 bg-white ring-1 ring-black/5 shadow-2xl divide-y divide-purple-300">
                <form class="w-full max-w-xl">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                            <label class="block tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
                                food item
                            </label>
                            <input class="required appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-400" id="grid-first-name" type="text" placeholder="peanut butter" />
                            {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-state">
                                can your cat eat it?
                            </label>
                            <div class="relative">
                                <select class="required block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-400" id="grid-state">
                                    <option>yes</option>
                                    <option>no</option>
                                    <option>maybe</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-password">
                            reason
                        </label>
                        <input class="required appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-400" id="grid-password" type="text" placeholder="peanut butter is too sticky for their little cat mouths" />
                        {/* <p class="text-gray-600 text-xs italic">make it as long and as crazy as you'd like</p> */}
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block  tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-password">
                            source url
                        </label>
                        <input class="required appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-400" id="grid-password" type="text" placeholder="www.totallyreliablesource.com" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-name">
                                name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400" id="grid-name" type="text" placeholder="justin" />
                        </div>

                        {/* TODO: fix submit button size on half screen */}
                        <div class="md:w-1/2 px-3 md:mb-0">
                            <button class="w-full shadow bg-purple-900 hover:bg-purple-300 focus:shadow-outline focus:outline-none text-white font-bold py-3 mt-6 rounded" type="button">
                            submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Combobox>
    )
}