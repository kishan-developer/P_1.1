import React, { useEffect, useState } from 'react'

function Nav_DropDownList() {
  const [category, setCategory] = useState([]);

  const FetchDropDown = async () => {
    try {
      const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories", {
        method: 'GET',
        headers: {
          "projectId": "rcetbaqftf5m",
        },
        body: JSON.stringify()
      }
      );
      const categoryData = await response.json();
      // console.log("category data", categoryData.data)

      // const mensProducts = result.data.filter((product)=>{
      //     return product.gender === "Men";
      // })
      // setFilteredData(mensProducts);
      // console.log("filter data ",filteredData);

      setCategory(categoryData.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchDropDown();
  }, [])

  return (
    <>
      <div className="dropdown-menu ">
        <ul>
          {category.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </>

  )
}

export default Nav_DropDownList