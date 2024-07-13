console.log("welcome to spotify");

//Initialize the variable
let songindex=0;
let audioElement = new Audio('songs/1.mp3');
let masterplay =document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems =Array.from(document.getElementsByClassName('songitem'));


let songs=[
    {songname:"At my worst", filepath: "songs/1.mp3",coverPath: "covers/c1.jpg"},
    {songname:"We dont talk anymore", filepath: "songs/2.mp3",coverPath: "covers/c2.jpeg"},
    {songname:"Mashle opening", filepath: "songs/3.mp3",coverPath: "covers/c3.jpeg"},
    {songname:"There is nothing holding me back", filepath: "songs/4.mp3",coverPath: "covers/c4.png"},
    {songname:"What makes you beautyful", filepath: "songs/5.mp3",coverPath: "covers/c5.jpg"},
]
songitems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})

audioElement.play();
//Listen to events
//handle play/pause click
masterplay.addEventListener('click',   ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity=0;

    }
})
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100; 
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-solid fa-pause');
        element.classList.add('fa-solid fa-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        songindex= parseInt(e.target.id)
        // makeAllPlays();
        // e.target.classlist.remove('fa-solid fa-play');
        // e.target.classlist.add('fa-solid fa-pause');
        audioElement.src=`songs/${songindex+1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex >=4){
        songindex=0;
    }
    else{
        songindex +=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex <=0){
        songindex=0;
    }
    else{
        songindex -=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
})


