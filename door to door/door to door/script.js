/* --- Typing Effect for Hero Section --- */
const h2Text = "Door To Door Taekwondo Class";
const pText = "Expert martial arts training delivered directly to your doorstep.";

let h2Index = 0;
let pIndex = 0;

function typeEffect() {
    const h2Element = document.getElementById("typing-h2");
    const pElement = document.getElementById("typing-p");

    // አርዕስቱን መጻፍ
    if (h2Index < h2Text.length) {
        h2Element.innerHTML += h2Text.charAt(h2Index);
        h2Index++;
        setTimeout(typeEffect, 100);
    }
    // አርዕስቱ ሲያልቅ መግለጫውን መጻፍ ይጀምራል
    else if (pIndex < pText.length) {
        pElement.innerHTML += pText.charAt(pIndex);
        pIndex++;
        setTimeout(typeEffect, 50);
    }
}

// ዌብሳይቱ እንደተከፈተ አኒሜሽኑን እንዲጀምር
document.addEventListener("DOMContentLoaded", () => {

    // 1. Typing Effect Logic
    const h2Text = "Door To Door Taekwondo Class";
    const pText = "Expert martial arts training delivered directly to your doorstep.";
    let h2Index = 0;
    let pIndex = 0;

    function typeEffect() {
        const h2Element = document.getElementById("typing-h2");
        const pElement = document.getElementById("typing-p");

        if (h2Index < h2Text.length) {
            h2Element.innerHTML += h2Text.charAt(h2Index);
            h2Index++;
            setTimeout(typeEffect, 100);
        } else if (pIndex < pText.length) {
            pElement.innerHTML += pText.charAt(pIndex);
            pIndex++;
            setTimeout(typeEffect, 50);
        }
    }

    // 2. 3D Tilt Effect Logic
    const cards = document.querySelectorAll('.service-card');
    if (cards.length > 0) {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                let rect = card.getBoundingClientRect();
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;
                let centerX = rect.width / 2;
                let centerY = rect.height / 2;
                let rotateX = (centerY - y) / 12;
                let rotateY = (x - centerX) / 12;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            });
        });
    }

    // አኒሜሽኑን አስጀምር
    typeEffect();
    console.log("All systems go! 🚀");
});
// ፎርሙን የማስገቢያ ኮድ
// 1. መጀመሪያ የሚያስፈልጉ ኤለመንቶችን መምረጥ
// 1. የሚያስፈልጉ ኤለመንቶችን መምረጥ
const registerForm = document.querySelector('#register form');
const thankYouBox = document.getElementById('thank-you-box');

if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault(); // ገጹ Refresh እንዳይሆን

        // 2. መረጃዎቹን ከፎርሙ ላይ መሰብሰብ
        const name = this.querySelector('input[type="text"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const location = this.querySelector('#location').value;
        const program = this.querySelector('select').value;
        const goal = this.querySelector('textarea') ? this.querySelector('textarea').value : "ያልተጠቀሰ";

        // 3. አዲሱ የቴሌግራም Token እና ያንተ Chat ID
        const botToken = "8675010074:AAH8LBZVxtbCFh06XVYmLFAqFoOquI5-kro";
        const chatId = "1050906723";

        // 4. መልዕክቱን ማደራጀት
        const message = `🚀 **አዲስ ተማሪ ተመዝግቧል!**\n\n` +
            `👤 ስም: ${name}\n` +
            `📞 ስልክ: ${phone}\n` +
            `📍 ቦታ: ${location}\n` +
            `🥋 ፕሮግራም: ${program}\n` +
            `📝 ግብ: ${goal}`;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        // 5. መረጃውን መላክ
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown'
            })
        })
            .then(response => {
                if (response.ok) {
                    // መላኩ ከተሳካ የማመስገኛ ሳጥኑን ማሳየት
                    if (thankYouBox) {
                        thankYouBox.style.display = 'block';
                    }
                    registerForm.reset();
                } else {
                    alert("something went wrong. please check your connection and try again.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("error connectiong to the server.");
            });
    });
}

// 6. ቦክሱን መዝጊያ ፋንክሽን
function closeBox() {
    const box = document.getElementById('thank-you-box');
    if (box) {
        box.style.display = 'none';
    }
}