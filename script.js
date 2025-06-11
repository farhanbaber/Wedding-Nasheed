const playmenu = document.getElementById("playmenu")
const stopmenu = document.getElementById("stopmenu")
const audio = document.getElementById("audio")

playmenu.addEventListener("click" , () =>{
    audio.play()
    playmenu.style.display = "none"
    stopmenu.style.display = "inline"
})

stopmenu.addEventListener("click" , () =>{
    audio.pause()
    playmenu.style.display = "inline"
    stopmenu.style.display = "none"
})

audio.addEventListener("click" , () =>{
    playmenu.style.display = "inline"
    stopmenu.style.display = "none"
})
function forward() {
    if (audio.currentTime +20 < audio.duration) {
        audio.currentTime =+20
        
    } else {
        audio.currentTime = audio.duration
    }
}
function back() {
    if (audio.currentTime -10 < 0) {
        audio.currentTime = 0 
        
    } else {
        audio.currentTime = 0
    }
}