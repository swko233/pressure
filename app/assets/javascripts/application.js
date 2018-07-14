// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
// require_tree .

// ヘッダー
$(function(){

	var element = '.follow-header';
	var lastY = 0;
	var minY = $(element).height();
	$(window).on('scroll', updateScroll);


	function updateScroll(e) {
	  var y = $(window).scrollTop();
	  if (y < lastY) {
	    scrollUp(y);
	  } else if (y > lastY) {
	    scrollDown(y);
	  }
	  lastY = y;
	  console.log(y, lastY)//テスト用
	}

	function scrollUp(y) {
	  $(element).removeClass('is-close');
	  if (y > minY) {
	    if(!$(element).hasClass('is-open')) {
	      $(element).addClass('is-open');
	    }
	  } else if(y <= 0){
	    $(element).removeClass('is-open');
	  }
	}

	function scrollDown(y) {
	  if (y > minY) {
	    if($(element).hasClass('is-open')) {
	      $(element).removeClass('is-open');
	      $(element).addClass('is-close');
	    }
	  }
	}



	// function throttle(fn,wait){
	// 	var time = Date.now();
	// 	return function(){
	// 		if((time + wait - Date.now()) < 0){
	// 			fn();
	// 			time = Date.now();
	// 		}
	// 	}
	// }


	// var refPos = 0, nowPos = 0;
	// var Header = '.follow-header'

	// $(window).scroll(function(){
		
	// 	nowPos = $(window).scrollTop();
	// 	if (nowPos > refPos) {
	// 		console.log(refPos,nowPos);
	// 			$(Header).addClass('hidebar');
	// 			$(Header).removeClass('activebar');
	// 	} else if (nowPos < refPos) {
	// 		console.log(refPos,nowPos,nowPos);
	// 			$(Header).removeClass('hidebar');
	// 			$(Header).addClass('activebar');
	// 		// document.getElementsByClassName("follow-header").ClassList.remove("hide");
	// 	}

	// 	refPos = nowPos;


	// // 	// if (nowPos >= refPos){
	// // 	// 	// 下スクロール時
	// // 	// 	$('.follow-header').addClass('hide');
	// // 	// }else if (nowPos < refPos){
	// // 	// 	// 上スクロール時
	// // 	// 	$('.follow-header').removeClass('hide');
	// // 	// }
		
	// // 	// refPos = nowPos; //基準位置更新
	// });
});



