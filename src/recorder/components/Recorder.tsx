import { Box, Button } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import WaveSurfer from 'wavesurfer.js';

interface Props {
  
}

// const wavesurfer = WaveSurfer.create({
//     container: '#waveform',
//     waveColor: '#4F4A85',
//     progressColor: '#383351',
//     url: '/audio.mp3',
//   })

const Recorder: React.FC<Props> = ({  }) => {
    const [waveform, setWaveform] = useState<WaveSurfer | null>(null);
    const [audioSrc, setAudioSrc] = useState<string | null>(null);

    useEffect(() => {
        if (waveform && audioSrc) {
          waveform.load(audioSrc);
        }
      }, [waveform, audioSrc]);
    

  return (
    <Box>
      <ReactMediaRecorder 
      audio
      onStop={(blobUrl)=>{
        setAudioSrc(blobUrl);
        setWaveform(WaveSurfer.create({container:'#wave',waveColor:'#000'}))
      }}
       render={({startRecording,stopRecording, mediaBlobUrl  })=>(
       <Box>
        <Button onClick={startRecording}>start</Button>
        <Button onClick={stopRecording}>stop</Button>
        {/* <Audio src={}/> */}
        <audio src={mediaBlobUrl} controls></audio>
       </Box>
      )}/>
    </Box>
  );
};

export default Recorder;