import React from 'react'
import './searchpage.css';
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import Search from '../components/Search'
import useGoogleSearch from '../useGoogleSearch'


const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue()
    // const { data } = useGoogleSearch(term);

    // console.log(data)
  return (
    <div className='searchpage'>
        <div className="searchpage__header">
            <Link to='/'>
                  <img className='searchpage__logo'
                      alt='google logo'
                      src='https://res.cloudinary.com/demo/image/fetch/f_auto/https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                  />
            </Link>

            <div className="searchpage__headerbody">
              <Search hideButtons />
            </div>
        </div>
          
        <div className="searchpage__results">
              
        </div>
    </div>
  )
}

export default SearchPage;