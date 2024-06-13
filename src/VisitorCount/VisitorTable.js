import React, { useState } from 'react'
import data from './data';
import './visitor.css'

const VisitorTable = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = [...data]

    const handleCountCellClick = (country) => {
        setSelectedCountry(country);
      };
    
      const closeModal = () => {
        setSelectedCountry(null);
      };

    return (
    <div>
      <table className="country-table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Flag</th>
            <th>Total Count</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <td>{country.countryName}</td>
              <td>{country.flagIcon}</td>
              <td
                onClick={() => handleCountCellClick(country)}
                className="count-cell"
              >
                {country.totalCount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedCountry && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedCountry.countryName} Details</h2>
            <p>Total Count: {selectedCountry.totalCount}</p>
            <ul>
              {selectedCountry.details.map((detail, index) => (
                <li key={index}>
                  IP: {detail.ipNumber}, Timestamp: {detail.timestamp}
                </li>
              ))}
            </ul>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitorTable