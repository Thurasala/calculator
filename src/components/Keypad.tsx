import React, { FC } from 'react';
import {Button,Grid} from '@mui/material';

import './Keypad.css';


interface KeypadProps {
  handleClick: (value: string) => void;
  handleClear: () => void;
  calculate: () => void;
}

const Keypad: FC<KeypadProps> = ({ handleClick, handleClear, calculate }) => {
  return (
    <Grid container className="keypad" spacing={1}>
      <Grid container  item xs={12} spacing={1}>
        {['7', '8', '9', '/'].map((value, index) => (
          <Grid className='row' key={index} item xs={3}>
            <Button onClick={() => handleClick(value)} className={value === '/' ? 'operator' : 'digit'}>
              {value}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container item xs={12} spacing={1}>
        {['4', '5', '6', '*'].map((value, index) => (
          <Grid key={index} item xs={3}>
            <Button onClick={() => handleClick(value)} className={value === '*' ? 'operator' : 'digit'}>
              {value}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container item xs={12} spacing={1}>
        {['1', '2', '3', '-'].map((value, index) => (
          <Grid key={index} item xs={3}>
            <Button onClick={() => handleClick(value)} className={value === '-' ? 'operator' : 'digit'}>
              {value}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container item xs={12} spacing={1}>
        {['0', '=', 'C', '+'].map((value, index) => (
          <Grid key={index} item xs={3}>
            <Button
              onClick={() => (value === '=' ? calculate() : value === 'C' ? handleClear() : handleClick(value))}
              className={value === '+' ? 'operator' : value === '=' || value === 'C' ? 'fun-keys' : 'digit'}
            >
              {value}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Keypad;





