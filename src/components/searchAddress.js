import React, { useState, useEffect } from 'react';
import AlgoliaPlaces from 'algolia-places-react';

const SearchAddress = ({ handleAddress }) => {
  const [ address, setAddress ] = useState();
  const [ country, setCountry ] = useState();
  const [ city, setCity ] = useState();
  const [ lng, setLng ] = useState();
  const [ lat, setLat ] = useState();
  const [ postCode, setPostCode ] = useState();

  useEffect(() => {
    handleAddress({address, country, city, lng, lat, postCode})
  }, [address, city, country, handleAddress, lat, lng, postCode])
  
  return (
    <AlgoliaPlaces
      placeholder='Adresse'
      options={{
        appId: 'pl40ZJQJFIY1',
        apiKey: 'b97d72715d5faff9cb479e0606500f11',
        language: 'fr',
        countries: ['fr'],
      }}
      onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
        console.log(suggestion);
        setAddress(suggestion.name);
        setCountry(suggestion.county);
        setLng(suggestion.latlng.lng);
        setLat(suggestion.latlng.lat);
        setPostCode(suggestion.postcode);
        setCity(suggestion.city);
      }}
    />
  )
}

export default SearchAddress;