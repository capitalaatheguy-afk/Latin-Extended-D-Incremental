var points = 0;
var pps = 0;
var reincarnation = 0;

function points1() {
    points += reincarnation + 1
}

function points2() {
    if (points >= 30) {
        points = points - 30
        pps += 0.01
    }
}

function points3() {
    if (points >= 1000) {
        points = points - 1000
        pps += 0.2
    }
}

function points4() {
    if (points >= 9000) {
        points = points - 9000
        pps += 6
    }
}


function points5() {
    if (points >= 200000) {
        points = points - 200000
        pps += 100
    }
}

function reincarnation1() {
    if (points >= 15000000) {
        points = points - 15000000
        reincarnationReset()
    }
}

function reincarnationReset() {
    points = 0;
    pps = 0;
    reincarnation++
}
setInterval(() => {
    document.querySelector(".points").innerHTML = Math.floor(points); document.querySelector(".reincarnation").innerHTML = Math.floor(reincarnation);
    points += pps
}, 10);