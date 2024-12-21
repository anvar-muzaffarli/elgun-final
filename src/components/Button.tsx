import React from 'react'


interface ButtonunProps {
    buttonunIcindekiYazi:string;
}
//Generics

const Button:React.FC <ButtonunProps> = ({buttonunIcindekiYazi}) => {
  return (
    <button className="Get_Started get-started d-none d-lg-flex">{buttonunIcindekiYazi}</button>
  )
}

export default Button