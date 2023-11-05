---json
{
	"layout": "product.njk",
	"date": "2023-01-08",
	"tags": ["product", "sammiExtension"],
	"title": "LandiTube",
	"permalink": "/shop/sammi-extensions/{{ title | slugify }}/",
	"description": "Advanced 2D VTuber framework powered by SAMMI!",
	"image": "/assets/images/sammi-extensions/landitube/cover.png",
	"imageAlt": "Product icon for LandiTube",
	"authors": ["Landie"],
	"shopLabels": ["Free", "Utility", "OBS Widget", "Voice", "Beta"],
	"price": "FREE",
	"version": "0.20.0",
	"versionSummaryHeader": "Lights, Layers.... Transitions! 150+ hours of work, for you!",
	"versionSummaryBody": "Read the full patch notes <a href=\"https://landie.land/shop/sammi-extensions/landitube.html#patchnotes\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display: none\">here!</a>",
	"downloadLink": "https://landie.land/shop/sammi-extensions/landitube",
	"sammiImage": "https://landie.land/assets/sammi-extensions/landitube/cover%20bridge.png",
	"versions": {
		"0200": {
			"valid_versions": {
				"bridge": ["7.14", "7.20"],
				"obs": ["29.1.2", "29.1.3"],
				"sammi": ["2023.2.1", "2023.2.1.1", "2023.2.2"]
			}
		},
		"0210": {
      "assets_link":"https://www.dropbox.com/scl/fi/srnrzw74fn0utx6ne2cel/landitube_0210_assets.zip?rlkey=4e7m1l4duld6r53q1k5r37dil&dl=1",
			"valid_versions": {
				"bridge": ["7.20"],
				"obs": ["29.1.3"],
				"sammi": ["2023.2.2"]
			},
			"obs_plugins": {
				"names": [
					"Move Transition",
					"Source Clone",
					"Shader Filter (Exeldro Fork)",
					"Composite Blur"
				],
				"direct_download_links": [
					"https://obsproject.com/forum/resources/move-transition.913/version/4904/download?file=94076",
					"https://obsproject.com/forum/resources/source-clone.1632/version/4881/download?file=93640",
					"https://github.com/exeldro/obs-shaderfilter/releases/download/v1.22/obs-shaderfilter-1.22.0-windows.zip",
					"https://obsproject.com/forum/resources/composite-blur.1780/version/5119/download?file=97578"
				],
				"download_links": [
					"https://obsproject.com/forum/resources/move-transition.913/",
					"https://obsproject.com/forum/resources/source-clone.1632/",
					"https://github.com/exeldro/obs-shaderfilter/releases",
					"https://obsproject.com/forum/resources/composite-blur.1780"
				]
			},
			"sammi_extensions": {
				"names": ["Sando"],
				"download_links": [
					"https://landie.land/shop/sammi-extensions/sando"
				]
			}
		}
	},
	"obs_plugins": {
		"names": [
			"Move Transition",
			"Source Clone",
			"Shader Filter (Exeldro Fork)",
			"Blur Filter (prgmitchell Fork)"
		],
		"direct_download_links": [
			"https://obsproject.com/forum/resources/move-transition.913/version/4904/download?file=94076",
			"https://obsproject.com/forum/resources/source-clone.1632/version/4881/download?file=93640",
			"https://github.com/exeldro/obs-shaderfilter/releases/download/v1.22/obs-shaderfilter-1.22.0-windows.zip",
			"https://web.archive.org/web/20230428201107mp_/https://github.com/prgmitchell/blur-filter/releases/download/1.1.0/blur-filter-1.1.0-win.zip"
		],
		"download_links": [
			"https://obsproject.com/forum/resources/move-transition.913/",
			"https://obsproject.com/forum/resources/source-clone.1632/",
			"https://github.com/exeldro/obs-shaderfilter/releases",
			"https://github.com/prgmitchell/blur-filter/releases"
		]
	},
	"sammi_extensions": {
		"names": ["Folder Reader", "Sando"],
		"download_links": [
			"https://landie.land/shop/sammi-extensions/folder-reader",
			"https://landie.land/shop/sammi-extensions/sando"
		]
	},
	"motd": "hope 0.20.0 treats everyone well! don't fret to reach out if you encounter issues!"
}
---

<!--overview start!!-->

