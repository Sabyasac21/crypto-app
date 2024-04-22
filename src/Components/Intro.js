import React from 'react';
import image1 from '../Assets/Section1img.png';
import image2 from '../Assets/Section2img.png';
import image3 from '../Assets/Section3img.png';
import '../Styles/intro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

function Intro() {
  return (
    <div className='container'>
        <div className='sections'>
            <div className='section'>
                <div className='cont'>
                    <div><img src={image1}/></div>
                    <div className='section-text'>
                        <p>Take a Quiz</p>
                        <h3>Learn and earn $CKB</h3>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='cont'>
                    <div><img src={image2}/></div>
                    <div className='section-text'>
                        <p>portfolio</p>
                        <h3>Track your trades in one place, not all places</h3>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='cont'>
                    <div><img src={image3}/></div>
                    <div className='section-text'>
                        <p>Take a Quiz</p>
                        <h3>Track your trades in one place, not all places</h3>
                    </div>
                </div>
            </div> 
        </div>
        

        <div className='heading-cont'>
            <div className='heading'>
                <h1>Top 100 Cryptocurrencies by market cap</h1>
            </div>
        </div>

        <div className='category-cont'>
            <div className='categories'>
                <div className='box'><FontAwesomeIcon icon={faStar}/>Favourites</div>
                <div className='box'>Cryptocurrencies</div>
                <div className='box'>Defi</div>
                <div className='box'>NFTs and Collectibles</div>
            </div>
        </div>
    </div>
  )
}

export default Intro