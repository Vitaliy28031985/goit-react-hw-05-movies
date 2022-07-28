import { useParams } from 'react-router-dom';

export const Reviews = () => {  
   // const [movies, setMovies] = useState([]);
   const {id} = useParams();
   
   
      return (
   <>
   <p>{id}</p>
   <p>Reviews</p>
   </>
      );
   }