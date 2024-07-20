---json
{
	"layout": "product.njk",
  "bodyOverride":"",
  "hidden":true,
	"date": "2024-06-29",
	"tags": ["product", "sammiExtension"],
	"title": "Gacha",
	"permalink": "/shop/sammi-extensions/{{ title | slugify }}/",
	"description": "Play text-to-speech audio using Windows Speech APIs (4 & 5)!",
	"image": "/assets/images/sammi-extensions/windows-tts/cover.png",
	"imageAlt": "Product icon for Windows TTS",
	"authors": ["Landie"],
	"shopLabels": ["Free", "Utility", "Audio"],
	"price": "FREE",
	"version": "1.0.0",
	"versionSummaryHeader": "release",
	"versionSummaryBody": "release",
	"downloadLink": "https://landie.land/shop/sammi-extensions/windows-tts",
	"sammiImage": "https://landie.land/assets/sammi-extensions/windows-tts/cover_bridge.png",
	"versions": {
		"100": {
			"valid_versions": {},
			"obs_plugins": {
				"names": [],
				"direct_download_links": [],
				"download_links": []
			},
			"sammi_extensions": {
				"names": ["Sando"],
				"download_links": [
					"https://landie.land/shop/sammi-extensions/sando"
				]
			}
		}
	},
	"motd": "i speak from ur bindows"
}
---

<!--overview start!!-->

# What is it ⁉

This gives SAMMI Text-to-speech capabilities utilizing the Windows speech APIs 4 and 5!

Thats big words for "you can use system built-in text-to-speech in SAMMI".

The amount of voices you have entirely depends on what language packs you have installed in Windows for either SAPI 4 or 5. This extension comes bundled in with at least *29 SAPI4 voices* some of which you may recognize because Windows SAPI is often used in YouTube videos for it's comedic effect!


It is recommended to do some research on what kind of voices are available using these systems, but in the [setup](#setup) page will be some resources where you can find some more packages to download.

Audio is played through it's own application, `balcon.exe`, meaning that in OBS, you can capture this audio's output directly to manage it *independant* from all other audio sources if you're _not_ using Desktop audio capture (the best way to manage audio)

If you _are_ using Desktop audio capture (shame on you!), fear not, as the extension allows you to change the audio device in which the audio comes out from! Pick an unused audio device, then add a new audio output capture in OBS and you're off to the races! Control the audio how you want!

Make sure to head over to [setup](#setup) to get started!

To learn how to use this extension in your SAMMI projects after setting it up, check the documentation tab!
<!--overview end-->

<!-- more -->
<!--overview right column -->

<video autoplay muted loop playsinline>
  <source src="/assets/images/sammi-extensions/lurkbait-fisher/demo.mp4" type="video/mp4">
</video>

<!--overview right column end-->
<!-- more -->
<!--setup start-->

# Getting Started

## Install Video

Here is a video demonstrating the entire installation process!

<iframe width="560" height="315" src="https://www.youtube.com/embed/YTwBezx8z4Y"
   title="YouTube video player" frameborder="0"
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

But! If you prefer to read...

## ⏬ Prerequisites (Get these first!)

These are **Required** for this extension to work, Prior to installation.

### SAMMI
- [SAMMI](https://sammi.solutions/download)
- [Sando](https://landie.land/shop/sammi-extensions/sando)

### OBS

- [OBS Studio](https://obsproject.com/download)
- ["Move" OBS Plugin](https://obsproject.com/forum/resources/move.913/)
- ["obs-shaderfilter" OBS Plugin](https://obsproject.com/forum/resources/obs-shaderfilter.1736/)

## Installation

1.  _Make sure you have the prerequisites installed first_
2.  Download "LurkBait Fisher" .sef file from the download button above
3.  Connect OBS
4.  Connect the SAMMI Bridge
5.  Install the .sef file via the left hand side menu of the "SAMMI Core" via clicking the bridge button, then clicking "Install an Extension".
6.  Follow the installation steps provided on-screen!
7.  Afterwards, you should be all set!

## Usage
1. Go to whichever scene you'd like to use the fisher widget in, inside OBS
2. Add a new "Scene" source (otherwise known as nesting an obs scene)
3. Pick "[LurkBaitFisher]"
4. Position how you want it, send a test cast in LurkBait Fisher, and you should be all good!

{% alert "warning" %}
It is highly recommended to create your own scene that contains both LurkBait Twitch Fishing game capture, AND the widget together positioned how you want, then nest *that* scene instead so it isn't a nightmare to move the two around!
{% endalert %}  
   
## Updating

Install the .sef as you would normally, and allow the deck to be replaced. Easy!

<!--setup end-->

<!-- more -->

<!--tutorials start-->
                                              

<!--tutorials end-->

<!-- more -->

<!--troubleshooting start-->

# Welcome to the helpdesk!

Sorry you had to come here, I'm trying my best! Check out the sidebar to see if there is anything related to the issue you're experiencing!

<!--troubleshooting end-->
<!-- more -->
<!--patchnotes start-->

# 1.0.0
- Initial release 🎉

<!--patchnotes end-->
