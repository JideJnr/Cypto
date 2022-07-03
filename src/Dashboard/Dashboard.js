import React,  { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import Asset from './Asset'
import Home from './Home'
import Trade from './Trade'
import Explore from './Explore'
import Pay from './Pay'
import { db, auth } from "../firebase";
import {  getDoc ,doc } from "firebase/firestore";




const Dashboard = () => {

    const [data, setData] = useState("");
    const user1 = auth.currentUser.uid

    useEffect(() => {
        getDoc(doc(db, "client", user1)).then((docSnap) => {
          if (docSnap.exists) {
            setData(docSnap.data());
          }
        });
    
    
      }, );
    
    



  return (
    <div className='w-screen h-screen max-h-screen flex '>
        
    <Tab.Group  >

        <Tab.List className='sm:flex hidden sm:visible flex-col  w-1/5 h-full px-4 text-white border border-purple-900' >

            <div className='flex flex-wrap my-8 ml-5'>

                <p className=' flex text-[2.0rem]  text-black'>De<span className='primary'>Fi</span></p>

            </div>

            <ul className='ml-5'>

            
                <Tab as={Fragment}>
                    {({ selected }) => (
                    <li
                        className={
                        selected ? ' font-bold mb-2 px-4 py-4  flex flex-row  text-blue-500 border-gray-300   bg-blue-100  rounded-3xl ' : 'bg-white font-semibold text-black mb-2 px-4 py-4  flex flex-row  border-gray-300  rounded '
                        }
                    >
                        <p>
                            Home
                        </p>
                    </li>
                    )}
                </Tab>

                <Tab as={Fragment}>
                    {({ selected }) => (
                    <li
                        className={
                        selected ? ' font-bold mb-2 px-4 py-4  flex flex-row  text-blue-500 border-gray-300   bg-blue-100  rounded-3xl ' : 'bg-white font-semibold text-black mb-2 px-4 py-4  flex flex-row  border-gray-300  rounded '
                        }
                    >
                        <p>
                           Asset
                        </p>
                    </li>
                    )}
                </Tab>         

                <Tab as={Fragment}>
                    {({ selected }) => (
                    <li
                        className={
                        selected ? ' font-bold mb-2 px-4 py-4  flex flex-row  text-blue-500 border-gray-300   bg-blue-100  rounded-3xl ' : 'bg-white font-semibold text-black mb-2 px-4 py-4  flex flex-row  border-gray-300  rounded '
                        }
                    >
                        <p>
                           Explore
                        </p>
                    </li>
                    )}
                </Tab>


                <Tab as={Fragment}>
                    {({ selected }) => (
                    <li
                        className={
                        selected ? ' font-bold mb-2 px-4 py-4  flex flex-row  text-blue-500 border-gray-300   bg-blue-100  rounded-3xl ' : 'bg-white font-semibold text-black mb-2 px-4 py-4  flex flex-row  border-gray-300  rounded '
                        }
                    >
                        <p>
                           Trade
                        </p>
                    </li>
                    )}
                </Tab>
                    
                <Tab as={Fragment}>
                    {({ selected }) => (
                    <li
                        className={
                        selected ? ' font-bold mb-2 px-4 py-4  flex flex-row  text-blue-500 border-gray-300   bg-blue-100  rounded-3xl ' : 'bg-white font-semibold text-black mb-2 px-4 py-4  flex flex-row  border-gray-300  rounded '
                        }
                    >
                        <p>
                           Pay
                        </p>
                    </li>
                    )}
                </Tab>






            </ul>

            <div className='flex mt-auto mb-5 text-black mx-auto '>
                    <p>
                        
                    </p>
                </div>




        </Tab.List>

        <Tab.Panels className='sm:w-4/5 w-full' >

        <Tab.Panel >
            <Home data={data}/>
        </Tab.Panel>


        <Tab.Panel>
            <Asset/>
        </Tab.Panel>

        <Tab.Panel>
        <Explore/>
        </Tab.Panel>

        <Tab.Panel>
            <Trade/>
        </Tab.Panel>

        <Tab.Panel >
            <Pay/>
        </Tab.Panel>


        </Tab.Panels>
    </Tab.Group>
    </div>
  )
}

export default Dashboard