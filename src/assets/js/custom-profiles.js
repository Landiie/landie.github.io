//collectibles sheet: https://docs.google.com/spreadsheets/d/1gmEebk9somVxPkUlCUCJGSJzmMxiWWQXbLQnO6sStVo/gviz/tq?tqx=out:csv&gid=627454447
//profiles     sheet: https://docs.google.com/spreadsheets/d/1gmEebk9somVxPkUlCUCJGSJzmMxiWWQXbLQnO6sStVo/gviz/tq?tqx=out:csv&gid=0

//collectibles csv: https://www.dropbox.com/scl/fi/l50nznxicl7cmnluzzbve/collectibles.csv?rlkey=k9igfgdilbqglb65kcm32xrcy&dl=1
//profiles csv: https://www.dropbox.com/scl/fi/mgt6ngpu88tu0auxqdb6i/custom_profiles.csv?rlkey=qxl1s6pw5sgrtpps4ffb617s8&dl=1

// const collectiblesLink = "/assets/collectibles.csv";
// const profilesLink = "/assets/custom_profiles.csv";
const collectiblesLink =
  "https://dl.dropbox.com/scl/fi/l50nznxicl7cmnluzzbve/collectibles.csv?rlkey=k9igfgdilbqglb65kcm32xrcy&dl=1";
const profilesLink =
  "https://dl.dropbox.com/scl/fi/mgt6ngpu88tu0auxqdb6i/custom_profiles.csv?rlkey=qxl1s6pw5sgrtpps4ffb617s8&dl=1";

let allCollectibles = [];
//fetch all collectibles
fetch(collectiblesLink)
  .then(response => response.text())
  .then(data => {
    const csv = Papa.parse(data);
    csv.data.shift(); // remove csv header
    csv.data.pop(); // remove the sammi "undefined" row
    csv.data.pop(); // remove the sammi "default" row
    console.log(csv);
    const totalCollectibles = Object.keys(csv.data).length;
    for (i = 0; i < totalCollectibles; i++) {
      const collectible = {
        id: csv.data[i][0],
        title: csv.data[i][1],
        description: csv.data[i][2],
        type: csv.data[i][3],
        image: csv.data[i][4],
        deleteHash: csv.data[i][4],
        rarity: csv.data[i][5],
        total: csv.data[i][6],
        creationDate: csv.data[i][7],
        value: csv.data[i][8],
        metadata: csv.data[i][9],
      };

      allCollectibles.push(collectible);
    }
    console.log("all collectibles from spreadsheet:", allCollectibles);
  });

//fetch viewer profiles
let users = [];
fetch(profilesLink)
  .then(response => response.text())
  .then(data => {
    const csv = Papa.parse(data);
    csv.data.shift();
    csv.data.pop(); // removes undefined row
    csv.data.pop(); // removes default row
    //console.log('user profile data after trimming:', csv)

    //create user objects, store in array
    for (i = 0; i < csv.data.length; i++) {
      userObj = {
        userid: csv.data[i][0],
        name: csv.data[i][1],
        displayName: csv.data[i][2],
        pfp: csv.data[i][3],
        nickname: csv.data[i][4],
        accentColor: csv.data[i][5],
        collectibles: csv.data[i][6],
        collectiblesDisplay: csv.data[i][7],
        pfpFrame: csv.data[i][8],
        msgIntro: csv.data[i][9],
        msgLurk: csv.data[i][10],
        accentPattern: csv.data[i][11],
        value: csv.data[i][12],
        stats: csv.data[i][13],
      };
      userObj.collectibles = userObj.collectibles.replaceAll(`\\`, "");
      if (userObj.collectibles !== "")
        userObj.collectibles = JSON.parse(userObj.collectibles);
      users.push(userObj);
    }
    console.log(users);

    //generate all user buttons for navigation
    let cpUserButtonHTML = "";

    users.forEach(user => {
      console.log(user);
      //check to see if user has an accent color, if not, no color gradient
      let bgColorStyle = `background: linear-gradient(to left, rgba(255, 255, 255, 0.399) 50% , #${user.accentColor});`;
      if (user.accentColor === "")
        bgColorStyle = "background-color: rgba(255, 255, 255, 0.399)";

      cpUserButtonHTML += `<button data-user-id='${user.userid}' data-cp-accent-color='${user.accentColor}' data-cp-name='${user.name}'
                  style="${bgColorStyle}"
                  class="cp-user-button d-flex justify-content-between align-items-center">
                  <img class="cp-user-button-img"
                    src="${user.pfp}"
                    alt="">
                  <h5 class="cp-user-button-name">${user.displayName}</h5>
                </button>`;
    });
    document.querySelector(".cp-sidebar-body").innerHTML = cpUserButtonHTML;
  });

