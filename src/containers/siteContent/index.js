import React from 'react'
import './style.css'
import SideBar from '../../components/sideBar'
import UserBar from "../../components/userBar"
import { withRouter } from 'react-router-dom'
import {  getPathName } from '../../helpers'
const SiteContent = (props) => {
	const pathname = getPathName(props.location).replace('/','')
	return (
		<main>
			<div className="ribbon" />
				<div className="siteContentWrapper">
					<UserBar />
						<div style={{display: 'flex', flexDirection: 'column', width: '100%'}} >
							<SideBar />
							<div>
								{pathname}
							</div>
						</div>	
				</div>
		</main>	
	)
}

export default withRouter(SiteContent)