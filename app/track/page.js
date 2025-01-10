"use client"

import * as React from 'react';
import { LiveKitRoom } from '@livekit/components-react';

const MyLiveKitApp = () => {
    const serverUrl = '';
    const accessToken = '';
    return (
        <LiveKitRoom serverUrl={"wss://facemeet-a71i97dt.livekit.cloud"} token={"token"} connect={true}>
            {/* Your components go here. */}
        </LiveKitRoom>
    );
};

export default MyLiveKitApp;