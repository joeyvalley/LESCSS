// @ts-nocheck
const video = document.getElementById("vidbg");
const videos = ["http://lescss.org/video/aztekium.mp4", "http://lescss.org/video/conophytum.mp4", "http://lescss.org/video/digitostigma.mp4", "http://lescss.org/video/lithops.mp4", "http://lescss.org/video/peyote.mp4", "http://lescss.org/video/sonora2.mp4", "http://lescss.org/video/stapelia.mp4", "http://lescss.org/video/welwitschia.mp4", "http://lescss.org/video/1997.mp4"];

video.src = selectRandomVideo();
video.addEventListener('ended', (event) => {
  video.src = selectRandomVideo();
});

function selectRandomVideo() {
  return videos[Math.floor(Math.random() * videos.length)];
}