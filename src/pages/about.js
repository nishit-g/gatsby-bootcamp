import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


const AboutPage=()=>{
    return(
        <Layout>
<h1>A final-year developer interested in AR/VR/MR and Spatial Tech.</h1>
        <p>Currently working with .....</p>
        <p>Want to reach out to me ? <Link to="/contact">Contact me!</Link></p>
    
        </Layout>
    )
}

export default AboutPage