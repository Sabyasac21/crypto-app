import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faT, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../Styles/popup.css';
function PopupCard(props) {
    const {name} = props
  return (
    <div className='main-cont'>
        <div className='card-head'>
            <h1 className='coin-name'>{name}</h1>
            <h2 ><FontAwesomeIcon icon={faTimes}/></h2>
        </div>
        <div className='card-price-cont'>
        <div className='card-price'>
            <h3 >PRICE</h3>
            <h3>24h</h3>
            <h3>7d</h3>
        </div>
        <div className='price-vals'>
            <p>20,000</p>
            <p style={{color:'red'}}>0.65%</p>
            <p style={{color:'green'}}>0.65%</p>
        </div>
        </div>

        <div className='card-body'>
            <div className='mar-cap'>
                <h3>MARKET CAP</h3>
                <p>1,234,432,654,789</p>
            </div>
            <div className='pop-volume'>
                <h3>VOLUME(24h)</h3>
                <p>1,234,432,654,789</p>
            </div>

            <div className='pop-cir-sup'>
                <h3>CIRCULATING SUPPLY</h3>
                <p>123,432 BTC</p>
            </div>
        </div>
    </div>
  )
}

export default PopupCard