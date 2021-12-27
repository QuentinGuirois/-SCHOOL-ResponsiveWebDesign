$(document).ready(function () {

    //slippry//
    $("#slippry").slippry();
    $(".open").pageslide();
    $("#info").click(function () {
        $("#infoP").slideToggle();
    });
    
    //scroll//
    $(function () {
        $.fn.scrollToTop = function () {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() != "0") {
                $(this).fadeIn("slow")
            }
            var scrollDiv = $(this);
            $(window).scroll(function () {
                if ($(window).scrollTop() == "0") {
                    $(scrollDiv).fadeOut("slow")
                } else {
                    $(scrollDiv).fadeIn("slow")
                }
            });
            $(this).click(function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow")
            })
        }
    });
    $(function () {
        $("#toTop").scrollToTop();
    });

    //CHAMPS MAIL//
    $("#verif").click(function () {
        var email = document.getElementById("email");
        if ((email.value == "") || (email.value.includes("@") == false)) {
            email.style.border = "2px solid red";
            $("#texteEnRouge").show();
            document.getElementById("texteEnRouge").innerHTML = "Veuillez vérifier votre email.";
            $("#texteEnRouge").css("color", "red");
        } else {
            email.style.border = "1px solid black";
            $("#texteEnRouge").show();
            document.getElementById("texteEnRouge").innerHTML = "Vous receverez nos news, merci !";
            $("#texteEnRouge").css("color", "Yellow");
    
        }
    })

});



