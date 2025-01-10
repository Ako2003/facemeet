'use client';
import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  AudioConference,
  Chat,
  ChatToggle,
  useTracks,
  ParticipantName,
  ConnectionState,
  LayoutContextProvider,
} from '@livekit/components-react';
import '@livekit/components-styles';
import { Track } from 'livekit-client';

interface Params {
    id: string;
}

export default function Page({ params }: { params: Params }) {
  // TODO: get user input for room and name

  if (params.id === '') {
    return <div>Getting token...</div>;
  }

  return (
      <LayoutContextProvider>
        <LiveKitRoom
            // video={true}
            // audio={true}
            token={params.id}
            serverUrl={"wss://facemeet-a71i97dt.livekit.cloud"}
            // Use the default LiveKit theme for nice styles.
            data-lk-theme="default"
            style={{ height: '100dvh' }}
        >
          {/*<Chat className=""/>*/}
          {/* Your custom component with basic video conferencing functionality. */}
          <MyVideoConference />
          {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
          <RoomAudioRenderer volume={10}/>
          {/* Controls for the user to start/stop audio, video, and screen  share tracks and to leave the room. */}
          <ControlBar />
        </LiveKitRoom>
      </LayoutContextProvider>

  );
}

function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
      [
        { source: Track.Source.Camera, withPlaceholder: false },
        { source: Track.Source.ScreenShare, withPlaceholder: false },
      ],
      { onlySubscribed: false },
  );
  return (
      <GridLayout tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
        {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
        <ParticipantTile />
      </GridLayout>
  );
}