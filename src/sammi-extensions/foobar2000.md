---json
{
  "layout": "product.njk",
  "date": "2022-03-19",
  "title": "foobar2000",
  "description": "Allows foobar2000 to interface with SAMMI",
  "version": "1.0.3",
  "versionSummaryHeader": "Updated for SAMMI, New Update Link",
  "versionSummaryBody": "new .sef format, and, wow! update is linked to my own personal site!",
  "tags": ["product", "sammiExtension"],
  "price": "FREE",
  "permalink": "/shop/sammi-extensions/foobar2000/",
  "image": "/assets/images/sammi-extensions/foobar2000/cover.png",
  "imageAlt": "Product icon for foobar2000",
  "authors": ["Landie"],
  "shopLabels": ["Free", "Utility", "Audio"],
  "downloadLink": "https://landie.land/shop/sammi-extensions/foobar2000",
  "sammiImage": "https://landie.land/assets/sammi-extensions/foobar2000/cover_bridge.png"
}
---

<!--overview start-->

What can it do?
---------------

### 🎶 Player Features:

* _Set Playback State_ \- Sets the playback state of the player (Play, Next, Previous, Stop, Pause, and Random)
* _Set Playback Mode_ \- Sets the playback mode of the player ( Default, Repeat (Playlist), Repeat (Track), Random, Shuffle (Tracks), Shuffle (Albums), and Shuffle (Folders))
* _Set Song_ \- Sets the song for the player
* _Get Current Song Info_ \- Gets the current set/playing song info from the player
* _Get Song Artwork_ \- Gets a song's artwork as a direct link

### 📝 Playlist Features:

* _Get Playlists_ \- Returns an array of objects containing data of playlists(s)
* _Get Playlist Songs_ \- Returns an object with an array of objects containing an array of each song's column data
* _Add Playlist_ \- Adds a new playlist
* _Remove Playlist_ \- Removes a playlist
* _Clear Playlist_ \- Clears a playlist of it's songs
* _Move Playlist_ \- Moves a playlist from one position to another in the playlist list
* _Rename Playlist_ \- Renames a playlist
* _Move songs to Playlist_ \- Moves songs from one playlist, to another using a specified stringified array
* _Copy songs to Playlist_ \- Copies songs from one playlist, to another using a specified stringified array
* _Remove Songs_ \- Remove songs from a playlist
* _Copy Songs_ \- Copy songs from a playlist into itself

How do i get started?
---------------------

