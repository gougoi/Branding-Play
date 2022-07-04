
const bidrichInfoMark = document.querySelector('#BIDRICH_InfoMark_box');
const bidrichPlay = document.querySelector('.bidrich_branding_play');
const bidrichPlayer = document.querySelector("#player");
const video =  document.querySelector('.play-box-video video')
const bidrichPlayerBtn = document.querySelector("#play-video");
const bidrichVolume = document.querySelector('#volume');
const progress = document.querySelector('progress');
const closeBtn = document.querySelector('.play-closebtn')
const videoCloseBtn = document.querySelector('.video-close')
const PlayerTop = $(bidrichPlayer).offset().top;
const videoHeight = $(video).innerHeight()
$(bidrichInfoMark).fadeOut(0);

// bidrich infomark
function infoOpen(){
  document.querySelector('#advertis_icon').classList.toggle('bidrichblock')
}

bidrichPlayerBtn.addEventListener('click',function(e){
  e.preventDefault();
  bidrichVolume.style.display = "block";
  document.querySelector('.video-close').classList.add("open");
  document.querySelector('.video-overlay-more').classList.add("open");
  document.querySelector('.play-box-img').style.left = '-100%'
  bidrichPlay.style.height = videoHeight + 'px'
  closeBtn.style.top = PlayerTop-30 + 'px'
  $(bidrichPlayerBtn).fadeOut();
  $(bidrichInfoMark).fadeIn(300);
});

videoCloseBtn.addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector('.video-close.open').classList.remove("open");
  document.querySelector('.video-overlay-more.open').classList.remove("open");
  document.querySelector('.play-box-img').style.left = 0
  $(bidrichPlayerBtn).fadeIn();
  $(bidrichInfoMark).fadeOut(300);
  bidrichVolume.style = "";
  bidrichPlayer.muted = true;
  bidrichVolume.classList.replace('on', 'off');
  bidrichPlay.style.height = 100 +'px'
});

//speaker
bidrichVolume.addEventListener('click',function(e){
  if(bidrichVolume.classList.contains('off')){
    bidrichVolume.classList.replace('off', 'on');
  }else{
    bidrichVolume.classList.replace('on', 'off'); 
  }

  if( $(bidrichPlayer).prop('muted') ) {
        $(bidrichPlayer).prop('muted', false);
  } else {
    $(bidrichPlayer).prop('muted', true);
  }
});

// video progress bar
function progressLoop() {
  setInterval(function () {
  progress.value =
  Math.round((bidrichPlayer.currentTime / bidrichPlayer.duration) * 100);
  });
}

function playTime() {bidrichPlayer.currentTime = 0;}
bidrichPlayerBtn.addEventListener("click", playTime);
bidrichPlayer.addEventListener("play", progressLoop);

