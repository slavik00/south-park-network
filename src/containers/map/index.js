import React, { useState, useEffect } from 'react'
import './style.css'


const Map = (props) => {
  const [url, setUrl] = useState('')

  const getDogUrl = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search')
      .then(res => res.json())
      .catch(err => (err))
    setUrl(res[0].url)
  }


  useEffect(getDogUrl, [])


	return (
		<div className="homeWrapper">
      <button onClick={getDogUrl} >Get new DOG</button>
      <div style={{width:200, height:350}}>
        <img style={{objectFit: 'cover'}} src={url} alt="dog" />
      </div>
		</div>	
	)
}

export default Map