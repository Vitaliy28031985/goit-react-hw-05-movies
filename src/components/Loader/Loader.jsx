import { BallTriangle } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function LoaderComponent() {
  return (
    <div className="loader" 
    style={{
      height: '5vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
    }}>
    <BallTriangle height="100" width="100" color="#3f51b5" ariaLabel="loading" />
  </div>
  );   
};