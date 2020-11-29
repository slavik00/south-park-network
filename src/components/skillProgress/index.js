import React from 'react';
import './style.css'

const SkillProgres = ({title='', color='red', maxValue, currentValue}) => {
  const currentProcent = (currentValue/maxValue )*100;
	return (
		<div className="skillProgresWrapper">
      <p className="skillProgresTitle">
        {title.toUpperCase()}
      </p>
      <div className="progresWrapper">
        <div 
          className="currentProgress" 
          style={{
            backgroundColor: color, 
            width: `calc(${currentProcent}% - 2px)` 
            }} 
          />
      </div>
      <p className="progresState">
        {`${currentValue}/${maxValue}`}
      </p>
		</div>	
	)
}

export default SkillProgres