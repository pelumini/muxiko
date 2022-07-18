import React from 'react';
import { Layout } from 'src/components';

const Index = () => {
  return (
    <>
      <Layout>
        <div className="center">
          <h1>Welcome to Muxiko</h1>
          <h3>Click on the menu for the best tracks!</h3>
        </div>
      </Layout>
      <style jsx>
        {`
                    .center {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                `}
      </style>
    </>
  );
};

export default Index;
