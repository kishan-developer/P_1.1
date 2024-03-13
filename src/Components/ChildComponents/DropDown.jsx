import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useThemeContextValue } from '../../Utils/context/ThemeContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown() {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Data , setData} = useThemeContextValue();

  // console.log("filter data", Data);

  const NewDatasort =() => {
    const sortedData = Data.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log("new dAta", sortedData);
  }
  const hightToLow = () => {
    const sortedData = Data.sort((a, b) => b.price - a.price);
    console.log("Hight to low data :" , sortedData);
    setData(sortedData);
  }
 
  const lowToHigh = () => {
    const sortedData = Data.sort((a, b) => a.price - b.price);
    console.log("low to hight price data:" , sortedData);
    setData(sortedData);
  }


  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-gray-800 px-3 py-1 text-sm font-semibold  ring-1 ring-inset ring-gray-300 ">
          Pupular

          
          <ChevronDownIcon className="-mr-1 h-5 w-5  text-gray-400" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          
          <div className="py-1">
            <p className='text-[#51CCCC] font-semibold pl-4'>Popular</p>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <span  onClick={NewDatasort}>New</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <span onClick={hightToLow}><span className='font-semibold'>Price :</span> High To Low</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <span onClick={lowToHigh}><span className='font-semibold'>Price :</span>  Low To High</span> 
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
