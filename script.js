const backgrounds = [
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30", // خراف
    "https://images.unsplash.com/photo-1560807707-8cc77767d783", // عجول
    "https://images.unsplash.com/photo-1598514982901-cb55a01f1d9b" // مزرعة أبقار
];

document.querySelectorAll(".screen").forEach(screen => {
    let i = 0;
    setInterval(() => {
        screen.style.backgroundImage = `url(${backgrounds[i]})`;
        i = (i + 1) % backgrounds.length;
    }, 5000);
});

function login() {
    show("list");
}

function selectUdhiyah(type) {
    if (type === "cow") {
        title.innerText = "تفاصيل العجل البلدي";
        image.src = backgrounds[1];
        weight.innerText = "الوزن: 450 كجم";
        price.innerText = "السعر: 90,000 جنيه";
    } else {
        title.innerText = "تفاصيل الخروف البلدي";
        image.src = backgrounds[0];
        weight.innerText = "الوزن: 70 كجم";
        price.innerText = "السعر: 9,000 جنيه";
    }
    show("details");
}

function goPayment() {
    show("payment");
}

function goCamera() {
    show("camera");
}

function show(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}
