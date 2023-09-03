function ticTacSlide() {
    // clear current active menu item
    const buttons = document.getElementsByClassName("activeMenuItem");
    buttons[0].className = "inactiveMenuItem";

    // set new active menu item
    document.getElementById("TicTacSlide").className = "activeMenuItem";

    embed("https://doug-github-thing.github.io/tictootsie/");
}
function snake() {
    // clear current active menu item
    const buttons = document.getElementsByClassName("activeMenuItem");
    buttons[0].className = "inactiveMenuItem";
    
    // set new active menu item
    document.getElementById("Snake").className = "activeMenuItem";
    
    embed("https://doug-github-thing.github.io/egg/");
}

function embed(url) {
    document.getElementById("embed").src = url;
    document.getElementById("embed").style = "width:888px; height: 500px;";
}