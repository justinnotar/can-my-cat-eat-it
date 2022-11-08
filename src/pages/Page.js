import '../assets/page.css';
import '../App.css'
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {pages} from '../assets/content'

function Page() {
  const [name, setName] = useState();
  const [answer, setAnswer] = useState();
  const [text, setText] = useState();
  const [source, setSource] = useState();
  const sourceUrl = 'https://' + source;
  const id = useParams().id;

  useEffect(() => {
    for (var i = 0; i < pages.length; i++) {
      var page = pages[i];
      if (page.url === id) {
        setName(page.name);
        setAnswer(page.answer);
        setText(page.text);
        setSource(page.source);
      }
    }
  }, [id]);

  return (
    <div className="page">
      <div className="page-title">{name}?</div>
      <div className="page-answer" id={answer}>{answer}</div>
      <div className="page-text">{text}</div>
      <a className="page-source" href={sourceUrl} target="_blank" rel="noreferrer">source</a>
    </div>
  )
}

export default Page;