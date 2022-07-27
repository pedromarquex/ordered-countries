const countries = require('./countries.json');

const orerderedCountries = countries.sort((a, b) => {
  if (a.fronteiras.length < b.fronteiras.length) {
    return 1;
  }
  if (a.fronteiras.length > b.fronteiras.length) {
    return -1;
  }
  return 0;
});

orerderedCountries.forEach(country => {
  console.log(`${country.name} tem ${country.fronteiras.length} fronteiras`);
});
