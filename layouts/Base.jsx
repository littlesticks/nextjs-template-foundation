import BaseHead from '../components/BaseHead';

export default function Layout({ seo, children }) {
  return (
    <>
      <BaseHead {...seo} />
      <main>{children}</main>
    </>
  );
}
