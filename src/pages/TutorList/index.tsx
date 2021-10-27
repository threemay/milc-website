import React from 'react'
import { data, TutorInfo } from '../Home/components/PreviewSection/data'
// @ts-ignore
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faStar, faStarHalf)

interface TutorCardProps {
	key: string
	info: TutorInfo
}
const TutorCardContainer = styled.div  `
	margin: 40px;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 10px 5px 5px rgba(189, 185, 185, 0.97);
	background-color: white;
	font-size: 25px;
	font-weight: bold;
	width:500px;
`;
const TutorCardsContainer = styled.div
`	margin: 30px 0px;
	padding: 0% 10%;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content:center;`;
const TutorIntro= styled.div`
	font-size: 20px;
	font-weight: 400;
	color: gray;
	padding: 15px 0px;
`


const TutorCard: React.FunctionComponent<TutorCardProps> = ({ key, info }) => {
	return (
		<TutorCardContainer>
			<img src={info.photo} alt='tutor' />
			<div className='TutorName'>{info.name}</div>
			<div className='TutorRate'>
				<FontAwesomeIcon className='star'icon={faStar} />
				{info.rate.toFixed(2)}(10 reviews)
			</div>
			<TutorIntro>{info.intro} </TutorIntro>
			<div className='priceTag'>
				${info.price}/h
			</div>
		</TutorCardContainer>
	)
}

const TutorCards: React.FunctionComponent = () => {
	const cards = data.map((item:TutorInfo) => {
		// eslint-disable-next-line react/jsx-key
		return  <TutorCard   key={item.name} info={item} />

	})

	return(
		<TutorCardsContainer>
				{cards}
		</TutorCardsContainer>
	)
}


export default function TutorList() {
	return (
		<>
			<div className='Subtitle'>Tutor List</div>
			<div className='intro'>Discover Your Perfect Private Tutor in Australia</div>
			<TutorCards />
		</>
	)
}
