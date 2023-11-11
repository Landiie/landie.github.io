---json
{
  "layout": "product.njk",
  "date": "2023-05-15",
  "title": "Sando",
  "description": "A Library to make extension developer's lives easier!",
  "version": "2.2.2",
  "versionSummaryHeader": "fixes for the node installer",
  "versionSummaryBody": "adds a logger, fixes some inconsistencies, and the infinite hanging issue a lot of people were experiencing! super recommended to update, as this is an update patch.",
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
