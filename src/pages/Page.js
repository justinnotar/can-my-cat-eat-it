import { pages } from '../assets/content'
import NavBar from '../components/NavBar'
import TopBlur from '../components/TopBlur'
import { useParams } from 'react-router-dom';
import BottomBlur from '../components/BottomBlur'
import React, {useState, useEffect} from 'react';

export default function Page() {
  const [name, setName] = useState();
  const [answer, setAnswer] = useState();
  const [reason, setReason] = useState();
  const [source, setSource] = useState();
  const [author, setAuthor] = useState();
  const sourceUrl = 'https://' + source;
  const id = useParams().id;

  useEffect(() => {
    for (var i = 0; i < pages.length; i++) {
      var page = pages[i];
      if (page.url === id) {
        setName(page.name);
        setAnswer(page.answer);
        setReason(page.reason);
        setSource(page.source);
        setAuthor(page.author ? page.author : 'anonymous')
      }
    }
  }, [id]);

  return (

    <div className="isolate bg-purple-100 overflow-y-hidden min-h-screen">
      <TopBlur />
      <NavBar />
      <main>
        <div className="pt-[25vh] relative mx-auto max-w-3xl h-screen">
            {/* <h1 className="text-5xl pb-4 font-bold text-purple-900 text-center tracking-tight"> */}
            <h1 className="text-5xl p-4 pt-0 font-bold text-purple-900 text-center">
              can my 🐈 eat <b><i className='text-purple-500'>{name}</i></b>&nbsp;?
            </h1>
            <BottomBlur />
            <div id={answer}>{answer}</div>
            <div>{reason}</div>
            <a href={sourceUrl} target="_blank" rel="noreferrer">source</a>
            <div>{author}</div>
        </div>
      </main>
    </div>
  )
}