**Please keep in mind this is a beta release, and is not expected to work correctly under certain circumstances. You can really help out by reporting these bugs via <br>[Discord Server](https://discord.gg/ZTbMw7TVKa)<br>Direct Discord DM: Landie#0038<br>Email at landieinquiries@gmail.com**

# Help! I'm new to SAMMI, and I want to use this! What do I do?

Please check out this [quick video](https://www.youtube.com/watch?v=Jkz264Ax6qc) I made to help newcomers get SAMMI set up with the bare minimum they need to use this extension!

# What is this?

![introducing landitube](https://i.imgur.com/IsovjaP.gif)

"LandiTube" Is an advanced, easy to use PNGTuber engine built from the ground up using SAMMI over the course of a half year of constant development. PNGTuber software seems sparse, while other Vtubing related softwares seem to be targetting the 3D audience.
<br>
<br>
I'm here to change that.

# What does this offer that other engines don't?

Plenty!!

- Infinite Models ♾️
- Infinite Random Talking Poses ♾️
- Infinite Random Idle Poses ♾️
- (WIP ⚠ ) Infinite Random Yelling Poses ♾️
- Squishiness 200% 💚
- Special filters set so _only_ your voice comes through! No more keyboard-activated tubers... 🎤
- Hotkeys, or no hotkeys! You can set up a command to change an emotion directly! 🔧
- Built using OBS Image Sources, so your PNGs will look crisp and have no artifacts! 📸
- Not a separate window. No silly green screenies 🔪
- Easy to use, dynamic folder structure designed to be responsive, and intuitive 💡
- Drag n' Drop files, hit refresh, and everything just works! 💡
- Use any OBS Image Source supported Image Format you want! .PNG, .GIF, .APNG, and more.
- Use ANY OBS Source as a component in your PNGTuber **(More on this further down)**. 🤯 <-- thats u
- Dynamic web interface for development and config purposes, indepth yet easy to understand and navigate. 💡
- Blinking for every type of pose (that's expected :3) 🙄
- (WIP ⚠) Set custom blinking intervals per emotion
- (WIP ⚠) Custom transitions between emotions
- Actively being updated to add new features out of passion and respect for those who love this engine just as much as I do 🔧💚
- Its Free. No commitments, nothin!! This was commissioned a long time ago by the wonderful and generous [Jessyabeb](https://twitter.com/jessyabeb)! Without her, I would've never had the motivation or courage to set out and code something this massive to share with the world. 💚

And now for the **Big 2 Features.** First up...

## Full SAMMI Integration and Public API

A vast amount of engine data is available to you in the form of "Pull Data" from "Extension Triggers", such as:

| Pull Value                        | Type      | Description                                                                                                                                      |
| --------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `blink`                           | _boolean_ | Current blinking state                                                                                                                           |
| `current_emotion`                 | _string_  | The current set expression of the active model                                                                                                   |
| `current_emotion_path`            | _string_  | the current image path compiled together using `global.main_directory`, `current_model`, `current_state`, and `current_emotion_state_extension`  |
| `current_emotion_poses_idle`      | Array     | An Array of the current model's idle poses (not including blinks)                                                                                |
| `current_emotion_poses_talking`   | Array     | An Array of the current model's talking poses (not including blinks)                                                                             |
| `current_emotion_state_extension` | _string_  | The current state's file extension to be used in conjunction with `current_state` to create a full file                                          |
| `current_model`                   | _string_  | The current active model                                                                                                                         |
| `current_state`                   | _string_  | The current active state of the model. This the result of various impacting factors such as yelling, blinking, talking, and randomly drawn poses |
| `talking`                         | _boolean_ | Current talking state                                                                                                                            |
| `yelling`                         | _boolean_ | Current yelling state                                                                                                                            |

All of data is sent to you in the form of these extension triggers:

| Extension Trigger                 | Description                                                                   |
| --------------------------------- | ----------------------------------------------------------------------------- |
| `LandiTube talking true`          | triggers a button when the character starts talking                           |
| `LandiTube talking false`         | triggers a button when the character is finished talking                      |
| `LandiTube blinking true`         | triggers a button when the character blinks                                   |
| `LandiTube blinking false`        | triggers a button when the character is done blinking                         |
| `LandiTube yelling true`          | triggers a button when the character yells                                    |
| `LandiTube yelling false`         | triggers a button when the character is done yelling                          |
| `LandiTube model changed`         | triggers a button when the model is changed from the current active model     |
| `LandiTube model` (modelname)     | triggers a button when the model is changed and matches a specific model      |
| `LandiTube emotion changed`       | triggers a button when the emotion is changed from the current active emotion |
| `LandiTube emotion` (emotionname) | triggers a button when the emotion is changed and matches a specific emotion  |

**\_**Woah woah woah Landie slow down!! I don't know how to use this!**\_**

That's alright! No SAMMI knowledge is required to get up and running with this engine. however, if you want to capitalize on this amount of freedom and take your PNGTuber to the next level; SAMMI is an incredible, easy, and fun software to use to build your dream stream projects (no coding knowledge needed at all! thats how i started!). You can get started by reading the documentation [Here!](https://sammi.solutions/docs) if you want to learn more about whats coming up next...

What are you supposed to do with this info? Well, thats where the second _huge_ feature comes in...

## Full OBS Source Layering System

Are you a TV Head PNGTuber and want your tv head to display twitch alert info?<br>
Are you a furry PNGTuber and want your tails to move a random direction everytime you talk?

Or...

Maybe you want to add sunglasses to your character, but don't want to have to export every image again, or have it only work on one emotion?<br>
Maybe you want your model to have a gamepad display that accurately displays your controller's inputs?

Have you ever wanted your PNGTuber to actually interact with your OBS Setup a bit more? Thanks to the foundation of this engine that is SAMMI, you can do just that, and so much more.

This data can be used to create your own rendering engine, ontop of the default one shipped with this extension (to be changed in 1.0.0)!

"Landie thats a big word..", All it means is that you get to decide how certain OBS Sources behave, and interact with the PNGTuber Engine!

### Examples:

Here are some examples i quickly whipped up:

- Rotate an animated image source of my character's tails everytime my talking state changes!

![Landie but awesome](https://i.imgur.com/m7teWZL.gif)

- Have this live-updating image source of chat's emote, move a specific way based on what pose I have!

![](https://i.imgur.com/jdNp3ZY.gif)

- Move this text source slightly when I talk!

![](https://i.imgur.com/VHfH82R.gif)

- Gamepad overlay that matches my real inputs!

![](https://i.imgur.com/TGdMj0A.gif)

Those are just some examples of what is possible with LandiTube! All of this is possible, and so, so, so much more! The possibilities (and I truly mean it, not some overhyped thing) are endless!

Oh yeah, and two new SAMMI commands:

- LandiTube: Change Model
- LandiTube: Change Emotion

but i'm sure you suspected as much :3c

What are you waiting for? Check out the [Setup](#setup) page for prerequisites, and download!

<!--overview end-->

<!-- more -->
<!--overview right column -->
<blockquote class="twitter-tweet" data-lang="en" data-theme="dark"><p lang="en" dir="ltr">💚IT&#39;S HERE!!!! Lights, Layers... Transitions! <br><br>LandiTube 0.20, my 2D VTubing framework built with <a href="https://twitter.com/sammisolutions?ref_src=twsrc%5Etfw">@sammisolutions</a>, is OUT!!!<br><br>150+ HOURS put into this update, all for free! Easier installation, .veadomini importing, and SO MUCH MORE.<br><br>FULL PATCH NOTES AND DOWNLOAD BELOW 🔽 <a href="https://t.co/wVzgeTLgmL">pic.twitter.com/wVzgeTLgmL</a></p>&mdash; Landie (@Landie__) <a href="https://twitter.com/Landie__/status/1678173775081111552?ref_src=twsrc%5Etfw">July 9, 2023</a></blockquote>
<blockquote class="twitter-tweet" data-dnt="true" data-theme="dark">
   <p lang="en" dir="ltr">💚PNGTUBER ENGINE UPDATE (LandiTube)<br>Yelling
      Poses, Native OBS Source Layering, rendering rework, and so much
      more!!<br><br>Tutorials for some things going up tomorrow
      hopefully!!<br><br>Thank you all for making this project something I
      cherish a lot!<br><br>Links below! 🔽 <a
         href="https://t.co/1HeQ0APbQG">pic.twitter.com/1HeQ0APbQG</a>
   </p>
   &mdash; Landie (@Landie__) <a
      href="https://twitter.com/Landie__/status/1624594796202569730?ref_src=twsrc%5Etfw">February
   12, 2023</a>
</blockquote>
<blockquote class="twitter-tweet" data-dnt="true" data-theme="dark">
   <p lang="en" dir="ltr">💚 I Made an advanced PNGTuber Engine usong
      SAMMI!!<br><br>Including...<br>- Infinite RANDOM talking poses<br>-
      Infinite RANDOM idle pose<br>- OBS Source layering system<br>- FULL
      SAMMI INTEGREATION AAA<br>-more on the product page!<br><br>half a year
      in the making, thx for 700 follows!<br><br>Download below!!!! <a
         href="https://t.co/KEI5HAIiDL">pic.twitter.com/KEI5HAIiDL</a>
   </p>
   &mdash; Landie (@Landie__) <a
      href="https://twitter.com/Landie__/status/1613271271344857089?ref_src=twsrc%5Etfw">January
   11, 2023</a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js"
   charset="utf-8"></script>

<!--overview right column end-->
<!-- more -->
<!--setup start-->

# Getting Started

## Install Video

Here is a video demonstrating the entire installation process, including prerequisites, and SAMMI install. This is an updated video for 0.20!

<iframe width="560" height="315" src="https://www.youtube.com/embed/T-QZliGeyzY"
   title="YouTube video player" frameborder="0"
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

## ⏬ Prerequisites (Get these first!)

These are **Required** for this extension to work, Prior to installation.

### SAMMI

- [Folder Reader 3.0.1](https://landie.land/shop/sammi-extensions/folder-reader)
- [Sando 2.0.1](https://landie.land/shop/sammi-extensions/sando)

### OBS

- [OBS Studio 29.1.3](https://github.com/obsproject/obs-studio/releases/download/29.1.3/OBS-Studio-29.1.3-Full-Installer-x64.exe)

## Installation

1.  _Make sure you have the prerequisites installed first_
2.  Download "LandiTube" .sef file from the download button above
3.  Connect OBS (refer to help video in [overview](#overview) if unsure)
4.  Connect the SAMMI Bridge (refer to help video in [overview](#overview) if unsure)
5.  Install the .sef file via the left hand side menu of the "SAMMI Core" via clicking the bridge button, then clicking "Install an Extension".
6.  Follow the installation steps provided on-screen!
7.  Afterwards, you should be all set for installation! To set up your first model, please go to the [Tutorials](#tutorials) tab!

## Updating

Install the .sef as you would normally, and allow the deck to be replaced. Easy as pie! (why is pie easy? who tf came up with that term is baking ever actually easy??? im going to pop a vein)

<!--setup end-->

<!-- more -->

<!--tutorials start-->

<div class="d-flex flex-row flex-wrap">
                                                <div class="d-flex flex-column justify-content-center align-items-center"
                                                style="padding: 0.5rem; gap: 1rem; background-color: rgba(128, 0, 128, 0.532);">
                                                    <h3>Setup + Installation</h3>
                                                    <iframe width="560" height="315"
                                                    src="https://www.youtube.com/embed/T-QZliGeyzY"
                                                    title="YouTube video player" frameborder="0"
                                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowfullscreen></iframe>
                                                </div>
                                                <div class="d-flex flex-column justify-content-center align-items-center"
                                                style="padding: 0.5rem; gap: 1rem; background-color: rgba(128, 0, 128, 0.532);">
                                                    <h3>Making A Model</h3>
                                                    <iframe width="560" height="315"
                                                    src="https://www.youtube.com/embed/OFEGDlggthM"
                                                    title="YouTube video player" frameborder="0"
                                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowfullscreen></iframe>
                                                </div>
                                                <div class="d-flex flex-column justify-content-center align-items-center"
                                                style="padding: 0.5rem; gap: 1rem; background-color: rgba(128, 0, 128, 0.532);">
                                                    <h3>Yelling Poses</h3>
                                                    <iframe width="560" height="315"
                                                    src="https://www.youtube.com/embed/HGGq_J0r7QU"
                                                    title="YouTube video player" frameborder="0"
                                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowfullscreen></iframe>
                                                </div>
                                                <div class="d-flex flex-column justify-content-center align-items-center"
                                                style="padding: 0.5rem; gap: 1rem; background-color: rgba(128, 0, 128, 0.532);">
                                                    <h3>Import veadotube mini Model</h3>
                                                    <iframe width="560" height="315"
                                                    src="https://www.youtube.com/embed/EcdTJ3Gx5zk"
                                                    title="YouTube video player" frameborder="0"
                                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowfullscreen></iframe>
                                                </div>
                                                <div class="d-flex flex-column justify-content-center align-items-center"
                                                style="padding: 0.5rem; gap: 1rem; background-color: rgba(128, 0, 128, 0.532);">
                                                    <h3>Transitions</h3>
                                                    <iframe width="560" height="315"
                                                    src="https://www.youtube.com/embed/QjGNWGd-_r8"
                                                    title="YouTube video player" frameborder="0"
                                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowfullscreen></iframe>
                                                </div>
                                                <div class="d-flex flex-column justify-content-center align-items-center"
                                                style="padding: 0.5rem; gap: 1rem; background-color: rgba(128, 0, 128, 0.532);">
                                                    <h3>Layers</h3>
                                                    <iframe width="560" height="315"
                                                    src="https://www.youtube.com/embed/A3zahsUmV-k"
                                                    title="YouTube video player" frameborder="0"
                                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowfullscreen></iframe>
                                                </div>
                                            </div>

<!--tutorials end-->

<!-- more -->

<!--troubleshooting start-->

# Welcome to the helpdesk!

Sorry you had to come here, I'm trying my best! Check out the sidebar to see if there is anything related to the issue you're experiencing!

# Installation

## I Keep getting yellow messages telling me that I need OBS scenes, what?

Please refer to the [setup](#setup) tab to install your OBS scenes using the Source Copy OBS plugin.

## Whenever I startup SAMMI with LandiTube installed, it takes FOREVER to load and sometimes crashes

Make sure you have your Local API enabled in the SAMMI settings, as per instructions from installing the "Folder Reader" extension.

Do not set a password!

# Models

## I made a model folder, but i can't find it in the bridge!

Make sure your model folder is located in `(YOURSAMMIINSTALL)\Landies_Extensions\LandiTuber\models` folder.

Make sure to select it in the bridge afterwards!

---

# Emotions

## I added my emotions inside my models folder but when i refresh nothing happens!

You need to make an "emotions" folder inside your unique model's folder **first**, and make your emotion folders within there. Common mistake!

Make sure to select at least one emotion once you set them up.

---

# Poses

---

# Display

## One of my model's poses is huge, and not aligned properly!

0.14.6^ use a dynamic source creation process to add your poses, and sometimes things happen during that process and don't get created properly!

Thankfully, this is an easy fix!

1.  Head over to the `[LandiTube] Default Renderer` scene
2.  Locate the problematic source (to locate, look for the problematic source that has the model name at the beginning emotion name in middle, and pose name at the end for easy finding.
3.  Delete the source!
4.  In the bridge under the LandiTube tab, click "Refresh Models"
5.  Give it a moment to regenerate the missing source, and see if it fixed your issue!

If the issue persists even when deleting the source, try it again, as it's a rare bug! once its fixed, _you should never have to touch it again unless you remove the model!_

---

# Settings

## I can't change the settings, I already have OBS Connected!

Try restarting SAMMI. This is common on first installations, and I'm still tracking it down! Restarting SAMMI should fix this no problem c:

## My voice isn't being picked up!

There might be four things causing this:

1.  Input device not set

    1.  Head on over to the bridge, click the "LandiTube" tab.
    2.  Click the "Input Source" dropdown button to select your input device!  
        If you don't see your device there, or, you select it and nothing changes, [check the below issue](#here)!

2.  Move Transition OBS Plugin not installed

    1.  Head on over to the [Move Transition Download Page](https://obsproject.com/forum/resources/move-transition.913/)
    2.  Make sure you are downloading 2.8.1 or higher!
    3.  Close OBS, install, and re-open OBS.
    4.  Reinstall LandiTube if nothing fixes right away

3.  Voice Threshold is too high
    1.  Head on over to the bridge, click the "LandiTube" tab.
    2.  adjust the "Voice Threshold"
4.  Weird SAMMI issue  
    Sometimes, SAMMI breaks when reading an OBS source and is unable to get the visbility state that is being constantly changed. Heres what to do:
    1.  Head over to SAMMI's "OBS Connection" settings and Disconnect, then reconnect OBS.
    2.  This should fix your issue, if not, try one more time, then let me know you're still struggling. It works eventually, and once it starts working after install, i've never had a problem with it happening again :3c
5.  Delete OBS Scenes, reinstall Scenes  
    Rarely, upon installation move transition will fail to pick up any input (discovered thanks to PixelGourmet) and the solution is to reinstall the scenes a specific way!

    1.  Delete all scenes with the prefix "\[LandiTube\]"
    2.  Disconnect SAMMI from OBS in SAMMI's "OBS Connections" menu temporarily
    3.  Reinstall scenes from "LandiTube Scenes.json"
    4.  Reconnect SAMMI to OBS from "OBS Connections" within SAMMI
    5.  Change the input device of "LandiTube Voice" located in the scene "\[LandiTube\] Model Movement"
    6.  Hopefully everything is good?

    If you don't see your device there, or, you select it and nothing changes, check the below issue!

## I cant select my input device, or, I selected my device and nothing is happening!

Unfortunately it looks like i suck, and the interface i made for selecting your input source doesn't work right.

There is a way to fix this, but its a bit more manual! follow these steps:

1.  Head over to OBS, and check out the "`[LandiTube] Model Movement`" scene.
2.  Click on the source "LandiTube Voice", hit properties, and change it to your input device.
3.  Afterwards, if nothing happens when you speak, enable and disable the LandiTube Voice source. This should work!

<!--troubleshooting end-->
<!-- more -->
<!--patchnotes start-->

# 0.20.0

NOTE: This is an insurmountably VAST update that essentially makes this an entirely different extension. The patch notes were mades based off of memory, as I wasn't making it during the patch process and only after it was complete.

### 🔊 NEW MODULES:

- **✨Transitions**, allows certain modules of LandiTube to have transitions. Currently only supports transitions between emotions. Read more about it in the documentation!
- **✨Dynamic Transitions**, allows certain modules of LandiTube to have transitions based on module factors. Currently only supports dynamic transition "outros" and "intros" between emotions. read more about it in the documentation!
- **✨Dynamic Lighting**, set a scene to be referenced to enable global lighting of certain modules such as models, transitions, layers, and custom sources in the `[LandiTube] Customize` scene
- **✨Dynamic Rim Lighting**, set a scene to be referenced to enable global rim lighting of certain modules such as models, transitions, layers, and custom sources in the `[LandiTube] Customize` scene. change the direction of rim lighting aswell!
- **✨Model Importing (veadomini)**, Import a model from veadotube mini (not associated with LandiTube) and get started with LandiTube sooner if this isn't your first time with a 2D Vtuber!
- **✨OBS Source Layering v3**, putting this here because nobody used layering due to lack of tutorials and tedium, so here is a way more polished version of obs source layering! comes with a front and back layer, set the layer's scene reference in the Bridge, manipulate auto-generated layer poses within OBS! check documentation and tutorials for more.
- **✨Backups**, yay! Currently only supports backing up but no restoration yet. Dedicated Backups tab exists in bridge where you can manually backup if you wish, or, landitube will back up automatically after every full day and stores up to a max of 5. Stores all models and their graphics, configs, etc
- **✨Twitch Integration**, currently only asks to add the "LandiTube" tag to your stream and how to link twitch to SAMMI, more will be done with this in the future.
- **✨Logger**, reworked the entire codebase to log out at certain points to `landitube.log`, located in `(SAMMI INSTALL)\Landies_Extensions\LandiTuber\landitube.log`. Will be extremely useful for troubleshooting on my side and the end user side.
- **✨Automatic OBS Plugin Installer/Checker**, detects missing or out of date obs plugins which then are automatically installed for you. failsafe of opening download link for you to download and place .zip in a special folder to auto install aswell
- **✨Automatic Bridge version checker**, checks bridge version to ensure up to date version.
- **✨Automatic SAMMI Extension version checker**, checks required SAMMI Extensions to ensure versions are up to date.
- **✨.fenc Config Files**, used to tweak individual poses/emotions/models to interact with LandiTube modules independantly instead of globally. Current instances of usage:
  - Global Transitions
  - Dynamic Transitions
- **✨Custom WPF/WinForms Windows**, finally LandiTube looks more like your other programs when prompted with windows! Enjoy pretty, informative, and efficient popups whenever the time arises!

### NEW:

- Twitch account checker, asks to link twitch on startup
- "OBS Source Layers" tab
- OBS Source Layers configuration
- moved "Poses" into OBS tab, renamed to "Pose Selector" for OBS Source Layer editing
- QOL: Progress bar to indicate where you are in the refresh/validation process
- Version check in Bridge thanks to SAMMI Bridge's version 7.20 changes that have built-in version checking
- QOL: OBS Progress bar to indicate where you are in the refresh/validation process
- anti-tamper to `[LandiTube] Layers *`, deleting any user-made sources and pointing to tutorial
- auto-refresh scenes in layers tab upon scene rename, creation, and deletion
- trying to go to the `[LandiTube]` scene sends to `[LandiTube] Customize` scene to point in right direction for custom assets
- Added more movement scenes for future integrations (shhH!)
- `[LandiTube] Transitions` scene, this is where all future transitions will be generated!
- `[LandiTube] Render + Layers` scene, to accomodate for new modules such as transitions and dynamic transitions.
- OBS Scenes version updated sv1.0.0 -> 0.20.0
- Added new required obs plugin "Source Clone" by exeldro
- Added new required obs plugin "obs-shaderfilter fork" by exeldro
- Added new required obs plugin version "Move Transition 2.9.1" by exeldro
- Added new required obs plugin version "blur" by prgmitchell
- Added new LandiTube Globals for internal use:
  - `loadedModelsDefaultTrans` (array)
  - `loadedModelsDefaultTransDuration` (array)
  - `loadedLayers` (array)
  - `obsRestarting` (bool)
  - `landiTubeAssetsVersion` (string)
  - `bridgeVersion` (string)
  - `folderReaderVersion` (string)
  - `sandoVersion` (string)
  - `moveTransitionVersion` (string)
  - `sourceCloneVersion` (string)
  - `obsScenesVersion` (string)
  - `obsVersion` (string)
  - `isLoading` (bool)
- Added corruption checks to OBS auto lua script installer
- Added a placeholder question mark when validating install/refreshing models
- License is now embedded into .sef
- layer scene references are stored in a `layers.ini` file
- Moved input device to the top of the settings tab/area
- Added a check to "Refresh Models" to wait for validation to complete, preventing overlap
- Cleaned up unused functions in bridge

### Reworked:

- Buttons have recieved icons
- Buttons have revised colors for better clarity
- Some sliders swapped to "oninput" instead of "onchange" for easier tweaking
- OBS Source Layering has been changed to make layer data automatically generate, so user just has to align to their liking, as well as revamp pose selector
- OBS Auto lua script installer changed to make use of buffer positions, and accomodate for OBS 29.1's new prettified scene collection json. Changed detection method for default/portable installs, making it 100% reliable in every use case
- Asset generation, now downloads from a dropbox link to prevent deck bloat, slowing down SAMMI editing drastically. installCheck now waits for assets to be generated via checking `assets_version.txt`
- Command Line integrations, using SAMMI 2023.2.1's new Command Line command to make LandiTube more snappy and efficient
- freeze/unfreeze engine reworked to be slightly more reliable to not have to click twice, edited to synergize with obs source layering, locks layer sources for easy manipulation
- OBS path fetcher now uses Sando command to handle fetching path, much better
- Changed renderer to solely rely on Source Toggler lua
- OBS Plugins/Lua install pushed to separate button, triggered via extension trigger
- Changed the way actions are read with the `DevLandiTuber settings` internal extension trigger, opting for an array split
- Scene collection json file detection method, no longer based off filename but rather the scene collection name stored inside the files themselves to determine proper file
- Changed the string for installing lua scripts due to obs 29.1.1 messing with it
- No longer reruns entire validation process when closing obs for auto lua script installer
- Install validation and "Refresh Models" button triggers a queue chain instead of running each funtion at the end of each function, for easy rearrangement + stability
- Ensure obs plugins are installed before attempting to install scenes/sources
- Scene packer installation now runs twice

### Bug fixes:

- OBS now auto-reopens properly and doesn't get stuck in system tray
- Fixed unable to find scene collection json path
- Fixed unable to add lua script, causing an install loop
- Fixed OBS missing the "squish down" filter on obs sources and scenes installation
- Fixed being unable to use multiple file formats together on one model
- Fixed setting a new model or emotion causing an entire validation check each time
- Fixed unable to find OBS path
- Fixed install button interrupting validation checks
- Fixed obs path not escaping linebreaks when loading from `settings.ini`, causing a broken obs path
- Fixed not waiting for OBS to be fully closed, uses `tasklist` to check obs close status
- Fixed a niche cache involving deleting an active emotion
- Fixed an infinite refresh loop
- Fixed landie not getting their proper amount of sleep
- Fixed issue with bridge being disconnected mid install
- Fixed model loading without any visuals at random times
- Fixed flickers present with layers
- Fixed layer references sometimes being forgotten (thanks layers.ini!)

  # 0.16.0

- NEW: Added .mp4 support
- NEW: Added .ts support
- NEW: Added .mov support
- NEW: Added .flv support
- NEW: Added .mkv support
- NEW: Added .avi support
- NEW: Added .webm (VP8) support, allowing efficient, high quality, alpha supported (semi-transparent, transparent) video to be used as poses! basically the better .gif!

  # 0.15.0

- REWORK: Changed the auto lua-script installer for a new one that is far more stable
- REWORK: Changed the way an input source is changed via bridge
- NEW: Added SAMMI Command "LandiTube: Change Vertical Smoothing"
- NEW: Added SAMMI Command "LandiTube: Change Vertical Squish"
- NEW: Added SAMMI Command "LandiTube: Change Horizontal Smoothing"
- NEW: Added SAMMI Command "LandiTube: Change Horizontal Squish"
- BUG FIX: fixed input source never changing properly
- BUG FIX: fixed lua installer infinite loop
- BUG FIX: fixed OBS installer infinite loop

  # 0.14.6

- REWORK: Filter settings saved differently, updates no longer overwrite custom settings
- REWORK: OBS Source Layers have been **Entirely Reworked**, natively built into LandiTube, no need to touch SAMMI! tutorial in the coming days!
- REWORK: Rendering has been **Entirely Reworked**, dynamically generating image sources for every pose that exists in the models folder.
- NEW: Yelling poses! add "\_yell" at the end of your pose file's names (before \_blink) to set a yelling pose!
- NEW: Yelling threshold slider in config to display yelling varient of a pose!
- NEW: Yelling delay slider to determine how long the yell pose is displayed on stream after falling below yell threshold
- NEW: Automatic LandiTube Scene and Source installer
- NEW: Automatic LandiTube lua script installer
- NEW: Automatic Scene Collection backup on lua install
- NEW: bundled tool: gifdiff
- NEW: bundled tool: gifsicle
- NEW: bundled tool: ffprobe
- BUG FIX: pose debugger sometimes not freezing on the correct pose
- BUG FIX: active emotion being reset on update
- BUG FIX: active model being reset on update
- BUG FIX: setting input device in settings not taking effect
- BUG FIX: fixed long model names looking awkward in bridge
- QOL: Model icons size significantly decreased
- QOL: Model icons formatted differently to not stretch across screen

  # 0.13.2

- BUG FIX: Fixed the command `LandiTube: Pause Engine` not properly working after backend rewrite
- BUG FIX: Fixed the helper "Poses" list in bridge not properly working after backend rewrite
- BUG FIX: Fixed .gif files not properly working after backend rewrite (devnote: might need extra edits)
- BUG FIX: Model no longer squishes if there is no blink frame for current state
- BUG FIX: Model no longer squishes during blink while talking
- NEW: LandiTube Data addition `current_state_has_blink`! with every extension trigger, get a boolean (true/false) if your character can blink!

  # 0.13.1

- QUALITY OF LIFE: Refresh time _significantly_ reduced
- QUALITY OF LIFE: Model swapping is now instant!
- BUG FIX: "Input Device" being reset on reload
- BUG FIX: "Input Device" devices sometimes not showing up in bridge
- BUG FIX: Prevent invalid emotions or models to be loaded via `LandiTube: Model Change`, and `LandiTube: Emotion Change`.
- BUG FIX: Fixed certain devices causing a crash due to special characters
- BUG FIX: Fixed crash for certain common special characters being in the name of Models, Emotions, and Poses
- NEW: **Rewrote entire backend**. my head hurts.

  # 0.11.0

- NEW: Fixed clipping of buttons on small bridge sizes
- NEW: Added Dropdown: Voice Meter Type
- NEW: Added Slider: Voice Delay
- NEW: Added Slider: Vertical Easing
- NEW: Added Slider: Vertical Squish
- NEW: Added Slider: Horizontal Easing
- NEW: Added Slider: Horizontal Squish
- NEW: Added input boxes to all sliders for precision
- BUG FIX (MAYBE): Attempt to fix "Input Device" dropdown. If this still doesn't work, refer to the troubleshooting section to select your input device manually c:
- BUG FIX: Fixed documentation link in the bridge being literally blank
- BUG FIX: Fixed clipping of buttons on small bridge sizes
- BUG FIX: Update banner takes you to patch notes screen with download button now and not the same place...
- BUG FIX: Now the deck is ACTUALLY fixed my bad :3

  # 0.10.0

- NEW: Poses section dividers: separated between idle, and talking poses
- NEW: Poses section button: "Resume Engine", resumes the rendering engine from a frozen state for use after clicking a pose button to restore function
- NEW: Poses section button: "Toggle Blink Frames", allows you to freeze blink frames in time aswell (displays nothing if a pose has no blink counterpart
- NEW: Poses section button: "Open Emotion's Folder", to go to where poses are stored for the current model's emotion!
- NEW: Poses section: click a pose to freeze in time to align your layers!
- NEW: Revamped emotion list layout, uses full width rows for easier clicking
- NEW: Added "LandiTube: Pause Engine", stop the rendering engine in it's tracks!
- NEW: Added "LandiTube: Resume Engine"
- BUG FIX: Fixed crash on SAMMI deck load, your deck is alive again!
- TYPO FIX: Changed command names from "LandiTuber" to "LandiTube"

  # 0.9.11

- BUG FIX: ok i didn't actually fix it last update so get bamboozled its fixed now

  # 0.9.10

- BUG FIX: Update link was brokie oops my bad

  # 0.9.9

- Initial Beta Release 🎉

<!--patchnotes end-->
