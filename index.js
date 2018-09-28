!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});


var i=0;
$(function(){



    var $btn = $('.section-btn li'),

        $wrap = $('.section-wrap'),

        $arrow = $('.arrow');



    /*当前页面赋值*/

    function up(){
        i++;
        if(i>=$btn.length-1){
            i=$btn.length-1;
        }
    }

    function down(){
        i--;
        if(i<0){
            i=0;
        }
    }



    /*页面滑动*/

    function run(){

        $btn.eq(i).addClass('on').siblings().removeClass('on');

        $wrap.attr("class","section-wrap").addClass(function() { return "put-section-"+i; }).find('.section').eq(i).find('.title').addClass('active');

        $(".left_tab_box").addClass("left_hide");
        $(".left_tab_box").eq(i-1).removeClass("left_hide");

        $(".right-sticky-nav").addClass("right_hide");
        $(".right-sticky-nav").eq(i).removeClass("right_hide");
    };



    /*右侧按钮点击*/

    $btn.each(function(index) {

        $(this).click(function(){

            i=index;

            run();

        })

    });



    /*翻页按钮点击*/

    $arrow.one('click',go);

    function go(){

        up();run();

        setTimeout(function(){$arrow.one('click',go)},1000)

    };



    /*响应鼠标*/

    $wrap.one('mousewheel',mouse_);

    function mouse_(event){

        if(event.deltaY<0) {up()}

        else{down()}

        run();

        setTimeout(function(){$wrap.one('mousewheel',mouse_)},1000)

    };



    /*响应键盘上下键*/

    $(document).one('keydown',k);

    function k(event){

        var e=event||window.event;

        var key=e.keyCode||e.which||e.charCode;

        switch(key)	{

            case 38: down();run();

                break;

            case 40: up();run();

                break;

        };

        setTimeout(function(){$(document).one('keydown',k)},1000);

    }

});
function denglu(){
    $(".aui_outer").show();
    $(".hidediv").show();
}
function zhuce(){
    $(".aui_outer").show();
    $(".txz-b-t a").removeClass("active");
    $(".z a").addClass("active");
    $(".dl1").hide();
    $(".zhuce").show();
    $(".hidediv").show();
}

$(".z").on("click",function(){
    $(".txz-b-t a").removeClass("active");
    $(".z a").addClass("active");
    $(".dl1").hide();
    $(".zhuce").show();
});
$(".d").on("click",function(){
    $(".txz-b-t a").removeClass("active");
    $(".d a").addClass("active");
    $(".dl1").show();
    $(".zhuce").hide();
});
$(".link-1").on("click",function(){
    $(".aui_outer").show();
    $(".txz-b-t a").removeClass("active");
    $(".z a").addClass("active");
    $(".dl1").hide();
    $(".zhuce").show();
    $(".hidediv").show();
})
$(".close").on("click",function(){
   $(".aui_outer").hide();
    $(".hidediv").hide();
});
$(".reg_tabs li").on("click",function(){
    $(this).addClass("this_reg").siblings().removeClass("this_reg");
    var i=$(this).index();
    if(i==0){
        $(".register_pc_putong").show();
        $(".register_pc_phone").hide();
    }else if(i==1){
        $(".register_pc_putong").hide();
        $(".register_pc_phone").show();
    }
});

$(".index-page-top-btn").on("click",function(){
    $(this).hide();
    $(".index-page-gift-regno").show();
});
$(".index-page-gift-regno-close").on("click",function(){
    $(".index-page-gift-regno").hide();
    $(".index-page-top-btn").show();
});

$(".video_tab_ul li").on("click",function(){
    $(this).addClass("act").siblings().removeClass("act");
    var i=$(this).index();
    $(".world_bg").hide();
    $(".world_bg").eq(i).show();
    $(".world_video").get(0).src=i+".mp4";
})

$(".li").on("click",function(){
    $(".li").removeClass("act");
    $(this).addClass("act");
    var i=$(this).index(".li");
    $(".school_content_box").get(0).style.backgroundImage="url(images/bg"+i+".jpg)";
    $(".school_message_box").eq(i).css("display","block").siblings().css("display","none");
    $(".school_text").css("display","none");
    $(".school_video_btn").css("display","none");
    $(".school_text").eq(i).fadeIn(1500);
    $(".school_video_btn").eq(i).fadeIn(1500);
});
$("#tabs3 li").mouseover(function(){
    $(this).addClass("thistab").siblings().removeClass("thistab");
    $(this).css("text-decoration","underline").siblings().css("text-decoration","none");
    var i=$(this).index();
    $("#tab_conbox3 .config_txt").hide();
    $("#tab_conbox3 .config_txt").eq(i).show();
});
$("#tabs4 li").mouseover(function(){
    $(this).addClass("thistab").siblings().removeClass("thistab");
    $(this).css("text-decoration","underline").siblings().css("text-decoration","none");
    var i=$(this).index();
    $("#tab_conbox4 .config_txt").hide();
    $("#tab_conbox4 .config_txt").eq(i).show();
});

