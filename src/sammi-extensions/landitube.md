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
      "https://github.com/prgmitchell/blur-filter/releases/download/1.1.0/blur-filter-1.1.0-win.zip"
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

<!--overview start-->

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

<!--setup start-->

**This is the setup tab**

<!--setup end-->

<!-- more -->

<!--tutorials start-->

This is the tutorial tab

<!--tutorials end-->

<!-- more -->

<!--patchnotes start-->

my awesome patch notes
<!--patchnotes end-->
