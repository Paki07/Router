import { useState } from 'react'
import { useEffect } from 'react'
import Cards from "./Cards"
import "./FetchData.css"

const Home = () => {
  const[data, setdata]=useState([])
  
    const fetchApi = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((abcd) => {console.log(abcd)
        setdata(abcd.filter(stopdata => stopdata.id >= 1 && stopdata.id <= 10))
      });    
  };

    useEffect (() => {
      fetchApi();
          }, [])

    return (
      <div  >
        <Cards  fetchdata={data} className='FetchDatastyle' />
      </div>
    );
  };
  
export default Home;