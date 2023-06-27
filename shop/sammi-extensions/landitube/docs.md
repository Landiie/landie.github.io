Bridge and You!
===============

![landitube in the bridge with highlighted](./landitube-docs-1.png)

This is what your bridge will look like! lets run by section.

1.  "LandiTube" bridge tab. This is how you access the web interface for "LandiTube" after installing.
2.  Defining information about the extension, such as Title, Authors, and their socials. You can see if i'm live or not by the little red circle next to the twitch icon!
3.  Update banner, should only appear if there is a new update. Clicking the "More Info" button should reveal a modal with a little bit more information about what you'll be installing. Some have important warnings, so be sure to read!
4.  "Refresh Models" is a _very important_ button to get familiar with. This refreshes the models, and their associated emotions. You should be clicking this everytime a model, emotion, or pose is added or removed. Changing an already existing pose should not require a refresh, but it's a good habit to have regardless!
5.  "Open Models Folder" is a quick and easy way to get to the folder where the models are stored. A file explorer window will pop up c:
6.  This is the models list, all valid models will show up here. You are required to have at least one model loaded, **and** selected (depicted by the red box). Models have entirely different sets of emotions!
7.  "Open Emotions Folder" provides a quick way to get to the current model's emotions folder. A file explorer window will pop up c:
8.  This is the emotions list, which changes depending on which model is loaded. The emotions list will only load if there is a selected, active model. You are required to have at least one emotion loaded, **and** selected (depicted by the red box) for any output.
9.  "Voice Threshold" is the slider for detecting the sensitivity of your talking. This is a very sensitive slider, and I do not recommend going above 5!
10.  This allows you to set an input device to listen to for the engine to read. Great for if you're looking to use LandiTube as a TTS mascot, as you can set this to be a virtual audio cable! Make sure to pick the input that is right for you.
11.  Support footer, which has my donation info, and a direct link to my shop where I have even more extensions (that can interface with this one to create some incredible pngtuber combos!). I would really appreciate it if I could at least get a dollar every now and then 💚

# Path Structure

Throughout this section, "LandiTube Path" refers to  
`(YOUR SAMMI INSTALLATION PATH HERE)\Landies_Extensions\LandiTube`

"LandiTube" is built with ease in mind, as a result, all you have to do is make files and folders to create your models and emotions. There are some important notes to keep in mind while creating your directories.

