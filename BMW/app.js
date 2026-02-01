const call = document.getElementById('call')
const callBig = document.getElementById('callBig')
const callCancel = document.getElementById('callCancel')
call.addEventListener('click', () => {
    callBig.style.display = 'block'
})
callCancel.addEventListener('click', () => {
    callBig.style.display = 'none'
})
function setupTabs(buttonSelector, contentSelector, activeColor = '#2e4dff') {
    const buttons = document.querySelectorAll(buttonSelector);
    const contents = document.querySelectorAll(contentSelector);
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => {
                b.style.background = '#edecec';
                b.style.color = '#000';
                b.style.border = 'none';
            });
            contents.forEach(c => c.style.display = 'none');
            btn.style.background = activeColor;
            btn.style.color = '#fff';
            if (contents[index]) contents[index].style.display = 'flex';
        });
    });
}
setupTabs('.m', '.modelms');
setupTabs('.founders', '.persons_about'); // Founders bo'limi
setupTabs('.motorcycle_models', '.motorcycle_models_about');
function setupSlider(containerSelector, nextBtn, prevBtn, scrollAmount) {
    const container = document.querySelector(containerSelector);
    document.querySelector(nextBtn).onclick = () => container.scrollLeft += scrollAmount;
    document.querySelector(prevBtn).onclick = () => container.scrollLeft -= scrollAmount;
}
setupSlider('.cards', '.btn_next', '.btn_prev', 635);
setupSlider('.last_cards', '.last_btn_next', '.last_btn_prev', 955);
const video = document.getElementById('banner_video');
const voiceBtns = document.querySelectorAll('.banner_vd_btn');
voiceBtns.forEach(btn => {
    btn.onclick = () => {
        video.muted = !video.muted;
        voiceBtns[0].style.display = video.muted ? 'block' : 'none';
        voiceBtns[1].style.display = video.muted ? 'none' : 'block';
    };
});
const togglePassword = () => {
    const x = document.getElementById('Pasword');
    x.type = x.type === "password" ? "text" : "password";
};
Karlbtn.addEventListener('click', () => {
    BMWFoundersAbout.style.display = 'block'
    focus1.style.display = 'block'
    focus2.style.display = 'none'
    focus3.style.display = 'none'
    focus4.style.display = 'none'
    focus5.style.display = 'none'
    Karlbtn.style.background = 'url("./images/Karl\ Rapp.jpg") no-repeat center/cover'
    Ottobtn.style.background = 'url("./images/Gustav\ Otto.jpg") no-repeat center/cover'
    KarlOttobtn.style.background = 'url("./images/Karl\ and\ Otto.jpg") no-repeat center/cover'
    Poppbtn.style.background = 'url("./images/Franz\ Josef\ Popp.jpg") no-repeat center/cover'
    KarlOttoPoppbtn.style.background = 'url("./images/bmw\ founderall1.jpg") no-repeat center/cover'
})
Ottobtn.addEventListener('click', () => {
    BMWFoundersAbout.style.display = 'block'
    focus1.style.display = 'none'
    focus2.style.display = 'block'
    focus3.style.display = 'none'
    focus4.style.display = 'none'
    focus5.style.display = 'none'
    Karlbtn.style.background = 'url("./images/Karl\ Rapp.jpg") no-repeat center/cover'
    Ottobtn.style.background = 'url("./images/Gustav\ Otto.jpg") no-repeat center/cover'
    KarlOttobtn.style.background = 'url("./images/Karl\ and\ Otto.jpg") no-repeat center/cover'
    Poppbtn.style.background = 'url("./images/Franz\ Josef\ Popp.jpg") no-repeat center/cover'
    KarlOttoPoppbtn.style.background = 'url("./images/bmw\ founderall1.jpg") no-repeat center/cover'
})
KarlOttobtn.addEventListener('click', () => {
    BMWFoundersAbout.style.display = 'block'
    focus1.style.display = 'none'
    focus2.style.display = 'none'
    focus3.style.display = 'block'
    focus4.style.display = 'none'
    focus5.style.display = 'none'
    Karlbtn.style.background = 'url("./images/Karl\ Rapp.jpg") no-repeat center/cover'
    Ottobtn.style.background = 'url("./images/Gustav\ Otto.jpg") no-repeat center/cover'
    KarlOttobtn.style.background = 'url("./images/Karl\ and\ Otto.jpg") no-repeat center/cover'
    Poppbtn.style.background = 'url("./images/Franz\ Josef\ Popp.jpg") no-repeat center/cover'
    KarlOttoPoppbtn.style.background = 'url("./images/bmw\ founderall1.jpg") no-repeat center/cover'
})
Poppbtn.addEventListener('click', () => {
    BMWFoundersAbout.style.display = 'block'
    focus1.style.display = 'none'
    focus2.style.display = 'none'
    focus3.style.display = 'none'
    focus4.style.display = 'block'
    focus5.style.display = 'none'
    Karlbtn.style.background = 'url("./images/Karl\ Rapp.jpg") no-repeat center/cover'
    Ottobtn.style.background = 'url("./images/Gustav\ Otto.jpg") no-repeat center/cover'
    KarlOttobtn.style.background = 'url("./images/Karl\ and\ Otto.jpg") no-repeat center/cover'
    Poppbtn.style.background = 'url("./images/Franz\ Josef\ Popp.jpg") no-repeat center/cover'
    KarlOttoPoppbtn.style.background = 'url("./images/bmw\ founderall1.jpg") no-repeat center/cover'
})
KarlOttoPoppbtn.addEventListener('click', () => {
    BMWFoundersAbout.style.display = 'block'
    focus1.style.display = 'none'
    focus2.style.display = 'none'
    focus3.style.display = 'none'
    focus4.style.display = 'none'
    focus5.style.display = 'block'
    Karlbtn.style.background = 'url("./images/Karl\ Rapp.jpg") no-repeat center/cover'
    Ottobtn.style.background = 'url("./images/Gustav\ Otto.jpg") no-repeat center/cover'
    KarlOttobtn.style.background = 'url("./images/Karl\ and\ Otto.jpg") no-repeat center/cover'
    Poppbtn.style.background = 'url("./images/Franz\ Josef\ Popp.jpg") no-repeat center/cover'
    KarlOttoPoppbtn.style.background = 'url("./images/bmw\ founderall1.jpg") no-repeat center/cover'
})
motorcycleModels1.addEventListener('click', () => {
    motorcycleModels1.style.border = '3px solid red'
})
motorcycleModels2.addEventListener('click', () => {
    motorcycleModels2.style.border = '3px solid red'
})
motorcycleModels3.addEventListener('click', () => {
    motorcycleModels3.style.border = '3px solid red'
})
motorcycleModels4.addEventListener('click', () => {
    motorcycleModels4.style.border = '3px solid red'
    motorcycleModels4.style.background = 'linear-gradient(45deg, blue, rgba(255, 204, 0, 0.486))'
})
motorcycleModels5.addEventListener('click', () => {
    motorcycleModels5.style.border = '3px solid red'
    motorcycleModels5.style.background = 'rgba(250, 215, 73, 0.49)'
})
motorcycleModels6.addEventListener('click', () => {
    motorcycleModels6.style.border = '3px solid red'
    motorcycleModels6.style.background = 'rgba(250, 215, 73, 0.486)'
})
motorcycleModels7.addEventListener('click', () => {
    motorcycleModels7.style.border = '3px solid red'
    motorcycleModels7.style.background = 'rgba(250, 215, 73, 0.486)'
})
const engineAudio = document.getElementById('engineAudio');
const soundBtns = document.querySelectorAll('.s_btn');
soundBtns.forEach(btn => {
    btn.onclick = () => {
        soundBtns.forEach(b => b.classList.remove('active_sound'));
        engineAudio.pause();
        engineAudio.currentTime = 0;
        const modelName = btn.getAttribute('data-sound');
        engineAudio.src = `./sounds/${modelName}.mp3`; 
        engineAudio.play().catch(e => console.log("Fayl topilmadi yoki yuklanmadi"));
        btn.classList.add('active_sound');
    };
});
const stopBtn = document.getElementById('stopBtn');
stopBtn.onclick = () => {
    engineAudio.pause();
    engineAudio.currentTime = 0;
    soundBtns.forEach(b => b.classList.remove('active_sound'));
};