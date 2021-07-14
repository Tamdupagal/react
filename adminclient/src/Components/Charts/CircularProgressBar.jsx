import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = () => {
  const percentage = 50;
  return (
  
    <CircularProgressbar value={percentage} text={`${percentage}%`}
      styles={buildStyles({
        pathColor: " #e60000",trailColor:"#007399"
      })}
    />
 )
}

export default CircularProgressBar