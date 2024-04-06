// JavaScript Document


/************************************************************/

/*ハンバーガーメニュー*/

/************************************************************/
// メニュー展開時に背景を固定
const backgroundFix = (bool) => {
  const scrollingElement = () => {
    const browser = window.navigator.userAgent.toLowerCase();
    if ("scrollingElement" in document) return document.scrollingElement;
    return document.documentElement;
  };

  const scrollY = bool
    ? scrollingElement().scrollTop
    : parseInt(document.body.style.top || "0");

  const fixedStyles = {
    height: "100vh",
    position: "fixed",
    top: `${scrollY * -1}px`,
    left: "0",
    width: "100vw"
  };

  Object.keys(fixedStyles).forEach((key) => {
    document.body.style[key] = bool ? fixedStyles[key] : "";
  });

  if (!bool) {
    window.scrollTo(0, scrollY * -1);
  }
};

// 変数定義
const CLASS = "-active";
let flg = false;
let accordionFlg = false;

let hamburger = document.getElementById("js-hamburger");
let focusTrap = document.getElementById("js-focus-trap");
let menu = document.querySelector(".js-nav-area");

// メニュー開閉制御
hamburger.addEventListener("click", (e) => { //ハンバーガーボタンが選択されたら
  e.currentTarget.classList.toggle(CLASS);
  menu.classList.toggle(CLASS);
  if (flg) {// flgの状態で制御内容を切り替え
    backgroundFix(false);
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.focus();
    flg = false;
  } else {
    backgroundFix(true);
    hamburger.setAttribute("aria-expanded", "true");
    flg = true;
  }
});

window.addEventListener('resize', (e) => {//ウィンドウサイズが変更されたらメニューを閉じる
  hamburger.classList.remove(CLASS);
  menu.classList.remove(CLASS);
    backgroundFix(false);
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.focus();
    flg = false;
});

window.addEventListener("keydown", () => {　//escキー押下でメニューを閉じられるように
  if (event.key === "Escape") {
    hamburger.classList.remove(CLASS);
    menu.classList.remove(CLASS);

    backgroundFix(false);
    hamburger.focus();
    hamburger.setAttribute("aria-expanded", "false");
    flg = false;
  }
});

// フォーカストラップ制御
focusTrap.addEventListener("focus", (e) => {
  hamburger.focus();
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