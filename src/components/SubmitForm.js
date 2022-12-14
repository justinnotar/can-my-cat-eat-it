import "../index.css";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import db from "../firebase"
import { doc, setDoc } from "firebase/firestore"; 

export default function SubmitForm() {
  const [name, setName] = useState();
  const [answer, setAnswer] = useState();
  const [reason, setReason] = useState();
  const [source, setSource] = useState();
  const [author, setAuthor] = useState();

  const handleSubmit = async () => {
    await setDoc(doc(db, "submissions", "test1"), {
        name: name,
        answer: answer,
        reason: reason,
        source: source,
        author: author,
      })
      .then(function () {
        console.log("Value successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing Value: ", error);
      });
  };

  return (
    <Combobox as="div" className="overflow-y-auto p-10 pt-4 pb-20">
      <div className="mx-auto max-w-xl divide-y divide-purple-300 rounded-xl bg-white p-4 text-xl text-purple-900 shadow-2xl ring-1 ring-black/5">
        <form className="w-full max-w-xl">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 md:mb-0 md:w-2/3">
              <label
                className="mb-2 block text-xs font-bold tracking-wide text-gray-800"
                htmlFor="name"
              >
                food item
              </label>
              <input
                required
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-800 focus:border-gray-400 focus:bg-white focus:outline-none"
                id="name"
                type="text"
                placeholder="peanut butter"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name || ''}
              />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-bold tracking-wide text-gray-800"
                htmlFor="answer"
              >
                can your cat eat it?
              </label>
              <div className="relative">
                <select
                  required
                  className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-800 focus:border-gray-400 focus:bg-white focus:outline-none"
                  id="answer"
                  type="select"
                  name="answer"
                  onChange={(e) => setAnswer(e.target.value)}
                  value={answer || ''}
                >
                  <option value="" defaultValue="">
                    select
                  </option>
                  <option>yes</option>
                  <option>no</option>
                  <option>maybe</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-xs font-bold tracking-wide text-gray-800"
                htmlFor="reason"
              >
                reason
              </label>
              <input
                required
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-800 focus:border-gray-400 focus:bg-white focus:outline-none"
                id="reason"
                type="text"
                placeholder="peanut butter is too sticky for their little cat mouths"
                name="reason"
                onChange={(e) => setReason(e.target.value)}
                value={reason || ''}
              />
              {/* <p className="text-gray-600 text-xs italic">make it as long and as crazy as you'd like</p> */}
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2  block text-xs font-bold tracking-wide text-gray-800"
                htmlFor="source"
              >
                source url
              </label>
              <input
                required
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-800 focus:border-gray-400 focus:bg-white focus:outline-none"
                id="source"
                type="text"
                placeholder="www.totallyreliablesource.com"
                name="source"
                onChange={(e) => setSource(e.target.value)}
                value={source || ''}
              />
            </div>
          </div>
          <div className="-mx-3 mb-2 flex flex-wrap">
            <div className="w-full px-3 md:mb-0  md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold tracking-wide text-gray-800"
                htmlFor="author"
              >
                name (optional)
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-800 focus:border-gray-400 focus:bg-white focus:outline-none"
                id="author"
                type="text"
                placeholder="justin"
                name="author"
                onChange={(e) => setAuthor(e.target.value)}
                value={author || ''}
              />
            </div>
            <div className="w-full px-3 md:mb-0 md:w-1/2">
              <input
                className="focus:shadow-outline mt-6 w-full cursor-pointer rounded bg-purple-900 py-3 font-bold text-white shadow hover:bg-purple-500 focus:outline-none"
                type="submit"
                value="submit"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    </Combobox>
  );
}
