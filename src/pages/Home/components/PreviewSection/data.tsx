import tutor1 from '../../../../assets/img/home/tutor1.jpg'
import tutor2 from '../../../../assets/img/home/tutor2.jpg'
import tutor3 from '../../../../assets/img/home/tutor3.jpg'
import tutor4 from '../../../../assets/img/home/tutor4.jpg'
export interface TutorInfo  {
    name: string,
    rate: number,
    photo:string,
    price:number,
    intro:string
}
export let data:  TutorInfo[] = [
    {	name:'Ezequiel' ,
        rate :	5.1234,
        photo: tutor1,
        price: 55,
        intro: 'Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational.'
    },
    {	name:'Ezeqasfefawfuiel' ,
        rate :	5.1234,
        photo: tutor2,
        price: 40,
        intro: 'Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational.'
    },
    {	name:'Sam' ,
        rate :	4.9,
        photo: tutor3,
        price: 55,
        intro: 'Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational.'
    },
    {	name:'Cindy' ,
        rate :	5.1234,
        photo: tutor4,
        price: 45,
        intro: 'Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational.'
    },
    {	name:'Ezequi;0oyiel' ,
        rate :	5.1234,
        photo: tutor1,
        price: 55,
        intro: 'Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational.'
    },
    {	name:'uyil;u' ,
        rate :	5.1234,
        photo: tutor2,
        price: 40,
        intro: 'Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational.'
    },
    {	name:'strjj' ,
        rate :	4.9,
        photo: tutor3,
        price: 55,
        intro: 'Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational.'
    },
    {	name:'sdrg' ,
        rate :	5.1234,
        photo: tutor4,
        price: 45,
        intro: 'Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational.'
    }
]
