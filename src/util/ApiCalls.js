
export const pullAreas = () => {
  return fetch('http://localhost:3001/api/v1/areas')
    .then(response => response.json())
    .then(data => data.areas)
    .catch(err => console.log(err))
}

export const aPullAreas = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/areas')
    const data = await response.json()
    let combinedData = await data.areas.map(async area  => {
      return {
      name: area.area,
      ...await pullDetails(area.details)
      }
    })
            return combinedData;
  } catch(err) {
    throw new Error(err.message)
  }
}

export const pullDetails = (details) => {
  return fetch(`http://localhost:3001${details}`)
    .then(response => response.json())
    .then(data => {
      return {
        location: data.location,
        about: data.about
      }
    })
    .catch(err => console.log(err))
}
