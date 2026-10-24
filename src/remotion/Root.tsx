import React from 'react';
import { Composition } from 'remotion';
import { MedAllyLaunchVideo } from './MedAllyLaunchVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MedAllyLaunchVideo"
      component={MedAllyLaunchVideo}
      durationInFrames={480}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
