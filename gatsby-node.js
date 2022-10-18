exports.createPages = async  function({actions, graphql}) {
    const {data} = await graphql(`
        query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    frontmatter {
                      slug
                    }
                    id
                  }
                }
            }
        }
    `);

// Create paginated pages for posts

const postPerPage = 3;

const numberOfPages = Math.ceil(data.allMdx.edges.length / postPerPage);

    Array.from({ length: numberOfPages }).forEach((_, i) => {
        actions.createPage({
            path: i === 0 ? `/` : `/${i + 1 }`,
            component: require.resolve("./src/templates/allPosts.js"),
            context: {
                limit: postPerPage,
                skip: i * postPerPage,
                currentPage: i + 1,
            }
        });
    });

// // Create singel blog posts
    data.allMdx.edges.forEach(edge => {
        const slug = edge.node.frontmatter.slug;
        const id = edge.node.id;

        actions.createPage({
            path: slug,
            component: require.resolve("./src/templates/singlePost.js"),
            context: {id},
        })
    })

}