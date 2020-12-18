import React from 'react'
import Father from '../../../assert/images/father.png'
import './quest.css'
import Check from '../../../assert/svg/check.svg'

const subQuests = [
  {
   title: 'Natoque dapibus taciti fringilla maecenas luctus auctor ridiculus mi elementum montes.',
   active: true
  },
  {
    title: 'Natoque dapibus taciti fringilla maecenas luctus auctor ridiculus mi elementum montes.',
    active: true
  },
  {
    title: 'Natoque dapibus taciti fringilla maecenas luctus auctor ridiculus mi elementum montes.',
    active: true
  },
]

export const Quest = () => {
  return (
    <div className='questWrapper'>
      <div className="questHeader">
        <div className="imageWrapper">
          <img src={Father} alt="Father"/>
        </div>
        <div className="questDescription">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas molestie dui tortor, ac tristique risus rhoncus nec. 
            Donec leo diam, viverra in pretium non, porttitor sed dolor. 
          </p>
        </div>
      </div>
      <div className="questBody">
        <div className="questBodyTile">
          <p>TASKS</p>
        </div>
        <ul className="questBodyList">
          {
            subQuests.map(({title, active}, index) => 
            <li className="subQuestItem" key={index}>
              <object
                type='image/svg+xml'
                data={Check}
              >
              </object> 
              <p>
                {title}
              </p>
            </li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Quest