import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from 'src/store';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);
