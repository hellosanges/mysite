import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./portfolios.module.scss"

export default function portfolios({ data }) {
  const { allWpPortfolio } = data

  return (
    <Layout>
      <div className={styles.portfolios_container}>
        {allWpPortfolio.edges.map(({ node }) => (
          <div className={styles.portfolio_inner}>
            <div >
              {
                <GatsbyImage
                  image={getImage(node.portfolioimage.mainImage.node.localFile)}
                  alt={node.title}
                />
              }
            </div>
            <div >
              <span>Type:</span>{node.portfolioTypes.nodes.map(node => (
                <ul>
                  <li key={node.name}>{node.name}</li>
                </ul>
              ))}
            </div>
            <div >
             <span>Tech used:</span> {node.technologies.nodes.map(node => (
                <ul>
                  <li key={node.name}>{node.name}</li>
                </ul>
              ))}
            </div>
            <div>  <a href={ node.uri}>Explore the Project</a></div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allWpPortfolio {
      edges {
        node {
          title
          uri
          portfolioimage {
            mainImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          technologies {
            nodes {
              name
            }
          }
          portfolioTypes {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`
