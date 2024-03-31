import React, { useState } from 'react';


const App = () => {
  const [selectedMall, setSelectedMall] = useState('');
  const [selectedFloor, setSelectedFloor] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');

  const handleMallChange = (e) => {
    setSelectedMall(e.target.value);
  };

  const handleFloorChange = (e) => {
    setSelectedFloor(e.target.value);
  };

  const handlePlaceChange = (e) => {
    setSelectedPlace(e.target.value);
  };

  const handleConfirmPlace = () => {
    console.log('Place confirmed:', selectedPlace);
  };

  return (
    <div>
      <h1>Find Place Booking History</h1>
      <MallSelector value={selectedMall} onChange={handleMallChange} />
      <FloorSelector value={selectedFloor} onChange={handleFloorChange} />
      <PlaceFinder value={selectedPlace} onChange={handlePlaceChange} />
      <BookingHistory />
      <TotalCounter />
      <button onClick={handleConfirmPlace}>Confirm Place</button>
    </div>
  );
};

const MallSelector = ({ value, onChange }) => (
  <select value={value} onChange={onChange}>
    <option value="">Select a mall</option>
    <option value="1st Exam Mall">1st Exam Mall</option>
    {/* Add more malls here */}
  </select>
);

const FloorSelector = ({ value, onChange }) => (
  <select value={value} onChange={onChange}>
    <option value="">Select a floor</option>
    <option value="1st">1st Floor</option>
    <option value="2nd">2nd Floor</option>
    {/* Add more floors here */}
  </select>
);

const PlaceFinder = ({ value, onChange }) => (
  <select value={value} onChange={onChange}>
    <option value="">Select a place</option>
    <option value="A1">A1</option>
    <option value="A2">A2</option>
    <option value="A3">A3</option>
    <option value="A4">A4</option>
    <option value="A5">A5</option>
    <option value="A6">A6</option>
    <option value="A7">A7</option>
    <option value="B1">B1</option>
    <option value="B2">B2</option>
    <option value="B3">B3</option>
    <option value="B4">B4</option>
    <option value="B5">B5</option>
    <option value="B6">B6</option>
    <option value="B7">B7</option>
  </select>
);

const BookingHistory = () => (
  <div>
    {/* Display booking history here */}
  </div>
);

const TotalCounter = () => (
  <div>
    {/* Display total number of places confirmed here */}
  </div>
);

export default App;
