import { node } from 'prop-types';
import React from 'react';
import "../layout.css";

export default function CourseCard({ courseNode }) {
    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems:"start",
                // backgroundColor:"white"
            }}> 
                <div style={{width:"250px", marginRight: 20 }}>
                    <img
                        src={courseNode.image.file.url}
                        width="100%"
                        height="80%"
                        className="card-img"
                        alt={courseNode.title}
                        style={{ borderRadius: 15, objectFit: "contain" }}
                    />
                </div>

                <div style={{
                    width: "500px",
                    height: "140px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems:"start",
                    color: "white"
                }}>
                    <h4 className="card-title">{courseNode.title}</h4>
                    <p className="card-text">{courseNode.description.description}</p>
                </div>
                <div style={{
                    width: "100px",
                    height: "140px",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "end",
                    marginRight: 5,
                }}>
                    <h6>{"$" + courseNode.price}</h6>
                    <button href="#"
                        data-item-id={courseNode.id}
                        data-item-price={courseNode.price}
                        data-item-url="https://snipcart.com/"
                        data-item-description={courseNode.description.description}
                        data-item-image={courseNode.image.file.url}
                        data-item-name={courseNode.title}
                        className="btn btn-warning snipcart-add-item"
                        style={{ backgroundColor: "#FBB03B", fontSize: "12px", fontWeight: "500", paddingInline: "15px" }}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
            <hr className='my-4' color='#212847'/>
        </div>
    );
}

