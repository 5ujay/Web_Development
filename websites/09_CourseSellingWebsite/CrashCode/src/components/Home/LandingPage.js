import React from 'react';
import "../bootstrap.min.css";
// import LandingImage from '../../images/landing-image.svg';
import WriteSomeCode from '../Reusable/WriteSomeCode';
import Homepicture from '../../images/Homepicture.png';
export default function LandingPage() {
    return (
        <div className='landingPage flexRow'>
            <div className='flexColumn text-center'>
                <h1 className=' display-3 font-weight-bold my-4'
                     style={{color:"white"}}
                >Crash Code</h1>

                <div style={{ color: "white", fontStyle:"italic", fontWeight:"lighter" }} className="mt-1 mb-5">
                    <h4>Learn and Write</h4>
                    <h4>Grow your coding skills with us</h4>
                </div>

                <button className='btn btn-primary'
                    style={{
                        color: "black",
                        fontSize: 20,
                        fontWeight: "bold",
                        backgroundColor: "#FBB03B",
                        border: 0,
                        paddingInline: 50,
                        paddingBlock: 10,
                        borderRadius: 25,
                        marginBottom: 50
                    }}
                >
                    Get Started
                </button>
                 <div style={{color:"#F47B3A", fontStyle:"italic", fontWeight:"bold"}}> 
                    <h3>#WriteSomeCode</h3>
                </div>
            </div>

            <img src={Homepicture} style={{
                height: 450,
                width: 450  
            }} />
        </div>

    )
}
