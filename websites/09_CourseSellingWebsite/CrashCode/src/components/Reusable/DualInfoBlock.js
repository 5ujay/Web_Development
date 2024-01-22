import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoBlock({ heading }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div classname="row ">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Since March 8, 1990, Woman’s Day is being observed by SAARC (South
              Asian Association for Regional Cooperation) consisting of seven
              countries, namely, India, Pakistan, Nepal, Bhutan, Bangladesh, Sri
              Lanka, and the Maldives. The day was marked to focus on the
              problems of girl children in these countries 
            </p>
          </div>
          <div className="col-4">
            <div class="card bg-dark">
              <img
                src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                class="card-img-top"
                alt="image goes here"
              />
              <div class="card-body">
                <h5 class="card-title text-white">Card title</h5>
                <p class="card-text text-white">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-warning btn-block">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
