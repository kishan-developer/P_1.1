import React, { useEffect, useState } from 'react';
// import useThemeContextValue from '../Content/useThemeContextValue'
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';

const SearchComponent = () => {

 
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [count, setCount ] = useState(1);
  const navigate = useNavigate();

  const { setData, Data } = useThemeContextValue();
  

  const handleSearch = async () => {
    // Replace with your actual base domain and project ID
    const baseDomain = 'https://academics.newtonschool.co';
    const projectId = 'rcetbaqftf5m';

    try {
      const response = await fetch(`${baseDomain}/api/v1/ecommerce/clothes/products?search={"name":"${searchTerm}"}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'projectID': projectId,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // console.log("222",data.data)
      setSearchResults(data.data)
      setData(data.data); // Assuming the response is an array of products
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // console.log("search data set inside the  Data ", Data)

  const itemCounts = {};

  searchResults.forEach((item) => {

    const key = `${item.gender} ${item.color.toLowerCase()} ${item.subCategory}`;

    if (itemCounts[key]) {

      itemCounts[key]++;

    } else {

      itemCounts[key] = 1;

    }

  });

  // console.log(itemCounts);

  const handleSearchInput =(e)=>{
    if(e.target.value.length==0){
      setSearchResults([])
    }
    setSearchTerm(e.target.value);
  }

  const navigateThePage = (item) => {
    navigate(`/${item.gender}`);
  }




  return (
    <>
      {/* <h2>Product Search</h2> */}
      <form className='h-[100%] w-full mr-2 form flex bg-gray-300 rounded-lg '
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <button type='submit' className='outline-none border-none ml-1 px-2 font-thin text-sm'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>

        </button>
  
          <input
            placeholder='search by product, category or collection '
            className='outline-none border-none bg-transparent ml-3 text-sm font-thin'
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearchInput(e)}
          />
        
        
      </form>
      
      <div className='dropdown absolute mt-[52px] mx-[-50px] bg-gray-100 w-[fit]'>


        {searchResults.slice(0,6).map((item) => (
          
          <div key={item._id}  className='h-10 text-sm flex items-center justify-between border-b-2 border-gray-300 py-3 hover:bg-gray-300'>
            
            <p onClick={navigateThePage(item)} key={item.id} className='mx-4 ' >
                {/* {console.log(item)} */}
                
                {item.gender} {item.color.toLowerCase()} {item.subCategory}
                 
              </p>
           
            <p className='mx-4'>{count}</p>
          </div>
          
        ))}
      </div>
        
     
    </>
  );
};

export default SearchComponent;
