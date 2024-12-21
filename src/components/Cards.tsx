import React, {useEffect, useState} from 'react'
import Card from './Card'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules



interface DataXususiyyetleri {
    photo: string;
    title:string;
    description:string;
}

const Cards:React.FC = () => {

const [melumatlar, setMelumatlar] = useState<DataXususiyyetleri[]>([])
    useEffect(()=> {
        // Promise Chaining
        axios.get("/assets/salam.json").then(cavab => setMelumatlar(cavab.data)).catch(xeta => console.log(xeta))
    }, [])


   


  return (
    <div>
        <div className="container">

        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
           {
            melumatlar && melumatlar.map(birMelumat => (
                <SwiperSlide> <Card shekil={birMelumat.photo} mukafatinAdi={birMelumat.title} mukafatinMetni={birMelumat.description} /></SwiperSlide>
        
            ))
           }
           

            </Swiper>
        </div>
       
      
    </div>
  )
}

export default Cards