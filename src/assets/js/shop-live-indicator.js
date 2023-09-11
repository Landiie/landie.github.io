fetch("https://decapi.me/twitch/uptime/landie/?offline_msg=notstreaming")
  .then(resp => resp.text())
  .then(status => {
    if (status != "notstreaming") {
      //im live!
      document.querySelector(".live-indicator").style.display = "";
    } else {
      console.log("wah");
    }
  });
