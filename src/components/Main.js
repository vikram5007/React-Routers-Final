import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from '../Datacontent/DataContext'

const Main = () => {
  const {Searchres} = useContext(DataContext);
  return (
    <main>
      {
        (Searchres.length) ?
          <Feed
            Searchres={Searchres}
          />
          :
          <h1>No Posts To Display </h1>
      }
    </main>
  )
}

export default Main