import React from 'react'

interface CardinXususiyyeleri {
    shekil:string;
    mukafatinAdi:string;
    mukafatinMetni:string;

}

const Card:React.FC<CardinXususiyyeleri> = ({shekil,mukafatinAdi,mukafatinMetni}) => {
  return (
    <div className="card  rounded-3"  >
    <img src={shekil} className="card-img-top " alt="..." />
    <div className="card-body d-flex flex-column justify-content-between ">
        <h2 className="card-title text-center">{mukafatinAdi}</h2>
        <p className="card-text text-center">{mukafatinMetni}</p>
        <a href="#" className="btn btn-primary "><strong>Learn More</strong></a>
    </div>
</div>
  )
}

export default Card