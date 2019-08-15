import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const AboutPage = () => {
    return(
        <Layout>
            <Head title="About"/>
            <h1>About Me</h1>
            <p>I am Ejandra Mae T. Dimacali, a B.S. Computer Science graduate in University of the Philippines Los Baños. </p>
            <p>I am currently 23 years old and I aspire to be a great web developer and game developer!</p>
            <p>Would like to get in touch? <Link to="/contact">Contact me!</Link> </p>
        </Layout>
    );
}

export default AboutPage;