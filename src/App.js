import React, { useState, useEffect } from "react";
import "./App.css";

import { MenuItem, FormControl, Select } from "@material-ui/core";
import InfoBox from "./InfoBox";

// https://disease.sh/v3/covid-19/all
// https://disease.sh/v3/covid-19/states/
// https://disease.sh/v3/covid-19/jhucsse/counties/countyName

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className='app'>
      <div className='app__header'>
        <h1>COVID-19 Watcher</h1>
        <FormControl className='app__dropdown'>
          <Select variant='outlined' onChange={onCountryChange} value={country}>
            <MenuItem value='worldwide'>Worldwide</MenuItem>

            {countries.map((country) => (
              <MenuItem key={country.name} value={country.value}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className='app__stats'>
        <InfoBox title='Coronavirus Cases' cases={121} total='599' />
        <InfoBox title='Recovered' cases={123} total='599' />
        <InfoBox title='Deaths' cases={123} total='59' />
      </div>
    </div>
  );
}

export default App;
