function showYesPage() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
}
function ifClickedNo(){
    document.getElementById('page3').style.display = 'block';
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'none';
}
function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}