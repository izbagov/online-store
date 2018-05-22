import React from 'react'

import { Input } from 'semantic-ui-react'

const Search = (props) => {
  return(
    <React.Fragment>
      <Input 
        icon="search"
        placeholder="Поиск по товарам"
        onChange={event => props.setSearchQuery(event.target.value)}
      />
    </React.Fragment>
  )
}

export default Search