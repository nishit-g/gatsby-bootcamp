import React from "react"
import Layout from "../components/layout"
import {graphql, useStaticQuery} from "gatsby"

const BlogPage=() =>{
    
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        }
                    }
                }
            }
        }
    `)
    
    console.log(data)

    return(
        <Layout>
            <h1>Blog</h1>
            <p>Post will show up here after some time.</p>
        </Layout>
    )
}

export default BlogPage