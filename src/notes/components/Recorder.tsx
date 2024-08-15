import { Box, Button } from '@chakra-ui/react';
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
      <ReactMediaRecorder 
      audio
       render={({startRecording,stopRecording  })=>(
       <Box>
        <Button onClick={startRecording}></Button>
        <Button onClick={stopRecording}></Button>
       </Box>
      )}/>
    </Box>
  );
};

export default Recorder;