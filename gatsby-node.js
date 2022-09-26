const { createRemoteFileNode } = require('gatsby-source-filesystem');
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      cloudinaryImg: File @link(from: "fields.localFile")
    }
    type Frontmatter {
      title: String!
      imageUrl: String
      uk: String
      ru: String
      en: String
      fieldIdName: String
      date: Date
    }
  `);
};
exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  // For all Mdx nodes that have a featured image url, call createRemoteFileNode
  if (node.internal.type === 'Mdx' && node.frontmatter.imageUrl) {
    const fileNode = await createRemoteFileNode({
      url: node.frontmatter.imageUrl, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      getCache,
    });
    // if the file was created, extend the node with "localFile"
    if (fileNode) {
      createNodeField({ node, name: 'localFile', value: fileNode.id });
    }
  }
};
