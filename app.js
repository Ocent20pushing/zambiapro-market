const professionals = [
    { 
        name: "Emmanuel Mukuma", 
        category: "Electrician", 
        city: "Lusaka", 
        phone: "260977800272", 
        rating: 5, 
        verified: true,
        desc: "Professional domestic and industrial electrical installations."
    },
    { 
        name: "Lazarus Phiri", 
        category: "Plumber", 
        city: "Lusaka", 
        phone: "260970000000", 
        rating: 4, 
        verified: false,
        desc: "Expert in pipe fixing and borehole pump repairs."
    },
    { 
        name: "Copperbelt Plumbing", 
        category: "Plumber", 
        city: "Kitwe", 
        phone: "260970000000", 
        rating: 5, 
        verified: true,
        desc: "Certified plumbing services for residential homes."
    }
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
        const vBadge = p.verified ? `<span class="verified-badge"><i class="fas fa-check-circle"></i> Verified</span>` : '';
        
        container.innerHTML += `
            <div class="pro-card">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="category-tag">${p.category}</span>
                    ${vBadge}
                </div>
                <h3>${p.name}</h3>
                <div class="stars">${"⭐".repeat(p.rating)}</div>
                <p class="description">${p.desc}</p>
                <p>📍 <strong>${p.city}</strong></p>
                
                <div class="contact-actions">
                    <a href="https://wa.me/${p.phone}?text=Hello%20${p.name},%20I%20found%20you%20on%20ZambiaPro" class="whatsapp-btn">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                    <a href="tel:+${p.phone}" class="call-btn">
                        <i class="fas fa-phone-alt"></i> Call Now
                    </a>
                </div>
            </div>
        `;
    });
}

document.getElementById('citySearch').addEventListener('input', displayPros);
document.getElementById('categoryFilter').addEventListener('change', displayPros);

// Form submission logic
document.getElementById('listingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('bizName').value;
    const location = document.getElementById('bizLocation').value;
    const category = document.getElementById('bizCategory').value;
    const msg = `New Business Registration:%0A- Name: ${name}%0A- Location: ${location}%0A- Category: ${category}`;
    window.open(`https://wa.me/260762702665?text=${msg}`);
});

displayPros();
