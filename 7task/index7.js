// 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст
const countrySelect = document.querySelector('#country');
const citySelect = document.querySelector('#cities');
const container = document.querySelector('p');

const someCities = {
    'ger': ['Berlin', 'Hamburg', 'Munich', 'Stuttgart'],
    'usa': ['New-York', 'Washington', 'Boston', 'Chikago'],
    'ukr': ['Kyiv', 'Lviv', 'Kharkiv', 'Odesa']
};

countrySelect.addEventListener('change', function () {
    let selectedCountry = countrySelect.value;
    let cities = someCities[selectedCountry] || [];
    citySelect.innerHTML = '';

    for (let i = 0; i < cities.length; i++) {
        let option = document.createElement('option');
        option.text = cities[i];
        citySelect.add(option);
    }
    updateResultText();
});

citySelect.addEventListener('change', function () {
    updateResultText();
});

countrySelect.dispatchEvent(new Event('change'));
citySelect.dispatchEvent(new Event('change'));

function updateResultText() {
    let selectedCity = citySelect.value;
    container.textContent = countrySelect.options[countrySelect.selectedIndex].text + ", " + selectedCity;
};