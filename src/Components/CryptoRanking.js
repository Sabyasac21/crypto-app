import React, { useState } from "react";
import "../Styles/cryptoranking.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Bitcoin from "../Assets/bitcoin.png";
import crypto from "../Assets/crypto.json";
import PopupCard from "./PopupCard";

function CryptoRanking() {
  const [currentPage, setCurrentPage] = useState(1);
  const [ selectedCoin, setSelectedCoin] = useState(null)
  const coinsPerPage = 10;
  const totalPages = Math.ceil(crypto.coins.length / coinsPerPage);

  // Calculate slice indexes
  const startIndex = (currentPage - 1) * coinsPerPage;
  const endIndex = startIndex + coinsPerPage;

  // Slice JSON data for current page
  const currentCoins = crypto.coins.slice(startIndex, endIndex);

  const selectCoin = (coin) => {
    setSelectedCoin(coin);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedCoin(null);
  };
  // Function to handle pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="crypto-cont">
      <div className="main-container">
        <div className="col-identifier">
          <span className="large-screen">#</span>
          <span>NAME</span>
          <span>PRICE</span>
          <span>24h</span>
          <span className="large-screen">7d</span>
          <span className="large-screen">MARKET CAP</span>
          <span className="large-screen">VOLUME(24H)</span>
          <span className="large-screen">CIRCULATING SUPPLY</span>
        </div>
        <div className="crypto-list">
          {currentCoins.map((coin, idx) => (
            <div key={idx} onClick={() => selectCoin(coin)} className="crypto-list-container">
              <div className="cnt">{startIndex + idx + 1}</div>
              <div className="name">
                <img src={Bitcoin} alt="Coin" />
                {coin.name.split(" ")[0]}
              </div>
              <div className="price">{coin.price}</div>
              <div className="time" style={{color:'red'}}>{coin.h_change}</div>
              <div className="day" style={{color:'green'}}>{coin.d_change}</div>
              <div className="market-cap">$1,000,000,000</div>
              <div className="volume">1,000,000,000</div>
              <div className="cir-sup">{coin.circulating_supply}</div>
              <div className="dots">:</div>
            </div>
            
          ))}
           {selectedCoin && (
        <div className="popup">
          
          <div className="backdrop" style={{backgroundColor:'white'}}  onClick={closePopup}>
          {<PopupCard  name={selectedCoin.name }/>}
          </div>
          
          
        </div>
      )}
        </div>
        <div className="pagination">
          <button onClick={prevPage} style={{marginRight:'5px'}} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={nextPage} style={{marginLeft:'5px'}} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CryptoRanking;
