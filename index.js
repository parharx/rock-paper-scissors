// computer



$($("button")[0]).click(function (){
    $($("img")[0]).attr("src","img1.png");

    var randomNumber = Math.floor(Math.random() * 3 + 1);
    var randomImage = "img" + randomNumber + ".png";

    var refresh = document.querySelectorAll("img")[1].setAttribute("src",randomImage);

    if (randomNumber === 2){
        $("h1").text("You Lost.💔")
    }
    else if(randomNumber === 1){
        $("h1").text("Tie.👀")
    }
    else if(randomNumber === 3) {
        $("h1").text("You win.❤")
    }
    else{
        console.log();
    }

});

$($("button")[1]).click(function (){
    $($("img")[0]).attr("src","img2.png");
    var randomNumber = Math.floor(Math.random() * 3 + 1);
    var randomImage = "img" + randomNumber + ".png";

    var refresh = document.querySelectorAll("img")[1].setAttribute("src",randomImage);

    if (randomNumber === 3){
        $("h1").text("You Lost.💔")
    }
    else if(randomNumber === 2){
        $("h1").text("Tie.👀")
    }
    else if(randomNumber === 1) {
        $("h1").text("You win.❤")
    }
    else{
        console.log();
    }

});

$($("button")[2]).click(function (){
    $($("img")[0]).attr("src","img3.png");
    var randomNumber = Math.floor(Math.random() * 3 + 1);
    var randomImage = "img" + randomNumber + ".png";

    var refresh = document.querySelectorAll("img")[1].setAttribute("src",randomImage);

    if (randomNumber === 1){
        $("h1").text("You Lost.💔")
    }
    else if(randomNumber === 3){
        $("h1").text("Tie.👀")
    }
    else if(randomNumber === 2) {
        $("h1").text("You win.❤")
    }
    else{
        console.log();
    }

});
