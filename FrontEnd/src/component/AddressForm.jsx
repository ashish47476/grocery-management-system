import React, { useState } from 'react';
import { statesAndCities } from './citydata'; // Import the state and city data

const AddressForm = () => {
  const [streetNo, setStreetNo] = useState('');
  const [buildingName, setBuildingName] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [errors, setErrors] = useState({}); // For error handling

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setState(selectedState);
    setCity(''); // Reset city when state changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validation checks
    if (!streetNo) newErrors.streetNo = 'Street No is required';
    if (!buildingName) newErrors.buildingName = 'Building Name is required';
    if (!locality) newErrors.locality = 'Locality is required';
    if (!state) newErrors.state = 'State is required';
    if (!city) newErrors.city = 'City is required';
    if (!pincode) newErrors.pincode = 'Pincode is required';

    // Set errors and return if any field is invalid
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and handle form submission logic here
    setErrors({});
    console.log('Form submitted with data:', { streetNo, buildingName, locality, city, state, pincode });
  };

  return (
    <div style={styles.container}>
      <h2>Address Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="streetNo">Street No:</label>
          <input
            type="text"
            id="streetNo"
            value={streetNo}
            onChange={(e) => setStreetNo(e.target.value)}
            style={styles.input}
          />
          {errors.streetNo && <p style={styles.error}>{errors.streetNo}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="buildingName">Building Name:</label>
          <input
            type="text"
            id="buildingName"
            value={buildingName}
            onChange={(e) => setBuildingName(e.target.value)}
            style={styles.input}
          />
          {errors.buildingName && <p style={styles.error}>{errors.buildingName}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="locality">Locality:</label>
          <input
            type="text"
            id="locality"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            style={styles.input}
          />
          {errors.locality && <p style={styles.error}>{errors.locality}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="state">State:</label>
          <select
            id="state"
            value={state}
            onChange={handleStateChange}
            style={styles.select}
          >
            <option value="">Select State</option>
            {Object.keys(statesAndCities).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.state && <p style={styles.error}>{errors.state}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="city">City:</label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={styles.select}
            disabled={!state} // Disable if no state is selected
          >
            <option value="">Select City</option>
            {state &&
              statesAndCities[state].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
          {errors.city && <p style={styles.error}>{errors.city}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            style={styles.input}
          />
          {errors.pincode && <p style={styles.error}>{errors.pincode}</p>}
        </div>
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#F4C9C1', // Faint strawberry color
    borderRadius: '8px',
    maxWidth: '600px',
    margin: 'auto',
    minHeight: '100vh', // To ensure full page height
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  select: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonContainer: {
    textAlign: 'center', // Center the button
    marginTop: '20px',
  },
  error: {
    color: 'red',
    fontSize: '0.875rem',
    marginTop: '5px',
  },
};

export default AddressForm;
