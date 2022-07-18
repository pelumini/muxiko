import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
import { Container } from '@material-ui/core';
// import Player from '../components/Player';
import Head from 'next/head';
import Navbar from '../Navbar';

interface ILayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  children: boolean | ReactChild | ReactFragment | ReactPortal;
}

export const Layout: React.FC<ILayoutProps> = ({
  children,
  title,
  description,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Muxiko - Music Platform'}</title>
        <meta
          name="description"
          content={
            `Muxiko - Music Platform. Here everyone can leave their track and become famous.` +
            description
          }
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || 'Music, tracks, artists'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Container style={{ margin: '90px 0' }}>{children}</Container>
      {/* <Player /> */}
    </>
  );
};
