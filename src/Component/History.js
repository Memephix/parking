import React, { useState, useEffect } from 'react';


const History = () => {
  const [bookingHistory, setBookingHistory] = useState([]);

  useEffect(() => {

    const mockBookingData = [
      { id: '1', place: 'Place A', numberOfSpaces: 2, startTime: '2024-03-25 10:00', endTime: '2024-03-25 12:00', status: 'Completed' },
      { id: '2', place: 'Place B', numberOfSpaces: 1, startTime: '2024-03-26 14:00', endTime: '2024-03-26 16:00', status: 'Pending' },
      { id: '3', place: 'Place C', numberOfSpaces: 3, startTime: '2024-03-27 09:00', endTime: '2024-03-27 11:00', status: 'Cancelled' },
    ];
    setBookingHistory(mockBookingData);
  }, []);

  return (
    <div className="history-container">
      <h2>Booking History</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Place</th>
            <th>Number of Spaces</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookingHistory.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.place}</td>
              <td>{booking.numberOfSpaces}</td>
              <td>{booking.startTime}</td>
              <td>{booking.endTime}</td>
              <td className={`status-${booking.status.toLowerCase()}`}>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
