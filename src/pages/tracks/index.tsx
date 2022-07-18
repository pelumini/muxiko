import React from 'react';
import { Box, Button, Card, Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import { ITrack } from 'src/types/track';
import TrackList from 'src/components/TrackList';
import Player from 'src/components/Player';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { useActions } from 'src/hooks/useActions';
import { NextThunkDispatch, wrapper } from 'src/store';
import { fetchTracks } from 'src/store/actions-creators/track';
import { Layout } from 'src/components';

const Index = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector((state) => state.track);

  if (error) {
    return (
      <Layout>
        <h1>{error}</h1>
      </Layout>
    );
  }

  return (
    <Layout title={'Track List - Music Playground'}>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Track list</h1>
              <Button onClick={() => router.push('/tracks/create')}>
                Download
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </Layout>
  );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());
  }
);
