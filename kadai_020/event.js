const btn = document.getElementById('btn');
const h2Text = document.getElementById('text');

btn.addEventListener('click',() => {
	h2Text.textContent='ボタンをクリックしました';
});