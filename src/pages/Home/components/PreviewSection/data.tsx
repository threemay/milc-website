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
    {	name:'Amy' ,
        rate :	5.1234,
        photo: tutor1,
        price: 55,
        intro: 'Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational.'
    },
    {	name:'Bella' ,
        rate :	5.89,
        photo: tutor2,
        price: 60,
        intro: 'Having been classically trained in piano with 20 years piano experience, and making a living performing with guitar and vocals live. All of my beginning students have learnt to sight read within the month.'
    },
    {	name:'Cindy' ,
        rate :	4.9,
        photo: tutor3,
        price: 55,
        intro: 'I am a primary school music tutor in Melbourne, teaching voice, guitar & guitar - both individual and group lessons. Outside of this, I conduct songwriting workshops, work as a vocal coach mentor and play shows across Victoria & interstate as a solo artist and with a band.'
    },
    {	name:'Dan' ,
        rate :	5.1234,
        photo: tutor4,
        price: 45,
        intro: 'Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational.'
    },
    {	name:'Ezequil' ,
        rate :	5.1234,
        photo: tutor1,
        price: 55,
        intro: 'Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational.'
    },
    {	name:'Fendi' ,
        rate :	5.1234,
        photo: tutor2,
        price: 40,
        intro: 'Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational.'
    },
    {	name:'Jacque' ,
        rate :	4.9,
        photo: tutor3,
        price: 55,
        intro: 'Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational.'
    },
    {	name:'Leo' ,
        rate :	5.1234,
        photo: tutor4,
        price: 45,
        intro: 'Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational.'
    }
]
