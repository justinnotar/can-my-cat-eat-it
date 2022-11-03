import '../assets/page.css';
import '../App.css'
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {content} from '../assets/content'

function Page() {
  const [name, setName] = useState();
  const [answer, setAnswer] = useState();
  const [text, setText] = useState();
  const [source, setSource] = useState();
  const sourceUrl = 'https://' + source;
  const id = useParams().id;

  useEffect(() => {
    for (var i = 0; i < content.length; i++) {
      var page = content[i];
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2100.000000 2100.000000">
        <path fill="#118AB2" transform="translate(0.000000,2100.000000) scale(0.100000,-0.100000)" d="M14505 15840 c-173 -27 -339 -104 -551 -257 -449 -322 -981 -799 -1473 -1317 -157 -165 -240 -245 -250 -242 -375 106 -809 181 -1256 218 -193 15 -757 15 -950 0 -416 -34 -842 -106 -1183 -198 l-92 -25 -82 88 c-156 167 -614 625 -768 768 -401 370 -887 753 -1085 855 -192 98 -405 135 -552 95 -120 -33 -221 -121 -273 -238 -55 -125 -117 -383 -141 -587 -16 -135 -16 -538 0 -705 49 -520 188 -1192 347 -1675 l54 -165 -30 -40 c-325 -434 -502 -794 -611 -1239 -95 -389 -104 -846 -25 -1238 53 -262 126 -476 245 -723 227 -469 550 -874 991 -1241 748 -624 1759 -1041 2855 -1179 308 -39 481 -49 825 -49 179 0 395 6 480 13 837 68 1572 264 2250 602 708 353 1266 816 1667 1384 103 147 187 290 274 470 119 247 192 461 245 723 79 392 70 849 -25 1238 -109 445 -288 808 -611 1239 l-30 40 54 165 c155 470 283 1079 342 1630 21 191 24 610 5 755 -28 224 -95 494 -148 599 -75 149 -194 227 -369 240 -38 2 -96 1 -129 -4z"/>
    </svg>
      <div className="page-title">{name}?</div>
      <div className="page-answer" id={answer}>{answer}</div>
      <div className="page-text">{text}</div>
      <a className="page-source" href={sourceUrl} target="_blank" rel="noreferrer">source</a>
    </div>
  )
}

export default Page;