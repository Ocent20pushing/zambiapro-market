const professionals = [
    { name: "Lazarus Phiri", service: "Master Plumber", city: "Lusaka", phone: "260970000000" },
    { name: "Mervis Banda", service: "Electrician", city: "Ndola", phone: "260970000000" },
    { name: "Gift Kapiri", service: "Auto Mechanic", city: "Kitwe", phone: "260970000000" },
    { name: "John Zimba", service: "Carpenter", city: "Lusaka", phone: "260970000000" }
];

const container = document.getElementById('proContainer');
const searchBar = document.getElementById('citySearch');
const resultsHeading = document.getElementById('resultsHeading');

function displayPros(filter = "") {
    container.innerHTML = "";
    const filtered = professionals.filter(p => 
        p.city.toLowerCase().includes(filter.toLowerCase()) ||
        p.service.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        container.innerHTML = "<p>No professionals found in that city. Try searching 'Lusaka' or 'Ndola'.</p>";
        return;
    }

    filtered.forEach(p => {
        container.innerHTML += `
            <div class="pro-card">
                <span class="badge">${p.service}</span>
                <h3>${p.name}</h3>
                <p>📍 Location: ${p.city}</p>
                <a href="https://wa.me/${p.phone}?text=Hello%20${p.name},%20I%20found%20you%20on%20ZambiaPro.%20Can%20you%20help%20me%20with%20a%20job?" class="whatsapp-btn">
                    Chat on WhatsApp
                </a>
            </div>
        `;
    });
}

searchBar.addEventListener('input', (e) => displayPros(e.target.value));

// Show all on start
displayPros();
