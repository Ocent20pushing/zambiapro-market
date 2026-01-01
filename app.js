const professionals = [
    { name: "Lusaka Power Ltd", service: "Electrical Contractor", city: "Lusaka", phone: "260970000000", rating: 5, verified: true },
    { name: "Copperbelt Pipes", service: "Plumbing Agency", city: "Kitwe", phone: "260970000000", rating: 5, verified: true },
    { name: "Lazarus Phiri", service: "Plumber", city: "Lusaka", phone: "260970000000", rating: 4, verified: false }
];

function displayPros(filter = "") {
    const container = document.getElementById('proContainer');
    container.innerHTML = "";
    
    const filtered = professionals.filter(p => 
        p.city.toLowerCase().includes(filter.toLowerCase()) ||
        p.service.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(p => {
        const verifiedBadge = p.verified ? `<span class="badge" style="background:#3498db;">Verified Business</span>` : '';
        container.innerHTML += `
            <div class="pro-card" style="background:white; padding:20px; border-radius:15px; position:relative;">
                ${verifiedBadge}
                <span class="badge">${p.service}</span>
                <div style="margin-top:10px;">${"⭐".repeat(p.rating)}</div>
                <h3>${p.name}</h3>
                <p>📍 ${p.city}</p>
                <a href="https://wa.me/${p.phone}" class="whatsapp-btn">Contact via WhatsApp</a>
            </div>
        `;
    });
}

document.getElementById('citySearch').addEventListener('input', (e) => displayPros(e.target.value));
displayPros();
