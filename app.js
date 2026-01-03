const professionals = [
    { name: "Emmanuel Mukuma", category: "Electrician", city: "Lusaka", phone: "260977800272", verified: true },
    { name: "Lazarus Phiri", category: "Plumber", city: "Lusaka", phone: "260970000000", verified: false }
];

function displayPros() {
    const container = document.getElementById('proContainer');
    const city = document.getElementById('citySearch').value.toLowerCase();
    const cat = document.getElementById('categoryFilter').value.toLowerCase();
    container.innerHTML = "";
    
    professionals.filter(p => p.city.toLowerCase().includes(city) && (cat === "" || p.category.toLowerCase() === cat))
    .forEach(p => {
        const check = p.verified ? `<i class="fas fa-check-circle" style="color:#00ff88;"></i>` : '';
        container.innerHTML += `
            <div class="pro-card">
                <small style="color:#888;">${p.category.toUpperCase()}</small>
                <h3>${p.name} ${check}</h3>
                <p>📍 ${p.city}</p>
                <a href="https://wa.me/${p.phone}" class="whatsapp-btn">Chat on WhatsApp</a>
            </div>
        `;
    });
}

document.getElementById('citySearch').addEventListener('input', displayPros);
document.getElementById('categoryFilter').addEventListener('change', displayPros);
displayPros();
