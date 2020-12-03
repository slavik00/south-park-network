import React from 'react';
import DocumentImg from '../../assert/images/document.png'
import MenuBar from './sideMenu'
import './style.css'

const SideBar = () => {
	return (
		<div className="sideBarWrapper">
			<div className="sideBar_title">
				<div className="sideBar_documentWrapper">
					<img src={DocumentImg} alt="Document" />
				</div>
				<h1>The new kid is exploring South Park.</h1>
			</div>
			<MenuBar />
		</div>
	)
}

export default SideBar;