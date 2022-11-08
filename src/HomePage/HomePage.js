import {Link} from 'react-router-dom';
import styles from './HomePage.module.scss';

  const HomePage = () => {
 
        return (
           
        // <div style={{ background: 'blue',color:'pink'}}>
         <div >
            <Link to="/contacts">
            <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="/>
            </Link>
            
            <h1 className={styles.title}>Home page</h1>
        </div>   
        )  
    };
    
    export default HomePage;
 