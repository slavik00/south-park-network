import React from 'react';
import './style.css'

const SkillProgres = (props) => {
  const { 
    title='', 
    color='red', 
    maxValue, 
    currentValue, 
    border='2px solid #2d696a',
    showText=true,
  } = props
  const currentProcent = (currentValue/maxValue )*100;
	return (
		<div className="skillProgresWrapper">
      <p className="skillProgresTitle">
        {title.toUpperCase()}
      </p>
      <div className="progresWrapper" style={{border}} >
        <div 
          className="currentProgress" 
          style={{
            backgroundColor: color, 
            width: `calc(${currentProcent}% - 2px)`
            }} 
          />
      </div>
      { showText ?       
        <p className="progresState">
          {`${currentValue}/${maxValue}`}
        </p> : null
      }
		</div>	
	)
}

export default SkillProgres