// import data from '../data.json';
import { useState, useEffect } from "react"

export default function Datas(){
    const [data, setData] = useState([])
    
    
    const fetchData = () => {
        fetch("../data.json")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((e) => {
            console.log(e.message)
        })
        console.log(data)
    }


    useEffect(() => {
        fetchData()
       
    }, [])

    const userKey = Object.keys(data);

   
    return(
        <ul>
              {userKey.map(key => {
        const user = data[key];
        return (
          <div key={key}>
            <p>City: {user.email}</p>
            <p>Country: {user.country}</p>
            <p>Date: {user.date}</p>
            {/* Add more properties as needed */}
            {console.log(user)}
          </div>
        );
      })}
        </ul>
    )
}