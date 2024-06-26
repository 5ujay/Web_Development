import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function InfoBlock({ heading }) {
    return (
        <section className='bg-theme my-5 py-4'>
            <div className='container'>
                <Heading title={heading} />
            </div>
            <div className='row'>
                <div className='col-10  col-sm-12 mx-auto  text-center'>
                    <p className='lead text-white mb-4'></p>
                </div>
            </div>
        </section>
    )
}

