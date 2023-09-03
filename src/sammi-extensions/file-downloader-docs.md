---
layout: product-docs.njk
title: File Downloader ~ Documentation
permalink: /shop/sammi-extensions/file-downloader/documentation/
---

# Commands

## Download Files

Downloads a specified file url into a directory of your choosing!

### Parameters

{primary}
| Box Name            | Type     | required? | Description                                                                                                                                                                                                                                     |
| ------------------- | -------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Direct URL          | *string* | ✔         | The Direct URL link containing the download to your file. This needs to be a direct link, such as "" or "" |
| Save File Directory | *string* | ✔         | Where you want your downloaded file to be saved! this is a direct path, not a relative one, so include the full filepath! (or use `global.main_directory` to get your current SAMMI directory)                                                  |
| File Name           | *string* | ❌         | Optional filename! If left blank, it will use the name and file extension in the download link. 
 
⚠ If specifying custom filename, make sure to put the extension type at the end!                                                       |

### Example Usage 📝

#### Input:

![An example of "Download Files" usage](/assets/images/sammi-extensions/file-downloader/docs-1.png)

#### Output:

!["Download Files" output](/assets/images/sammi-extensions/file-downloader/2.png)