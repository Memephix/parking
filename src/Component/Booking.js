import React from 'react';

const Booking = ({ selectedPlace, numberOfSpaces, startTime, endTime, onCancel }) => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ color: '#333' }}>Booking </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', textAlign: 'left' }}>
        <tbody>
          <tr>
            <td style={{ width: '30%', fontWeight: 'bold', border: 'none' }}>Selected Place:</td>
            <td style={{ border: 'none' }}>{selectedPlace}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold', border: 'none' }}>Number of Spaces:</td>
            <td style={{ border: 'none' }}>{numberOfSpaces}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold', border: 'none' }}>Start Time:</td>
            <td style={{ border: 'none' }}>{startTime}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold', border: 'none' }}>End Time:</td>
            <td style={{ border: 'none' }}>{endTime}</td>
          </tr>
        </tbody>
      </table>
      <button style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '10px 20px', marginTop: '20px', cursor: 'pointer', borderRadius: '5px' }} onClick={onCancel}>Cancel Booking</button>
    </div>
  );
};

export default Booking;
