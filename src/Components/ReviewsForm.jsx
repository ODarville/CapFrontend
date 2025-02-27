import { useState, useEffect } from 'react';
import { getReview, createReview, updateReview, deleteReview } from '../API.jsx';



function ReviewsForm() {
    const [review, setReview] = useState({
        name: '',
        rating: '',
        body: '',
    })
    //         const [name, setName] = useSState('')
    //         const [rating, setRating] = useState(0)
    //         const [body, setBody] = useSState('')
    // console.log({body, rating, name})
    useEffect(() => {
        getReview().then(response => setReview(response.data));
    },[]);
    const handleSubmit = async () => {
        const newReview = review;
        const response = await  createReview(newReview);
        // e.preventDefault()
        // axios.post(url, review)
        console.log(newReview)
    }

    const handleChange = (e) => {
        setReview({...review,[e.target.name]:[e.target.value]})
    }

    return(

        <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Name">Name</label>
                    <input name="name" type="text" placeholder="Enter Name" onChange = {handleChange} required/>
                    
                    <label htmlFor="Rating">Rating</label>
                    {/* <input type="radio"/> 1
                    <input type="radio"/> 2
                    <input type="radio"/> 3
                    <input type="radio"/> 4
                    <input type="radio"/> 5 */}
                    <select name="rating" id="" onChange= {handleChange}  required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <label htmlFor="Body">Review</label>
                    <textarea name="body" id="" cols="30" rows="5" placeholder="Enter Review Here" onChange= {handleChange} required></textarea>

                    <button type="submit">Submit</button>
                </form>
        </div>
    )
}

export default ReviewsForm