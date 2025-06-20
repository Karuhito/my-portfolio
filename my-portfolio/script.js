// スクロールアニメーション
/* 到達したら要素を表示させる */
function showElementAnimation() {
	var elements = document.querySelectorAll('.fadeIn, .clipTo'); // 複数のクラスを対象に
	if (elements.length === 0) return; // 要素がなかったら処理をキャンセル

	var showTiming = window.innerHeight > 768 ? 150 : 60; // 要素が出てくるタイミングをより早く調整
	var scrollY = window.scrollY; // スクロール量を取得
	var windowH = window.innerHeight; // ブラウザウィンドウのビューポート(viewport)の高さを取得

	elements.forEach(function (element) {
		var elemClientRect = element.getBoundingClientRect();
		var elemY = scrollY + elemClientRect.top;
		if (scrollY + windowH - showTiming > elemY) {
			element.classList.add('scrollin');
		} else if (scrollY + windowH < elemY) {
			element.classList.remove('scrollin');
		}
	});
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);