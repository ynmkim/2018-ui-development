$(function(){
    
    var startFlag = false;
    
    setTimeout(function(){
        $("body,html").animate({scollTop:0},300,function(){
            startFlag=true;
            $(window).trigger("scroll");
        });
    },150);
    
    $(window).scroll(function(){
        if(startFlag == false){
            return false;
        }
    });
    
    var gap = 250; 
    
    var top1 = $(".sec_main").offset().top - gap;
    var top2 = $(".sec01").offset().top - gap;
    var top3 = $(".sec02").offset().top - gap;
    var top4 = $(".sec_banner").offset().top - gap;
    var top5 = $(".sec03").offset().top - gap;
    var top6 = $(".sec04").offset().top - gap;
    var top7 = $(".sec05").offset().top - gap;
    var top8 = $(".sec06").offset().top - gap;
    

    $(window).scroll(function(){
        var h = $(this).scrollTop(); 
    
        if(h>= 135){
           $(".header_bottom").addClass("on");
        }
        else{
            $(".header_bottom").removeClass("on");
        }
      
        if(h >= top1 && h < top2){
            $("section").removeClass("on");
            $(".sec_main").addClass("on");
            $(".background img").addClass("on");
        }
        if(h >= top2 && h < top3){
            $("section").removeClass("on");
            $(".sec01").addClass("on");
            $(".sec01 h1").addClass("on");
            $(".sec01 p").addClass("on");
            $(".left_polar>a").addClass("on");
            $(".right_bath>a").addClass("on");
        }
        if(h >= top3 && h < top4){
            $("section").removeClass("on");
            $(".sec02").addClass("on");
            $(".tab_img").addClass("on");
            $(".prd_info").addClass("on");
            $(".tab_btn").addClass("on");
            $(".tab_txt").addClass("on");
        }
        //수정하기 
        /*if(h >= top4 && h < top5){
            $("section").removeClass("on");
            $(".sec_banner").addClass("on");
        }*/
        if(h >= top5 && h < top6){
            $("section").removeClass("on");
            $(".sec03").addClass("on");
            $(".img_box>span").addClass("on");
          /*$(".txt_box dl>dt>p").delay(500).fadeIn(1000);
            $(".txt_box dl>dt>strong").delay(600).fadeIn(1000);
            $(".txt_box dl>dd>p").delay(700).fadeIn(1000);
            $(".txt_box dl>dd>p").eq(1).delay(800).fadeIn(1000);
            $(".txt_box dl>dd>p").eq(2).delay(900).fadeIn(1000); */
        }
        
        if(h >= top6 && h < top7){
            $("section").removeClass("on");
            $(".sec04").addClass("on");
        }
        if(h >= top7 && h < top8){
            $("section").removeClass("on");
            $(".sec05").addClass("on");
        }
        if(h >= top8){
            $("section").removeClass("on");
            $(".sec06").addClass("on");
        }
        
       //마지막 콘텐츠의 수직 높이
       /*if(t == $(document).height()-$(window).height()){            
       }*/
    

        
    });

    
    //메뉴 열림
    
    $(".gnb_in>ul.nav>li").mouseenter(function(){
        $(".gnb_b").slideDown(300);
        $(".gnb_in>ul.nav li ul").slideDown(300);

    });
    
     $(".gnb_b").mouseleave(function(){
        $(".gnb_b").slideUp(300);
        $(".nav li ul").slideUp(300);
    });

   
    
    
   $(".tab_btn>li").on("click",function(){
        
        var nnn = $(this).index();    
        $(".tab_btn>li").removeClass("on");
        $(this).addClass("on");
       
        $(".tab_txt>li").css("display","none");
        $(".tab_txt>li").eq(nnn).css("display","block"); 
       
        $(".prd_info>li").css("display","none");
        $(".prd_info>li").eq(nnn).css("display","block");
       
        $(".tab_img>li").css("display","none");
        $(".tab_img>li").eq(nnn).css("display","block");
       
		
   });
        

        $(".sec04 dl dd ul li").mouseover(function(){
            $(".btn_more").addClass("on") 
        });

        $(".sec04 dl dd ul li").mouseout(function(){
            $(".btn_more").removeClass("on")
        });
    
    
    
        var tabBtn = $(".tab_btn li"); 
    
        tabBtn.eq(0).click(function(){
            $(this).find("img").attr("src","images/mprd_tabicon01_on.png");
            $(this).siblings().find("img").attr("src","images/mprd_tabicon02_off.png");        
        });
        tabBtn.eq(1).click(function(){
            $(this).find("img").attr("src","images/mprd_tabicon02_on.png");
            $(this).siblings().find("img").attr("src","images/mprd_tabicon01_off.png");        
        });
    
            
    
    
        
});