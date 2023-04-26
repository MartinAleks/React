import React, { useState } from 'react';
import drivers from '../../data/drivers.json';
import "../../index.css";

const Drivers = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    if (clickedIndex === index) {
      setClickedIndex(null);
    } else {
      setClickedIndex(index);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Click on a driver's name to reveal end of contract</h2>
      <div className="driver-table-container">
        
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Team</th>
              <th>End of contract</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver, index) => (
              <tr key={index} onClick={() => handleClick(index)}>
                <td>{driver.number}</td>
                <td>{driver.name}</td>
                <td>{driver.team}</td>
                <td>{clickedIndex === index && driver.contractEnd ? driver.contractEnd : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Drivers;
