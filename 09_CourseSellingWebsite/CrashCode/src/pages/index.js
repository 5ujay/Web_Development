import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from 'gatsby'
import LandingPage from "../components/Home/LandingPage"
import "../components/layout.css";
import OurVision from "../components/Home/OurVision"


const IndexPage = ({ data }) => {
  // console.log(data);

  return (
    <Layout>
      <Seo title="Home" />

      <LandingPage />

      <OurVision />

      {/* <InfoBlock
        heading='About Us'
      /> */}

      {/* <CourseCart myCourses = {data.myCourses}/> */}

      {/* <DualInfoBlock
        heading='We offer'
      /> */}
    </Layout>
  );
};

export const query = graphql`
  query {
    img: file(relativePath: { eq: "Homepicture.jpg" }) {
      childImageSharp {
        fluid(quality:90, maxWidth:1920){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

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

export default IndexPage;
