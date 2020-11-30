import React from 'react';
import './style.css'
import SideBar from '../../components/sideBar'
import UserBar from "../../components/userBar";

const SiteContent = () => {

	return (
		<main>
			<div className="ribbon" />
				<div className="siteContentWrapper">
					<UserBar />
						<div >
							<SideBar />

						</div>	
				</div>
		</main>	
	)
}

export default SiteContent;