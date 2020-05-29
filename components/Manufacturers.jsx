import React, { useEffect, useState } from 'react'
import Search from './Search'
import Manufacturer from './Manufacturer'
import { filteredManufacturers, retrieveManufacturers } from '../utils/manufacturers'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [manufacturersList, setManufacturersList] = useState([])
  const [filteredManufacturersList, setFilteredManufacturerList] = useState([])

  useEffect(() => {
    async function pullData() {
      const manufacturers = await retrieveManufacturers()

      setManufacturersList(manufacturers)
      setFilteredManufacturerList(manufacturers)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filteredManufacturers(manufacturersList, searchTerm)

    setFilteredManufacturerList(filtered)
  }, [searchTerm])

  return (
    <div className="page">
      <div className="title">Candy Makers</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredManufacturersList.map(manufacturer => (
          <Manufacturer key={manufacturer.id} id={manufacturer.id} name={manufacturer.name} />))
      }
      <div className="output">{searchTerm}</div>
    </div>
  )
}
