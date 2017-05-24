/**
 * Created by michaelcrabb on 24/05/2017.
 */

var gutterBackground;
var gutterBackgroundDefault = "#dddddd";

var gutterText;
var gutterTextDefault = "#000000";

var mainBackground;
var mainBackgroundDefault = "#1d1f21";

var mainSyntax;
var mainSyntaxDefault = "#c5c8c6";

var commentSyntax;
var commentSyntaxDefault = "#969896";

var syntaxColour1;
var syntaxColour1Default = "#cc6666";

var syntaxColour2;
var syntaxColour2Default = "#de935f";

var syntaxColour3;
var syntaxColour3Default = "#b5bd68";

var syntaxColour4;
var syntaxColour4Default = "#b294bb";

var syntaxColour5;
var syntaxColour5Default = "#8abeb7";

var syntaxColour6;
var syntaxColour6Default = "#81a2be";

var fontSelector;


window.addEventListener("load", startup, false);
function startup() {
    gutterBackground = document.querySelector("#gutterBackgroundSelector");
    gutterBackground.value = gutterBackgroundDefault;
    gutterBackground.addEventListener("change", updateGutterBackground, false);

    gutterText = document.querySelector("#gutterTextSelector");
    gutterText.value = gutterTextDefault;
    gutterText.addEventListener("change", updateGutterText, false);

    mainBackground = document.querySelector("#mainBackgroundSelector");
    mainBackground.value = mainBackgroundDefault;
    mainBackground.addEventListener("change", updateMainBackground, false);

    mainSyntax = document.querySelector("#mainSyntaxSelector");
    mainSyntax.value = mainSyntaxDefault;
    mainSyntax.addEventListener("change", updateMainSyntax, false);

    commentSyntax = document.querySelector("#commentSyntaxSelector");
    commentSyntax.value = commentSyntaxDefault;
    commentSyntax.addEventListener("change", updateCommentSyntax, false);

    syntaxColour1 = document.querySelector("#syntax1Selector");
    syntaxColour1.value = syntaxColour1Default;
    syntaxColour1.addEventListener("change", updateSyntax1, false);

    syntaxColour2 = document.querySelector("#syntax2Selector");
    syntaxColour2.value = syntaxColour2Default;
    syntaxColour2.addEventListener("change", updateSyntax2, false);

    syntaxColour3 = document.querySelector("#syntax3Selector");
    syntaxColour3.value = syntaxColour3Default;
    syntaxColour3.addEventListener("change", updateSyntax3, false);

    syntaxColour4 = document.querySelector("#syntax4Selector");
    syntaxColour4.value = syntaxColour4Default;
    syntaxColour4.addEventListener("change", updateSyntax4, false);

    syntaxColour5 = document.querySelector("#syntax5Selector");
    syntaxColour5.value = syntaxColour5Default;
    syntaxColour5.addEventListener("change", updateSyntax5, false);

    syntaxColour6 = document.querySelector("#syntax6Selector");
    syntaxColour6.value = syntaxColour6Default;
    syntaxColour6.addEventListener("change", updateSyntax6, false);

}

function updateGutterBackground(event) {
    document.querySelectorAll(".atomGutter").forEach(function(x) {
        x.style.backgroundColor = event.target.value;
    });
}

function updateGutterText(event) {
    document.querySelectorAll(".atomGutter").forEach(function(x) {
        x.style.color = event.target.value;
    });
}

function updateMainBackground(event) {
    document.querySelectorAll(".atomCodeSpace").forEach(function(x) {
        x.style.backgroundColor = event.target.value;
    });
}

function updateMainSyntax(event) {
    document.querySelectorAll(".atomCodeSpace").forEach(function(x) {
        x.style.color = event.target.value;
    });
}

function updateCommentSyntax(event) {
    document.querySelectorAll(".syntaxComment").forEach(function(x) {
        x.style.color = event.target.value;
    });
}

function updateSyntax1(event) {
    document.querySelectorAll(".syntaxColour1").forEach(function(x) {
        x.style.color = event.target.value;
    });
}

function updateSyntax2(event) {
    document.querySelectorAll(".syntaxColour2").forEach(function(x) {
        x.style.color = event.target.value;
    });
}

function updateSyntax3(event) {
    document.querySelectorAll(".syntaxColour3").forEach(function(x) {
        x.style.color = event.target.value;
    });
}

function updateSyntax4(event) {
    document.querySelectorAll(".syntaxColour4").forEach(function(x) {
        x.style.color = event.target.value;
    });
}

function updateSyntax5(event) {
    document.querySelectorAll(".syntaxColour5").forEach(function(x) {
        x.style.color = event.target.value;
    });
}

function updateSyntax6(event) {
    document.querySelectorAll(".syntaxColour6").forEach(function(x) {
        x.style.color = event.target.value;
    });
}

function changeTheme(gutterBackground, gutterText, mainBackground, mainSyntax, commentSyntax, syntax1, syntax2, syntax3, syntax4, syntax5, syntax6){
    //GUTTER BACKGROUND
    document.querySelector("#gutterBackgroundSelector").value = gutterBackground;
    document.querySelectorAll(".atomGutter").forEach(function(x) {
        x.style.backgroundColor = gutterBackground;
    });
    //GUTTER TEXT
    document.querySelector("#gutterTextSelector").value = gutterText;
    document.querySelectorAll(".atomGutter").forEach(function(x) {
        x.style.color = gutterText;
    });
    //MAIN BACKGROUND
    document.querySelector("#mainBackgroundSelector").value = mainBackground;
    document.querySelectorAll(".atomCodeSpace").forEach(function(x) {
        x.style.backgroundColor = mainBackground;
    });
    //MAIN SYNTAX
    document.querySelector("#mainSyntaxSelector").value = mainSyntax;
    document.querySelectorAll(".atomCodeSpace").forEach(function(x) {
        x.style.color = mainSyntax;
    });
    //COMMENT SYNTAX
    document.querySelector("#commentSyntaxSelector").value = commentSyntax;
    document.querySelectorAll(".syntaxComment").forEach(function(x) {
        x.style.color = commentSyntax;
    });

    document.querySelector("#syntax1Selector").value = syntax1;
    document.querySelectorAll(".syntaxColour1").forEach(function(x) {
        x.style.color = syntax1;
    });

    document.querySelector("#syntax2Selector").value = syntax2;
    document.querySelectorAll(".syntaxColour2").forEach(function(x) {
        x.style.color = syntax2;
    });

    document.querySelector("#syntax3Selector").value = syntax3;
    document.querySelectorAll(".syntaxColour3").forEach(function(x) {
        x.style.color = syntax3;
    });

    document.querySelector("#syntax4Selector").value = syntax4;
    document.querySelectorAll(".syntaxColour4").forEach(function(x) {
        x.style.color = syntax4;
    });

    document.querySelector("#syntax5Selector").value = syntax5;
    document.querySelectorAll(".syntaxColour5").forEach(function(x) {
        x.style.color = syntax5;
    });

    document.querySelector("#syntax6Selector").value = syntax6;
    document.querySelectorAll(".syntaxColour6").forEach(function(x) {
        x.style.color = syntax6;
    });
}

function selectOpenDyslexicFont() {
    document.querySelectorAll(".atomContainer").forEach(function (x) {
        x.style.fontFamily = "OpenDyslexic, Inconsolata, Monaco, Consolas, 'Courier New', Courier";
    });
}

function selectDefaultFont() {
    document.querySelectorAll(".atomContainer").forEach(function (x) {
        x.style.fontFamily = "Inconsolata, Monaco, Consolas, 'Courier New', Courier";
    });
}