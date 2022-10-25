import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Layout from '../../layouts/Base.jsx';
import Container from '../../components/Container.jsx';
// The page for each post
export default function Post({ frontmatter, content }) {
  const { title, featuredImage } = frontmatter;

  return (
    <Layout>
      <Container>
        <img src={featuredImage} />
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </Container>
    </Layout>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync('posts');
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
