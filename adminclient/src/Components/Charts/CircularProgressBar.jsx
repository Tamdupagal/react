import React from 'react';
import CircularBar from 'react-multicolor-circular-progress-bar';

const CircularProgressBar = (props) => (
    <CircularBar
      scale={2}
      angleTransition={[180]}
      colors={['#ff0000','#00ff00']}
      stroke={ {color:'#eee', width:5}}
    />
);

export default CircularProgressBar;