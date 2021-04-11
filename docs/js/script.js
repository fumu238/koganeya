let mySwiper = new Swiper(".swiper-container", {
	
	// オートプレイ
	autoplay: {	
		delay: 4000,
	},
	loop: true, //最後に達したら先頭に戻る
    speed: 700,
    effect: "fade",

	//ページネーション
	pagination: {
		el: ".swiper-pagination", //ページネーションの要素
		type: "bullets", //ページネーションの種類
		clickable: true, //クリックに反応させる
	},

	//ナビゲーションボタン
	navigation: {
		nextEl: ".swiper-button-next", //「次へボタン」要素の指定
		prevEl: ".swiper-button-prev", //「前へボタン」要素の指定
	},

	//スクロールバー
	scrollbar: {
		el: ".swiper-scrollbar", //要素の指定
	},
});


// jQuery
$(function(){

	$('.burger_nav').click(function() {

			$('.gnav').toggleClass('gnav-open'); // メニューオープン
			// $('body').toggleClass('noscroll'); // スクロール禁止
			$('.burger_nav__line').toggleClass('cross'); // ボタン変形
			$('.burger_nav__txt').toggleClass('cross'); // ボタン変形

		
	})

});