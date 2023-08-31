/* document.getElementById("sidebar").addEventListener("click", function() {
    alert("Sidebar Clicked!")
})
*/
document.getElementById("who-am-i").addEventListener("click", function () {
  document.querySelector(".content-blur-bg").style.display = 'block';
  document.querySelector(".content-blur-bg").style.animationName = 'content-blur-bg-in';
  document.querySelector(".popup-slide").style.animationName = 'popup-slide-in';
});

document.querySelector(".card-close").addEventListener("click", function () {
    document.querySelector(".content-blur-bg").style.animationName = 'content-blur-bg-out';
    document.querySelector(".popup-slide").style.animationName = 'popup-slide-out';
    setTimeout(() => {
        document.querySelector(".content-blur-bg").style.display = 'none';
    }, 300);
  });