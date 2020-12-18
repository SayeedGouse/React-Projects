import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useState, useEffect, useCallback} from 'react';
import MapContainer from './MapContainer';

const url = 'https://course-api.com/react-tours-project';
const MorAbtTour = () => {
    const [tourItem, setTourItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    
    const getProducts = useCallback(async () => {
        const response = await fetch(url);
        const tourItem = await response.json();
        const newTour = tourItem.find((item) => item.id === id);
        setTourItem(newTour);
        setIsLoading(false)
    }, [id]); 

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
     
    if(isLoading){
        return(
            <h1>Loading..</h1>
        );
    }
    return (
        <section className='container'>
            <article>
                <div className='image-div'>
                    <img src={tourItem.image} alt={tourItem.name}></img>
                </div>
                <h1>{tourItem.name}</h1>
                <p>{tourItem.info}</p>
                <MapContainer/>
                <h1>
                    <Link to='/tour'>Back to Tours</Link>
                </h1>
            </article>
        </section>
    )
}
export default MorAbtTour;