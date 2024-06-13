import React, {useState, useEffect} from 'react'
import axios from "axios";
const Component2 = () => {
    const [data, setData] = useState();


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
        .then((response) => {
        setData(response.data);
        });
      }, []);

      const DataItems =()=> data?.map((data)=> {
        return <li key={data.id}>
            <li>{data.price}</li>
        </li>  
      })

  return (
      <div>
         <DataItems/>
      </div>
  )
 
}

export default Component2