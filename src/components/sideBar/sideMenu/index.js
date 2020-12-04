import React from 'react';
import { withRouter } from 'react-router-dom';
import { getPathName } from '../../../helpers'
import './style.css'

const pages = [
  {title: "Home", path: '/'},
  {title: "Inventory", path: '/inventory'},
  {title: "Abilities", path: '/abilities'},
  {title: "Quests", path: '/quests'},
  {title: "Maps", path: '/maps'},
  {title: "Collectables", path: '/collectables'},
  {title: "Party", path: '/party'}
]

const MenuBar = (props) => {
  const changePage = (page) => props.history.push(page)
	const pathname = getPathName(props.location)
	return (
		<ul className="menuBar">
      {
        pages.map(({title, path}) => 
        <li 
          className={pathname === path ? 'activePage' : null } 
          onClick={() => changePage(path)} >
          { title }  
        </li>
        )
      }
		</ul>
	)
}

export default withRouter(MenuBar);