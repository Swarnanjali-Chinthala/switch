function switchoff() {
    document.getElementById("bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("status").textContent = "switchoff";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("offSwitch").style.backgroundColor = "black";
}

function switchon() {
    document.getElementById("bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("status").textContent = "switchon";
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("onSwitch").style.backgroundColor = "green";
}