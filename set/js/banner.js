// $.noConflict();
// var bby$ = jQuery;

$(function(){
    var _classNm = 'next';
        var autoTimer = setInterval( function(){
                _setTimefun($('.timer').html(), _classNm); 
            } ,1000) // 아이디: 다른 변수를 못 쓴다는 뜻. autoTimer라고 부르자는 뜻. 아이디를 지정해두어야 정지시킬 수 있다.
        
        $('button').click(function(){            
                // 다음버튼 실행
                clearInterval(autoTimer); // 자동롤링멈춰 바로 정지
                var _classNm = $(this).attr('class'); // class 이름 저장
                _setTimefun($('.timer').html(), _classNm);
        
                // 버튼을 누르고 1초가 지나면 실행 다시 버튼을 클릭했을 때
                // clearInterval(autoTimer); 가 실행되도록 같은 이름에 저장하게 해줘야한다.
                autoTimer = setInterval( function(){
                _setTimefun($('.timer').html(), _classNm); 
            } ,1000)

        })

        
        function _setTimefun(count, dir){ // 매개인자의 변수는 실행할 때 값을 넣어주면서 사용
            if( dir == 'next' ) { 
                if( count < 4 )  count++; else count = 0;
            }
            else {  //count--; count = Math.abs(count);
                if( count > 0 )  count--; else count = 4;
            }
            
            $('.timer').html(count);
        }
})