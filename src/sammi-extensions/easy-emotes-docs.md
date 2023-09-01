---
layout: product-docs.njk
title: Easy Emotes ~ Documentation
permalink: /shop/sammi-extensions/easy-emotes/documentation/
---

# Commands

## Easy Emotes: Fetch Emotes In String

### Parameters

{primary}
| Box Name | Type | required? | Description |
|--------------------------|-----------------------|------------|---------------|
| Save Array Variable | _Array_ | ✔ | Variable name to save the returned array of image pathes to. |
| String to Search | _string_ | ✔ | The text you wish to search for any emotes. This searches for emotes in cache, which is all FFZ, BTTV, 7TV, and any twitch emotes already in cache. |
| Emote List for TTV Search | _string_ | ❌ | Required if searching for Twitch emotes. Retrieved from `Trigger Pull Data` on a Twitch Chat trigger! |
| Verbose? | _Checkbox (boolean)_ | ❌ | Changes the format of the output to return objects of each emote, containing additional information such as the service it's from, scope of emote, it's url, type, and name! You should know how to loop through arrays and use objects if using this! |

### Responses

{secondary}
| Value | Type | Description |
| ----------------------- | -------- | ------------------------------------------------------------------------- |
| `somevariablename[]` | _Array_ | Array containing a local file path each emote in order. |
| `somevariablename[0-?]` | _string_ | string representing an emote's file location. for use in an image source! |

### Example 📝

```json
{
   "imagesArray":[
      "c:/sammi/Landies_Extensions/Easy Emotes/Emote Cache/245612.png",
      "c:/sammi/Landies_Extensions/Easy Emotes/Emote Cache/297836.gif",
      "c:/sammi/Landies_Extensions/Easy Emotes/Emote Cache/382740.png",
      "c:/sammi/Landies_Extensions/Easy Emotes/Emote Cache/196892.png"
   ]
}
```

![Example LB](./easyemotes-docs-1.gif)

### Plug n' Play Buttons 🎮

Copy to clipboard, import as button in SAMMI!

**User Emote Counter**:

    { "color": 6537333.0, "persistent": true, "text": "Easy Emotes:\nGrab Emotes of\nEvery Chat Message", "release_duration": 0.0, "queueable": false, "command_list": [ { "cmd": 6.0, "obsid": "Main", "pos": 0.0, "vis": true, "ms": 0.0, "sel": false, "dis": false, "xpan": 0.0, "b0": "Pulling info from the chat trigger using Trigger Data Pull", "v0": 3.0 }, { "b1": "display_name", "cmd": 66.0, "obsid": "Main", "pos": 1.0, "vis": true, "ms": 0.0, "sel": false, "dis": false, "xpan": 0.0, "b0": "displayName" }, { "b1": "message", "cmd": 66.0, "obsid": "Main", "pos": 2.0, "vis": true, "ms": 0.0, "sel": false, "dis": false, "xpan": 0.0, "b0": "message" }, { "b1": "emote_list", "cmd": 66.0, "obsid": "Main", "pos": 3.0, "vis": true, "ms": 0.0, "sel": false, "dis": false, "xpan": 0.0, "b0": "emoteList" }, { "cmd": 6.0, "obsid": "Main", "pos": 4.0, "vis": true, "ms": 0.0, "sel": false, "dis": false, "xpan": 45.0, "b0": "Delete any previous emote image arrays, \nfetch a new one using the message and emoteList variables, \nwait for the array to populate before continuing", "v0": 3.0 }, { "cmd": 78.0, "obsid": "Main", "pos": 5.0, "vis": true, "ms": 0.0, "sel": false, "dis": false, "xpan": 0.0, "b0": "arrayOfChatEmotes" }, { "emoteList": "\/$emoteList$\/", "cmd": 0.0, "obsid": "Main", "pos": 6.0, "string": "\/$message$\/", "saveVar": "arrayOfChatEmotes", "vis": true, "ms": 0.0, "sel": false, "dis": false, "xpan": 0.0, "extcmd": "Easy Emotes: Fetch Emotes In String", "ext": "SAMMI Bridge" }, { "b1": "10000", "cmd": 153.0, "obsid": "Main", "pos": 7.0, "vis": true, "ms": 0.0, "sel": false, "dis": false, "xpan": 0.0, "b0": "arrayOfChatEmotes" }, { "cmd": 6.0, "obsid": "Main", "pos": 8.0, "vis": true, "ms": 0.0, "sel": false, "dis": false, "xpan": 0.0, "b0": "alert message shouting how many emotes a user's message had!", "v0": 2.0 }, { "b1": "arrayOfChatEmotesSize", "cmd": 100.0, "obsid": "Main", "pos": 9.0, "vis": true, "ms": 0.0, "sel": false, "dis": false, "xpan": 0.0, "b0": "arrayOfChatEmotes" }, { "cmd": 142.0, "obsid": "Main", "pos": 10.0, "vis": true, "ms": 0.0, "sel": false, "dis": false, "xpan": 0.0, "b0": "[Easy Emote Example Buttons] \/$displayName$\/ had: \/$arrayOfChatEmotesSize$\/ Emotes!" } ], "press_type": 0.0, "x": 0.0, "border": 2.0, "image": "", "triggers": [ { "sub": false, "user_name": "", "case_sensitive": false, "founder": false, "message": "*", "moderator": false, "group_id": "", "vip": false, "button_id": "ID114", "broadcaster": false, "trg": 0.0, "allow_empty_wildcard": false } ], "group_id": "", "overlappable": false, "init_variable": "", "deck": 28.0, "width": 0.20000000000000001110223024625157, "button_id": "ID114", "button_duration": 0.0, "y": 0.29999999999999998889776975374843, "switch_deck": "", "height": 0.20000000000000001110223024625157, "release_list": [ ], "functions": 81.0, "stretch": false }
