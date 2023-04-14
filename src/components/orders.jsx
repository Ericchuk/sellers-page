// import data from '../data.json';
import {userContext } from '../context'
import { useState, useEffect, useContext } from "react"

export default function Datas(){
    const [data, setData] = useState([])

    const { retrieved} = useContext(userContext)

   
    return(
        <ul className='py-10 px-5 w-12/12 flex flex-col justify-center items-center'>
            {retrieved.map((item) => {
                return(
                    <li key={item.key} className='flex justify-center items-center flex-col border border-black rounded w-10/12 py-5 my-2'>
                        <div className='md:flex justify-between items-center lg:border w-11/12'>
                            <h4 className='my-2 mx-2 md:mx-5'><b>Email:</b> {item.data.email}</h4>
                            <p className='my-2 mx-2 md:mx-5'><b>Country: </b>{item.data.country}</p>
                            <p className='my-2 mx-2 md:mx-5'><b>Total:</b> {item.data.gTotal * 100}</p>
                        </div>
                        <aside className=' w-11/12 '>
                            <h3 className='w-12/12 border py-2 my-2'><b>Order:  </b><span>{item.data.incart.length}</span></h3>
                            <div className='flex items-start justify-start flex-col  lg:flex-wrap lg:flex-row'>
                                {item.data.incart.map((item) => {
                                    return(
                                        <aside key={item.id}className='lg:w-4/12 py-2 my-2'>
                                            <img src={item.img} alt={item.name} />
                                            {console.log(item.img)}
                                            <p>{item.size}</p>
                                            <p><b>{item.name}</b></p>
                                        </aside>
                                    )
                                }) }
                            </div>
                        </aside>
                    </li>
                )
            })}
        </ul>
    )
}