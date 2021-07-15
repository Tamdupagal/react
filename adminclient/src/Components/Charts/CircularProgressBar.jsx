import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useLocation, useParams } from 'react-router-dom';

const CircularProgressBar = () => {
  const {lid} = useParams();
  const location = useLocation();
  const length = location.state.length
  const present = location.state.data.present
  const percentage = present/length*100;
  return (
  
    <CircularProgressbar value={percentage} text={`${percentage}%`}
      styles={buildStyles({
        pathColor: "#8ad8ed",
        trailColor: " #ff3333",
        textColor:"#007399",
      })}
    />
 )
}

export default CircularProgressBar