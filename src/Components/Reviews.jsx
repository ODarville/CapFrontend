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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(review)
    }

    const handleEvent = (e) => {
        setReview({...review,[e.target.name]:[e.target.value]})
    }

    return(

        <div className="formContainer">
            <div>
                <H2>Write Plaza Reviews Here!</H2>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Name">Name</label>
                    <input type="text" placeholder="Enter Name" onChange={(e) => handleEvent(e)} required/>
                    
                    <label htmlFor="Rating">Rating</label>
                    {/* <input type="radio"/> 1
                    <input type="radio"/> 2
                    <input type="radio"/> 3
                    <input type="radio"/> 4
                    <input type="radio"/> 5 */}
                    <select name="Rating" id="" onChange={(e) => handleEvent(e)} required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <label htmlFor="Body">Review</label>
                    <textarea name="Body" id="" cols="30" rows="5" placeholder="Enter Review Here" onChange={(e) => handleEvent(e)} required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ReviewsForm