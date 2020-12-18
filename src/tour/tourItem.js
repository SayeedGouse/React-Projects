
import React, { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
const TourItem = (props) =>{
    const item = props.data;
    const [readMore, setReadMore] = useState(false);
    const notInterested = (id) =>{
        props.removeTour(id);
    }
    return(
        <>
            <article key={item.id} className='tour-article'>
                <img src={item.image} alt={item.name} />
                <div className="more-info">
                    <div className="tour-name">
                        <h4>{item.name}</h4>
                        <span className="tour-price">${item.price}</span>
                    </div>
                    <div className='tour-info'>
                        <p>
                            {readMore ? item.info : `${item.info.substring(0,200)}...`}
                            <button onClick={()=>setReadMore(!readMore)}>{!readMore ? 'Read more' : 'Show less'}</button>
                        </p>
                    </div>
                    <Link to={`/tour/${item.id}`}>More about Tour</Link>
                    <button className='tour-btn' onClick={()=>notInterested(item.id)}>not interested</button>
                </div>    
            </article>
        </>
    );
}
export default TourItem;