Visit the [Wiki Page](#setup) for an in-depth, easy to follow quick start guide!

<!--overview end-->
<!-- more -->
<!--Overview Right Side start-->

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                                            <!--match buttons with number of slides. note aria labels-->
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide-to="0" class="active" aria-current="true"
                                                    aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            </div>
                                            <!--carousel items! put stuffs in here, added bounds so images fit and are contained-->
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <div class="carousel-item-bounds">
                                                        <img style="max-width: 100%; max-height: 100%;"
                                                            src="/assets/images/sammi-extensions/foobar2000/1.png" class="d-block w-100" alt="plz">
                                                        <div class="carousel-caption d-none d-md-block">
                                                            <h5>Example Deck</h5>
                                                            <p>Test all the buttons, try all functionality!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="carousel-item-bounds">
                                                        <img style="max-width: 100%; max-height: 100%;"
                                                            src="/assets/images/sammi-extensions/foobar2000/2.png" class="d-block w-100" alt="...">
                                                        <div class="carousel-caption d-none d-md-block">
                                                            <h5>Commands</h5>
                                                            <p>...lots of em!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button"
                                                data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button"
                                                data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>

<!--Overview Right Side end-->
<!-- more -->
<!--setup start-->

Getting Started
===============

### Installation

**This requires SAMMI version "2022.4.0" or higher to work!** Download SAMMI [here](https://sammi.solutions/docs/download)

1.  Download the .zip! (Payment through Itch.io, strongly recommended to create account to.
2.  Download the [beefweb remote control for foobar2000](https://www./foobar2000.org/components/view/foo_beefweb) plugin, and open foobar2000.
3.  in the top bar, go to `File > Preferences` and click the "Install..." button to install the .fb2k file you downloaded.
4.  close foobar2000.
5.  Create the **"foobar2000"** folder in `(SAMMI INSTALLATION PATH)\bridge\extensions\`, and extract the .zip contents inside.
    
    If you do not have an "extensions" folder inside your bridge folder, create one!
    
6.  Open SAMMI, and open your bridge via clicking the `bridge > Open in browser` button on the left side menu.
7.  In that same menu, Install the .SEF file located inside your "foobar2000" folder.
    
    The .SEF file alongside the other loose files MUST be located inside `(SAMMI INSTALLATION PATH)\bridge\extensions\foobar2000`. The extension will NOT install properly if this isn't correct!
    
8.  Go through the installation wizard! It will tell you the rest!

If you are able to get your current song's information displayed in a pop-up box, you're set and ready to roll!

### "foobar2000" Deck

![foobar2000 deck](https://raw.githubusercontent.com/Landiie/SAMMI-foobar2000-Control/main/wiki/assets/foobar2000%20example%20deck.png)

During installation, a deck is installed. This deck is an example deck, where you can test out (almost) every command on your foobar2000 instance using the SAMMI Streamdeck. Every command is listed, however, the destructive ones (Remove playlist, Rename playlist, Remove songs, etc) do not work and instead point towards the wiki.

This deck also doubles as the installer logic, and contains button links to my socials, my shop for more extensions, and a documentation button to link to this wiki here. It's recommended you keep this deck installed until you're installation is successful (install button is there if it fails the first time) and you are familiar with how the commands interact with each other in a real scenario.

Bridge
======

This extension's bridge tab is simple and sleek, and lets you know if an update is available. **The bridge must always be connected.** The "Check connection status" button will check and see if the bridge can communicate with foobar2000. When connected and playing a song. it displays the current song, playback, and album art!

![bridge preview](/assets/images/sammi-extensions/foobar2000/docs-1.png)

General Extension Command Usage
===============================

![local variable persist visual](/assets/images/sammi-extensions/foobar2000/docs-3.png)

When you use these commands, any command that stores data in a variable must be a **persistent** button. You can check and change your button's persistence by checking that button's settings. This is a limitation of SAMMI, so this must be done for your variable saving commands to work.

A slightly **purple colored** command implies that the command is **not instant**. This means that you have to provide a delay, or, what is recommended, a `Wait Until Variable Exists` command block right after, which halts everything until that command returns the data that is required for the rest of the button to work. **Since buttons are persistent, you must have a `Delete Variable` command in the top of your button to ensure that it is properly waiting for new data to exist**.

![purple command proper usage](/assets/images/sammi-extensions/foobar2000/docs-4.png)

1.  `Delete Variable`: ensures that the `Wait Until Variable Exists` command waits for a brand new variable to exist
2.  `Purple Extension Command`: indicates that the command doesn't return the information instantly. must be paired with delay.
3.  `Wait Until Variable Exists`: A delay, halting the rest of the button, until the data exists within LB or the timeout is reached.

Then do whatever you want with that sweet, sweet data!

Updating
========

I value updates a lot, so i can ensure everyone has the top quality product! When the bridge connects, there is an automatic update check. If there is a new update available, an alert message will be displayed in your receiver to check your bridge for an update button which checks, and provides a link to the releases section of this extension.

If you have a lot of alert messages pop up on bridge connect, you might miss it. I recommend clicking the "Check for updates" button in this extension's tab in the bridge every so often, or if you encounter an issue out of the blue.

### ⚠ Updating Procedure

To update this extension, please follow the steps below!

1.  Download the newly updated .sef file
2.  Every update installs a new example deck. If you don't need it, make sure to delete it!
3.  Install the extension as normal. Everything should work out!
4.  If you want to make sure your installation still works, Check your bridge and click "Check Connection Status" while foobar2000 is open. This will let you know if SAMMI can properly receive data from foobar2000 via the bridge!

<!--setup end-->
<!-- more -->
<!--tutorials start-->

Tutorial content here!

<!--tutorials end-->
<!-- more -->
<!--patchnotes start-->

Patchnotes here!

<!--patchnotes end-->
