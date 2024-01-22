import React from 'react';
import CourseCart from '../components/Cart/CourseCart';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Title from '../components/Reusable/Title';


export default function courses({ data }) {
    return (
        <Layout>
            <div className='coursesPage'>
                <Title title={"Courses"} />
                <CourseCart myCourses={data.myCourses} />
            </div>
        </Layout >
    )
} 
 
export const query = graphql`
  query {
    myCourses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`;