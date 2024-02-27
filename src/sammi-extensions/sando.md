---json
{
  "layout": "product.njk",
  "date": "2023-05-15",
  "title": "Sando",
  "description": "A Library to make extension developer's lives easier!",
  "version": "2.5.0",
  "versionSummaryHeader": "File tailer updates",
  "versionSummaryBody": "Adds a new white/blacklist option to the file tailer among other things!",
  "tags": ["product", "sammiExtension"],
  "price": "FREE",
  "permalink": "/shop/sammi-extensions/sando/",
  "image": "/assets/images/sammi-extensions/sando/cover.png",
  "imageAlt": "Product icon for Sando",
  "authors": ["Landie"],
  "shopLabels": ["Free", "Utility"],
  "downloadLink": "https://landie.land/shop/sammi-extensions/sando",
  "sammiImage": "https://landie.land/assets/sammi-extensions/sando/cover_bridge.png"
}
---

<!--overview start-->

# ❓ What is this?

wip

<!--overview end-->
<!-- more -->
<!--Overview Right Side start-->

Nothing to see here!

<!--Overview Right Side end-->
<!-- more -->
<!--setup start-->

# Getting Started

## Installation

1.  Download the .sef file
2.  Install the .sef file via the left hand side menu of the core, clicking the bridge button, then clicking "Install an Extension".

## General Extension Command Usage

![local variable persist visual](/assets/images/sammi-extensions/command-usage-1.png)

When you use these commands, any command that stores data in a variable must be a **persistent** button. You can check and change your button's persistence by checking that button's settings. This is a limitation of SAMMI, so this must be done for your variable saving commands to work.

A slightly **purple colored** command implies that the command is **not instant**. This means that you have to provide a delay, or, what is recommended, a `Wait Until Variable Exists` command block right after, which halts everything until that command returns the data that is required for the rest of the button to work. **Since buttons are persistent, you must have a `Delete Variable` command in the top of your button to ensure that it is properly waiting for new data to exist**.

![purple command proper usage](/assets/images/sammi-extensions/command-usage-2.png)

1.  `Delete Variable`: ensures that the `Wait Until Variable Exists` command waits for a brand new variable to exist
2.  `Purple Extension Command`: indicates that the command doesn't return the information instantly. must be paired with delay.
3.  `Wait Until Variable Exists`: A delay, halting the rest of the button, until the data exists within LB or the timeout is reached.

Then do whatever you want with that sweet, sweet data!

## Updating

I value updates a lot, so i can ensure everyone has the top quality product! When the bridge connects, there is an automatic update check. If there is a new update available, an alert message will be displayed in your core to check your bridge for an update button which checks, and provides a link to the releases section of this extension.

If you have a lot of alert messages pop up on bridge connect, you might miss it. I recommend clicking the "Check for updates" button in this extension's tab in the bridge every so often, or if you encounter an issue out of the blue.

### ⚠ Updating Procedure

To update this extension, please follow the steps below!

1.  Install the .sef file via the left hand side menu of the core, clicking the bridge button, then clicking "Install an Extension".
2.  Allow it to replace the deck it prompts
3.  👍 (ur good)

## Usage

