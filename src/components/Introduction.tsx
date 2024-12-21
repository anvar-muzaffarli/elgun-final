import React from 'react'
import Button from './Button'
const Introduction:React.FC = () => {
  return (
    
    <section className="intro">
    <div className="container rely-on-us">
        <div className="row">
            <div className="col-12">
                <button className="market-report">The Art Market Report</button>
                <h1>Rely on us</h1>
                <article><strong>Our Customer Due Diligence platform helps you avoid <br />fines or losing clients
                        due to AML while protecting you <br /> from cybercrime.</strong></article>
              <p className='d-flex justify-content-center'><Button buttonunIcindekiYazi = "Learn more" /></p> 
            </div>
        </div>

    </div>
</section>
  )
}

export default Introduction