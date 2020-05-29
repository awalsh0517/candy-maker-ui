import axios from 'axios'

export const filteredManufacturers = (list, term) => list.filter(manufacturer => (
  manufacturer.name.toLowerCase().includes(term.toLowerCase())
))

export const retrieveManufacturers = async () => {
  const { data } = await axios.get('http://localhost:1337/api/manufacturers')

  return data
}
