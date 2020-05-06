import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from './header.module.scss'


const Header=()=>{
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    return(
        <header className={headerStyles.header}>
                <h1 className={headerStyles.title}>
                    {data.site.siteMetadata.title}
                </h1>
        <nav>
            <ul className={headerStyles.navList}>
                <li>
                    <Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavLink}>Home</Link>
                </li>
                <li>
                    <Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavLink}>Blog</Link>
                </li>
                <li>
                    <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavLink}>About</Link>
                </li>
                <li>
                    <Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavLink}>Contact</Link>
                </li>
            </ul>
        </nav>
    
        </header>
    )
}

export default Header