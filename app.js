// 1. DATA: Added new categories to show variety
const professionals = [
    { name: "Lusaka Power Ltd", category: "Electrician", city: "Lusaka", phone: "260970000000", desc: "Expert wiring and installation.", rating: 5, verified: true },
    { name: "Copperbelt Plumbing", category: "Plumber", city: "Kitwe", phone: "260970000000", desc: "Pipe fixing and borehole pumps.", rating: 5, verified: true },
    { name: "Glamour Beauty Spa", category: "Cosmetics", city: "Lusaka", phone: "260970000000", desc: "Makeup, nails, and skin care.", rating: 4, verified: false },
    { name: "Ndola Tech Fix", category: "IT", city: "Ndola", phone: "260970000000", desc: "Computer repair and networking.", rating: 5, verified: false },
    { name: "Zambia Events Co", category: "Events", city: "Lusaka", phone: "260970000000", desc: "Weddings and corporate events.", rating: 4, verified: true },
    { name: "City Movers", category: "Transport", city: "Livingstone", phone: "260970000000", desc: "Truck hire and logistics.", rating: 3, verified: false }
];

const container = document.getElementById('proContainer');
const cityInput = document.getElementById('citySearch');
const catSelect = document.getElementById('categoryFilter');

// 2. DISPLAY FUNCTION (Filters by City AND Category)
function displayPros() {
    container.innerHTML = "";
    const cityValue = cityInput.value.toLowerCase();
    const catValue = catSelect.value.toLowerCase();

    const filtered = professionals.filter(p => {
        const matchesCity = p.city.toLowerCase().includes(cityValue);
        // If category is "all" (empty), return true, otherwise match category
        const matchesCat = catValue === "" || p.category.toLowerCase().includes(catValue);
        return matchesCity && matchesCat;
    });

    if(filtered.length === 0) {
        container.innerHTML = "<p style='text-align:center; width:100%;'>No professionals found with those filters. Try 'Lusaka' or select 'All Categories'.</p>";
        return;
    }

    filtered.forEach(p => {
        const vBadge = p.verified ? `<span style="background:#3498db; color:white; padding:2px 6px; border-radius:4px; font-size:10px;">VERIFIED</span>` : '';
        const stars = "⭐".repeat(p.rating);
        
        container.innerHTML += `
            <div class="pro-card">
                <div style="display:flex; justify-content:space-between;">
                    <span style="color:#777; font-size:12px; font-weight:bold;">${p.category.toUpperCase()}</span>
                    ${vBadge}
                </div>
                <h3>${p.name}</h3>
                <div style="margin:5px 0;">${stars}</div>
                <p style="font-size:14px; color:#555;">${p.desc}</p>
                <p>📍 <strong>${p.city}</strong></p>
                <a href="https://wa.me/${p.phone}" class="whatsapp-btn">Contact</a>
            </div>
        `;
    });
}

// 3. EVENT LISTENERS FOR SEARCH
cityInput.addEventListener('input', displayPros);
catSelect.addEventListener('change', displayPros);

// 4. HANDLE BUSINESS REGISTRATION (Sends to your WhatsApp)
document.getElementById('listingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById('bizName').value;
    const location = document.getElementById('bizLocation').value;
    const category = document.getElementById('bizCategory').value;
    const phone = document.getElementById('bizPhone').value;
    const desc = document.getElementById('bizDesc').value;

    // Your WhatsApp Number
    const myNumber = "260762702665"; 

    // Create the message
    const message = `*New Business Registration Request*%0A` +
                    `---------------------------%0A` +
                    `*Name:* ${name}%0A` +
                    `*Location:* ${location}%0A` +
                    `*Category:* ${category}%0A` +
                    `*Phone:* ${phone}%0A` +
                    `*About:* ${desc}%0A` +
                    `---------------------------%0A` +
                    `I will send photos shortly.`;

    // Open WhatsApp
    window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
});

// Initial Load
displayPros();
