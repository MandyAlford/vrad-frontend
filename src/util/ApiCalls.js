
export const fetchListing = (item) => {
  return fetch(`http://localhost:3001/api/v1/listings/${item}`)
        .then(res => res.json())
        .then(favoritesDetails => {
          let hostStatus = favoritesDetails.details.superhost ? 'Yes' : 'No'
          return {
            name: favoritesDetails.name,
            address: `${favoritesDetails.address.street}, Denver, CO ${favoritesDetails.address.zip}`,
            superhost: hostStatus,
            beds: favoritesDetails.details.beds,
            baths: favoritesDetails.details.baths,
            costPerNight: favoritesDetails.details.cost_per_night,
            features: favoritesDetails.details.features,
            area: favoritesDetails.area,
            id: item
            }
          })
}
