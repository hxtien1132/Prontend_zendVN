
function bg_blue() {
  document.getElementById("content").style.background = "blue";
}

function bg_white() {
  document.getElementById("content").style.background = "white";
}


function bg_green() {
  document.getElementById("content").style.background = "green";
}


function bg_gold() {
  document.getElementById("content").style.background = "gold";
}


function bg_red() {
  document.getElementById("content").style.background = "red";
}

function zoom_in() {
  old = getComputedStyle(document.getElementById("content")).getPropertyValue("font-size");
  old = parseInt(old.replace('px', ''));
  old = old - 1;
  document.getElementById("content").style.fontSize = old + 'px';
  console.log(old);
}

function zoom_out() {
  old = getComputedStyle(document.getElementById("content")).getPropertyValue("font-size");
  old = parseInt(old.replace('px', ''));
  old = old + 1;
  document.getElementById("content").style.fontSize = old + 'px';
  console.log(old);
}

function kcd() {
  now = document.getElementById("kcd").value;
  document.getElementById("content").style.lineHeight = now;
}

function cl() {
  now = document.getElementById("cl").value;
  document.getElementById("content").style.textAlign = now;
}
