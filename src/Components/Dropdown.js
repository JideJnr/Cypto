import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import {  Link } from 'react-router-dom';

import { db, auth } from "../config/firebase";
import {  getDoc ,doc } from "firebase/firestore";


export default function Dropdown() {


  
  return (
    <div className=" w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md text-black px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <p>
             nolajide@ww.com
            </p>





          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (

                  <div
                    className={`${
                      active ? ' flex flex-col  bg-violet-500 text-black w-full h-28' : 'h-28 flex-col flex text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                    <p>
                      olajide nurudeen
                    </p>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to= '/st'>
                    
                 
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white h-14' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm h-14`}
                  >

                    Settings
                  </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to= '/r'>
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white h-14' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm h-14`}
                  >

                    Report
                  </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to= '/c'>
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white h-14' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm h-14`}
                  >
                    Help
                  </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                     active ? 'bg-violet-500 text-white h-14' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm h-14`}
                  >

                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}


