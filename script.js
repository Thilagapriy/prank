const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const emojiDisplay = document.getElementById('emoji-display');
const question = document.getElementById('question');
const subHeading = document.getElementById('sub-heading');

function moveButton() {
    // Calculate random position within the viewport
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed'; 
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents mobile "ghost clicks"
    moveButton();
});

yesBtn.addEventListener('click', () => {
    // 1. Change to the angel emoji
    if(emojiDisplay) emojiDisplay.innerText = "😇";
    
    // 2. Change text (Fixed the quotes around "ANSWER")
    question.innerText = "Hehehe! I Knew it! ❤️";
    subHeading.innerHTML = "Are you ❤️ me or not ❤️ me; but I am always be waiting for your 'ANSWER' and I am always falling for you only after that we joined together to eat <b>panipuri</b> in <b>our money</b> 😉";
    
    // 3. Hide buttons
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
});