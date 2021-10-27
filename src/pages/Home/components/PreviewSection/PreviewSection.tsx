import React from 'react'
import { Link } from 'react-router-dom';
import './PreviewSection.css';
import { data, TutorInfo } from './data'

import SwiperCore, { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/swiper-bundle.css"
import "swiper/components/navigation"
import "swiper/components/pagination"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faStar, faStarHalf)

SwiperCore.use([Navigation, Pagination])

interface TutorCardProps{
    key: string,
    info: TutorInfo
}

const TutorCard: React.FunctionComponent<TutorCardProps> = ({ key,info }) =>{
    return (
        <div className='TutorCard'>
            <img src={info.photo} alt="tutor" />
            <div className="TutorName">{info.name}</div>
            <div className='TutorRate'>
                <FontAwesomeIcon className='star'icon={faStar} />
                {info.rate.toFixed(2)}(10 reviews)
            </div>
            <div className='TutorIntro' style={{"WebkitBoxOrient": "vertical"}}>{info.intro} </div>
            <div className='priceTag'>
                ${info.price}/h
            </div>
        </div>
    )
}

const TutorCards:React.FunctionComponent =() =>{
    const cards = data.map((item:TutorInfo) => {
        // eslint-disable-next-line react/jsx-key
        return <SwiperSlide > <TutorCard   key={item.name} info={item} /></SwiperSlide>
    })

    return(
        <div className='TutorCards'>
            <Swiper
                spaceBetween={10}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                }}

                breakpoints={{
                    1400: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    866: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    },
                    0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1
                    }
                }}
                onSwiper={(swiper) => {
                    swiper.update();
                }}
                className="swiper-container">
                {cards}
            </Swiper>
        </div>
    )
}

export const PreviewSection:React.FunctionComponent = () => {
    return (
        <div className='PreviewSection'>
            <div className='Subtitle'>Featured Courses</div>
            <div className='intro'>Discover Your Perfect Private Tutor in Australia</div>
            <div className='ViewAllTutors' >Browse All {'>'} </div>
            <TutorCards/>
        </div>
    )
}