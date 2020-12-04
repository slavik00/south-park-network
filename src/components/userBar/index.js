import React from 'react';
import './style.css'
import SkillProgress from '../skillProgress/'
import AppLogo from '../../assert/images/ava.png'
import BatersImg from '../../assert/images/baters.png'
import TvickImg from '../../assert/images/tvick.png'

const UserBar = () => {

	return (
		<div className="userBar_Wrapper">
			<div className="userBar_ImgWrapper">
				<img src={AppLogo} alt="logo" />
			</div>
			<div className="userBar_aboutMy">
				<div className="aboutMy_title">
					<p>Gender</p>
					<p>Age</p>
				</div>
				<div className="aboutMy_description">
					<p>Male</p>
					<p>9</p>
				</div>
				<div className="spaceBetween marginTop5">
					<p className="secondFont">LVL</p>
					<p className="strongFont">3089/3200</p>
				</div>
				<div className="spaceBetween aboutMy_description">
					<p>8</p>
					<SkillProgress maxValue={3200} currentValue={3089} color="#3c7c81" border='1px solid #9fa3a3' showText={false} noFlex />
				</div>				
				<div className="aboutMy_title">
					<p>Relationship Status</p>
				</div>
				<div className="aboutMy_description">
					<p>Single</p>
				</div>
				<div className="aboutMy_title">
					<p>Location</p>
				</div>
				<div className="aboutMy_description">
					<p>South Park, CO</p>
				</div>
				<div className="aboutMy_title">
					<p>Net Worth</p>
				</div>
				<div className="aboutMy_description">
					<p>$760.65</p>
				</div>
			</div>
			<div className="friendsWrapper">
				<div className="friends_title spaceBetween">
					<p className="whiteStrongText selfAlignCenter">Friends</p>
					<p className="friends_count">28</p>
				</div>
				<ul className="friends_list">
				<li className="friend_item"><img src={TvickImg} alt="Rendy" /></li>
					<li className="friend_item"><img src={BatersImg} alt="Rendy" /></li>
					<li className="friend_item"><img src={TvickImg} alt="Tvick" /></li>
					<li className="friend_item"><img src={TvickImg} alt="Rendy" /></li>
					<li className="friend_item"><img src={TvickImg} alt="Rendy" /></li>
					<li className="friend_item"><img src={TvickImg} alt="Tvick" /></li>
				</ul>	
			</div>
		</div>
	)
}

export default UserBar;