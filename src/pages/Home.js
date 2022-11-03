import '../assets/home.css'
import '../App.css'
import React from 'react';
import {content} from '../assets/content'

function Home() {

  const suggestions = content.map((page) => <><a href={page.url}>{page.name}</a><br/></>);

  return (
    <div className="home">
      <div className="home-title">can my cat eat it?</div>
      <div className="suggestions">
        suggestions:<br/>
        {suggestions}
      </div>
    </div>
  )
}

export default Home;