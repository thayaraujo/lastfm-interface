import React from 'react';


const ArtistsItem = ({ name, linkToItem, fullName }) => {
  return (
      <div>
          <h2>{ name }</h2>
          <h4>full name:</h4>
          <a href={linkToItem} target="_blank" rel="noreferrer">{fullName}</a>
          
      </div>
  )
}

export default ArtistsItem;