// user clicked, fill out profile
document.querySelector(".cp-sidebar-body").addEventListener("click", e => {
  const userId = e.target.dataset.userId;
  if (!userId) return;
  console.log(userId);
  //find user in users obj, make "user" object
  const user = users.filter(e => e["userid"] == userId)[0];
  console.log("user info", user);

  let userProfileHTML = "";
  let userProfileBadgesHTML = "";
  let userProfileMedallionsHTML = "";
  let userProfilePatternsHTML = "";

  user.badgeCount = 0;
  user.medallionCount = 0;
  user.patternCount = 0;

  //create list of collectibles user has
  if (user.collectibles !== "") {
    user.collectibles.forEach(collectible => {
      const collectibleInfo = allCollectibles.filter(
        e => e["id"] == collectible.id
      )[0];
      console.log("collectible info", collectibleInfo);

      switch (collectibleInfo.type) {
        case "badge":
          console.log("this is a badge!");
          user.badgeCount++;

          userProfileBadgesHTML += `<button data-tilt data-tilt-scale="1.5" data-tilt-max="10" data-bs-toggle="tooltip"
                data-bs-title="${collectibleInfo.title}" data-cp-title="${collectibleInfo.title}" data-cp-image="${collectibleInfo.image}" data-cp-desc='${collectibleInfo.description}' data-cp-type="${collectibleInfo.type}"
                class="cp-userprofile-badge-item" style="background-image:url(${collectibleInfo.image}); background-repeat: no-repeat;
    background-position: center; object-fit: contain; background-size: 100%;"></button>`;
          break;
        case "medallion":
          console.log("this is a medallion!");
          user.medallionCount++;

          userProfileMedallionsHTML += `<button data-tilt data-tilt-scale="1.5" data-tilt-max="10" data-bs-toggle="tooltip"
                    data-bs-title="${collectibleInfo.title}" data-cp-title="${collectibleInfo.title}" data-cp-image="${collectibleInfo.image}" data-cp-desc='${collectibleInfo.description}' data-cp-type="${collectibleInfo.type}"
                    class="cp-userprofile-badge-item" style="background-image:url(${collectibleInfo.image}); background-repeat: no-repeat;
        background-position: center; object-fit: contain; background-size: 100%;"></button>`;
          break;
        case "pattern":
          console.log("this is a pattern!");
          user.patternCount++;

          userProfilePatternsHTML += `<button data-tilt data-tilt-scale="1.5" data-tilt-max="10" data-bs-toggle="tooltip"
                  data-bs-title="${collectibleInfo.title}" data-cp-title="${collectibleInfo.title}" data-cp-image="${collectibleInfo.image}" data-cp-desc='${collectibleInfo.description}' data-cp-type="${collectibleInfo.type}"
                  class="cp-userprofile-badge-item" style="background-image:url(${collectibleInfo.image}); background-repeat: no-repeat;
      background-position: center; object-fit: contain; background-size: 100%;"></button>`;
          break;
        default:
          console.log("huh? dont know type: ", collectibleInfo.type);
      }
    });
  } else {
    console.log("user has no collectibles!");
  }

  //set profile html
  userProfileHTML = `<div style="border-radius: 2rem; background-color: #${user.accentColor};"
           class="cp-userprofile-header container-fluid mt-3 d-flex align-items-center">
           <img style="padding: 1rem; height: 7rem; border-radius: 5rem;"
             src="${user.pfp}"
             alt="">
           <div style="margin: 0;" class="d-flex flex-column">
             <h2>${user.displayName}</h2>
             <p style="margin: 0;">Accent Color: #${user.accentColor}</p>
           </div>
         </div>
         <div class="cp-userprofile-body mt-3">
           <h2>Badges</h2>
           <div class="d-flex align-items-center">
             <p class="m-0">Total Badges: </p>
             <h4 class="cp-userprofile-badges-total ms-2 m-0">0</h4>
           </div>
           <div class="cp-userprofile-badges-list cp-userprofile-list">
             ${userProfileBadgesHTML}
           </div>
           <h2>Medallions</h2>
           <div class="d-flex align-items-center">
             <p class="m-0">Total Medallions: </p>
             <h4 class="cp-userprofile-medals-total ms-2 m-0">0</h4>
           </div>
           <div class="cp-userprofile-medals-list cp-userprofile-list">
             ${userProfileMedallionsHTML}
           </div>
           <h2>Patterns</h2>
           <div class="d-flex align-items-center">
             <p class="m-0">Total Patterns: </p>
             <h4 class="cp-userprofile-patterns-total ms-2 m-0">0</h4>
           </div>
           <div class="cp-userprofile-patterns-list cp-userprofile-list">
             ${userProfilePatternsHTML}
           </div>
           <h2>Previews</h2>
           <h4>Sub Alert Board</h4>
           <img src="" alt="">`;
  document.querySelector(".cp-userprofile-name").textContent = user.displayName;
  if (user.nickname !== "") {
    document.querySelector(".cp-userprofile-name").textContent = user.nickname;
    document.querySelector(".cp-userprofile-twitchname").textContent =
      `a.k.a. ${user.displayName}`;
  } else {
    document.querySelector(".cp-userprofile-name").textContent = user.displayName;
  }
  document.querySelector(
    ".cp-userprofile-accentcolor"
  ).textContent = `Accent Color: #${user.accentColor}`;
  document.querySelector(".cp-userprofile-pfp").src = user.pfp;
  document.querySelector(
    ".cp-userprofile-header"
  ).style.backgroundColor = `#${user.accentColor}`;

  document.querySelector(".cp-userprofile-badges-total").textContent =
    user.badgeCount;
  document.querySelector(".cp-userprofile-medals-total").textContent =
    user.medallionCount;
  document.querySelector(".cp-userprofile-patterns-total").textContent =
    user.patternCount;

  document.querySelector(".cp-userprofile-badges-list").innerHTML =
    userProfileBadgesHTML;
  document.querySelector(".cp-userprofile-medals-list").innerHTML =
    userProfileMedallionsHTML;
  document.querySelector(".cp-userprofile-patterns-list").innerHTML =
    userProfilePatternsHTML;

  //initialize tilts
  generatedItemTiltsInit();
});

