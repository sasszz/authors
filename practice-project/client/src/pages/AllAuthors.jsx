import { Link, useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const AllAuthors = () => {
    const { sorted } = useOutletContext();
    const [type, setType] = useState('Name');

    const deleteAuthor = (id) => {
        axios
            .delete(`http://localhost:8000/api/authors/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className="container">
            <div className="card bg-primary mb-3 p-2 d-flex justify-content-center">
                <div className="row">
                    <h5 className="col row p-0 m-0 d-flex justify-content-center align-items-center">Name</h5>
                    <h5 className="col row p-0 m-0 d-flex justify-content-center align-items-center"></h5>
                    <h5 className="col row m-0 d-flex justify-content-center align-items-center"></h5>
                </div>
            </div>
            {sorted &&
                sorted.map((author) => {
                    return (
                        <div className="card bg-light text-black mb-3 d-flex justify-content-center">
                            <div className="card-body">
                                <div className="row" key={sorted._id}>
                                    <p className="col p-0 m-0 d-flex justify-content-center align-items-center">
                                        <Link className="text-black" to={`/authors/${author._id}`}>{author.name}</Link>
                                    </p>
                                    <button className="col btn btn-warning btn-sm me-2">
                                        <Link to={`/authors/${author._id}/edit`} className="btn btn-warning btn-sm me-2">
                                            Edit
                                        </Link>
                                    </button>
                                    <button onClick={() => deleteAuthor(author._id)} className="col btn btn-danger btn-sm me-2">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllAuthors