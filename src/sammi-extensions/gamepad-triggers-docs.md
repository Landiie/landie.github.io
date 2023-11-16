---
layout: product-docs.njk
title: Gamepad Triggers ~ Documentation
permalink: /shop/sammi-extensions/gamepad-triggers/documentation/
---
How to get your Gamepad's Unique Extension Triggers
---------------------------------------------------

This extension works differently than a lot of other extensions out there, because it dynamically creates triggers based off of what gamepad is plugged in! To view these extensions, go to your bridge.

![gamepad triggers table](/assets/images/sammi-extensions/gamepad-triggers/docs-2.gif)

When you connect your bridge, and connected + press a button on your gamepad, a table of entries is generated for each button and analog stick present on your device. Try clicking some buttons, you'll see their names and values light up!

To use your gamepad within SAMMI, Create a button with an extension trigger that looks like this: ![gamepad trigger in lb](/assets/images/sammi-extensions/gamepad-triggers/docs-3.png)

`GAMEPAD` \- Suffix to all "Gamepad Triggers" extension triggers.  
`{inputname}` \- The input's generated name shown in the bridge  
`{action}` \- The action you wish to capture. Check below for the types of actions you can set for buttons and analog sticks!  

Extension Trigger Types & Pull Data
-----------------------------------

### Controller

For the "Controller" category, these are full extension trigger commands and not actions.

#### CONNECTED

The `GAMEPAD CONNECTED` extension trigger fires when you connect your gamepad for the first time.

Example usage: `GAMEPAD CONNECTED` fires the SAMMI button when I connect my Smashbox gamepad.

![example connected](/assets/images/sammi-extensions/gamepad-triggers/docs-4.png)

#### DISCONNECTED

The `GAMEPAD DISCONNECTED` extension trigger fires when you disconnect your gamepad. Example usage: `GAMEPAD DISCONNECTED` fires the SAMMI button when I connect my Smashbox gamepad gets disconnected because I suck at melee.

![example disconnected](/assets/images/sammi-extensions/gamepad-triggers/docs-5.png)

### Buttons

For the "Buttons" Category actions, you have **PRESS**, and **RELEASE**.

#### PRESS

the "PRESS" action fires whenever the button's value goes above zero. this counts as a press, so if "PRESS" is appended after your extension trigger's button name, the SAMMI button will fire on button press.

Example extension trigger: `GAMEPAD DPAD_UP PRESS` fires the SAMMI button when the d-pad up button is pressed.

![example press](/assets/images/sammi-extensions/gamepad-triggers/docs-6.png)

#### RELEASE

The "RELEASE" action fires whenever the button's value sets back to zero. This counts as a release of the button, so if "RELEASE" is appended after your extension trigger's button name, the SAMMI button will fire on button release.

Example extension trigger: `GAMEPAD FACE_3 RELEASE` fires the SAMMI button when the face_3 (x button for me) button is released.

![example release](/assets/images/sammi-extensions/gamepad-triggers/docs-7.png)

### Button Trigger Pull Data

the "PRESS" and "RELEASE" extension trigger actions, when applied, send over an object of data every time its fired. to access this data, put a `Trigger Pull Data` command in your SAMMI button. This will retrieve the object. If you leave the `Pull Value` section empty, all of this data will be returned in an object to SAMMI. otherwise, you only get the one value you specify.

{primary}
| Object Key | Type | Description |
| --- | --- | --- |
| name | **string** | A string containing the name of the button |
| value | **number** | A number containing the value of the button at the time the extension trigger was fired. This isn't relevant for digital buttons, but moreso analog buttons like left and right triggers with pressure sensitivity. ( ⚠ NOT SUPPORTED ATM) |
| time | **number** | A `DOMHighResTimeStamp` representing when the button was updated in accordance to connection time |
| pressed | **number** | If the button is pressed or not. 1 for pressed, 0 for not. |
| controllerIndex | **number** | The button's controller index. Multiple controllers are not supported at the moment. |
| trigger_type | **number** | The number of the trigger type that gets returned. |

### Analog Sticks

For the "Analog Sticks" Category actions, you have **START**, **CHANGE**, and **END**.

#### START

the "START" action fires whenever the analog stick's value goes above zero. If "START" is appended after your extension trigger's analog stick name, the SAMMI button will fire when the stick moves from zero.

Example extension trigger: `GAMEPAD LEFT_ANALOG_STICK START` fires the SAMMI button when the left analog stick starts moving from its dormant position.

![example press](/assets/images/sammi-extensions/gamepad-triggers/docs-8.png)

#### CHANGE

the "CHANGE" action fires whenever the analog stick's value changes. The way this works is tricky but the bread and butter to getting live updates on where your analog stick's position is. This action will not fire if the stick is being held in the same position the next frame, so it won't continue to spam the button if nothing is changing. it only detects **change**.

Example extension trigger: `GAMEPAD LEFT_ANALOG_STICK CHANGE` fires the SAMMI button when the left analog stick changes from any value that isn't the same as it's current value.

![example press](/assets/images/sammi-extensions/gamepad-triggers/docs-9.png)

#### END

the "END" action fires whenever the analog stick's value returns to zero. If "END" is appended after your extension trigger's analog stick name, the SAMMI button will fire when the stick moves to be zero (dormant).

Example extension trigger: `GAMEPAD LEFT_ANALOG_STICK END` fires the SAMMI button when the left analog stick returns to it's dormant position, not being used.

![example press](/assets/images/sammi-extensions/gamepad-triggers/docs-10.png)

### Analog Stick Trigger Pull Data

the "START", "END", and "CHANGE" extension trigger actions, when applied to your extension trigger, send over an object of data every time its fired. to access this data, put a `Trigger Pull Data` command in your SAMMI button. This will retrieve the object. If you leave the `Pull Value` section empty, all of this data will be returned in an object to SAMMI. otherwise, you only get the one value you specify.

{primary}
| Object Key | Type | Description |
| --- | --- | --- |
| name | **string** | A string containing the name of the analog stick |
| angle | **Object** | An Object returning `degrees`, and `radians` as numbers. |
| position | **Object** | An Object returning `x` position, and `y` position of the analog stick as numbers. |
| time | **number** | A `DOMHighResTimeStamp` representing when the analog stick was updated in accordance to connection time |
| controllerIndex | **number** | The analog stick's controller index. Multiple controllers are not supported at the moment. |
| trigger_type | **number** | The number of the trigger type that gets returned. |