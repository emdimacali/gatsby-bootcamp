import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; 
import Head from "../components/head";

//dynamic query
/*
export const query = graphql`
    query($slug: String!){
        markdownRemark (
            fields: {
                slug:{
                eq: $slug
                }
            }
        ){
            frontmatter{
                title,
                date
            }
            html
         }
    }
`;
*/

export const query = graphql`
    query($slug: String!){
        contentfulBlogPost ( slug: {eq: $slug} ) {
            title,
            publishedDate(formatString: "MMMM Do, YYYY"),
            body{
                json
            }
        }
    }
`;

const Blog = (props) => {
    const { title, publishedDate, body } = props.data.contentfulBlogPost;
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const url = node.data.target.fields.file['en-US'].url;
                return <img alt={alt} src={url}/>;
            }
        }
    }
    return(
        <Layout>
            <Head title={title}/>
            <h1>{title}</h1>
            <p>{publishedDate}</p>
            {documentToReactComponents(body.json, options)}
        </Layout>
    );
}

export default Blog;