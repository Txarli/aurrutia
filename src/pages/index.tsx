import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { GlobalStyles } from '../theme/GlobalStyles';
import { size, grid, font, fontWeight, colors } from '../theme/theme';

const IndexPage = ({ data }) => {
  return (
    <>
      <GlobalStyles />

      <Helmet title="Aitor Urrutia" />
      <Container>
        <Header />

        <Hello>
          Kaixo! 🙋‍♂️ Soy Aitor Urrutia y me dedico al desarrollo de software, con
          el foco puesto en personas, entrega de valor y mejora continua.
        </Hello>

        {data.allMarkdownRemark.edges.map(({ node: post }) => (
          <PostWrapper key={post.frontmatter.path}>
            <PostTitle href={post.frontmatter.path}>
              {post.frontmatter.title}
            </PostTitle>
            {post.frontmatter.highlight && (
              <PostHighlight>{post.frontmatter.highlight}</PostHighlight>
            )}
            <PostDate>{post.frontmatter.date}</PostDate>
          </PostWrapper>
        ))}
      </Container>
    </>
  );
};

const Hello = styled.div`
  ${font.h3()}
  margin-bottom: ${size.medium}px;
`;

const PostWrapper = styled.div`
  margin-bottom: ${size.base}px;
`;

const PostTitle = styled.a`
  ${font.h4()}
  font-weight: ${fontWeight.bold};
`;

const PostHighlight = styled.p`
  font-style: italic;

  &::before {
    content: '"';
  }

  &::after {
    content: '"';
  }
`;

const PostDate = styled.div`
  ${font.small()}
  color: ${colors.grey};
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${grid.contentMaxWidth}px;
`;

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "DD-MM-YYYY")
            highlight
          }
        }
      }
    }
  }
`;
