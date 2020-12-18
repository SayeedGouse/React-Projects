
import {useState, useEffect,useCallback} from 'react';
export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tour, setTour] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    const tour = await response.json();
    setTour(tour);
    setIsLoading(false);
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);
  
    return {isLoading,tour}
}
