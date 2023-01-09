import React from 'react'
import NewsList from './NewsList'

const News = () => {
  return (
    <div>
      <NewsList/>
      <NewsList/>
      <NewsList/>
      <div className='flex flex-col text-center w-full my-3 text-xs'>
                <p>
                    Load More
                    
                </p>

            </div>
    </div>
  )
}

export default News