import React from 'react';
import './style.css'
import SkillProgress from '../skillProgress/'
import AppLogo from '../../assert/images/planet.jpg'

const Header = () => {

	return (
		<header>
			<div className="appLogoWrapper">
				<img src={AppLogo} alt="logo" />
			</div>
			<div className="headerSkils">
				<SkillProgress title="hp" color="#b41529" currentValue={177} maxValue={177} />
				<SkillProgress title="pp" color="#56aeaf" currentValue={21} maxValue={21} />
				<SkillProgress title="MANA" color="#7eb33d" currentValue={100} maxValue={150} />
			</div>
		</header>	
	)
}

export default Header;