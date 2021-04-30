import React, { useState, useEffect } from 'react'
import './style.css'


const Map = (props) => {
  const [url, setUrl] = useState('')


	return (
		<div className="homeWrapper">
      <button  >Get new DOG</button>
      <div style={{width:200, height:350}}>
        <img style={{objectFit: 'cover'}} src={url} alt="dog" />
      </div>
		</div>	
	)
}

export default Map