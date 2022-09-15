import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { compareName } from '../sort-utils/Sort.js'


const Authors = () => {
    const baseUrl = 'http://localhost:8000/api/authors';
    const [authors, setAuthors] = useState([]);
    const [sorted, setSorted] = useState([])

    let sortedFunction = () => {
        setSorted (authors.sort(compareName))
    }

    useEffect(() => {
        axios.get(baseUrl)
            .then((res) => {
                setAuthors(res.data)
                sortedFunction(authors)
            })
            .catch(err => console.log(err));
    })

    return (
        <div className="mt-3">
            <Outlet context={{ sorted, setSorted }}/>
        </div>
    )
}

export default Authors