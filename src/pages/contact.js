import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
    return(
        <Layout>
            <Head title="Contact"/>
            <h1>Contact Me</h1>
            <p>The best way to reach me is via my <a href="https://www.facebook.com/em.dimacali.5" target="_blank">Facebook</a> account!</p>
        </Layout>
    );
}

export default ContactPage;