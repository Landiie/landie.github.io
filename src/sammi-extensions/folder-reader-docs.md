---
layout: product-docs.njk
title: Folder Reader ~ Documentation
permalink: /shop/sammi-extensions/folder-reader/documentation/
---
Commands
========

File Reader: Read
-----------------

Returns a stringified array of a specified directory's files or folders. File type filtering supported!

### Parameters
{primary}
| Box Name | Type | required? | Description |
| --- | --- | --- | --- |
| Save Array Variable | Array | ✔   | Variable name to save the returned array to. Updates below 2.0.0 return a stringified array |
| Read Type | Dropdown | ✔   | Choose whether you want to read Files, or Folders! |
| Extension Type (optional) | _string_ | ❌   | Optional filter to apply to **Read Type: Files** only. Choose what file type to be returned! |
| Path to Read | _string_ | ✔   | Directory to search in. This is an absolute path, so you can check any directory you want! |
| Local API Password | _string_ | ❌   | The password of the Local API Server. No need to put anything here if no password is present! |
| Sort | Dropdown | ✔   | Sorting method to apply on retrieval. Currently supports:  <br>Date (Newest)  <br>Date (Oldest)  <br>Size (Smallest)  <br>Size (Largest) |

### Response
{secondary}
| Value | Type | Description |
| --- | --- | --- |
| `variablenamehere` | Array | An array containing either files or folders with optional filters applied. |

### Example Usage 📝

#### Input:

![An example of Folder Reader: Read usage](https://i.imgur.com/zIRehaa.png)

#### Output:

![Folder Reader: Read output](https://i.imgur.com/qdRjC0n.png)