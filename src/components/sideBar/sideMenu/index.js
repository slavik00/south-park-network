import React from 'react';
import { withRouter } from 'react-router-dom';
import { getPathName } from '../../../helpers'
import './style.css'

const pages = [
  "Home",
  "Inventory",
  "Abilities",
  "Quests",
  "Maps",
  "Collectables",
  "Party"
]

const MenuBar = (props) => {
  const changePage = (page) => props.history.push(page)
	const pathname = getPathName(props.location).replace('/', '')

	return (
		<ul className="menuBar">
      {
        pages.map(page => 
        <li 
          className={pathname === page.toLowerCase() ? 'activePage' : null } 
          onClick={() => changePage(page.toLowerCase())} >
          { page }  
        </li>  
        )
      }
		</ul>
	)
}

export default withRouter(MenuBar);