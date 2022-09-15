import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowRecord = () => {
    const { id } = useParams();
    const { baseUrl } = useOutletContext();
    const [record, setRecord] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/records/${id}`)
            .then((res) => setRecord(res.data))
            .catch((err) => console.log(err));
    });

    return (
        <div className="container">
            {record && (
            <div className="card bg-light text-black mb-3 d-flex justify-content-center">
                <h5 className="card-header text-white">{record.name}</h5>
            </div>
            )}
        </div>
    )
}

export default ShowRecord