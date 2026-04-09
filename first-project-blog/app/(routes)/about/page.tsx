import { siteMetadata } from '@/lib/siteMetadata';
import { Metadata } from 'next';
import React from 'react'
import AboutMainPage from './_components/AboutMainPage';

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: "About Us"
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },

};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sint aut error debitis reprehenderit doloremque inventore consectetur blanditiis labore quae?",
}

const AboutPage = () => {
  return (
    <div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AboutMainPage/>
    </div>
  )
}

export default AboutPage