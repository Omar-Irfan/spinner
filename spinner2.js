// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   '); 
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   '); 
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   '); 
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
// process.stdout.write('\r|   ');
// }, 1700);

const rotator = function(time, character) {
  setTimeout(() => {
    process.stdout.write('\r' + character + "   ");
    }, time);
}

const spinner = function(callback){

callback(100,"|");
callback(300,"/");
callback(500,"-");
callback(700,"\\");
callback(900,"|");
callback(1100,"|");
callback(1300,"-");
callback(1500,"\\");
callback(1700,"|");
}

spinner(rotator);