const professionals = [
    { name: "Lusaka Power Ltd", service: "Electrician", city: "Lusaka", phone: "260970000000", rating: 5, verified: true },
    { name: "Copper Pipes ZM", service: "Plumber", city: "Kitwe", phone: "260970000000", rating: 5, verified: true },
    { name: "Lazarus Phiri", service: "Plumber", city: "Lusaka", phone: "260970000000", rating: 4, verified: false },
    { name: "Gift Kapiri", service: "Mechanic", city: "Ndola", phone: "260970000000", rating: 5, verified: false }
];

function displayPros(filter = "") {
    const container = document.getElementById('proContainer');
    container.innerHTML = "";
    
    const filtered = professionals.filter(p => 
        p.city.toLowerCase().includes(filter.toLowerCase()) ||
        p.service.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(p => {
        const vBadge = p.verified ? `<span class="badge" style="background:#3498db; color:white;">Verified Business</span> ` : '';
        container.innerHTML += `
            <div class="pro-card">
                ${vBadge} <span class="badge">${p.service}</span>
                <div style="margin: 10px 0;">${"⭐".repeat(p.rating)}</div>
                <h3 style="margin: 5px 0;">${p.name}</h3>
                <p>📍 ${p.city}</p>
                <a href="https://wa.me/${p.phone}" class="whatsapp-btn">Chat on WhatsApp</a>
            </div>
        `;
    });
}

document.getElementById('citySearch').addEventListener('input', (e) => displayPros(e.target.value));
displayPros();
