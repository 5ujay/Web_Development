import React from 'react';
import WriteSomeCode from '../Reusable/WriteSomeCode';

export default function OurVision() {
    return (
            <div className='flexColumn text-white ourVision p-5'>
                <h1 className='display-4 font-weight-bold' style={{color: "black"}}>Our Vision</h1>

                <p style={{
                    fontSize: 20,
                    fontWeight: "normal",
                    marginTop: 50, 
                    textAlign: "center",
                    marginBottom: 50,
                    color: "black",
                    lineHeight: 1.5
                }}>
                    A regular website where students can enroll into the free as well as paid courses like Udemy,
                    Coursera and Udacity. Place to learn programming like Html, Css, Javascript, Java and C/C++
                    and many more other things. We will able to learn lots of things which need for modern
                    Web Development. We will understand and learn different languages need for web
                    development. If we get more interest in this field then we will learn lot of different
                    technologies which will help us to become an full stack web developer in future.
                </p>

                <div style={{color:"#F47B3A", fontStyle:"italic", fontWeight:"bold"}}> 
                    <h3>#WriteSomeCode</h3>
                </div>
            </div>
    );
}
