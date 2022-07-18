import React, { useState } from 'react';
import { ITrack } from 'src/types/track';
import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useInput } from 'src/hooks/useInput';
import { Layout } from 'src/components';
import Image from 'next/image';
import type { NextPage } from 'next';

interface ITrackPageProps {
  serverTrack: ITrack;
}

const TrackPage: NextPage<ITrackPageProps> = ({ serverTrack }) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const router = useRouter();
  const username = useInput('');
  const text = useInput('');

  const addComment = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/tracks/comment`,
        {
          username: username.value,
          text: text.value,
          trackId: track._id,
        }
      );
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout
      title={'Music Playground - ' + track.name + ' - ' + track.artist}
      keywords={'Music, artists, ' + track.name + ', ' + track.artist}
    >
      <Button
        variant={'outlined'}
        style={{ fontSize: 32 }}
        onClick={() => router.push('/tracks')}
      >
        К List
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <Image
          src={`${process.env.NEXT_PUBLIC_API}/` + track.picture}
          width={200}
          height={200}
          alt={track.name}
        />
        <div style={{ marginLeft: 30 }}>
          <h1>Name of the track - {track.name}</h1>
          <h1>Artist - {track.artist}</h1>
          <h1>Plays - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Words on the track</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid container>
        <TextField label="Your name" fullWidth {...username} />
        <TextField label="Comment" {...text} fullWidth multiline rows={4} />
        <Button onClick={addComment}>Submit</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div key={comment._id}>
            <div>Author - {comment.username}</div>
            <div>Comment - {comment.text}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/tracks/` + params.id
  );
  return {
    props: {
      serverTrack: response.data,
    },
  };
};
