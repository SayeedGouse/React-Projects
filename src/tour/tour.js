
import React, { useState , useEffect} from 'react';

import TourItem from './tourItem';
const url = 'https://course-api.com/react-tours-project';
const Tour = () =>{
    const [readMore, setReadMore] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [tour, setTour] = useState([]);
    const fetchData = () =>{
        setIsLoading(true);
        fetch(url).then((resp) => {
            if(resp.status >= 200 && resp.status <= 299){
                return resp.json();
            }else{
                throw new Error(resp.statusText)
            }
        }).then((tour) =>{
            setIsLoading(false);
            setTour(tour);
        }).catch((error) =>{
            console.log(error);
        })
    }
    useEffect(() => {
        fetchData();
    }, [])

    if(isLoading){
        return(
            <h1>Loading..</h1>
        );
    }

   if(!tour.length){
       return(
           <>
            <h1>No Tours</h1>
            <button className='btn-cust' onClick={()=>fetchData()}>Refresh</button>
           </>
       );
   }
   const removeTour = (id) =>{
         const newTour = tour.filter((item) => {
            return item.id !== id;
         })
         setTour(newTour);
     }
    return(
        <>
            <h1>Tours</h1>
            <div className='underline'></div>
            <section className="section-container tour">
                {tour.map((item) => {
                    return(
                        <TourItem key={item.id} data={item} removeTour={removeTour}/>
                    );
                })}
            </section>
        </>
    );
}
export default Tour;