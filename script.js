// 1. ENDLESS FALLING CHERRY BLOSSOMS ENGINE
function generateBackgroundFlower() {
    const layer = document.getElementById('flower-layer');
    if (!layer) return;

    const flower = document.createElement('div');
    flower.classList.add('falling-sakura-flower');
    flower.innerText = '🌸';
    flower.style.left = Math.random() * 100 + 'vw';
    
    const animationDuration = Math.random() * 4 + 4;
    flower.style.animationDuration = animationDuration + 's';
    flower.style.fontSize = Math.random() * 10 + 15 + 'px';
    
    layer.appendChild(flower);
    setTimeout(() => { flower.remove(); }, animationDuration * 1000);
}
setInterval(generateBackgroundFlower, 300);


// 2. EXPLOSIVE CONFETTI PARTY SYSTEM
function launchExplosiveConfetti() {
    const configurationColors = ['#7B2CBF', '#FF6B8B', '#FFD1DC', '#E0AAFF', '#FF9EBB', '#9D4EDD'];
    const executionDensityCount = 120;

    for (let i = 0; i < executionDensityCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('exploding-confetti-particle');
        
        particle.style.backgroundColor = configurationColors[Math.floor(Math.random() * configurationColors.length)];
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * -20 + 'px';
        
        const runtimeSpeed = Math.random() * 3 + 2;
        particle.style.animationDuration = runtimeSpeed + 's';
        particle.style.setProperty('--x-axis-drift', (Math.random() * 300 - 150) + 'px');
        
        particle.style.width = Math.random() * 8 + 6 + 'px';
        particle.style.height = particle.style.width;
        
        document.body.appendChild(particle);
        setTimeout(() => { particle.remove(); }, runtimeSpeed * 1000);
    }
}


// 3. BACKGROUND MUSIC INITIALIZER ENGINE
function triggerBackgroundAudio() {
    const audioTrack = document.getElementById('bg-music-engine');
    if (audioTrack && audioTrack.paused) {
        audioTrack.play().catch(err => console.log("Audio autoplay blocked or waiting setup: ", err));
    }
}


// 4. ARCADE GAME JUMPING MECHANICS
let page1Clicks = 0;
let page2Clicks = 0;
let page3Clicks = 0;
let page3LetterClicks = 0;

function dodgeButton(btnId) {
    const btn = document.getElementById(btnId);
    
    const label = btn.querySelector('.btn-primary-label');
    const badge = btn.querySelector('.premium-gif-badge');
    
    if(label) label.classList.add('display-hidden-state');
    if(badge) badge.classList.remove('display-hidden-state');
    
    btn.style.padding = '20px 30px';
    btn.style.borderRadius = '20px';
    btn.style.position = 'absolute';
    
    const randomX = Math.floor(Math.random() * 55) + 20; // 20vw to 75vw
    const randomY = Math.floor(Math.random() * 45) + 25; // 25vh to 70vh
    
    btn.style.left = randomX + 'vw';
    btn.style.top = randomY + 'vh';
    btn.style.transform = 'translate(-50%, -50%)';
}

function handleArcadeClick(event, pageNum, maxDodges, targetBtnId, transitionFunc) {
    event.preventDefault();
    triggerBackgroundAudio(); // Start music on her very first physical tap interaction
    
    if (pageNum === 1) {
        page1Clicks++;
        if (page1Clicks > maxDodges) { transitionFunc(); } else { dodgeButton(targetBtnId); }
    } else if (pageNum === 2) {
        page2Clicks++;
        if (page2Clicks > maxDodges) { transitionFunc(); } else { dodgeButton(targetBtnId); }
    } else if (pageNum === 3) {
        page3Clicks++;
        if (page3Clicks > maxDodges) { transitionFunc(); } else { dodgeButton(targetBtnId); }
    } else if (pageNum === 3.5) {
        page3LetterClicks++;
        if (page3LetterClicks > maxDodges) { transitionFunc(); } else { dodgeButton(targetBtnId); }
    }
}


// 5. INTERACTION SCREEN ROUTERS
function changeToWishCardScreen() {
    const p1 = document.getElementById('page-1');
    const p2 = document.getElementById('page-2');
    p1.classList.remove('screen-fade-active');

    setTimeout(() => {
        p1.classList.add('display-hidden-state');
        p2.classList.remove('display-hidden-state');
        setTimeout(() => {
            p2.classList.add('screen-fade-active');
            launchExplosiveConfetti();
        }, 50);
    }, 600);
}

