var preTitleIndex = 0;
var preTitleSpeed = 80;
var preTitle = 'Calling all coders!';

var pre2TitleIndex = 0;
var pre2TitleSpeed = 80;
var pre2Title = 'Purdue Hackers presents...';

var titleIndex = 0;
var titleSpeed = 100;
var title = 'HammerWars';

var subTitleIndex = 0;
var subTitleSpeed = 70;
var subTitle = 'April 16th, 2022';

var rsvpIndex = 0;
var rsvpSpeed = 70;
var rsvp = 'RSVP Now!';

function preTitleTypeWriter() {
  if (preTitleIndex < preTitle.length) {
    document.getElementById("pre-title").innerHTML += preTitle.charAt(preTitleIndex);
    preTitleIndex++;
    setTimeout(preTitleTypeWriter, preTitleSpeed);
  } else {
    pre2TitleTypeWriter()
  }
}

function pre2TitleTypeWriter() {
  if (pre2TitleIndex < pre2Title.length) {
    document.getElementById("pre-2-title").innerHTML += pre2Title.charAt(pre2TitleIndex);
    pre2TitleIndex++;
    setTimeout(pre2TitleTypeWriter, pre2TitleSpeed);
  } else {
    titleTypeWriter()
  }
}

function titleTypeWriter() {
  if (titleIndex < title.length) {
    document.getElementById("title").innerHTML += title.charAt(titleIndex);
    titleIndex++;
    setTimeout(titleTypeWriter, titleSpeed);
  } else {
    subTitleTypeWriter()
  }
}

function subTitleTypeWriter() {
  if (subTitleIndex < subTitle.length) {
    document.getElementById("sub-title").innerHTML += subTitle.charAt(subTitleIndex);
    subTitleIndex++;
    setTimeout(subTitleTypeWriter, subTitleSpeed);
  } else {
    rsvpTypeWriter();
  }
}

function rsvpTypeWriter() {
  if (rsvpIndex < rsvp.length) {
    document.getElementById("rsvp").innerHTML += rsvp.charAt(rsvpIndex);
    rsvpIndex++;
    setTimeout(rsvpTypeWriter, rsvpSpeed);
  }
}


window.onload = preTitleTypeWriter;