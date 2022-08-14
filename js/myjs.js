$(document).ready(function(){
    $('a.scrollPage').click(function(e){
        e.preventDefault(); //책갈피기능 막기
        $('bady, html').animate({
            scrollTop : $($(this).attr('href')).offset().top
        }, 400, function(){

        }
        )
    })

    })