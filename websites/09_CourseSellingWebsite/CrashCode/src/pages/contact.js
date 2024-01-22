import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Contact from "../components/Contact/Contact";

const ContactPage = ({ data }) => (
    <Layout>
        <Seo title="About Us" />
        <Contact/>
    </Layout>
);

export default ContactPage;