Visit the [docs](#documentation) for usage!

<!--setup end-->
<!-- more -->
<!--tutorials start-->

Tutorial content here!

<!--tutorials end-->
<!-- more -->
<!-- troubleshooting start-->

None yet

<!-- troubleshooting end-->
<!-- more -->
<!--patchnotes start-->
# 2.5.0
- New Features:
  - Sando now boasts a websocket relay server that clients can connect to to both send and recieve data from/to the SAMMI bridge. The default port for the server is `6626`. It is highly recommended to include an identifier at the end of the address when connecting, so you can easily identify where a source is coming from. ex: `ws://localhost:6626/vnyan`, with the `/vnyan` part being the identifier. An example of what this would be used for is to connect a browser source/dock directly to SAMMI and receive events in real time for something like a chatbox. This could also be used for services that don't host their own websocket server but can connect to a server on their own.
  - Whenever a service that Sando relies on such as the SAMMI Bridge or OBS Websocket disconnects, the validation will be set back to zero and re-run when those services are reconnected.
  - Added logging to scene packer's unpackage
  - Added extra logging to Sando's validation, specifically the obs websocket validation
- Changes:
  - Changed the package that file tailer uses to something that allows the files it's listening to, to be deleted. Prior to this update, if the file that was being listened to was reduced in capacity in any way, it would cease to listen. This is a problem when listening to something like game logs in which they are cleared on game restart.
- Bug Fixes:
  - Fixed an issue where scene packer would not wait for Sando validation
  - Fixed an issue where connecting multiple file tails would not close the previous script, causing double events
  - Fixed an issue where disconnecting from services other than the bridge, such as resetting sammi or the obs websocket would cause the validation to hang
  - Fixed an issue where sando would re-validate itself while already validated, causing a redundancy.

# 2.4.5
- Bug Fixes:
  - Fixed an issue with scene packer's unpack not creating scenes with no scene items (I AM LOOSING IT. 4 PATCHES IN ONE DAY.)

# 2.4.4
- Bug Fixes:
  - Fixed a global not being set when installing (it only set when starting up SAMMI)

# 2.4.3
- Changes:
  - Moved the obsws validation to the validation of sando, so credentials can be used in other obsws applications
  - Changed the scripts relying on node to use the new variable `Sando.node` (points to the node.exe, more reliable than trusting an environment variable went through)
- Bug Fixes:
  - Fixed the folder reader port to run asynchronously and not drop commands

# 2.4.2
- Bug Fixes:
    - fixed an issue where node would not be detected on startup despite having it installed (thanks Kash the Dingo!)

# 2.4.1
- New Additions
    -   Ported Folder Reader to Sando with the new command: `Sando: Read Folder`

# 2.3.0
- New Additions
  - `Sando: Array Search` is a command that allows you to provide an array of data (currently only strings) and allows you to match it against a query which gives you back the closest set of matches. The first value of the returned array is the closest match. The only mode available at this current moment is simple mode, but advanced mode which supports objects, will be released at a later date.
  - new script `unpack.js`
  - new script `obswebsocket_connection_test.js`, for testing websocket connection via nodejs
- Changes
  - the pack script changed from the name `script.js` to `pack.js`
  - The background image has been significantly reduced in size to prevent SAMMI hitching while saving decks (might be removed entirely in the future)
- Reworks
  - `Sando: SP Unpack` has had an overhaul to be done entirely in nodejs while connected to the websocket. This adds the side effect of needing to provide an OBS Websocket Password if one is present on connection. This is automatically handled by the command. Nothing execution wise changes, just enjoy drastically faster unpack times!
  - `Sando: Powershell` has had an execution rewrite. Originally, Sando would transform the user's script text into a text file, read the text file, encode via powershell to base64, then use powershell's -EncodedCommand flag to run the script. This convoluted process allowed a bypass of powershell's execution policy, at the cost of efficiency and firewall popups from bad antivirus applications that assume any and all powershell operations are bad. This rewrite still writes the script to a file, but its a .ps1 file with a clever command line process to bypass the execution policy easier and more friendly. It's efficient, and I hope firewalls will act up less now.
  - Sando's validation process now checks for up to date node version instead of checking whether it's only installed or not (Thanks Caigan!)

# 2.2.4
- New Additions
  - `Sando: File Watch/Tail` now features a white/black list option (optional)
- Changes
  - Removed the default `data.txt` present in the sando assets zip, as it's leftover.

# 2.2.3
- Bug Fixes:
  - Fixed a case where node would falsely be flagged as installed if done on a system not set to 'English'

# 2.2.2.2
- Changes:
  - Removed queueing for `Sando: Log` for speed reasons. hopefully will not cause logs to be sent out of sync but tests look good.

# 2.2.2.1
- Bug Fixes:
  - Fixed variable re-initialization when upgrading from prior versions of Sando.

# 2.2.2
- Additions:
  - added some extra logging to the scene packer for created inputs. you can view the scene packer log in your main sammi directory, under the name `packer.log`. In the future, this will be moved into `Landies_Extensions\sando\sando.log`!
- Bug Fixes:
  - Fixed an issue when unpacking scenes to update existing scenes. Referenced sources would cease to be created if the original source was not created in the same session. Scene packer now analyzes the current scenes and sources installed to make an extra check for those cases.
  - Fixed an issue with the built-in auto update checker being stuck on 2.2.0

# 2.2.1
- Additions:
  - adds global variables for easy access to the "Landies Extensions" folder, keys labelled `landies_extensions` and `landies_extensions_slash` respectively
  - Added a restart flag when installing applications through Sando to refresh shell process
- Changes:
  - more comprehensive checks on "Check OBS Plugins"
  - check status of validation on every sando command ran, instead of endlessly waiting
  - Added logging to validation
  - npm install now only runs when installing/updating via the sef file, not on every load
- Bug Fixes:
  - fixed an issue where Sando would not detect when node was finished installing,
  - fixed a potential hanging issue when sando hasn't been verified

# 2.2.0
- Additions:
  - New: File Tailer! Hook up any log file to SAMMI via the new command `Sando: File Tailer`! set an extension trigger to output log updates to! Can be awesome for adding game integrations for your stream!
  - New: Scene Packer! Package up a scene and all of it's nested scenes (source clone too!) into a single .spkg file, which can then be extracted as long as the recieving user has Sando installed aswell. Super useful for extension developers making OBS Widgets!! will continue to be updated
  - New: Node Install checker. Sando will now be using various node scripts to carry out tasks like File Tailer and Scene Packer, so there is a validation process on startup now! sando commands will wait for startup to finish before continuing.

There is more but i forgot to update this as i was working on it since this isn't really "public" public. hasnt has a proper announcement yet.

# 2.0.1
- Bug Fixes:
  - Powershell scripts now starts in SAMMI directory (thanks silverlink!)
  - Tweaked to allow overlap, letting multiple scripts run at once
  - fixed a drive issue when sammi or obs is stored in a different drive when using Check OBS Plugins

# 2.0.0
- Reworked:
  - Powershell scripts are now executed using an entirely different process, making them miles more stable than previous methods.

# 1.3.0
- New:
  - Added new command: `Sando: Powershell`! Run powershell scripts in a familiar command-line like box. Make custom GUIs, open file dialogs, and so much more! examples included.

# 1.2.0
- New:
  - Added new command: `Sando: Compare Bridge Versions` for extension developers to ensure user's bridge versions are up to date if using newly added functions that don't exist in prior bridge versions.

# 1.1.0
- Bug Fixes:
  - Fixed `Sando: Extract Zip` from failing due to extraction into same directory
  - Fixed `Sando: Compare OBS Plugins` from failing to return "detected_version" in result object
- New:
  - Added a "Admin" Checkbox to `Sando: Extract Zip` for admin extractions

# 1.0.0
- Initial release 🎉

<!--patchnotes end-->
