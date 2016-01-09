module.exports = bowlingScore;

var totalScore = 0;
var totalFrames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var frameCount = 1;
var frames = [];
// var rolls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var rolls = [
[1, 1],
[1, 1],
[1, 1],
[1, 1],
[1, 1],
[1, 1],
[1, 1],
[1, 1],
[1, 1],
[1, 1],
];

bowlingScore(rolls);

function bowlingScore (rolls) {
  for (var i = 0; i < rolls.length; i++) {
    rolls[i].reduce(function(a, b) {
      return a + b;
    });
  }
}

// function bowlingScore (pins) {
//   for (var j = 0; j < 1; j++) {
//     totalScore += pins;
//     console.log('Total Score: ' + totalScore);
//   }
// }

// getFrames();
// function getFrames (rolls) {
//   var frames = [];
//   for (var i = 0; i < rolls.length; i++) {
//     var newFrame = [];
//     var firstRoll = rolls[i];
//     if (frames.length === 9) {
//       newFrame = rolls.slice(i);
//       frames.push(newFrame);
//       break;
//     } else {
//       newFrame.push(firstRoll);
//       if (firstRoll < 10) {
//         newFrame.push(rolls[i+1]);
//         i++;
//       }
//     }
//     frames.push(newFrame);
//   }
//   console.log(frames);
// }