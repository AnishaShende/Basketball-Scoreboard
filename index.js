let home3button = document.getElementById("home-3-points");
let home2button = document.getElementById("home-2-points");
let home1button = document.getElementById("home-1-points");

let guest3button = document.getElementById("guest-3-points");
let guest2button = document.getElementById("guest-2-points");
let guest1button = document.getElementById("guest-1-points");

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function add1pointHomeScore() {
  homeScore.innerText = parseInt(homeScore.innerText) + 1;
}

function add2pointsHomeScore() {
  homeScore.innerText = parseInt(homeScore.innerText) + 2;
}

function add3pointsHomeScore() {
  homeScore.innerText = parseInt(homeScore.innerText) + 3;
}

function add1pointGuestScore() {
  guestScore.innerText = parseInt(guestScore.innerText) + 1;
}

function add2pointsGuestScore() {
  guestScore.innerText = parseInt(guestScore.innerText) + 2;
}

function add3pointsGuestScore() {
  guestScore.innerText = parseInt(guestScore.innerText) + 3;
}
