import React, { Component } from 'react';
import Heading from "../Reusable/Heading";
import CourseCard from "../Cart/CourseCard";
import "../layout.css";

export default class CourseCart extends Component {

    constructor(props) {
        super(props);
 
        this.state = {
            myCourses: props.myCourses.edges,
        } 
    }

    render() {
        // console.log(this.state.myCourses);

        return (
            <section className="mt-5 Container flexColumn">
                {
                    this.state.myCourses.map(({ node }) => {
                        return (
                            <div>
                                <CourseCard key={node.id} courseNode={node} />
                            </div>
                        );
                    })
                }
            </section>
        )
    }
}
