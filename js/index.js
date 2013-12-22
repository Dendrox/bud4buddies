function start() {
    setTimeout(function () {
        
            window.location = "file:///android_asset/www/open.html";
        
    }, 1000);
};

function navigate(pageid){
        $('.page').hide();
        setTimeout(function(){if(pageid){         
             
          $('#' + pageid).show();

           myScroll.refresh();
            myScroll2.refresh();
            myScroll3.refresh();
            myScroll4.refresh();
            myScroll5.refresh();
            myScroll6.refresh();

       }},150)

        
     };

     function goBack(){

     }

     

function loginForm(){
	window.location = "file:///android_asset/www/login_form.html";
};

function regForm(){
	window.location = "file:///android_asset/www/reg_form.html";
};

function myMenu(){
	window.location = "file:///android_asset/www/home.html";
};

var myScroll, myScroll2, myScroll3, myScroll4, myScroll5, myScroll6;
function loaded() {
	setTimeout(function () {
		myScroll = new iScroll('friend_list', { hScrollbar: false, vScrollbar: false });
        myScroll2 = new iScroll('sent_list', { hScrollbar: false, vScrollbar: false });
        myScroll3 = new iScroll('received_list', { hScrollbar: false, vScrollbar: false });
        myScroll4 = new iScroll('stock_list', { hScrollbar: false, vScrollbar: false });
        myScroll5 = new iScroll('king_list', { hScrollbar: false, vScrollbar: false });
        myScroll6 = new iScroll('choose_list', { hScrollbar: false, vScrollbar: false });
   
	}, 100);


}
document.addEventListener('DOMContentLoaded', loaded, false);




function Choose(){
	window.location = "file:///android_asset/www/choose_a_buddie.html";
}

    function myButton1(){
     var oldSrc = 'img/buddies_button.png';
     var newSrc = 'img/buddy_but_on.png';
     $('img[src="' + oldSrc + '"]').attr('src', newSrc);
     
     setTimeout(function(){
        $('img[src="' + newSrc + '"]').attr('src', oldSrc);
    }, 500)

     
    };  

    function myBuds(){
     var oldSrc = 'img/buds_button.png';
     var newSrc = 'img/buds_on.png';
     $('img[src="' + oldSrc + '"]').attr('src', newSrc);

     setTimeout(function(){
        $('img[src="' + newSrc + '"]').attr('src', oldSrc);
    }, 500)

    };  

    function myPromo(){
     var oldSrc = 'img/code_button.png';
     var newSrc = 'img/promo_on.png';
     $('img[src="' + oldSrc + '"]').attr('src', newSrc);

     setTimeout(function(){
        $('img[src="' + newSrc + '"]').attr('src', oldSrc);
    }, 500)
    };  

    function myKing(){
     var oldSrc = 'img/king_button.png';
     var newSrc = 'img/king_on.png';
     $('img[src="' + oldSrc + '"]').attr('src', newSrc);

     setTimeout(function(){
        $('img[src="' + newSrc + '"]').attr('src', oldSrc);
    }, 500)
    };  

    function mySend(){
     var oldSrc = 'img/send_button.png';
     var newSrc = 'img/send_on.png';
     $('img[src="' + oldSrc + '"]').attr('src', newSrc);

     setTimeout(function(){
        $('img[src="' + newSrc + '"]').attr('src', oldSrc);
    }, 500)
    };  

    function myProfile(){
     var oldSrc = 'img/profile_button.png';
     var newSrc = 'img/profile_on.png';
     $('img[src="' + oldSrc + '"]').attr('src', newSrc);

     setTimeout(function(){
        $('img[src="' + newSrc + '"]').attr('src', oldSrc);
    }, 500)
    }; 

    function mySent(){
     var oldSrc = 'img/sent_button.png';
     var newSrc = 'img/sent_on.png';
     $('img[src="' + oldSrc + '"]').attr('src', newSrc);

     setTimeout(function(){
        $('img[src="' + newSrc + '"]').attr('src', oldSrc);
    }, 500)
    };  

    function myRec(){
     var oldSrc = 'img/rec_button.png';
     var newSrc = 'img/rec_on.png';
     $('img[src="' + oldSrc + '"]').attr('src', newSrc);

     setTimeout(function(){
        $('img[src="' + newSrc + '"]').attr('src', oldSrc);
    }, 500)
    };  

    function myStock(){
     var oldSrc = 'img/stock_button.png';
     var newSrc = 'img/stock_on.png';
     $('img[src="' + oldSrc + '"]').attr('src', newSrc);

     setTimeout(function(){
        $('img[src="' + newSrc + '"]').attr('src', oldSrc);
    }, 500)
    };  

    function mySendBox(){
        setTimeout(function(){$('#send_message').css("display","block")}, 200)
        
    }

    function cancelSendBox(){
        $('#send_message').css("display","none")
    }

    document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() {
    $(".page").hide();
    setTimeout(function(){
        $('#page4').show();
    }, 100);
};
