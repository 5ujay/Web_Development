import React from 'react';
import mascot from '../../images/mascot.png';

export default function DeveloperProfile({ developerName, developerDescription, mailId }) {
    return (
        <div className='aboutUsPage'>
            <div className="card" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent"
            }}> 

                <div className="card-img-top" style={{ width: "120px" }}>
                    <img
                        src={mascot} 
                        width="100%"
                        height="100%"
                        className="card-img-top"
                        alt={"dev-profile"}
                        style={{ borderRadius: 15, objectFit: "contain" }}
                    />
                </div>
                <h5 className="card-title btn btn-link text-white" onClick={() => {
                    var link = mailId;
                    window.location.href = link;
                }}
                    style={{ fontSize: "25px", fontWeight: "400", margin: 5, padding: 0 }}>
                    {developerName}
                </h5>
                <h6 className="card-title text-white">{developerDescription}</h6>
            </div>
        </div>
    )
}