$(".aui_close").on("click",function(){
   $("div").eq(0).hide();
    $(".lastdiv").hide();
});
$(".school_video_btn").on("click",function(){
    $("div").eq(0).show();
    $(".lastdiv").show();
})

var video=document.getElementsByTagName("video")[0];
var volume=document.getElementsByClassName("controlbar-volumeline-point")[0];
var playedline=document.getElementsByClassName("controlbar-progress-playedline")[0];
var totalline=document.getElementsByClassName("controlbar-progress-totalline")[0];
var playtime=document.getElementsByClassName("controlbar-playtime")[0];
var totaltime=document.getElementsByClassName("controlbar-totaltime")[0];
var progress=document.getElementsByClassName("controlbar-progress")[0];
var playpoint=document.getElementsByClassName("controlbar-progress-playpoint")[0];
video.onclick=aa;
video.ondblclick=bb;
var isdb;
var timer;
function aa(){
    isdb=false;
    timer=setTimeout(cc,500);
    function cc() {
        if(isdb==false) {
            if ($(".controlbar-btns-play").hide()) {
                $(".big-play-btn").show();
                $(".controlbar-btns-play").show();
                $(".controlbar-btns-pause").hide();
                video.pause();
            }
        }
    }
}
function bb(){
    isdb=true;
    clearTimeout(timer);
    video.webkitRequestFullscreen();
    $(".big-play-btn").hide();
    $(".controlbar-btns-play").hide();
    $(".controlbar-btns-pause").show();
}

$(".controlbar-btns-pause").on("click",function(){
    video.pause();
    $(this).hide();
    $(".big-play-btn").show();
    $(".controlbar-btns-play").show();
});
var flag=true;
$(".controlbar-btns-soundopen").mouseover(function(){
    $(".controlbar-volumeline-box").show();
});
$(".controlbar-volumeline-box").mouseover(function(){
    flag=false;
        $(".controlbar-volumeline-box").show();
});
$(".controlbar-volumeline-box").mouseout(function(){
        $(".controlbar-volumeline-box").hide();
});
$(".controlbar-btns-soundopen").mouseout(function(){
        flag=true;
        var timer = setTimeout(function () {
            if(flag) {
                $(".controlbar-volumeline-box").hide();
            }else{
                return;
            }
        }, 1000);
});
$(".controlbar-btns-soundopen").on("click",function(){
    $(this).hide();
    $(".controlbar-btns-soundclose").show();
    video.muted=true;
});
$(".controlbar-btns-soundclose").on("click",function(){
    $(this).hide();
    $(".controlbar-btns-soundopen").show();
    video.muted=false;
});
$(".controlbar-btns-fullscreen").click(function(){
   video.webkitRequestFullscreen();
});
$(".controlbar-volumeline-point").on("mousedown",function(e){
    var position= e.pageX-volume.style.bottom;
    var percentage=100*position/100;
    video.volume=percentage/100;
});
function sTom(time){
    var str="";
    var time=Math.round(time);
    var min=Math.floor(time/60);
    var sec=time%60;
    str+=min>9 ? min:"0"+min;
    str+=":";
    str+=sec>9 ? sec:"0"+sec;
    return str;
}

function getProgress(){
    playtime.innerHTML=sTom(video.currentTime);
    var percent=video.currentTime/video.duration;
    playedline.style.width=totalline.offsetWidth*percent+"px";
    playpoint.style.left= totalline.offsetWidth*percent-7+"px";
    if(video.currentTime==video.duration){
        video.pause();
        $(".big-play-btn").show();
        $(".controlbar-btns-play").show();
        $(".controlbar-btns-pause").hide();
    }
}
function play(){
    if(video.paused){
        video.play();
        $(".controlbar-btns-play").hide();
        $(".big-play-btn").hide();
        $(".controlbar-btns-pause").show();

        totaltime.innerHTML=sTom(video.duration);

    }else{
        video.pause();
    }
}
var time=setInterval(getProgress,1);
progress.onmousedown=function(e){
    var percent= e.offsetX/progress.offsetWidth;
    video.currentTime=video.duration*percent;
    playedline.style.width= e.offsetX+"px";
}
$(".link-4").on('click', function () {
    $(".section-wrap").removeClass("put-section-1").removeClass("put-section-2").removeClass("put-section-3").addClass("put-section-0");
    i=0;
});