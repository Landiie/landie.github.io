---json
{
	"layout": "product.njk",
  "bodyOverride":"body-blue",
  "hidden":false,
	"date": "2024-04-19",
	"tags": ["product", "sammiExtension"],
	"title": "LurkBait Fisher",
	"permalink": "/shop/sammi-extensions/{{ title | slugify }}/",
	"description": "An add-on to LurkBait Twitch Fishing to show the chatter fishing!",
	"image": "/assets/images/sammi-extensions/lurkbait-fisher/cover.png",
	"imageAlt": "Product icon for LurkBait Fisher",
	"authors": ["Landie"],
	"shopLabels": ["OBS Widget"],
	"price": "FREE",
	"version": "1.0.0",
	"versionSummaryHeader": "release",
	"versionSummaryBody": "release",
	"downloadLink": "https://landie.land/shop/sammi-extensions/lurkbait-fisher",
	"sammiImage": "https://landie.land/assets/sammi-extensions/lurkbait-fisher/cover%20bridge.png",
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
	"motd": "let the fishes be free"
}
---

<!--overview start!!-->

# What is it ⁉

This is a unique OBS Widget that is meant to be used with the game [LurkBait Twitch Fishing](https://store.steampowered.com/app/2767520/LurkBait_Twitch_Fishing/) available on steam!

This widget displays the person fishing in the game, and plays an animation of them casting, getting a snag, reeling in, and displaying their catch! In the future, I plan to add a feature that records a short gif of the catch screen then posts it to a specified discord channel.

Please ensure that you head over to the [Setup](#setup) tab so you know how to install and use it on your streams!

This is one of my more polished extensions ~~so it costs a small fee~~ (changed my mind, have it for free!), but you should expect top notch quality from me since I rarely ever charge on anything I make! Thank you for considering to support me!

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
