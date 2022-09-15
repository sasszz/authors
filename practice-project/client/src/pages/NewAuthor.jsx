import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewAuthor = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then(() => {
                navigate('/authors');
            })
            .catch((err)=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(null)

    const validateName = () => {
        if (name.length < 3) {
            setNameError('Name must be longer than 3 characters')
        } else {
            setNameError(null)
        }
    }

    return (
        <div className="container">
            {errors &&
            errors.map((error, idx) => {
                return <p key={idx}>{error}</p>;
            })}
            <div className="card bg-light text-black mb-3 d-flex justify-content-center">
                <h5 className="card-header text-white">New Author</h5>
                <div className="card-body p-4">
                    <form onSubmit={onSubmitHandler}>
                        <div className='mb-4'>
                            <label htmlFor="name" className='form-label'>Name:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className='form-control'
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                onBlur={validateName}
                            />
                            {
                                nameError &&
                                <span className="form-text text-danger">{nameError}</span>
                            }
                        </div>
                        <button value="submit" className="col-1 btn btn-warning btn-sm me-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewAuthor