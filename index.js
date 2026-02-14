// Country data: name and ISO 3166-1 alpha-2 code
const countries = [
	{ name: "Afghanistan", code: "AF" },
	{ name: "Albania", code: "AL" },
	{ name: "Algeria", code: "DZ" },
	{ name: "Andorra", code: "AD" },
	{ name: "Angola", code: "AO" },
	{ name: "Argentina", code: "AR" },
	{ name: "Armenia", code: "AM" },
	{ name: "Australia", code: "AU" },
	{ name: "Austria", code: "AT" },
	{ name: "Azerbaijan", code: "AZ" },
	{ name: "Bahamas", code: "BS" },
	{ name: "Bahrain", code: "BH" },
	{ name: "Bangladesh", code: "BD" },
	{ name: "Barbados", code: "BB" },
	{ name: "Belarus", code: "BY" },
	{ name: "Belgium", code: "BE" },
	{ name: "Belize", code: "BZ" },
	{ name: "Benin", code: "BJ" },
	{ name: "Bhutan", code: "BT" },
	{ name: "Bolivia", code: "BO" },
	{ name: "Bosnia and Herzegovina", code: "BA" },
	{ name: "Botswana", code: "BW" },
	{ name: "Brazil", code: "BR" },
	{ name: "Brunei", code: "BN" },
	{ name: "Bulgaria", code: "BG" },
	{ name: "Burkina Faso", code: "BF" },
	{ name: "Burundi", code: "BI" },
	{ name: "Cabo Verde", code: "CV" },
	{ name: "Cambodia", code: "KH" },
	{ name: "Cameroon", code: "CM" },
	{ name: "Canada", code: "CA" },
	{ name: "Central African Republic", code: "CF" },
	{ name: "Chad", code: "TD" },
	{ name: "Chile", code: "CL" },
	{ name: "China", code: "CN" },
	{ name: "Colombia", code: "CO" },
	{ name: "Comoros", code: "KM" },
	{ name: "Congo (Congo-Brazzaville)", code: "CG" },
	{ name: "Costa Rica", code: "CR" },
	{ name: "Croatia", code: "HR" },
	{ name: "Cuba", code: "CU" },
	{ name: "Cyprus", code: "CY" },
	{ name: "Czechia", code: "CZ" },
	{ name: "Democratic Republic of the Congo", code: "CD" },
	{ name: "Denmark", code: "DK" },
	{ name: "Djibouti", code: "DJ" },
	{ name: "Dominica", code: "DM" },
	{ name: "Dominican Republic", code: "DO" },
	{ name: "Ecuador", code: "EC" },
	{ name: "Egypt", code: "EG" },
	{ name: "El Salvador", code: "SV" },
	{ name: "Equatorial Guinea", code: "GQ" },
	{ name: "Eritrea", code: "ER" },
	{ name: "Estonia", code: "EE" },
	{ name: "Eswatini", code: "SZ" },
	{ name: "Ethiopia", code: "ET" },
	{ name: "Fiji", code: "FJ" },
	{ name: "Finland", code: "FI" },
	{ name: "France", code: "FR" },
	{ name: "Gabon", code: "GA" },
	{ name: "Gambia", code: "GM" },
	{ name: "Georgia", code: "GE" },
	{ name: "Germany", code: "DE" },
	{ name: "Ghana", code: "GH" },
	{ name: "Greece", code: "GR" },
	{ name: "Grenada", code: "GD" },
	{ name: "Guatemala", code: "GT" },
	{ name: "Guinea", code: "GN" },
	{ name: "Guinea-Bissau", code: "GW" },
	{ name: "Guyana", code: "GY" },
	{ name: "Haiti", code: "HT" },
	{ name: "Honduras", code: "HN" },
	{ name: "Hungary", code: "HU" },
	{ name: "Iceland", code: "IS" },
	{ name: "India", code: "IN" },
	{ name: "Indonesia", code: "ID" },
	{ name: "Iran", code: "IR" },
	{ name: "Iraq", code: "IQ" },
	{ name: "Ireland", code: "IE" },
	{ name: "Israel", code: "IL" },
	{ name: "Italy", code: "IT" },
	{ name: "Jamaica", code: "JM" },
	{ name: "Japan", code: "JP" },
	{ name: "Jordan", code: "JO" },
	{ name: "Kazakhstan", code: "KZ" },
	{ name: "Kenya", code: "KE" },
	{ name: "Kiribati", code: "KI" },
	{ name: "Kuwait", code: "KW" },
	{ name: "Kyrgyzstan", code: "KG" },
	{ name: "Laos", code: "LA" },
	{ name: "Latvia", code: "LV" },
	{ name: "Lebanon", code: "LB" },
	{ name: "Lesotho", code: "LS" },
	{ name: "Liberia", code: "LR" },
	{ name: "Libya", code: "LY" },
	{ name: "Liechtenstein", code: "LI" },
	{ name: "Lithuania", code: "LT" },
	{ name: "Luxembourg", code: "LU" },
	{ name: "Madagascar", code: "MG" },
	{ name: "Malawi", code: "MW" },
	{ name: "Malaysia", code: "MY" },
	{ name: "Maldives", code: "MV" },
	{ name: "Mali", code: "ML" },
	{ name: "Malta", code: "MT" },
	{ name: "Marshall Islands", code: "MH" },
	{ name: "Mauritania", code: "MR" },
	{ name: "Mauritius", code: "MU" },
	{ name: "Mexico", code: "MX" },
	{ name: "Micronesia", code: "FM" },
	{ name: "Moldova", code: "MD" },
	{ name: "Monaco", code: "MC" },
	{ name: "Mongolia", code: "MN" },
	{ name: "Montenegro", code: "ME" },
	{ name: "Morocco", code: "MA" },
	{ name: "Mozambique", code: "MZ" },
	{ name: "Myanmar (Burma)", code: "MM" },
	{ name: "Namibia", code: "NA" },
	{ name: "Nauru", code: "NR" },
	{ name: "Nepal", code: "NP" },
	{ name: "Netherlands", code: "NL" },
	{ name: "New Zealand", code: "NZ" },
	{ name: "Nicaragua", code: "NI" },
	{ name: "Niger", code: "NE" },
	{ name: "Nigeria", code: "NG" },
	{ name: "North Korea", code: "KP" },
	{ name: "North Macedonia", code: "MK" },
	{ name: "Norway", code: "NO" },
	{ name: "Oman", code: "OM" },
	{ name: "Pakistan", code: "PK" },
	{ name: "Palau", code: "PW" },
	{ name: "Palestine State", code: "PS" },
	{ name: "Panama", code: "PA" },
	{ name: "Papua New Guinea", code: "PG" },
	{ name: "Paraguay", code: "PY" },
	{ name: "Peru", code: "PE" },
	{ name: "Philippines", code: "PH" },
	{ name: "Poland", code: "PL" },
	{ name: "Portugal", code: "PT" },
	{ name: "Qatar", code: "QA" },
	{ name: "Romania", code: "RO" },
	{ name: "Russia", code: "RU" },
	{ name: "Rwanda", code: "RW" },
	{ name: "Saint Kitts and Nevis", code: "KN" },
	{ name: "Saint Lucia", code: "LC" },
	{ name: "Saint Vincent and the Grenadines", code: "VC" },
	{ name: "Samoa", code: "WS" },
	{ name: "San Marino", code: "SM" },
	{ name: "Sao Tome and Principe", code: "ST" },
	{ name: "Saudi Arabia", code: "SA" },
	{ name: "Senegal", code: "SN" },
	{ name: "Serbia", code: "RS" },
	{ name: "Seychelles", code: "SC" },
	{ name: "Sierra Leone", code: "SL" },
	{ name: "Singapore", code: "SG" },
	{ name: "Slovakia", code: "SK" },
	{ name: "Slovenia", code: "SI" },
	{ name: "Solomon Islands", code: "SB" },
	{ name: "Somalia", code: "SO" },
	{ name: "South Africa", code: "ZA" },
	{ name: "South Korea", code: "KR" },
	{ name: "South Sudan", code: "SS" },
	{ name: "Spain", code: "ES" },
	{ name: "Sri Lanka", code: "LK" },
	{ name: "Sudan", code: "SD" },
	{ name: "Suriname", code: "SR" },
	{ name: "Sweden", code: "SE" },
	{ name: "Switzerland", code: "CH" },
	{ name: "Syria", code: "SY" },
	{ name: "Tajikistan", code: "TJ" },
	{ name: "Tanzania", code: "TZ" },
	{ name: "Thailand", code: "TH" },
	{ name: "Timor-Leste", code: "TL" },
	{ name: "Togo", code: "TG" },
	{ name: "Tonga", code: "TO" },
	{ name: "Trinidad and Tobago", code: "TT" },
	{ name: "Tunisia", code: "TN" },
	{ name: "Turkey", code: "TR" },
	{ name: "Turkmenistan", code: "TM" },
	{ name: "Tuvalu", code: "TV" },
	{ name: "Uganda", code: "UG" },
	{ name: "Ukraine", code: "UA" },
	{ name: "United Arab Emirates", code: "AE" },
	{ name: "United Kingdom", code: "GB" },
	{ name: "United States", code: "US" },
	{ name: "Uruguay", code: "UY" },
	{ name: "Uzbekistan", code: "UZ" },
	{ name: "Vanuatu", code: "VU" },
	{ name: "Vatican City", code: "VA" },
	{ name: "Venezuela", code: "VE" },
	{ name: "Vietnam", code: "VN" },
	{ name: "Yemen", code: "YE" },
	{ name: "Zambia", code: "ZM" },
	{ name: "Zimbabwe", code: "ZW" }
];

const searchInput = document.getElementById('country-search');
const countryList = document.getElementById('country-list');
let filteredCountries = countries;
let activeIndex = -1;

function renderCountryList(list) {
	countryList.innerHTML = '';
	if (list.length === 0) {
		countryList.innerHTML = '<li class="no-result">No countries found</li>';
		return;
	}
	list.forEach((country, idx) => {
		const li = document.createElement('li');
		li.textContent = country.name;
		li.setAttribute('data-code', country.code);
		li.tabIndex = 0;
		li.addEventListener('click', () => selectCountry(country));
		li.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') selectCountry(country);
		});
		countryList.appendChild(li);
	});
}

function filterCountries(query) {
	return countries.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
}

function showDropdown() {
	countryList.classList.add('show');
}
function hideDropdown() {
	countryList.classList.remove('show');
	activeIndex = -1;
}

searchInput.addEventListener('input', (e) => {
	const val = e.target.value;
	filteredCountries = filterCountries(val);
	renderCountryList(filteredCountries);
	showDropdown();
});

searchInput.addEventListener('focus', () => {
	renderCountryList(filteredCountries);
	showDropdown();
});

searchInput.addEventListener('keydown', (e) => {
	const items = countryList.querySelectorAll('li');
	if (!countryList.classList.contains('show')) showDropdown();
	if (e.key === 'ArrowDown') {
		e.preventDefault();
		if (activeIndex < filteredCountries.length - 1) activeIndex++;
		updateActiveItem(items);
	} else if (e.key === 'ArrowUp') {
		e.preventDefault();
		if (activeIndex > 0) activeIndex--;
		updateActiveItem(items);
	} else if (e.key === 'Enter') {
		if (activeIndex >= 0 && filteredCountries[activeIndex]) {
			selectCountry(filteredCountries[activeIndex]);
		}
	} else if (e.key === 'Escape') {
		hideDropdown();
	}
});

