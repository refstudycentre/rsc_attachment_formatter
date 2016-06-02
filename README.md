# rsc_attachment_formatter
Adds formatters for attachment fields.

## What it does:

Defines four field formatters
- List of links
 - Download (sends a force-download header)
 - Open (a direct link to the file)
 - Google Drive (open the document via http://docs.google.com/viewer?url=…)
- Direct link, with JS dropdown
 - Same as above, but only the direct link is visible. Other links are hidden in a drop-down or pop-up list (depending on how CSS is applied).
- HTML5 audio element & download link
- Automatically choose a formatter based on the mime type (works for text, video and audio)

TODO: video formatter (probably allow embedding from Youtube)
