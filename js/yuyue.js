$(function() {
    //   var _defaults = {
    //         "effect": 500,
    //         "pages": [],
    //         cur: 0,
    //         _lock: false
    //     }
    //     var methods = {
    //         init: function() {
    //             var _this = this;
    //             this.addClass("dn-scroller");
    //             this.$pages = $("<ul class='pages'></ul>");
    //             this.$buttons = $("<ul class='buttons'></ul>");
    //             $.each(this.pages, function(i, data) {
    //                 var $li = $("<li></li>");
    //                 $li.append($(data).addClass("page"));
    //                 console.log($(data))
    //                 // 指向dom元素 如需获取jQuery对象使用$(this）
    //                 _this.$pages.append($li);
    //                 _this.$buttons.append("<li class='" + (i == 0 ? 'active' : '') + "'></li>");
    //             })
    //             this.append(this.$pages);
    //             this.append(this.$buttons);
    //         },
    //         _scroll: function() {
    //             var _this = this;
    //             this.$pages.css({
    //                 transform: "translateY(-" + this.cur + "00%)"
    //             });
    //             this._lock = true;
    //             window.setTimeout(function() {
    //                 _this._lock = false;
    //                 _this.$buttons.find(":eq(" + _this.cur + ")").addClass("active").siblings().removeClass("active")
    //             }, this.effect);
    //         },
    //         _handle: function() {
    //             var _this = this;
    //             this.on("mousewheel", function(e) {
    //                 if (_this._lock) return;
    //                 if (e.originalEvent.wheelDelta < 0) {
    //                     if (_this.cur == _this.pages.length - 1) {
    //                         return;
    //                     }
    //                     _this.cur++;
    //                 } else {
    //                     if (_this.cur == 0) {
    //                         return;
    //                     }
    //                     _this.cur--;
    //                 }
    //                 _this._scroll();
    //             });
    //             this.$buttons.find("li").on("click", function() {
    //                 _this.cur = $(this).index();
    //                 _this._scroll();
    //             })
    //         }
    //     }
    //     $.fn.dn_scroll = function(options) {
    //         this.extend(methods); //集成 method是方法
    //         this.extend(_defaults);
    //         this.extend(options);

    //         this.init();
    //         this._handle();
    //     };
    //     $(function() {
    //         $("body").dn_scroll({
    //             // "effect": 800,
    //             // "pages": ["#page1", "#page2",'#page3']
    //         });
    //     })
    // 注册按钮  
    $('.yuyuezhuce,.yue_hov ').click(function() {
        $('#libao').css('display', 'block');
        $('.shadow_pop').show();
        // $('.yexing').show();s
    })
    $('#libao .close, .yexing .close').click(function() {
            $('#libao,.shadow_pop,.yexing').hide();


        })
        // 二屏左侧
    $('.yue_hov,.flow_yue_hov ').hover(function() {
        $('.yue_hov').find('.flow_yue_hov').css('display', 'block')
    })
    $('.yue_hov, flow_yue_hov').mouseleave(function() {
            $('.yue_hov').find('.flow_yue_hov').css('display', 'none')
        })
        // 二屏鼠标划过图片的切换 
    // $('.diyipai').hover(function() {
    //     // debugger
    //     $('.huahuan span img').attr('src', 'image/1.png');
    // })
    // $('.dierpai').hover(function() {
    //     $('.huahuan  img').attr('src', 'image/2.png');
    // })
    // $('.disanpai').hover(function() {
    //     $('.huahuan  img').attr('src', 'image/3.png');
    // })
    // $('.disipai').hover(function() {
    //     $('.huahuan  img').attr('src', 'image/4.png');
    // })
    // $('.diwupai').hover(function() {
    //    $('.huahuan  img').attr('src', 'image/2.png');
    // })
    // $('.diyipai,.dierpai,.disanpai,.disipai,.diwupai').mouseleave(function() {
    //     $('.huahuan img').attr('src', 'image/1.png');

    // })
    var aciti=$('div.page2').find('.aciti');
     aciti.find('div.titles').on('mouseenter','a',function(){
        // $(this).addClass('current').siblings('a').removeClass('current'); 22+24
        var index= aciti.find('div.titles').find('a').index($(this));
        console.log(index)
        aciti.find('div.huahuan').find('div').removeClass('current').eq(index).addClass('current');
     })
})
