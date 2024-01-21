function fetchExchangeRates() {
    fetch('https://v6.exchangerate-api.com/v6/4a0fb829a307a2ab736e0104/latest/TRY')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        if (data && data.conversion_rates) {
          const conversionRates = data.conversion_rates;
          console.log('Conversion Rates:', conversionRates);
          // Burada başka işlemler yapabilirsiniz, örneğin HTML içine sonuçları ekleyebilirsiniz.
        } else {
          console.log('Conversion rates not found in the data.');
        }
      })
      .catch((err) => {
        console.log('Request failed', err);
      });
  }
  
module.exports = fetchExchangeRates;