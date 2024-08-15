import { Box } from '@chakra-ui/react';
import React from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import WaveSurfer from 'wavesurfer.js';

interface Props {
  
}

const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#4F4A85',
    progressColor: '#383351',
    url: '/audio.mp3',
  })

const Recorder: React.FC<Props> = ({  }) => {
  return (
    <Box>
      <ReactMediaRecorder render={({startRecording,  })=>(
        <div id="waveform" />
      )}/>
    </Box>
  );
};

export default Recorder;