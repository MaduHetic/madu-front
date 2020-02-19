import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';

const SearchAddress = ({ handleAddress }) => (
  <AlgoliaPlaces
    placeholder='Adresse'
    options={{
      appId: 'pl40ZJQJFIY1',
      apiKey: 'b97d72715d5faff9cb479e0606500f11',
      language: 'fr',
      countries: ['fr'],
    }}
    onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
      handleAddress(
        {
          address: suggestion.name,
          country: suggestion.county,
          city: suggestion.city,
          lng: suggestion.latlng.lng,
          lat: suggestion.latlng.lat,
          postCode: suggestion.postcode
        }
      )
    }}
  />
)

export default SearchAddress;