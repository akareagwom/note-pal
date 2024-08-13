import React from 'react';
// import { useReactMediaRecorder } from 'react-media-recorder';   
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useReactMediaRecorder, ReactMediaRecorder } from 'react-media-recorder';


interface Props {
  
}
// const {
   
//   } = useReactMediaRecorder({ audio: true });

const Record: React.FC<Props> = ({  }) => {
    const { status,
        startRecording,
        stopRecording,
        mediaBlobUrl,} = useReactMediaRecorder({audio:true})
  return (
    <Flex direction="column" color={'white'} align="center" justify="center" p={4}>
        <Text fontSize="xl" mb={4}>Record Audio</Text>
        {/* <ReactMediaRecorder   video
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <video src={mediaBlobUrl} controls autoPlay loop />
        </div>
      )}/> */}
      <Text fontSize="xl" mb={4}>
        Status: {status}
      </Text>
      <Box mb={4}>
        <Button colorScheme="teal" mr={4} onClick={startRecording}>
          Start Recording
        </Button>
        <Button colorScheme="red" onClick={stopRecording}>
          Stop Recording
        </Button>
      </Box>
      {mediaBlobUrl && (
        <Box mt={4}>
          <audio src={mediaBlobUrl} controls />
          <Text mt={2} fontSize="sm">
            Recording preview
          </Text>
        </Box>
      )}
    </Flex>
  );
};

export default Record;