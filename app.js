const professionals = [
    { name: "Emmanuel Mukuma", category: "Electrician", city: "Lusaka", phone: "260977800272", rating: 5, verified: true },
    { name: "Lazarus Phiri", category: "Plumber", city: "Lusaka", phone: "260970000000", rating: 4, verified: false }
];

function displayPros() {
    const container = document.getElementById('proContainer');
    const city = document.getElementById('citySearch').value.toLowerCase();
    const cat = document.getElementById('categoryFilter').value.toLowerCase();
    container.innerHTML = "";
    
    professionals.filter(p => p.city.toLowerCase().includes(city) && (cat === "" || p.category.toLowerCase() === cat))
    .forEach(p => {
        const badge = p.verified ? `<span style="color:var(--ai-green); font-size:10px;">✔ VERIFIED</span>` : '';
        container.innerHTML += `
            <div class="pro-card">
                <div style="display:flex; justify-content:space-between;">${badge} <span style="opacity:0.6; font-size:11px;">${p.category}</span></div>
                <h3>${p.name}</h3>
                <p>📍 ${p.city}</p>
                <a href="https://wa.me/${p.phone}" class="whatsapp-btn">Open WhatsApp</a>
            </div>
        `;
    });
}

document.getElementById('citySearch').addEventListener('input', displayPros);
document.getElementById('categoryFilter').addEventListener('change', displayPros);

document.getElementById('listingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('bizName').value;
    window.open(`https://wa.me/260762702665?text=AI-Launch:%20${name}`);
});

displayPros();
