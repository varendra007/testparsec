import { Animation } from "jquery";

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

Animation.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1500,
    delay: (el, i) => 100 + 30 * i
  });

var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

Animation.timeline({ loop: true })
	.add({
		targets: '.ml4 .letter-1',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn,
	})
	.add({
		targets: '.ml4 .letter-1',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: 'easeInExpo',
		delay: ml4.delay,
	})
	.add({
		targets: '.ml4 .letter-2',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn,
	})
	.add({
		targets: '.ml4 .letter-2',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: 'easeInExpo',
		delay: ml4.delay,
	})
	.add({
		targets: '.ml4',
		opacity: 0,
		duration: 500,
		delay: 500,
	});