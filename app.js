const professionals = [
    { name: "Lazarus Phiri", category: "Plumber", city: "Lusaka", phone: "260970000000", rating: 5 },
    { name: "Mervis Banda", category: "Electrician", city: "Ndola", phone: "260970000000", rating: 4 },
    { name: "Copper Pipes ZM", category: "Plumber", city: "Kitwe", phone: "260970000000", rating: 5 }
];

function displayPros() {
    const container = document.getElementById('proContainer');
    const city = document.getElementById('citySearch').value.toLowerCase();
    const cat = document.getElementById('categoryFilter').value.toLowerCase();
    container.innerHTML = "";
    
    professionals.filter(p => 
        p.city.toLowerCase().includes(city) && 
        (cat === "" || p.category.toLowerCase() === cat)
    ).forEach(p => {
        container.innerHTML += `
            <div class="pro-card">
                <span style="font-size:12px; font-weight:bold; color:green;">${p.category}</span>
                <h3>${p.name}</h3>
                <p>📍 ${p.city}</p>
                <a href="https://wa.me/${p.phone}" class="whatsapp-btn">Chat via WhatsApp</a>
            </div>
        `;
    });
}

document.getElementById('citySearch').addEventListener('input', displayPros);
document.getElementById('categoryFilter').addEventListener('change', displayPros);

document.getElementById('listingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('bizName').value;
    const msg = `New Business Registration: ${name}`;
    window.open(`https://wa.me/260762702665?text=${encodeURIComponent(msg)}`);
});

displayPros();