To get a model up and running, You need to have _3 key components down_. [Models](#models), [Emotions](#emotions), and [Poses](#poses)!

Make sure you've gone into your bridge, and changed the appropriate settings! you'll need to set your mic, maybe tweak the input threshold, etc. [Bridge and You](#bridge-and-you-) has an explanation of the settings section for you!

## Models
To create models, you create a folder in the "models" folder in the LandiTube path. All folders inside that folder will create an Icon in your bridge showing that a model is detected, and exists after a model refresh.

After adding a models folder, click the "Refresh Models" button in the bridge to check and see if an icon is generated in the bridge for you! Once you see your model, click on it! **This will make the model active, which is required for output.**

Here is a visual example of my models folder, where I have two models loaded, and one click on marking it _active_.

![Visual of file explorer in the models directory, with two folders labeled "Landie" and "Apple"](./landitube-docs-2.png)

![Showcasing the result inside the models list located in the bridge](./landitube-docs-3.png)

## Emotions

To create emotions for your model, you first need to specify an "emotions" folder in your unique model's folder. This is what it should look like:

![File explorer, showing an emotions folder nested inside a unique model's folder](./landitube-docs-4.png)

In total, your file path should look something like `(LandiTube Path)\models\(unique model folder)\emotions`!

Inside your new "emotions" folder, All folders created will create an Icon in your bridge showing that an emotion is detected, and exists after a model refresh.  
  
After adding an emotion folder, click the "Refresh Models" button in the bridge to check and see if an icon is generated in the bridge for you under your active model! Once you see your emotion, click on it! **This will make the emotion active, which is required for output.**

Here are some emotions i made in my "emotions" folder inside the "Landie" model folder.

![File explorer, showing multiple uniquely named folders inside the "emotions" folder](./landitube-docs-5.png)

![showcasing the rendered result inside the bridge](./landitube-docs-6.png)

## Poses

Now that your model is set up with proper emotions, lets get to the good stuff!

In traditional PNGTubing engines, you had 4 poses per emotion: idle, idle with blink, talking and talking with blink (sometimes you dont even have the blink).

in "LandiTube", you're allowed to have _as many idle, and talking poses as your heart desires_. Blinking will be discussed further down.

What does that mean? Well, everytime you would go into any of the states mentioned above, it would pick randomly between all of the provided idle, and talking images. _You can have multiple talking poses for a single expression to really show natural movement, combined with multiple idle poses!_

All poses are places inside one of your unique model's unique emotion folders!

**NOTE: You are not required to include multiple poses of each state, or add blink frames for them. the option is just available to you!**

lets go over how to set up each state LandiTube provides out of the box!

### Idling

To create an idle pose for your tuber's emotion, drag in an image file with the keyword "idle" in it's filename!

For every image containing the keyword "idle" in it's file name inside your emotion folder, those images will be turned into a list of random poses for "LandiTube" to swap to whenever idling is supposed to occur.

Example: Lets make _three_ idle poses for an emotion!

1.  Have three idle image files ready! animated or not, its okay! make sure each idle image file contains the word "idle" in there at least once! my files are named `"idle.png"`, `"idle2.png"`, and `"idle3.png"` respectively. ![showing idle poses in folder](./landitube-docs-7.png)
    
2.  Hit "Refresh Models" in your bridge! This should recalculate all the poses you have.
    
3.  Now, whenever you finish talking, It will pick any out of the idle poses provided! ![showing tuber now with three idle poses](./landitube-docs-8.gif)
    

Hmm. That doesn't look great. Lets look into adding some talking poses!

### Talking

Talking is the easiest to do!

To create a talking pose for your emotion, drag in an image file named whatever you want! be sure not to include the keywords "idle".

For every randomly named image inside your emotion folder, those images will be turned into a list of random poses for "LandiTube" to swap to whenever talking is detected.

Example: Lets make two talking poses for my PNGTuber to pick from!

1.  Have two talking image files ready! animated or not, its okay! Ive named my talking poses `"one paw talkin.png"`, and `"two paws talkin.png"`. ![showing talking poses in folder](./landitube-docs-9.png)
    
2.  Hit "Refresh Models" in your bridge! This should recalculate all the poses you have.
    
3.  Now, whenever you talk, It will pick either one, or the other! ![showing tuber now with two talking poses](./landitube-docs-10.gif)
    

Looks much better! but there is quite a dead stare.. lets add blinking!

### Blinking

Talking, and idle poses do not need to have blinking frames, but they are nice! One nice feature is that blinking is not "all or nothing", you can set blink frames for whatever poses you want!<br>Maybe one idle pose is meant to be a dead stare while the other idle poses have blinks?<br>Maybe a character is angry and they don't blink while talking?

To attach blinking frames to your poses, all you have to do is drag in your blinking image with the exact file name of the pose you want to give blinking to, but with "\_blink" appended just before the file extension (.png, .gif)

So "idle.png" becomes "idle\_blink.png", "one paw talkin.png" becomes "one paw talkin\_blink.png", etc.

Example: Lets add blinking frames to all of our inserted idle, and talking poses!

1.  Have your blinking image files ready! animated or not, its okay! every image is the same as the other images inside the emotion's folder, but with "\_blink" added. Image below! ![showing talking poses in folder](./landitube-docs-11.png)
    
2.  Refresh is not needed for blinks! at least i think so. if you see an issue, just hit "Refresh Models"!
    
3.  Now, every pose has blinks! ![showing tuber now with blinking frames for every pose previously added](./landitube-docs-12.gif)
    

### Yelling

Yelling frames are a feature added in 0.14.6 and above, allowing you to specify an *extra* talking frame that triggers when your voice reaches a higher threshold. You can set this threshold in the settings tab!

The threshold should always be *above* the talk threshold! Just like the talk threshold, the yelling threshold is sensitive, so keep the number low!

Yell frames are attatched to any talking pose, sort of like how blink frames work!

To attach yelling frames to your poses, all you have to do is drag in your yelling image with the exact file name of the pose you want to give yelling to, but with "\_yell" appended just before the file extension (.png, .gif)

So "talking fella.png" becomes "talking fella\_yell.png", "mumble.png" becomes "mumble\_yell.png", etc.

Important note, if you have a yell frame attatched to a pose that *also* is intended to be a **blink frame**, "\_yell" **must** be prepended to "\_blink".<br>Example: "talkin\_yell\_blink.png" is a yell, *and* blink frame!

📝 Example: Let's add yelling frames for all of my talking poses in an emotion!

This emotion only has one talking pose and one talking pose with a blink frame, so I'm providing two yelling frames for each one.

1. Gather all of your yelling frames! png, gif, mp4, webm, you name it! You don't need to have a yell frame for every single talking pose, just apply them to the poses you want!
2. ensure the files are named accordingly. For me, I have one talking pose "talk.png", as well as one with a blink frame attatched, "talk_blink.png". I want both of these to have a yell frame!<br>"talk.png" becomes "talk_yell.png"<br>and<br>"talk_blink.png" becomes "talk_yell_blink.png"
3. drag the images into my model's unique emotion folder!
4. click "Refresh Models", bam yelling frames.

# Displaying In OBS

"Okay I put in my files, clicked my model to set it as active, and my emotions with one active, where is my fella??"

To display your model is really easy!

1.  Navigate to your desired OBS Scene, and click the plus ➕ sign, or right click the "Sources" pane to click add, and select "Scene". This will allow you to "nest" another scene as a source!
2.  Select the scene that says "\[LandiTube\]". You may see other scenes such as "\[LandiTube\] Customize", and "\[LandiTube\] Model Movement". These are explained further down in the [Custom Events](#custom-events-using-api) section. Don't click these!
3.  Voila! Hold ALT while dragging the sides to crop, resize however you like, the fella has arrived!!

# Commands

## LandiTube: Change Model

Changes the current model to another valid model!

| Box Name | Type | required? | Description |
|----------|------|-----------|-------------|
Model Name | Dropdown | ✔ | The name of the model you wish to swap to. (casing matters!)|

## LandiTube: Change Emotion

Changes the current model's emotion to another valid emotion!

| Box Name | Type | required? | Description |
|----------|------|-----------|-------------|
Model Name | Dropdown | ✔ | The name of the emotion you wish to swap to. (casing matters!)|

## LandiTube: Pause Engine

Pauses all actions of the engine, leaving your character stuck in stasis. poor lad!

| Box Name | Type | required? | Description |
|----------|------|-----------|-------------|
Reset Squish | boolean (checkbox) | ✔ | If ticked, after executing the command, the engine will stop and the proportions wil|

## LandiTube: Resume Engine

Resumes default engine behavior c: For use after previously pausing the engine! otherwise this command is just a fun paperweight in digital form~

Custom Events using API
=======================

Like the engine, but want to add your own integrations using SAMMI? You can absolutely do that with relative ease if you know SAMMI! The PNGTuber engine provides various different environments and data for you to listen to, and read!

First, lets go over the Extension Triggers provided by "LandiTube".

Extension Triggers
------------------

Extension triggers are a way for a SAMMI button to be ran based on certain criteria specified by the Engine. This works exactly like if your button is set up to trigger on twitch chat. You can read more about extension triggers and SAMMI [here](https://sammi.solutions/docs/triggers/general#extensiontrigger).

Currently, there exist these Extension Triggers:

| Extension Trigger | Description |
|-------------------|-------------|
|`LandiTube talking true`|triggers a button when the character starts talking
|`LandiTube talking false`|triggers a button when the character is finished talking
|`LandiTube blinking true`|triggers a button when the character blinks
|`LandiTube blinking false`|triggers a button when the character is done blinking
|`LandiTube yelling true`|triggers a button when the character yells
|`LandiTube yelling false`|triggers a button when the character is done yelling
|`LandiTube model changed`|triggers a button when the model is changed from the current active model
|`LandiTube model` (modelname)|triggers a button when the model is changed and matches a specific model
|`LandiTube emotion changed`|triggers a button when the emotion is changed from the current active emotion
|`LandiTube emotion` (emotionname)|triggers a button when the emotion is changed and matches a specific emotion

Each extension trigger returns the same hefty amount of juicy data when that extension trigger was sent for you to read and tinker with.

You can pull these values using the command "`Trigger Pull Data`" on a button that was triggered with one of these Extension Triggers mentioned above.

Here are the list of fields you can enter in the `Pull Value` box:

| Pull Value | Type | Description |
|------------|------|-------------|
|`blink`|_boolean_|Current blinking state
|`current_emotion`|_string_|The current set expression of the active model
|`current_emotion_path`|_string_|the current image path compiled together using `global.main_directory`, `current_model`, `current_state`, and `current_emotion_state_extension`
|`current_emotion_poses_idle`|Array|An Array of the current model's idle poses (not including blinks)
|`current_emotion_poses_talking`|Array|An Array of the current model's talking poses (not including blinks)
|`current_emotion_state_extension`|_string_|The current state's file extension to be used in conjunction with `current_state` to create a full file
|`current_model`|_string_|The current active model
|`current_state`|_string_|The current active state of the model. This the result of various impacting factors such as yelling, blinking, talking, and randomly drawn poses
|`current_state_has_blink`|_boolean_|If your state has the ability to blink or not! Version 0.13.2^
|`talking`|_boolean_|Current talking state
|`yelling`|_boolean_|Current yelling state

# Layered OBS Sources

As seen in the [overview](#overview), you can do a lot of awesome stuff with this engine involving using OBS Sources as layers for each pose of your model!

Head on over to the "OBS S

![showing difference between customize, and main scene](https://i.imgur.com/tGAxHLX.gif)

NEW as of 0.10.0:

Pose Freezing
-------------

Aligning the sources can be pretty hard and frustrating, especially if your blink frames have a lot of movement and you're trying to align something to it. Thats why I added a pose-freezing feature to help with the alignment of your sources!

Pick a pose you want to align the position of a source to, and click it in your bridge to display, and freeze the engine in place! (sometimes you may have to click it twice if you're talking while selecting it)

![showcasing pose engine freeze](https://i.imgur.com/Ve2Qei3.gif)

If you want to toggle to your blink frames, click the "Toggle Blink Frames" button to transform your button into their blink counterparts! If you do not have a blink associated to one of your poses, clicking the blink button will result in a blank output, but you should probably expect that if you know you don't have a blink frame for a pose!

Once you are done using the freeze feature, click "Resume Engine" in order to restore engine functionality.

And thats everything you need to know to begin! For the actual SAMMI part, i recommend checking out the [SAMMI documentation](https://sammi.solutions/docs/core) to begin your ultimate pngtubing journey!

Tutorials will be available on the [tutorials](#tutorials) tab so you can get a better idea of how to use extension triggers if you are new to SAMMI!