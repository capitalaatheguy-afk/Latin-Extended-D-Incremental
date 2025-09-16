var points = 0;
var pps = 0;
var ppc = 0;
var reincarnation = 0;
var pps2 = 0
var rps = 0;
var pps3 = 1;
var energy = 0;

function points1() {
    points += ppc + reincarnation + 1
}

function points2() {
    if (points >= 30) {
        points = points - 30
        pps += 0.01 * pps3
    }
}

function points3() {
    if (points >= 1000) {
        points = points - 1000
        pps += 0.2 * pps3
    }
}

function points4() {
    if (points >= 9000) {
        points = points - 9000
        pps += 6 * pps3
    }
}


function points5() {
    if (points >= 200000) {
        points = points - 200000
        pps += 100 * pps3
    }
}

function points6() {
    if (points >= 100_000_000) {
        points = points - 100_000_000
        pps += 2500 * pps3
    }
}

function points7() {
    if (points >= 1_000_000_000) {
        points = points - 1_000_000_000
        pps += 100_000 * pps3
    }
}

function points8() {
    if (points >= 50_000_000_000_000) {
        points = points - 50_000_000_000_000
        pps += 3_000_000 * pps3
    }
}

function points9() {
    if (points >= 1_000_000_000_000_000) {
        points = points - 1_000_000_000_000_000
        pps += 10_000_000 * pps3
    }
}

function points10() {
    if (points >= 1_000_000_000_000_000_000) {
        points = points - 1_000_000_000_000_000_000
        pps += 300_000_000 * pps3
    }
}

function points11() {
    if (points >= 1_000_000_000_000_000_000_000) {
        points = points - 1_000_000_000_000_000_000_000
        pps += 8_000_000_000 * pps3
    }
}

function reincarnation1() {
    if (points >= 15_000_000) {
        points = points - 15_000_000 // Uses "_" for numbers to make large numbers readable
        reincarnationReset()
    }
}

function reincarnation2() {
    if (reincarnation >= 2) {
        reincarnation -= 2
        ppc += 10
    }
}

function reincarnation3() {
    if (reincarnation >= 3) {
        reincarnation -= 3
        pps2 += 0.01
    }
}

function reincarnation4() {
    if (reincarnation >= 10) {
        reincarnation -= 10
        rps += 0.01
    }
}

function reincarnation5() {
    if (reincarnation >= 1000) {
        reincarnation -= 1000
        pps2 += 0.07
    }
}

function reincarnation6() {
    if (reincarnation >= 25_000) {
        reincarnation -= 25_000
        rps += 10
    }
}

function reincarnation7() {
    if (reincarnation >= 1_000_000) {
        reincarnation -= 1_000_000
        pps2 += 4
    }
}

function reincarnation8() {
    if (reincarnation >= 5_000_000) {
        reincarnation -= 5_000_000
        rps += 2000
    }
}

function reincarnation9() {
    if (reincarnation >= 100_000_000) {
        reincarnation -= 100_000_000
        pps2 += 100
    }
}

function reincarnationReset() {
    points = 0;
    pps = 0;
    reincarnation++
}

function energyReset() {
    points = 0;
    pps = 0;
    reincarnation = 0;
    energy = 0;
}

setInterval(() => {
    document.querySelector(".points").innerHTML = Math.floor(points); 
document.querySelector(".reincarnation").innerHTML = Math.floor(reincarnation);
document.querySelector(".energy").innerHTML = Math.floor(energy);
    points += pps * (energy ** 2)
    pps3 += pps2
    reincarnation += rps
}, 10);