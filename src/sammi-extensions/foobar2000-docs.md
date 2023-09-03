---
layout: product-docs.njk
title: foobar2000 ~ Documentation
permalink: /shop/sammi-extensions/foobar2000/documentation/
---
Get Playlists
=============

Returns an array of objects containing data of playlist(s).

### Parameters

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| Save Object Variable | _string_ | ✔   | Variable name to save the returned object to. |

### Responses

{secondary}
| Value | Type | Description |
| --- | --- | --- |
| `.playlists[]` | _Array_ | Array containing objects of each playlist |
| `.playlists[0-?]` | _Object_ | Object containing arrays of each playlist |
| `.playlists[0-?].id` | _string_ | Playlist's ID |
| `.playlists[0-?].index` | _int_ | Playlist's index (position) in list |
| `.playlists[0-?].isCurrent` | _boolean_ | Returns true if playlist is currently selected |
| `.playlists[0-?].itemCount` | _int_ | Number of songs inside playlist |
| `.playlists[0-?].title` | _string_ | Title of playlist |

### Example 📝

```json
{
  "playlists": [
    {
      "id": "p22",
      "index": 0,
      "isCurrent": true,
      "itemCount": 1871,
      "title": "Stream Playlist",
      "totalTime": 0
    },
    {
      "id": "p18",
      "index": 1,
      "isCurrent": false,
      "itemCount": 1,
      "title": "Personal Playlist",
      "totalTime": 0
    },
    {
      "id": "p4",
      "index": 2,
      "isCurrent": false,
      "itemCount": 0,
      "title": "Personal Playlist's Personal Playlist",
      "totalTime": 0
    }
  ]
}
```
            

![Example LB](/assets/images/sammi-extensions/foobar2000/docs-2.gif)

Get Playlist Songs
==================

Returns an object with an array of objects containing an array of each song's column data (wtf).

