import React, { useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

const root = createRoot(document.getElementById('root')!);

const MainComponent: React.FC = () => {
  const [cards, setCards] = useState<string[]>([]); 
  const [note, setNote] = useState<string>(''); 

  return (
    <StrictMode>
      <ChakraProvider>
        <App cards={cards} setCards={setCards} setNote={setNote} note={note} />
      </ChakraProvider>
    </StrictMode>
  );
};

root.render(<MainComponent />);

