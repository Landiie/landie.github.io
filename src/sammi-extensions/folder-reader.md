---json
{
  "layout": "product.njk",
  "date": "2022-08-10",
  "title": "Folder Reader",
  "description": "Read Files and Folders from a directory with filters using SAMMI",
  "version": "3.0.1",
  "versionSummaryHeader": "removed API Server check",
  "versionSummaryBody": "not needed since 3.0.0 lol",
  "tags": ["product", "sammiExtension"],
  "price": "FREE",
  "permalink": "/shop/sammi-extensions/folder-reader/",
  "image": "/assets/images/sammi-extensions/folder-reader/cover.png",
  "imageAlt": "Product icon for Folder Reader",
  "authors": ["Landie"],
  "shopLabels": ["Free", "Utility"],
  "downloadLink": "https://landie.land/shop/sammi-extensions/folder-reader",
  "sammiImage": "https://landie.land/assets/sammi-extensions/folder-reader/cover_bridge.png"
}
---

<!--overview start-->

# ❓ What is this?

Check out the video!

This extension allows SAMMI to easily retrieve files, and folders with optional filtering; from a specified directory! Gone are the days of renaming files, finicky command line, and arbitrary wait times!

# ✨ Features

- A Single Command: `Folder Reader: Read`
- File Extension Filtering
- Saves files/folders into a specified array, for easy use!
- Leverages SAMMI's NEW Local API Server to cut out arbitrary wait times
- Sort options for date, newest, oldest, and more

# 🌟 How do I get started?

Download the extension, then, head over to the [Setup Tab](#setup)!

# 💚 Support

If you want me to continue making awesome SAMMI extensions for everyone, please consider donating to my [Ko-Fi](https://ko-fi.com/landie)! Supporting me allows me to get more equipment to make extensions with, gives me some food on the table, and lets me know that my extensions are appreciated!

Made with Love, [Landie](https://landie.land)

### Example Usage 📝

#### Input:

![An example of Folder Reader: Read usage](./folder-reader-1.png)

#### Output:

![Folder Reader: Read output](./folder-reader-2.png)

## How do i get started?

Visit the [Setup tab](#setup) for an in-depth, easy to follow quick start guide!

<!--overview end-->
<!-- more -->
<!--overview right start-->

right side

<!--overview right end-->
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

No tutorials yet!

<!--tutorials end-->

<!-- more -->
<!--troubleshooting start-->

No troubleshooting yet!

<!--troubleshooting end-->
<!-- more -->
<!--patchnotes start-->

# 3.0.1

removed API Server check since it's not needed as of 3.0.0

# 3.0.0

Huge overhaul to support the new Command Line introduced in 2023.2.0, abandoning the need for the API server checks

- Removed API Box, not needed anymore
- Removed many internal checks no longer needed
- uses a more efficient algorithm to fetch files, boosting speed by a bit

# 2.1.0

- New Dropdown: Sort
- Sort Options:
  _ Date (Newest)
  _ Date (Oldest)
  _ Size (Smallest)
  _ Size (Largest)

# 2.0.1

- Fixed a typo hehe Save ~Stringified~ Array Variable

# 2.0.0

Update requires SAMMI's local API to be turned on before usage!

{% alert "danger" %}
This is a button-breaking update! Versions below this one will have to makes some adjustments!
{% endalert %}

- New Box: Local API Password
- Incredibly reduced fetch time using SAMMI's Local API and cURL
- Added version number as variable
- Sends Array instead of Stringified Array
- Added checks to ensure Local API is enabled before usage
<!--patchnotes end-->
