---json
{
  "layout": "product.njk",
  "date": "2022-12-22",
  "title": "Easy Emotes",
  "description": "Easily display TTV, FFZ, BTTV, and 7TV Emotes in an Image Source! Animated supported!",
  "version": "2.0.1",
  "versionSummaryHeader": "even more performance increase, 7tv emote compatibility fixed, + new verbose mode!",
  "versionSummaryBody": "everything in 2.0.0 is still relevant, just broke the emote fetcher on accident so this fixes it and as compensation i made emote downloading in batches way faster :3c",
  "tags": ["product", "sammiExtension"],
  "price": "FREE",
  "permalink": "/shop/sammi-extensions/easy-emotes/",
  "image": "/assets/images/sammi-extensions/easy-emotes/cover.png",
  "imageAlt": "Product icon for Easy Emotes",
  "authors": ["Landie"],
  "shopLabels": ["Free", "Utility"],
  "downloadLink": "https://landie.land/shop/sammi-extensions/easy-emotes",
  "sammiImage": "https://landie.land/assets/sammi-extensions/easy-emotes/cover_bridge.png"
}
---
<!--overview start-->
⁉ What is it for?
=================

"Easy Emotes" Is an extension I developed after discovering how _hard_ it is to get an emote to use within SAMMI.

The current methods are _long and tedious_, and the best way to display them is in an OBS Browser Source with a custom written HTML page.

Which is absolutely **_abysmal_** for your stream's performance (Its a chrome browser tab for every source!)

![demonstration of the abysmal way to add an emote into OBS](./easyemotes-1.gif)

**THE HELL⁉**

🤔 How does this extension fix that?
====================================

All you have to do is:

1.  Provide the message you want to scan for emotes
2.  Get back an array of local image pathes of the emotes in less than a second.
3.  use Source Change Settings to set an image from the array.

![using Source Change Settings to display an emote from the returned array in an image source](./easyemotes-2.gif)

#### _Full quality, efficient, performance friendly emote! It's That Easy_ !

😱 FrankerFacez? BetterTwitchTv? 7TV??
======================================

**All supported out of the box**.

* FFZ works beautifully.
* BTTV works beautifully.
* 7TV was REALLY hard to get working, but came out flawless.

🎞 Animated too?
================

Even animated. Wide emotes supported, and eventually Zero-Width!

Example Usage 📝
----------------

Take chat emote, put into OBS. 3 steps.

### Input:

![An example of "Download Files" usage](./easyemotes-3.png)

### Output:

!["Download Files" output](./easyemotes-4.png)

### Display in OBS!

![using Source Change Settings to display an emote from the returned array in an image source](./easyemotes-5.png)

How do i get started?
---------------------

Visit the [Setup Page](#setup) for an in-depth, easy to follow quick start guide!
<!--overview end-->
<!-- more -->
<!--setup start-->
Getting Started
===============

Prerequisites
-------------

* [Sando 2.1.0](https://landie.land/shop/sammi-extensions/sando)

Installation
------------

* Download the .sef file
* Install the .sef file via the left hand side menu of the core, clicking the bridge button, then clicking "Install an Extension".

The installation process will then begin. Make sure you have the prerequisites up above.  
On first install, you'll be prompted to confirm your streaming account. You need to have your main Twitch Streaming account linked in order to use this extension. This does not work for YouTube.  
  
Wait until all of the yellow messages are gone, then you are ready to use the extension! visit the [documentation](#documentation) to learn how to use the commands!

Bridge Buddies!
---------------

![bridge p1](./easyemotes-6.png) ![bridge p2](./easyemotes-7.png)

This is what your bridge will look like! lets run by section.

1.  "Easy Emotes" bridge tab. This is how you access the bridge page for "Easy Emotes" after installing.
2.  "Refresh Emotes" button allows you to run the process that checks for new emotes only. Clicking this is effectively the same as installing, or starting up SAMMI and connecting to your bridge for the day.
3.  "Clear Cache" button is pretty important. This allows you to delete all your cached emotes, and download them all over again. Why would you want to do this? You might have bugged out emotes that don't work right, emotes that have been updated but keep the same alias, and more. Clear Cache is your friend for any issues you might have. Click this first!
4.  "Cached Emotes" is a visual representation of all of the emotes you have locally downloaded, and listed in a database including information like the url, emote name, id, and the service they come from. Check here for any oddities and suspicions you might have with an emote being referenced improperly when fetching.
5.  Documentation reminder! click it. thats how you know all this!
6.  My support footer. This links you to other extensions by me (on this site!), as well as a short message about supporting me financially. If you want me to continue making extensions, please consider dropping a dollar or two! one dollar is enough to help me cover some fees for domain names, servers, and more. and maybe a water :3c
7.  Special thanks section to anyone that helped beta test, or blast some bugs! I loaf all of them <3

Updating
--------

Install the .sef as you would normally, and allow the deck to be replaced. Easy as pie! (wait. why is pie easy?)
<!--setup end-->
<!-- more -->
<!--tutorials start-->

<!--tutorials end-->
<!-- more -->
<!--patchnotes start-->

lol4

<!--patchnotes end-->
