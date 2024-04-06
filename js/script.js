// JavaScript Document

//文字サイズ拡大ボタン
$('.font-size-btn-1').on('click', function() {
	document.documentElement.style.fontSize = '150%';
	$('html').css('font-size', '150%');
});

//文字サイズ標準ボタン
$('.font-size-btn-2').on('click', function() {
	document.documentElement.style.fontSize = '150%';
	$('html').css('font-size', '62.5%');
});

//背景黒ボタン
$('.bg-btn-1').on('click', function() {
	$('body').addClass("darkmode");
});

//背景白ボタン
$('.bg-btn-2').on('click', function() {
	$('body').removeClass("darkmode");
});


/************************************************************/

/*ダークモード関係*/

/************************************************************/
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const darkModeOn = darkModeMediaQuery.matches;
 
darkModeMediaQuery.addListener((e) => {
    const darkModeOn = e.matches;
    if (darkModeOn) { // Dark
        document.body.classList.add("darkmode");
    } else { // Light
        document.body.classList.remove("darkmode");
    }
});

