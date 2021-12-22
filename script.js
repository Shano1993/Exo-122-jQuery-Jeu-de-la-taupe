const moles = $('.mole');
let score = 0;

$('#startGame').on('click', function () {
    let timer = 10;
    function timeFunc() {
        setTimeout(function () {
            let time = Math.floor(Math.random() * (600) + 200);
            let elem = moles.get()[Math.trunc(Math.random() * moles.get().length)];
            if (!$(elem).attr("class").includes("active")) {
                $(elem).addClass("active");
                $(elem).addClass("up");
                $(elem).animate( {
                    top : "20%",
                }, time)
                    .animate( {
                        top : "80%",
                    });
                setTimeout(function (){$(elem).removeClass("active")}, time * 2);
            }

            if (timer > 0) {
                timeFunc();
            }
        }, Math.floor(Math.random() * 2000) + 500);
    }
    function timerChange() {
        setTimeout(function () {
            timer--;
            if (timer > 0) {
                timerChange();
            }
            else if (timer === 0) {
                alert("Votre score est de " + score + " bien joué !");
                location.reload();
            }
        }, 1000);
    }
    timeFunc();
    timerChange();
})

moles.click(function () {
    score++;
    $(this).removeClass("up");
    document.getElementsByClassName("score")[0].innerHTML = score.toString();
})










