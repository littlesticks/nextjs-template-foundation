import { useRouter } from 'next/router';
import Head from 'next/head';
import { settings } from '../data/settings.js';

export default function BaseHead({ title, description, image, canonicalURL }) {
  const router = useRouter();
  const resolvedTitle = title || settings.title;
  const resolvedDescription = description || settings.description;
  const resolvedImage = image || settings.image;
  const resolvedCanonical = canonicalURL || `${settings.url}${router.asPath}`;
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      {/* <!-- Favicon --> */}
      <link rel="icon" type="image/svg" href="/favicon.svg" />
      {/* <!-- Primary Meta Tags --> */}
      <title>{resolvedTitle}</title>
      <meta name="title" content={resolvedTitle} />

      <meta name="description" content={resolvedDescription} />
      {/* <!-- settingsmap --> */}
      <link rel="sitemap" href="/sitemap.xml" />
      {/* <!-- RSS --> */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${settings.name} Blog`}
        href={`${settings.url}/feed/blog.xml`}
      />
      {/* <!-- Canonical --> */}
      <link rel="canonical" href={resolvedCanonical} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={resolvedImage} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={resolvedCanonical} />
      <meta property="twitter:title" content={resolvedTitle} />
      <meta property="twitter:description" content={resolvedDescription} />
      <meta property="twitter:image" content={resolvedImage} />

      {/* <!-- Google Fonts --> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
