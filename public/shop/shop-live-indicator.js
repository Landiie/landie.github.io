fetch("https://decapi.me/twitch/uptime/landie/?offline_msg=notstreaming")
  .then(resp => resp.text())
  .then(status => {
    if (status != "notstreaming") {
      //im live!
      document.querySelector(".live-indicator").style.display = "";
      document.querySelector(".shop-header-nav").classList.remove('col-xl-9');
      document.querySelector(".shop-header-nav").classList.add('col-xl-6')
    } else {
      console.log("wah");
    }
  });