function updateActiveItem(items) {
	items.forEach((item, idx) => {
		if (idx === activeIndex) {
			item.classList.add('active');
			item.scrollIntoView({ block: 'nearest' });
		} else {
			item.classList.remove('active');
		}
	});
}

document.addEventListener('click', (e) => {
	if (!e.target.closest('.dropdown-wrapper')) hideDropdown();
});

function selectCountry(country) {
	searchInput.value = country.name;
	hideDropdown();
	showFlag(country);
}


function showFlag(country) {
	const flagDisplay = document.getElementById('flag-display');
	const code = country.code.toLowerCase();
	// Use flagcdn for high-res SVG
	const svgUrl = `https://flagcdn.com/${code}.svg`;
	const pngUrl = `https://flagcdn.com/w640/${code}.png`;
	flagDisplay.innerHTML = `
		<div>
			<img src="${svgUrl}" alt="${country.name} flag" id="flag-img" style="max-width:320px; width:100%; height:auto; background:#eee;" loading="lazy">
			<p style="margin-top:0.7rem; font-size:1.1rem;"><b>${country.name}</b></p>
		</div>
	`;
	// Store URLs for download
	flagDisplay.dataset.pngUrl = pngUrl;
	flagDisplay.dataset.svgUrl = svgUrl;
	document.getElementById('download-buttons').style.display = 'flex';
}


// Download logic
function downloadFile(url, filename) {
	fetch(url)
		.then(resp => resp.blob())
		.then(blob => {
			const link = document.createElement('a');
			link.href = URL.createObjectURL(blob);
			link.download = filename;
			document.body.appendChild(link);
			link.click();
			setTimeout(() => {
				URL.revokeObjectURL(link.href);
				link.remove();
			}, 100);
		});
}

document.getElementById('download-png').addEventListener('click', () => {
	const flagDisplay = document.getElementById('flag-display');
	const url = flagDisplay.dataset.pngUrl;
	const country = document.getElementById('country-search').value;
	if (url) downloadFile(url, `${country.replace(/\s+/g, '_').toLowerCase()}_flag.png`);
});

document.getElementById('download-svg').addEventListener('click', () => {
	const flagDisplay = document.getElementById('flag-display');
	const url = flagDisplay.dataset.svgUrl;
	const country = document.getElementById('country-search').value;
	if (url) downloadFile(url, `${country.replace(/\s+/g, '_').toLowerCase()}_flag.svg`);
});

// Initial render
renderCountryList(countries);
