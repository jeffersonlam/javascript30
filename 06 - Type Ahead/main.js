const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
  .then(res => res.json())
  .then(res => cities.push(...res))
  .catch(err => console.error(err));


function findMatch(match, array) {
  const regex = new RegExp(match, 'gi');
  return array.filter(el => el.city.match(regex) || el.state.match(regex));
}

function displayMatch() {
  const filtered = findMatch(this.value, cities);

  const html = filtered.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    return `<li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${place.population}</span>
    </li>`;
  }).join('');

  suggestions.innerHTML = html;
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
search.addEventListener('change', displayMatch);
search.addEventListener('keyup', displayMatch);

