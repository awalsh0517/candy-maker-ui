import React from 'react'

export default ({ id, name }) => (
  <div key={id} className="manufacturer">{`${name}`}</div>
)
