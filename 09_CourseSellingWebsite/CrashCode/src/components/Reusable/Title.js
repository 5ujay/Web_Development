import React from 'react'

export default function Title({title}) {
    return (
        <div className='coursesPage'>
            <div className='py-4'
                style={{
                    backgroundColor: "white",
                    color: "black",
                    paddingInline: 100,
                    fontSize: 50
                }}>
                {title}
            </div>
        </div>
    );
}
 