### Parameters

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| Save Object Variable | _string_ | ✔   | Variable name to save the returned object to. |
| Playlist ID | _string_ | ✔   | ID of the playlist you wish to retrieve songs from. |
| Offset | _int_ | ❌   | Starting index of songs to grab (if you don't want all songs) |
| Count | _int_ | ✔   | Total number of songs to grab |
| Columns | _string (special syntax)_ | ✔   | A comma delimited list of column data to return (e.g. "%artist%,%title%")  <br>  <br>you may also not use colons, however, everything returns in one line which is not ideal. |

If the amount of returned songs is huge, browsing it in the variable viewer can effectively _softlock_ the application! please refer to the documentation to avoid using the variable viewer for massive amounts of returned songs!

### Responses

{secondary}
| Value | Type | Description |
| --- | --- | --- |
| `.offset` | _int_ | Returns the provided offset |
| `.totalCount` | _int_ | Returns the total amount of songs inside the playlist (not using offset) |
| `.items[]` | Array | An Array of song objects using offset and count. |
| `.items[0-?]` | Object | Container to hold `columns[]` array. |
| `.items[0-?].columns[]` | Array | Array of column data requested |
| `.items[0-?].columns[0-?]` | Array | column data is in order of provided pattern. Depending on how many comma delimited entries, this array can have multiple entries.  <br>  <br>e.g. %album%,%title%,%length% => columns\[0\],columns\[1\],columns\[2\] |

### Example 📝

Input Parameters:

{secondary}
| Box Name | Value |
| --- | --- |
| Save Object Variable | ababaa |
| Playlist ID | p18 |
| Offset | 0   |
| Count | 4   |
| columns | %artist%,%title% |

Response:
```json
{
    "ababaa": { //Object Variable Name
    "items": [
                {
                  "columns": ["Vansire", "A Long Drive Back"] //%artist%,%title%
                },
                {
                  "columns": ["Röyksopp", "Remind Me (someone else's radio remix)"]
                },
                {
                  "columns": ["Clario", "4Ever"]
                },
                {
                  "columns": ["Joji", "Gimme Love"]
                }
            ],
            "offset": 0,
            "totalCount": 4
        }
}
```
            

![Example LB](/assets/images/sammi-extensions/foobar2000/docs-5.gif)

Add Playlist
============

Adds a new playlist.

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| Title | _string_ | ✔   | The title of the playlist |
| Index | _int_ | ❌   | position of where you wish to put your playlist. Leaving blank places the new playlist at the end. |

Remove Playlist
===============

This command is destructive! Make sure to save your playlists before using in more complicated scenarios!

Removes a playlist.

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| playlistID/index | _string_ | ✔   | The Playlist ID or index of the playlist you wish to delete/remove. |

Clear Playlist
==============

This command is destructive! Make sure to save your playlists before using in more complicated scenarios!

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| playlistID/index | _string_ | ✔   | The Playlist ID or index of the playlist you wish to clear/delete all songs from |

Move Playlist
=============

Moves a playlist from one position to another in the playlist list.

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| Source playlistID/index | _string_ | ✔   | The Playlist ID or index of the playlist you wish to move |
| Destination Index | _int_ | ✔   | The position where you want the playlist to be moved to. |

### Example 📝

Before:

![before ex pic move playlist command](/assets/images/sammi-extensions/foobar2000/docs-6.png)

Input Parameters:

{secondary}
| Box Name | Value |
| --- | --- |
| Source playlistID/index | p22 (id of Upbeat Songs |
| Destination index | 2   |

After:

![after ex pic move playlist](/assets/images/sammi-extensions/foobar2000/docs-7.png)

Rename Playlist
===============

Renames a specified playlist.

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| New Title | _string_ | ✔   | New Title to rename the playlist to |
| playlistID/index | _string_ | ✔   | The Playlist ID or position of the playlist you are renaming |

Move songs to Playlist
======================

Moves songs from one playlist, to another using a specified stringified array.

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| Source playlistID/index | _string_ | ✔   | The Playlist ID or position of the playlist you wish to move the song(s) from |
| Target playlistID/index | _string_ | ✔   | The Playlist ID or position of the playlist you wish to move the song(s) to |
| Target index | _string_ | ❌   | The position of where you want the moved song(s) to be in the target playlist. Leaving blank moves them to the end of the target playlist. |
| Stringified Songs Array | _string_ | ✔   | An array of song indexes/positions stringified using `Stringify Array`. A way to do this is to create a new array with `Create Array`, and use `Array Insert` to insert any song(s) you want via their index/position. The order in which they are displayed in the array is the pattern that will be reflected on the target playlist.  <br>  <br>If confused, refer to the example below! |

### Example 📝

**Goal**: Move these four songs from the "Chill Songs" playlist into the "Upbeat Songs" playlist.

![playlist to move songs from](/assets/images/sammi-extensions/foobar2000/docs-8.png)

Input Parameters:

{secondary}
| Box Name | Value |
| --- | --- |
| Source playlistID/index | "p1" ("Chill Songs" playlist ID) |
| Target playlistID/index | "p2" ("Upbeat Songs" playlist ID) |
| Target index | 0   |
| Stringified Songs Array | `"[6, 7, 11, 12]"` |

Using `Stringify Array` to create the stringified array

![example lb move to playlist](/assets/images/sammi-extensions/foobar2000/docs-9.png)

Result:

![result move to playlist](/assets/images/sammi-extensions/foobar2000/docs-10.png)

Copy songs to Playlist
======================

Copies songs from one playlist, to another using a specified stringified array.

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| Source playlistID/index | _string_ | ✔   | The Playlist ID or position of the playlist you wish to copy the song(s) from |
| Target playlistID/index | _string_ | ✔   | The Playlist ID or position of the playlist you wish to copy the song(s) to |
| Target index | _string_ | ❌   | The position of where you want the copied song(s) to be in the target playlist. Leaving blank copies them to the end of the target playlist. |
| Stringified Songs Array | _string_ | ✔   | An array of song indexes/positions stringified using `Stringify Array`. A way to do this is to create a new array with `Create Array`, and use `Array Insert` to insert any song(s) you want via their index/position. The order in which they are displayed in the array is the pattern that will be reflected on the target playlist.  <br>  <br>If confused, refer to the example below! |

### Example 📝

**Goal**: Copy these six songs from the "Chill Songs" playlist into the "Upbeat Songs" playlist.

![before copy songs to playlist](/assets/images/sammi-extensions/foobar2000/docs-11.png)

Input Parameters:

{secondary}
| Box Name | Value |
| --- | --- |
| Source playlistID/index | "p1" ("Chill Songs" playlist ID) |
| Target playlistID/index | "p2" ("Upbeat Songs" playlist ID) |
| Target index | 0   |
| Stringified Songs Array | `"[3, 4, 5, 6, 7, 8]"` |

Using `Stringify Array` to create the stringified array

![example lb copy songs to playlist](/assets/images/sammi-extensions/foobar2000/docs-12.png)

Result:

![result copy to playlist](/assets/images/sammi-extensions/foobar2000/docs-13.png)

Remove Songs
============

Remove songs from specified playlist.

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| playlistID/index | _string_ | ✔   | The Playlist ID or position of the playlist you wish to delete song(s) from |
| Stringified Songs Array | _string_ | ✔   | An array of song indexes/positions stringified using `Stringify Array`. A way to do this is to create a new array with `Create Array`, and use `Array Insert` to insert any song(s) you want via their index/position.  <br>  <br>If confused, refer to the example below! |

### Example 📝

Input Parameters:

{secondary}
| Box Name | Value |
| --- | --- |
| playlistID/index | "p23" (a playlist ID) |
| Stringified Songs Array | `"[0, 1, 4, 5]"` |

Using `Stringify Array` to create the stringified array

![example lb remove songs](/assets/images/sammi-extensions/foobar2000/docs-14.png)

Copy Songs
==========

Copy songs from specified playlist into itself.

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| playlistID/index | _string_ | ✔   | The Playlist ID or position of the playlist you wish to copy song(s) from and to |
| Target index | _string_ | ❌   | The position of where you want the copied song(s) to be in the playlist. Leaving blank copies them to the end of the playlist. |
| Stringified Songs Array | _string_ | ✔   | An array of song indexes/positions stringified using `Stringify Array`. A way to do this is to create a new array with `Create Array`, and use `Array Insert` to insert any song(s) you want via their index/position.  <br>  <br>If confused, refer to the example below! |

### Example 📝

Copies first song to first position in playlist

Input Parameters:

{secondary}
| Box Name | Value |
| --- | --- |
| playlistID/index | "p15" (a playlist ID) |
| Target Index | 0   |
| Stringified Songs Array | `"[0]"` |

Using `Stringify Array` to create the stringified array

![example lb copy songs](/assets/images/sammi-extensions/foobar2000/docs-6.png)

Set Playback State
==================

Sets the playback state of the player.

### Parameters

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| Playstate | _Dropdown_ | ✔   | The playstate you wish to set.  <br>  <br>**Playstates:**  <br>Play, Next, Previous, Stop, Pause, and Random |

Set Playback Mode
=================

Sets the playback mode of the player.

### Parameters

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| Playback Mode | _Dropdown_ | ✔   | The playback mode you wish to set.  <br>  <br>**Playback Modes:**  <br>Default, Repeat (Playlist), Repeat (Track), Random, Shuffle (Tracks), Shuffle (Albums), and Shuffle (Folders) |

Set Song
========

Sets the song for the player.

### Parameters

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| playlistID/index | _string_ | ✔   | The Playlist ID or index of the playlist you wish to play a song from. |
| Song Index | _string_ | ✔   | The index of the song you wish to play |

Get Current Song Info
=====================

Gets the current set/playing song info from the player.

### Parameters

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| Save Object Variable | _string_ | ✔   | The Object Variable you wish to save to. |
| Columns | _string (special syntax)_ | ✔   | A comma delimited list of column data to return (e.g. "%artist%,%title%")  <br>  <br>you may also not use colons, however, everything returns in one line which is not ideal. |

### Response

{secondary}
| Value | Type | Description |
| --- | --- | --- |
| `.duration` | _int_ | Number indicating the duration of the current song |
| `.index` | _int_ | Song's position in the playlist |
| `.playlistIndex` | _int_ | Playlist's position in playlist list that the current song resides in |
| `.position` | _int_ | Current song's position relative to `.duration` |
| `.playlistId` | _String_ | Playlist ID of the current song's location |
| `.columns[]` | _Array_ | Array of column data requested |
| `.columns[0-?]` | _String_ | column data is in order of provided pattern. Depending on how many comma delimited entries, this array can have multiple entries.  <br>  <br>e.g. %album%,%title%,%length% => columns\[0\],columns\[1\],columns\[2\] |

### Example Response📝

    {
          "currentSongInfo": { //Save Object Variable
            "position": 6.806788, //position relative to duration below
            "duration": 245.121458,
            "columns": ["Remind Me (someone else's radio remix)", "Remind Me", "4:05"], //%title%,%album%,%length%
            "playlistIndex": 4,
            "playlistId": "p5",
            "index": 15
          }
        }
        

![Example LB get current song info](/assets/images/sammi-extensions/foobar2000/docs-16.gif)

Get Song Artwork
================

Gets the specified song's artwork as a direct link.

### Parameters

{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| Save Variable | _string_ | ✔   | The Variable you wish to save to |
| Playlist ID | _string_ | ✔   | The Playlist ID (not index) of the playlist the song resides in |
| Song Index | _int_ | ✔   | The song's index in the playlist |

### Response

{secondary}
| Value | Type | Description |
| --- | --- | --- |
| `.` | _String_ | The direct link to the song's artwork. Can be displayed using a OBS Web Source |

### Example Response📝
```json
{
    "songArtwork": "http://127.0.0.1:8880/api/artwork/p5/4" // Save Variable containing returned direct link
}
```
        

![example lb obs Song Artwork](/assets/images/sammi-extensions/foobar2000/docs-17.png)