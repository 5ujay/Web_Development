import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"
import TeamPhotoSection from "../components/About/TeamPhotoSection"
import Title from "../components/Reusable/Title"
import WriteSomeCode from "../components/Reusable/WriteSomeCode"
import OurVision from "../components/Home/OurVision"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="About Us" />
    <Title title={"About Us"} />
    <OurVision />
    <div className='flexColumn text-white p-5 aboutUsPage '>
      <h1 className='display-4 font-weight-bold' style={{ color: "white" }}>Our Team</h1>
      <TeamPhotoSection />
      <WriteSomeCode />
    </div>
  </Layout>
)
 
export const query = graphql`
  query {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(quality:90, maxWidth:1920){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage
