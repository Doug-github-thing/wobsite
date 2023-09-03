function ticTacSlide() {
    // clear current active menu item
    const buttons = document.getElementsByClassName("activeMenuItem");
    buttons[0].className = "inactiveMenuItem";
    // set new active menu item
    document.getElementById("TicTacSlide").className = "activeMenuItem";

    // update page text
    document.getElementById("header").innerHTML = "";
    document.getElementById("bodyText").innerHTML = "Like TicTacToe, but each player only places 3 stones each, after which point they enter the *movement phase*, where they then take turns sliding each stone to an adjacent open square. The game objective remains the same.";

    embed("https://doug-github-thing.github.io/tictootsie/");
}
function snake() {
    // clear current active menu item
    const buttons = document.getElementsByClassName("activeMenuItem");
    buttons[0].className = "inactiveMenuItem";
    // set new active menu item
    document.getElementById("Snake").className = "activeMenuItem";
    
    // update page text
    document.getElementById("header").innerHTML = "";
    document.getElementById("bodyText").innerHTML = "The game of Snake. Use the arrow keys to move.";

    // update page text
    embed("https://doug-github-thing.github.io/egg/");
}

function embed(url) {
    document.getElementById("header").innerHTML

    document.getElementById("embed").src = url;
    document.getElementById("embed").style = "width:888px; height: 500px;";
}