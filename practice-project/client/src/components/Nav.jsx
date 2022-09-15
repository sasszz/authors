import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container gap-5">
                <div className="col-8"><a className="navbar-brand">The Vinyl Countdown</a></div>
                <div className=" d-flex align-items-end justify-content-end collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto gap-3">
                        <li className="nav-item">
                            <Link className='nav-link' to={`/authors`}>All Authors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to={'/authors/new'}>Add a Author</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav