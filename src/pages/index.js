import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import Head from "../components/head";

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello.</h1>
            <h2>I'm Ejandra, an aspiring game and web developer.</h2>
        </Layout>
    );
}

export default IndexPage;

