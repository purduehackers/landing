var titleIndex = 0;
var titleSpeed = 100;
var title = 'HammerWars';

var subTitleIndex = 0;
var subTitleSpeed = 70;
var subTitle = 'Hammer down, code it up!';

var rsvpIndex = 0;
var rsvpSpeed = 70;
var rsvp = 'RSVP Right Now...';

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


window.onload = titleTypeWriter;