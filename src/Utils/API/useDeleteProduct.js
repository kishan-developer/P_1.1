// import { useState } from 'react';

// const useDeleteProduct = (url, options = {}, authToken) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const fetchData = async () => {
//         try {
//             if (!authToken) {
//                 throw new Error('User is not authenticated');
//             }

//             setLoading(true);

//             const response = await fetch(url, options);
//             const responseData = await response.json();
//             if (!response.ok) {
//                 throw new Error(responseData.message || 'Error occurred');
//             }
//             console.log("++++++++++++++++++++++++++++++++++++++")

//             setData(responseData);
//         } catch (error) {
//             setError(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return { data, loading, error, fetchData };
// };

// export default useDeleteProduct;
