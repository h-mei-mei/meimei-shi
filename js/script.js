// JavaScript Document


/************************************************************/

/*ハンバーガーメニュー*/

/************************************************************/


// メニュー開閉制御
$("#js-hamburger").on('click', function(){ //ハンバーガーボタンが選択されたら
  $("#js-hamburger").toggleClass("-active");
  $(".js-nav-area").toggleClass("-active");
});

window.addEventListener('resize', (e) => {//ウィンドウサイズが変更されたらメニューを閉じる
    $("#js-hamburger").removeClass("-active");
    $(".js-nav-area").removeClass("-active");
    $("#js-hamburger").focus();
});

// フォーカストラップ制御
$("#js-focus-trap").focus(function () {
  $("#js-hamburger").focus();
});

//アコーディオンをクリックした時の動作
$('.humberger-menu-btn').on('click', function() {//タイトル要素をクリックしたら
	$('.box').slideUp(300);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
	var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去    
	}else{//それ以外は
		$('.close').removeClass('close'); //クラス名closeを全て除去した後
		$(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
		$(findElm).slideDown(300);//アコーディオンを開く
	}
});