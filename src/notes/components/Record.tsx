// import React from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { Button, Box, IconButton, Text } from '@chakra-ui/react';
import { ReactMediaRecorder } from 'react-media-recorder';
import { FaPlay, FaStop, FaRedo, FaRecordVinyl } from 'react-icons/fa';
import WaveSurfer from 'wavesurfer.js';

const Record: React.FC = () => {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [waveform, setWaveform] = useState<WaveSurfer | null>(null);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (waveform && audioSrc) {
      waveform.load(audioSrc);
    }
  }, [waveform, audioSrc]);

  useEffect(() => {
    if (timer > 0) {
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      return () => clearInterval(timerRef.current!);
    }
  }, [timer]);

  return (
    <Box textAlign="center" mt={10}>
      <ReactMediaRecorder
        audio
        onStop={(blobUrl) => {
          setAudioSrc(blobUrl);
          setWaveform(WaveSurfer.create({ container: '#waveform',waveColor: '#000', }));
        }}
        render={({ startRecording, stopRecording, mediaBlobUrl}) => (
          <>
            <Box id="waveform" mb={4}></Box>
            <Text fontSize="2xl" mb={4}>
              {new Date(timer * 1000).toISOString().substr(14, 5)}
            </Text>
            <Box>
              <IconButton
                onClick={() => {
                  setAudioSrc(null);
                  setTimer(0);
                  startRecording();
                }}
                icon={<FaRecordVinyl />}
                aria-label="Record"
                colorScheme="red"
                size="lg"
                mr={2}
              />
              <IconButton
                onClick={() => {
                  stopRecording();
                  clearInterval(timerRef.current!);
                }}
                icon={<FaStop />}
                aria-label="Stop"
                colorScheme="blue"
                size="lg"
                mr={2}
              />
              <IconButton
                onClick={() => {
                  setAudioSrc(null);
                  setWaveform(null);
                  setTimer(0);
                }}
                icon={<FaRedo />}
                aria-label="Reset"
                size="lg"
              />
            </Box>

            {mediaBlobUrl && (
              <Box mt={4}>
                <IconButton
                  as="a"
                  href={mediaBlobUrl}
                  target="_blank"
                  icon={<FaPlay />}
                  aria-label="Play"
                  size="lg"
                  colorScheme="green"
                  mr={2}
                />
                <audio src={mediaBlobUrl} controls />
              </Box>
            )}
          </>
        )}
      />
    </Box>
  );
};

export default Record;
