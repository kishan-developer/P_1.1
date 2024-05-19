import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { useThemeContextValue } from '../../Utils/context/ThemeContext';

// npm toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Rating({ ratings, productIds, text }) {
    const [userRating, setRating] = useState(null);
    const [rateColor, setColor] = useState(null);
    const [userTextReview, setReviewText] = useState('');
    const [reviewAdd, setReviewAdd] = useState();
    const { setReview, review } = useThemeContextValue();
    const token = localStorage.getItem('token');

    
    // Example usage:
    const productId = productIds;
    const jwtToken = token;
    const projectID = "rcetbaqftf5m";
    const rating = userRating;
    const reviewText = userTextReview;
    // console.log(ratings);

    const submitReview = async (productId, jwtToken, projectID, rating, reviewText) => {
        const url = `https://academics.newtonschool.co/api/v1/ecommerce/review/${productId}`;

        const headers = {
            'Authorization': `Bearer ${jwtToken}`,
            'projectID': projectID,
            'Content-Type': 'application/json'
        };

        const body = JSON.stringify({
            "ratings": rating,
            "text": reviewText
        });

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: body
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log('Review submitted successfully:', data);
            // Display an alert message if the review is successfully added
            if (data.status === 'success') {
                // const alertMessage = `Ratings: ${data.ratings}, Text: ${data.text}`;
                // alert(`${data.message} `);
                toast(data.message)
            }
            setReviewAdd(data); // Optionally, return the response data
            // alert(`${reviewAdd.massage}`)
        } catch (error) {
            console.error('There was a problem submitting the review:', error);
            throw error;
        }
    };

    const handleChange = (e) => {
        setReviewText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitReview(productId, jwtToken, projectID, rating, reviewText);
        // Handle submission logic here (e.g., send review to server, etc.)
        // console.log('Review submitted:', reviewAdd);
        // Clear the textarea after submission
        setReviewText('');
    };

    return (
        <div className='flex flex-col w-[100%] mb-2 gap-2'>
            <div>
                <h2 className='font-bold text-md text-red-300'>Product Review</h2>
                <p className='text-sm font-semibold'>{text}</p>
                <div className='flex flex-row gap-2 w-[100%] mt-3'>
                    {[...Array(ratings)].map((star, index) => {
                        const currentRate = index + 1;
                        return (
                            <>
                                <FaStar
                                    size={20}
                                    className=' text-[#FFFF00] cursor-pointer'

                                />
                            </>
                        )
                    })}
                </div>
            </div>
            


            <div className=' h-[fit] w-[100%]'>
                <p className='font-semibold text-md my-2 text-red-300'>Your Review:</p>
                <form onSubmit={handleSubmit} className=''>
                    <label>

                        <textarea
                            value={userTextReview}
                            onChange={handleChange}
                            rows={5} // Adjust the number of rows as needed
                            cols={40} // Adjust the number of columns as needed
                            placeholder="Write your review here..."
                        />
                    </label>

                    <div className='flex flex-row gap w-[100%]'>
                        {[...Array(5)].map((star, index) => {
                            const currentRate = index + 1;

                            return (
                                <>
                                    <label className='mt-3 '>

                                        <input
                                            className='absolute rounded-lg border-2 border-gray-300 bg-transparent'
                                            type="radio"
                                            name='rate'
                                            value={currentRate}
                                            onClick={() => setRating(currentRate)}
                                        />
                                        <FaStar
                                            size={30}
                                            className='relative bottom-2 right-2 cursor-pointer '
                                            color={currentRate <= (rateColor || userRating) ? "yellow" : "grey"}
                                        />
                                    </label>
                                </>

                            )
                        })}
                    </div>
                    <br />
                    <button className=' bg-gray-500 px-5 py-2 rounded-lg hover:font-semibold hover:bg-gray-100' type="submit">Submit Review</button>
                </form>
            </div>
            {/* <button onClick={notify}>Notify!</button> */}
            <ToastContainer/>
        </div>
    )
}

export default Rating