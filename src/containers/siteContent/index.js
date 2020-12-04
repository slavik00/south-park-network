import React from 'react'
import './style.css'
import SideBar from '../../components/sideBar'
import UserBar from "../../components/userBar"
import { withRouter } from 'react-router-dom'
import Home from '../home/'
import {
  Switch,
  Route,
} from "react-router-dom";

const SiteContent = (props) => {
	return (
		<main>
			<div className="ribbon" />
				<div className="siteContentWrapper">
					<UserBar />
						<div className="siteContentMain">
							<SideBar />
							<div className="siteContent">
								<div className="scrossLine" />
								<Switch>
									<Route exact path="/">
										<Home />
									</Route>
									<Route exact path="/inventory">
										iNVENTTORY
									</Route>
								</Switch>
							</div>
						</div>	
				</div>
		</main>	
	)
}

export default withRouter(SiteContent)