import React, { useState } from 'react'
import QuestImg from '../../assert/images/quest.png'
import './style.css'
import ExclamationPoint from '../../assert/images/exclamationPoint.svg'

const quests = [{
	img: QuestImg,
	text: 'New kid in town'
}]

const Quests = (props) => {
	const [activeQuest, setActiveQuest] = useState(true)

	return (
		<div className="questsWrapper dis_flex height_100">
			<div className="leftBlock">
				<div className="questsHeader dis_flex">
					<div className="questsHeader_box" />
						<div 
							className={`questsHeader_button marg_r_10 ${ activeQuest && 'questsHeader_button_active'}`}
							onClick={() => setActiveQuest(true)}
						>
							Active
						</div>
						<div 
							className={`questsHeader_button ${!activeQuest && 'questsHeader_button_active'}`}
							onClick={() => setActiveQuest(false)}
						>
							Complete
						</div>
					<div className="questsHeader_box" />
				</div>
				<ul className="questsList">
				<>
					{
						quests.map(({img, text}) => 
							<li className="questItem dis_flex">
								<div className="dis_flex">
									<div className="imgWrapper">
										<img src={img} alt="quest"/>
									</div>
									<p>
										{
											text
										}
									</p>
								</div>
								<div className="imgWrapper">
									<img className="exclamationPoint" src={ExclamationPoint} alt="quest"/>
								</div>
							</li>
						)
						}
						<li className="emptyQuestItem" />
						<li className="emptyQuestItem" />
						<li className="emptyQuestItem" />
						<li className="emptyQuestItem" />
						<li className="emptyQuestItem" />
						<li className="emptyQuestItem" />
						<li className="emptyQuestItem" />
						<li className="emptyQuestItem" />
						<li className="emptyQuestItem" />
						<li className="emptyQuestItem" />						
					</>
				</ul>
			</div>
			<div className="rightBlock">

			</div>
		</div>	
	)
}

export default Quests