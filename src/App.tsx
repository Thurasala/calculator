import React, { FC, useState } from 'react';
import './App.css';
import Keypad from './components/Keypad';
import {TextField, Container ,Typography, Box} from '@mui/material';

 
interface IState {
    input:string
}
const App: FC = () => {
  const [input, setInput] = useState<IState['input']>('');

  const handleClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line
      const outputVal = eval(input);
      setInput(String(outputVal));
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <Container className="container">
      <Typography sx={{
    fontSize: {
      lg: 30,
      md: 25,
      sm: 20,
      xs: 15
    }
  }}>Calculator App using React</Typography>
      <Box className="calculator">
        <TextField type="text" value={input}  className="output" sx={{mb:1}} variant="outlined" fullWidth />
        <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate} />
      </Box>
    </Container>
  );
};

export default App;