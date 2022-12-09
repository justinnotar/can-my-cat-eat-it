import "../index.css";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
// import { getDatabase, ref, set } from "firebase/database";
// import database from '../firebase'

export default function SubmitForm() {
  const [name, setName] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [reason, setReason] = useState(null);
  const [source, setSource] = useState(null);
  const [author, setAuthor] = useState(null);
  const handleSubmit = () => {
    console.log(name, answer, reason, source, author);
    // set(ref(database, '/test' + author), {
    //   name:name,
    //   answer:answer,
    //   reason:reason,
    //   source:source,
    //   author:author
    // });
  };

  return (
    <Combobox as="div" className="overflow-y-auto p-10 pt-4 pb-20">
      <div className="mx-auto max-w-xl divide-y divide-purple-300 rounded-xl bg-white p-4 text-xl text-purple-900 shadow-2xl ring-1 ring-black/5">
        <form class="w-full max-w-xl">
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 md:mb-0 md:w-2/3">
              <label
                class="mb-2 block text-xs font-bold tracking-wide text-gray-800"
                for="name"
              >
                food item
              </label>
              <input
                required
                class="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-800 focus:border-gray-400 focus:bg-white focus:outline-none"
                id="name"
                type="text"
                placeholder="peanut butter"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div class="w-full px-3 md:mb-0 md:w-1/3">
              <label
                class="mb-2 block text-xs font-bold tracking-wide text-gray-800"
                for="answer"
              >
                can your cat eat it?
              </label>
              <div class="relative">
                <select
                  required
                  class="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-800 focus:border-gray-400 focus:bg-white focus:outline-none"
                  id="answer"
                  type="select"
                  name="answer"
                  onChange={(e) => setAnswer(e.target.value)}
                  value={answer}
                >
                  <option value="" disabled selected>
                    select
                  </option>
                  <option>yes</option>
                  <option>no</option>
                  <option>maybe</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
                  <svg
                    class="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3">
              <label
                class="mb-2 block text-xs font-bold tracking-wide text-gray-800"
                for="reason"
              >
                reason
              </label>
              <input
                required
                class="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-800 focus:border-gray-400 focus:bg-white focus:outline-none"
                id="reason"
                type="text"
                placeholder="peanut butter is too sticky for their little cat mouths"
                name="reason"
                onChange={(e) => setReason(e.target.value)}
                value={reason}
              />
              {/* <p class="text-gray-600 text-xs italic">make it as long and as crazy as you'd like</p> */}
            </div>
          </div>
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3">
              <label
                class="mb-2  block text-xs font-bold tracking-wide text-gray-800"
                for="source"
              >
                source url
              </label>
              <input
                required
                class="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-800 focus:border-gray-400 focus:bg-white focus:outline-none"
                id="source"
                type="text"
                placeholder="www.totallyreliablesource.com"
                name="source"
                onChange={(e) => setSource(e.target.value)}
                value={source}
              />
            </div>
          </div>
          <div class="-mx-3 mb-2 flex flex-wrap">
            <div class="w-full px-3 md:mb-0  md:w-1/2">
              <label
                class="mb-2 block text-xs font-bold tracking-wide text-gray-800"
                for="author"
              >
                name (optional)
              </label>
              <input
                class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-800 focus:border-gray-400 focus:bg-white focus:outline-none"
                id="author"
                type="text"
                placeholder="justin"
                name="author"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
              />
            </div>
            {/* TODO: make button functional with form */}
            {/* Integrate with Google Sheets to populate data */}
            {/* https://github.com/levinunnink/html-form-to-google-sheet */}
            {/* https://lovespreadsheets.medium.com/save-web-html-form-data-to-google-sheets-47e48f7517e6 */}
            <div class="w-full px-3 md:mb-0 md:w-1/2">
              <input
                class="focus:shadow-outline mt-6 w-full cursor-pointer rounded bg-purple-900 py-3 font-bold text-white shadow hover:bg-purple-500 focus:outline-none"
                type="submit"
                value="submit"
                onClick={() => handleSubmit()}
              />
            </div>
          </div>
        </form>
      </div>
    </Combobox>
  );
}
