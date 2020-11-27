const {
  createBlogPostType,
  createPortfolioType,
  createReferenceType,
  createServiceType,
} = require("./src/utils/types")

const createMdxNode = require("./src/utils/createMdxNode")

exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions
  createTypes([
    createBlogPostType(schema),
    createPortfolioType(schema),
    createReferenceType(schema),
    createServiceType(schema),
  ])
}

exports.onCreateNode = helpers => {
  const { node } = helpers
  // Create nodes from Mdx files
  if (node.internal.type === `Mdx`) {
    createMdxNode(helpers, contentPaths, basePaths)
  }
}

exports.onCreateWebpackConfig = ({actions, getConfig}) => {
    // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
    // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
    const config = getConfig();
    config.node = {
        fs: 'empty'
    };
};