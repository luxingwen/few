var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('.menu-btn .line--1');
var lineTwo = document.querySelector('.menu-btn .line--2');
var lineThree = document.querySelector('.menu-btn .line--3');
var link = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
	link.style.display = 'flex';
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})
link.addEventListener('click', () => {
	link.style.display = 'none';
    link.classList.remove('fade-in');
    lineOne.classList.remove('line-cross');
    lineTwo.classList.remove('line-fade-out');
    lineThree.classList.remove('line-cross');
})
var play = document.getElementById('playWatch');
var video = document.getElementById('my-player');
play.addEventListener('click', () => {
	console.log("---->")
	video.play();
});
var fewMenu = document.querySelector('.few-select2');
fewMenu.addEventListener('click', () => {
	fewMenu.classList.add("active");
});
