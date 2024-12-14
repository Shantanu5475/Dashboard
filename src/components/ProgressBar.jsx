import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  return (
    <>
        <div className="progress-bar-head">
            <div className="step completed">
            <div className="label">01 Preliminary</div>
            </div>
            <div className="step completed">
            <div className="label">02 Your Details</div>
            </div>
            <div className="step completed">
            <div className="label">03 KYC</div>
            </div>
            <div className="step completed">
            <div className="label">04 Parties</div>
            </div>
            <div className="step completed">
            <div className="label">05 Claim</div>
            </div>
            <div className="step completed">
            <div className="label">06 Review</div>
            </div>
            <div className="step completed">
            <div className="label">07 Payment</div>
            </div>
        </div>
        <div className='progress-bar-icons'>
            <div className="completedicon">
                <div className="circle completed"></div>
            </div>
            <div className="completedicon">
                <div className="line completed"></div>
            </div>
            <div className="completedicon">
                <div className="circle completed"></div>
            </div>
            <div className="completedicon">
                <div className="line completed"></div>
            </div>
            <div className="completedicon">  
                <div className="circle completed"></div>
                </div>
            <div className="completedicon">  
                <div className="line dotted"></div>
            </div>
            <div className="completedicon">
                <div className="circle current"></div>
            </div>
            <div className="completedicon">
                <div className="line faded"></div>
            </div>
            <div className="completedicon">
                <div className="circle faded"></div>
            </div>
            <div className="completedicon">
                <div className="line faded"></div>
            </div>
            <div className="completedicon">    
                <div className="circle faded"></div>
            </div>
            <div className="completedicon">
                <div className="line faded"></div>
            </div>
            <div className="completedicon">
                <div className="circle faded"></div>
            </div>
        </div>
        
        <div className="progress-bar-foot">
            <div className="step completed">
            <div className="label"></div>
            </div>
            <div className="step completed">
            <div className="label"></div>
            </div>
            <div className="step completed">
            <div className="label"></div>
            </div>
            <div className="step faded">
            <div className="label">(Approx 5 Min)</div>
            </div>
            <div className="step faded">
            <div className="label">(Approx 5 Min)</div>
            </div>
            <div className="step faded">
            <div className="label">(Approx 5 Min)</div>
            </div>
            <div className="step faded">
            <div className="label">(Approx 5 Min)</div>
            </div>
        </div>
    </>
      
  );
};

export default ProgressBar;
