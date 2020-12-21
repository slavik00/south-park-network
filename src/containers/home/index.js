import React from 'react'
import './style.css'
import CartmanImg from '../../assert/images/cartman.png';
import StenImg from '../../assert/images/sten.png';
import KennyImg from '../../assert/images/kenny.png';

const comments = [
  {
    img: CartmanImg,
    name: 'Cartman',
    text: 'Deserunt quis sint irure veniam tempor dolore est aute enim.'
  },  
  {
    img: StenImg,
    name: 'Sten',
    text: 'Amet ut cupidatat eu veniam aliqua non. Sit dolor culpa eiusmod et officia duis in velit exercitation sunt anim id irure. Cupidatat et laborum incididunt consequat fugiat laboris. Tempor excepteur excepteur dolor id minim reprehenderit dolore elit nisi sint. Nisi nostrud consequat aliquip nostrud aute consectetur id consequat ea labore consectetur. Nisi cupidatat sit do tempor occaecat. Do est consequat cillum cillum culpa eu.'
  },
  {
    img: KennyImg,
    name: 'Princess Keny',
    text: 'Amet ut cupidatat eu veniam aliqua non. Sit dolor culpa eiusmod et officia duis in velit exercitation sunt anim id irure. Cupidatat et laborum incididunt consequat fugiat laboris. Tempor excepteur excepteur dolor id minim reprehenderit dolore elit nisi sint. Nisi nostrud consequat aliquip nostrud aute consectetur id consequat ea labore consectetur. Nisi cupidatat sit do tempor occaecat. Do est consequat cillum cillum culpa eu.'
  }
]

const Home = (props) => {
	return (
		<div className="homeWrapper">
      <ul className="home_list">
        {
          comments.map(({ img, name, text }, index) => 
          <li key={index} className="commentWrapper">
            <div className="imageWrapper">
              <img src={img} alt={name} />
            </div>
            <div className="commentBody">
              <div className="commentName">
                <h2>{name}</h2>
              </div>
              <div className="commentText">
                <h2>{text}</h2>
              </div>
            </div>
          </li>
          )
        }
      </ul>
		</div>	
	)
}

export default Home