//collectible clicked
const collectableLists = document
  .querySelector(".cp-userprofile-body")
  .addEventListener("click", e => {
    console.log(e);
    const type = e.target.dataset.cpType;
    if (!type) return;
    const title = e.target.dataset.cpTitle;
    const desc = e.target.dataset.cpDesc;
    const image = e.target.dataset.cpImage;

    console.log(e.target.dataset.cpType);

    document.querySelector(".collectible-display-title").textContent = title;
    document.querySelector(".collectible-display-desc").textContent = desc;
    document.querySelector(".collectible-display-image").src = image;

    openPopupCollectible();
  });

//   collectableLists.forEach(list => {
//    list.addEventListener('click', (e) => {
//      if (!e.target.dataset.cpType) return;
//      console.log(e)
//      const dataset = e.target.dataset;
//      console.log(dataset)

//      const type = dataset.cpType;
//      const title = dataset.cpTitle;
//      const desc = dataset.cpDesc;

//      document.querySelector(".collectible-display-title").textContent = title;
//      document.querySelector(".collectible-display-desc").textContent = desc;

//      openPopupCollectible();
//    })
//  });

//custom modals
document
  .querySelector(".content-blur-bg-collectible")
  .addEventListener("click", function () {
    closePopupCollectible();
  });

function openPopupCollectible() {
  document.querySelector(".content-blur-bg-collectible").style.display =
    "block";
  document.querySelector(".content-blur-bg-collectible").style.animationName =
    "content-blur-bg-in";
  document.querySelector(".popup-slide-collectible").style.animationName =
    "popup-slide-in";
  document.querySelector(".popup-slide-collectible").style.animationName =
    "popup-slide-in";
}

function closePopupCollectible() {
  document.querySelector(".content-blur-bg-collectible").style.animationName =
    "content-blur-bg-out";
  document.querySelector(".popup-slide-collectible").style.animationName =
    "popup-slide-out";
  setTimeout(() => {
    document.querySelector(".content-blur-bg-collectible").style.display =
      "none";
  }, 600);
}

function generatedItemTiltsInit() {
  // const generatedCollectibles = document.querySelectorAll('.cp-userprofile-badge-item')
  // console.log(generatedCollectibles)

  VanillaTilt.init(document.querySelectorAll(".cp-userprofile-badge-item"), {
    max: 10,
    speed: 400,
    scale: 1.5,
  });
}

document.querySelector(".cp-search").addEventListener("input", function (e) {
  shopSearch();
});

shopSearch();

function shopSearch() {
  const userList = document.querySelectorAll(".cp-user-button");
  const value = document.querySelector(".cp-search").value;
  console.log(value);
  userList.forEach(user => {
    console.log(user);
    let username = user.dataset.cpName;
    let accentColor = user.dataset.cpAccentColor;
    console.log(username);
    if (username != undefined) {
      if (username.toLowerCase().includes(value.toLowerCase())) {
        console.log(`Matches ${username}`);
        //check to see if user has an accent color, if not, no color gradient
        let bgColorStyle = `background: linear-gradient(to left, rgba(255, 255, 255, 0.399) 50% , #${accentColor});`;
        if (accentColor === "")
          bgColorStyle = "background-color: rgba(255, 255, 255, 0.399)";
        user.setAttribute("style", `display: '' !important; ${bgColorStyle}`);
      } else {
        user.setAttribute(
          "style",
          `display: none !important; background: linear-gradient(to left, rgba(255, 255, 255, 0.399) 50% , #${accentColor});`
        );
      }
    } else {
      user.setAttribute(
        "style",
        `display: none !important; background: linear-gradient(to left, rgba(255, 255, 255, 0.399) 50% , #${accentColor});`
      );
    }
  });
}

// bootstrap stuff
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
