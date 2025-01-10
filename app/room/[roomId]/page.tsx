"use client";

import { useEffect, useState } from "react";
import {
  LiveKitRoom,
  VideoConference,
  GridLayout,
  ParticipantTile,
  RoomAudioRenderer,
  ControlBar,
  useTracks,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { useParams } from "next/navigation";

export default function Room() {
  const { roomId } = useParams();
  const [token, setToken] = useState("");

  useEffect(() => {
    // In a production environment, you would fetch this token from your server
    // This is just for demonstration purposes
    const dummyToken = "vf8vFnQ9U0zYWu9lc2RNvFxu6dd0PIwIS3fMVoJyBZO";
    setToken(dummyToken);
  }, [roomId]);

  if (token === "") {
    return <div>Loading...</div>;
  }

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      serverUrl={"wss://facemeet-a71i97dt.livekit.cloud"}
      data-lk-theme="default"
      style={{ height: "100vh" }}
      connect={true}
    >
      <VideoConference />
      <RoomAudioRenderer />
      <ControlBar />
    </LiveKitRoom>
  );
}