const path = require('path')

module.exports.onCreateNode =({node, actions}) =>{
    const{createNodeField} = actions

    if(node.internal.type === "MarkdownRemark"){
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

    //console.log(JSON.stringify(node, undefined, 4))
}

module.exports.createPages = async ({graphql, actions}) =>{
    const{createPage} = actions
    
    // 1. Get path to template
    const blogTemplate = path.resolve("./src/templates/blog.js")
    // 2. Get Markdown data
    const result = await graphql(`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `)
    // 3. Create new pages
    result.data.allMarkdownRemark.edges.forEach((edge)=>{
        createPage({
            // path to the component
            component: blogTemplate,
            // Where should the page be created
            path: `/blog/${edge.node.fields.slug}`,
            // Object that can be passed down to the template
            context:{
                slug: edge.node.fields.slug
            }
        })
    })
}