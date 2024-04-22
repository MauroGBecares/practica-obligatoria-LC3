import React from 'react'

const Table = ({ brand, income }) => {
  return (
    <>
      <tr>
        <td>{brand}</td>
        <td>{income}</td>
      </tr>
    </>
  )
}

export default Table