function changeToEnvelopeNoteScreen() {
    const p2 = document.getElementById('page-2');
    const p3 = document.getElementById('page-3');
    p2.classList.remove('screen-fade-active');

    setTimeout(() => {
        p2.classList.add('display-hidden-state');
        p3.classList.remove('display-hidden-state');
        setTimeout(() => { p3.classList.add('screen-fade-active'); }, 50);
    }, 600);
}

function triggerTypewriterLetterReveal() {
    const envBox = document.getElementById('envelope-view-box');
    const paperLetterSheet = document.getElementById('paper-letter-sheet');
    const typewriterOutputTarget = document.getElementById('typewriter-output-target');
    
    envBox.style.opacity = '0';
    envBox.style.transform = 'scale(0.9)';

    setTimeout(() => {
        envBox.classList.add('display-hidden-state');
        paperLetterSheet.classList.remove('display-hidden-state');
        
        setTimeout(() => {
            paperLetterSheet.classList.add('paper-active');
            typewriterOutputTarget.classList.add('cursor-blink');
            startTypewriterAnimation();
        }, 50);
    }, 400);
    
    function startTypewriterAnimation() {
        const plainTextMessage = "dear Padma.L miss,\n\nwords cannot fully describe how thankful we are to have you as our teacher. you don't just teach lessons from a textbook, you teach us how to be better human beings. your kindness makes the classroom feel safe, and your dedication inspires all of us to try our absolute best.\n\nthank you for always listening, for laughing with us, and for never giving up on any student. you are more than a teacher to us; you are a wonderful mentor. wishing you a beautiful day filled with the same joy you bring into our lives every single day!\n\nwith respect and gratitude,\nyour students.";
        
        let currentCharacterPointerIndex = 0;
        typewriterOutputTarget.innerHTML = "";
        
        function executionTypewriterLoopStep() {
            if (currentCharacterPointerIndex < plainTextMessage.length) {
                typewriterOutputTarget.innerHTML += plainTextMessage.charAt(currentCharacterPointerIndex);
                currentCharacterPointerIndex++;
                setTimeout(executionTypewriterLoopStep, 35);
            } else {
                typewriterOutputTarget.classList.remove('cursor-blink');
                
                const continueBtn = document.getElementById('btn-letter-continue');
                continueBtn.classList.add('letter-btn-visible');
            }
        }
        executionTypewriterLoopStep();
    }
}

function changeToGrandFinaleScreen() {
    const p3 = document.getElementById('page-3');
    const p4 = document.getElementById('page-4');
    p3.classList.remove('screen-fade-active');

    setTimeout(() => {
        p3.classList.add('display-hidden-state');
        p4.classList.remove('display-hidden-state');
        setTimeout(() => { p4.classList.add('screen-fade-active'); }, 50);
    }, 600);
}


// 6. BIND INTERACTION TRIGGERS (Safe cross-platform touch & click system)
const b1 = document.getElementById('btn-open-card');
b1.addEventListener('click', (e) => handleArcadeClick(e, 1, 5, 'btn-open-card', changeToWishCardScreen));
b1.addEventListener('touchstart', (e) => handleArcadeClick(e, 1, 5, 'btn-open-card', changeToWishCardScreen));

const b2 = document.getElementById('btn-read-letter');
b2.addEventListener('click', (e) => handleArcadeClick(e, 2, 4, 'btn-read-letter', changeToEnvelopeNoteScreen));
b2.addEventListener('touchstart', (e) => handleArcadeClick(e, 2, 4, 'btn-read-letter', changeToEnvelopeNoteScreen));

const b3 = document.getElementById('btn-open-envelope');
b3.addEventListener('click', (e) => handleArcadeClick(e, 3, 3, 'btn-open-envelope', triggerTypewriterLetterReveal));
b3.addEventListener('touchstart', (e) => handleArcadeClick(e, 3, 3, 'btn-open-envelope', triggerTypewriterLetterReveal));

const b4 = document.getElementById('btn-letter-continue');
b4.addEventListener('click', (e) => handleArcadeClick(e, 3.5, 2, 'btn-letter-continue', changeToGrandFinaleScreen));
b4.addEventListener('touchstart', (e) => handleArcadeClick(e, 3.5, 2, 'btn-letter-continue', changeToGrandFinaleScreen));
