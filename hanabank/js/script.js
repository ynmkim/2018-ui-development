$(function(){
    
//language 메뉴 열기
    $("header .top_gnb .potal_link>ul>li.lang").click(function(){
        $("header .top_gnb .potal_link>ul>li.lang>ul").slideToggle();
    });
//전체메뉴 열기
    $(".all_menu").on("click",function(){
        $(".btn_menu").toggleClass("on");
        $(".all-menu-wrap").toggleClass("on")
    });
//메인 메뉴 hover시에 전체메뉴 닫히기
    $(".bottom_nav").mouseover(function(){
        $(".all-menu-wrap").removeClass("on");
    });


// family site 메뉴 열기
    $(".family_site>ul>li.site1").click(function(){
        $(".family_site>ul>li.site1>ul").toggleClass("on");
        $(".family_site>ul>li.site1").toggleClass("on");
    });

    $(".family_site>ul>li.site2").click(function(){
        $(".family_site>ul>li.site2>ul").toggleClass("on");
        $(".family_site>ul>li.site2").toggleClass("on");  

    });
 
        
//메인 슬라이드 배너
    
    var container = $(".slide-container"),
        slideGroup = container.find(".slider"),
        slides = slideGroup.find("li"),
        navPrev = container.find(".slide-nav .prev"),
        navNext = container.find(".slide-nav .next"),
        indicator = container.find(".indicatior"),
        playController = $(".play-control a"),
        slideCount = slides.length,
        indicatorHtml ="",
        currentIndex = 0,
        duration = 500,
        interval = 3500,
        timer;
        
        //슬라이드 가로 배열
    
        slides.each(function(i){
            var newLeft = i * 100 + "%";
            $(this).css({left:newLeft});
            //반복문으로 a 태그 만들기 
            indicatorHtml += '<a href="#">' + (i + 1) + '</a>';
            //console.log(indicatorHtml);
        });
        indicator.html(indicatorHtml); // a태그 넣어주기
        
        //슬라이드 이동 함수
        function goToSlide(index){
            slideGroup.animate({left:-100 * index + "%"},duration);
            currentIndex = index;
            activeIndicator();
            
        }
        //인디케이터 스타일 추가
        function activeIndicator(){
            indicator.find("a").removeClass("active");
            indicator.find("a").eq(currentIndex).addClass("active");
        }
        //인디케이터로 이동
        indicator.find("a").on("click focusin", function(e){
            e.preventDefault;
            var idx = $(this).index();
            goToSlide(idx);
        });
        //좌우버튼으로 이동
        navPrev.click(function(e){
            e.preventDefault();
            if(currentIndex > 0){
                goToSlide(currentIndex - 1);
            }else{
                goToSlide(slideCount - 1);
            }
        });
        
        navNext.click(function(e){
            e.preventDefault();
            if(currentIndex < slideCount -1){
                goToSlide(currentIndex + 1);
            }else{
                goToSlide(0);
            }
        });
        //자동 슬라이드 함수
        function startTimer(){
            timer = setInterval(function(){
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);
            },interval);
        }
        startTimer();
        indicator.find("a").eq(0).addClass("active");
        
        //멈춤 버튼 컨트롤 함수
        function stopTimer(){
            clearInterval(timer);
        }
    
        playController.click(function(e){
            if($(this).hasClass("live") == true){
                $(this).removeClass("live"); 
                
                startTimer();    
            }else{
                $(this).addClass("live");
                stopTimer();
                
            }
           
        });
       
    
        //본문 콘텐츠 슬라이드 배너 slick slider 라이브러리 사용
        
        $(".slide-slick").slick({
            autoplay:true,
            arrows:false,
            pauseOnHover:true,
            dots:true
        });
        
        var slickNav = $(".slide-nav"),
            slickPrev = slickNav.find(".prev"),
            slickNext = slickNav.find(".next"),
            slickPlay = slickNav.find(".play"),
            slickPause = slickNav.find(".pause");
        
        slickPrev.click(function(){
            $(".slide-slick").slick("slickPrev");
        });
        slickNext.click(function(){
            $(".slide-slick").slick("slickNext");    
        }); 
        slickPlay.click(function(){
            $(".slide-slick").slick("slickPlay"); 
        }); 
        slickPause.click(function(){
            $(".slide-slick").slick("slickPause"); 
        });
          
});