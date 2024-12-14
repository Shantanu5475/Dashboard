import React from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard,faSuitcase } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  return (
    <div className="main-content">
      
      <h2 className="section-title">File your Claim. <span>(Approx 5 Minutes)</span></h2>
      <div className='blueline'>
        </div>
      
      <div className="claim-section">
        <div className="claim-value">
        
          <h2><FontAwesomeIcon icon={faSuitcase} style={{color: "#95aeda",}} /> &nbsp; Claim Value</h2>
          <div>
            <label className="main-label">Contract Value</label>
            <input type="number" placeholder="10,00,00" />
            <select id="currency" name="currency">
              <option value="usd" selected>USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
              <option value="inr">INR</option>
            </select>
          </div>
          <div>
            <label className="main-label">Claim Value</label>
            <input type="number" placeholder="15,00,00" />
            <select id="currency" name="currency">
              <option value="usd" selected>USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
              <option value="inr">INR</option>
            </select>
          </div>
          <p className="highlight">150% of Contract Value</p>
        </div>
        <div className="place">
          <h2><FontAwesomeIcon icon={faSuitcase} style={{color: "#95aeda",}} /> &nbsp; Place</h2>
          <input type="text" placeholder="Select the Place for proceedings" />
          <p className="main-label">Is the place for the proceedings the one mentioned in the agreement?</p>
          <div className="radio-group">
            <label>
              <input type="radio" name="place" value="yes" /> Yes
            </label>
            <label>
              <input type="radio" name="place" value="no" /> No
            </label>
          </div>
        </div>
        <div className="language">
          <h2><FontAwesomeIcon icon={faSuitcase} style={{color: "#95aeda",}} /> &nbsp; Language</h2>
          <input type="text" placeholder="Select the language for proceedings" />
          <p className="main-label">Is the language for the proceedings the one mentioned in the agreement?</p>
          <div className="radio-group">
            <label>
              <input type="radio" name="language" value="yes" /> Yes
            </label>
            <label>
              <input type="radio" name="language" value="no" /> No
            </label>
          </div>
        </div>
      </div>

      <div className="documents-section">
        <div className="statement">
          <h2><FontAwesomeIcon icon={faSuitcase} style={{color: "#95aeda",}} /> &nbsp; Statement</h2>
          <div className="upload-box-statement">
            <p>Write your Statement Here</p>
            <p>or</p>
            <p>Upload a PDF</p>
          </div>
        </div>
        <div className="agreements">
          <h2><FontAwesomeIcon icon={faSuitcase} style={{color: "#95aeda",}} /> &nbsp;  Agreement under Disputes</h2>
          <div className="upload-box-agreement">
            <p>Upload the Contract</p>
            <p>Max 2MB, PDF</p>
          </div>
          <div className="upload-box-agreement">
            <p>Arbitration Agreement</p>
            <p>Max 2MB, PDF</p>
          </div>
        </div>
        <div className="additional-documents">
          <h2> <FontAwesomeIcon icon={faSuitcase} style={{color: "#95aeda",}} /> &nbsp;  Additional Documentation</h2>
          <div className="upload-box-additional">
            <p>Upload the Contract</p>
            <p>Max 2MB, PDF</p>
          </div>
          <div className="add-more">+</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
