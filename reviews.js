const reviews = [
    {
        id: 1,
        name: "Jane Doe",
        job: "UX Designer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWBnyvJtrWYVL5q2Nwl1UkCOxOPxFGoORjg&usqp=CAU",
        text: "Hi, I'm Jane Doe and I also worked in Google with my partner, John Doe, but I worked as an UX Designer. I'm 30 this year and super delighted to work here in an one of the world biggest tech company. I've worked more than 3 years at least.",
    },
    {
        id: 2,
        name: "David Johnson",
        job: "Database Engineer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaeVfXxyG1sNBohvr-x5NOCzM9lvcF_pTzA&usqp=CAU",
        text: "Hey, David's here, I worked in Amazon as a Senior Database Engineer and yea deal with data sort of things is my interest. Because, I like math and computing stuff. I'm so proud to say that I've worked with Amazon for 8 years and I've no regret at all.",
    },
    {
        id: 3,
        name: "Peter Mcgregor",
        job: "Food Scientist",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKTiT_fpxem63q3m6xv3tzIGiI5jMhS4Vtw&usqp=CAU",
        text: "Greetings, I'm Peter Mcgregor, Peter for short, and I'm working in a top food industry in UK. I just finished Master Degree programme and planning on starting own food business and hiring someone. I can say that I'm a qualified food scientist and well-experienced and very proud.",
    },
    {
        id: 4,
        name: "Kasey Jones",
        job: "Interior Designer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU",
        text: "Hi there, I'm Kasey, and I work as an interior designer in an architecture company in Ohio. I'm interested in all sorts of designs especially interior design, because I love drawing such 3D structures and I can design for my own house too.",
    },
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set a starting time
let currentTime = -1;

// Load initial item
window.addEventListener("DOMContentLoaded", function() {
    
})
// Show person based on item
function showPerson() {
    const item = reviews[currentTime];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}



// --- 3 chevron arrows ---


// Show next person
nextBtn.addEventListener("click", function() {
    // In fact, reviews.length = 4, you may subs in 4 algebraically into it yet nothing change. Just for fun...
    currentTime++;
    if (currentTime > reviews.length - 1) {                             // currentTime > 4 - 1
        currentTime = 0;
        console.log("Next!");
    }
    showPerson();
})

// Show prev person
prevBtn.addEventListener("click", function() {
    // In fact, reviews.length = 4, you may subs in 4 algebraically into it yet nothing change. Same goes to here...
    currentTime--;
    if (currentTime < 0) {
        currentTime = reviews.length - 1;                                // currentTime = 4 - 1; 
        console.log("Backward!");
    }
    showPerson();
})

// Show random person
randomBtn.addEventListener("click", function() {
    currentTime = Math.floor(Math.random() * reviews.length);
    console.log("Surprise! You picked a random candidate.");
    showPerson();
})
