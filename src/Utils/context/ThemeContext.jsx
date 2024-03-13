import React, { createContext, useContext, useEffect, useState , useReducer } from 'react';
import reducer , {initialState} from '../reducer/reducer';


// const DataContaxt = useContext(createContext());
export const DataContaxt = createContext();

// console.log(DataContaxt);

function ThemeContext(props) {
    // const [products, setProducts] = useState([]);
    // const [page, setPage] = useState(1);
    // const [loading, setLoading] = useState(true);
    const [addresssMode , setmodelAddress] = useState(false);
    // all data
    const [Data, setData] = useState([]);
    const [logging , setLodding] = useState(true);
    const [auth , setAuth] = useState(false);
    // set page 
    const [page, setPage] = useState(1)
    // cart data
    const [cart, setCart] = useState([]);
    // fildet data
    const [filteredData, setFilteredData] = useState(Data);
    // search data
    const [search, setNewSearch] = useState("");

    // this state is use to admit model pop 
    const [model , setModel] = useState(false);

    // this state use to set the admin name display in the admin model
    const [adminData , setAdminData] = useState({
        name: "",
        email:""
    });

    // setReiew page data 
    const [productID, setproductID] = useState([]);

    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log('state',state);



    useEffect(() => {
        localStorage.setItem("Faverate Data", JSON.stringify(state));
    }, [state]);

   

    const FetchData = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=20&page=${page}`, {
                method: 'GET',
                headers: {
                    "projectId": "rcetbaqftf5m",
                },
                body: JSON.stringify()
            }
            );
            const result = await response.json();
            console.log("result data",result.data);
            // setData(result.data);
            setLodding(true)
            // setData([...Data, ...result]); 
            setData((prevProducts) => [...prevProducts, ...result.data]); // Concatenate new data
            setLodding(false)
        } catch (error) {
            setLodding(false)
            console.log(error);
        }
    }

    useEffect(() => {
        FetchData();
    }, [page ] )
    // problem => only page count update than fetch the data 
    // i want to update the navbar item type than fetch data and show category data in my product page

    function GenderType(type) {
        // console.log("data", Data);
        // console.log("type", type);

        const FilterType = Data.filter(item => item.gender === type);
        // console.log("Filter Type => ", FilterType);
        setData(FilterType);
    };

    
    const loadMore = () => {
        setPage(page + 1);
    };

    return (
        <DataContaxt.Provider value={{ setAuth, auth, logging, Data, setData, cart, filteredData, setPage, GenderType, productID, setproductID, reducer, initialState, state, dispatch, setModel, model, setAdminData, adminData, loadMore, setmodelAddress, addresssMode }}>
            {props.children}
        </DataContaxt.Provider>

    )
}

export const useThemeContextValue = () => useContext(DataContaxt);

export default ThemeContext;