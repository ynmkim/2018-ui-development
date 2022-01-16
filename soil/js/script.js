$(function(){
    
//전체메뉴 열기
    $(".btn-all-menu").on("click",function(){
        $(".all-menu-wrap").addClass("on");
    });
    $(".btn-allmenu-close").on("click",function(){
        $(".all-menu-wrap").removeClass("on");
    });
    
//검색창 열기
    $(".btn-all-search").on("click",function(){
        $(".search-hidden-wrap").addClass("on");
    });
     $(".btn-search-close").on("click",function(){
        $(".search-hidden-wrap").removeClass("on");
    });
    

//메인 이미지 슬라이드
	var visual = $(".slide>ul>li");
	var button = $(".dot_set>ul>li");
	var current = 0;
	var setIntervalId;
	
	button.click(function(){
		var i = $(this).index();
		button.removeClass("on");
		$(this).addClass("on");

		move(i);
		
	});
	
	timer();
    
	function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == 3){
                n=0;
            }
            button.eq(n).trigger('click');
        },4000);
		
	}	
		
	function move(i){
		if(current == i) return;
		
		var currentElem = visual.eq(current);
		var nextElem = visual.eq(i);
		
		currentElem.css("left","0").stop().animate({left:"-100%"});
		nextElem.css("left","100%").stop().animate({left:"0"});
		
		current = i
	}
	
    //재생 버튼 멈춘 버튼 동작

	$(".button4").click(function(){
		
		if($(this).hasClass("live") == true){
		
		clearInterval(setIntervalId);
            $(this).removeClass("live");
		}else{
			$(this).addClass("live");
            
			timer();	
		}	
		return false;
		
	});
	
    //new slide
  
    
    var list = $(".news_slide>ul");
    var num = 0;
    var total = $(">li",list).length;
    var liWidth = $("li:first",list).width();
    
    
    $(".next").on("click",function(){
        if(num==total-1){
            num=0;
            list.css("margin-left",num);
        }
        num++;
        list.stop().animate({marginLeft:-liWidth*num+"px"},600)
        return false;
        
    });
    
    $(".prev").on("click",function(){
        if(num==0){
            num=total;
            list.css("margin-left",-num*liWidth+"px");
        }
        num--;
        list.stop().animate({marginLeft:-liWidth*num+"px"},600)
        return false;
        
    });
    
//뉴스 arrow버튼 숨어있다가 나타나기 오류 해결하기
    $(".news").mouseover(function(){
        $(".btn_arrow").toggleClass("on");
     });
        
//패밀리 사이트 링크
    $(".familysite ul li").on("click",function(){
        $(this).toggleClass("on");
        $(this).find("ul").toggleClass("on");
    });

//메인 탑으로 가기
    $(".scroll_top").on("click",function(){
        $("html, body").animate({scrollTop:0},"slow")
    });
    
   
	
});


  
    
