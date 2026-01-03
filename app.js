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
        const check = p.verified ? `<i class="fas fa-check-circle" style="color:var(--ai-green)"></i>` : '';
        container.innerHTML += `
            <div class="pro-card">
                <div style="font-size:11px; opacity:0.6; margin-bottom:10px;">${p.category.toUpperCase()}</div>
                <h3>${p.name} ${check}</h3>
                <p>📍 ${p.city}</p>
                <a href="https://wa.me/${p.phone}" class="whatsapp-btn">Contact via WhatsApp</a>
            </div>
        `;
    });
}

document.getElementById('citySearch').addEventListener('input', displayPros);
document.getElementById('categoryFilter').addEventListener('change', displayPros);

document.getElementById('listingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('bizName').value;
    window.open(`https://wa.me/260762702665?text=AI-Submission:%20${name}`);
});

displayPros();
