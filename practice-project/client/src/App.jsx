import { Navigate, Routes, Route } from 'react-router-dom'
import './darkly.css'
import Nav from './components/Nav'
import Authors from './components/Authors'
import AllAuthors from './pages/AllAuthors'
import EditAuthor from './pages/EditAuthor'
import NewAuthor from './pages/NewAuthor'
import ShowAuthor from './pages/ShowAuthor'


const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={'/'} element={<Navigate to='/authors' />} />
        <Route path={'/authors'} element={<Authors />} >
          <Route index element={<AllAuthors />} />
          <Route path=':id' element={<ShowAuthor />} />
          <Route path='new' element={<NewAuthor />} />
          <Route path=':id/edit' element={<EditAuthor />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App