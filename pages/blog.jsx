import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../layouts/Base.jsx';
import Container from '../components/Container.jsx';

// The Blog Page Content
export default function Blog({ posts }) {
  return (
    <Layout>
      <Container>
        {posts.map((post) => {
          return (
            <article key={post.frontmatter.title}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.frontmatter.title}</a>
              </Link>
            </article>
          );
        })}
      </Container>
    </Layout>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync('posts');

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}
