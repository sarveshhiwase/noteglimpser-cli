# Welcome to NoteGlimpser

This is a CLI note taking app for taking your notes

It uses JSON to store data on local machine in a local file(data.json in your directory)

Dependencies used are Chalk and fs.

## Methods

- makeNotes() - Standalone Function to get Notes in your app.

## Example HOW to USE-

```
#Install noteglimpser
npm i noteglimpser

#Import noteglimpser in your app
const noteglimpser = require('noteglimpser');

#Call Function note Glimpser
noteglimpser();

#Adding a note
node your_app.js add --title "Be Nice" --body "Have a Good Day"
Output  in various colors-
Be Nice
Have a Good Day

#Reading a note
node your_app.js read --title "Be Nice"
Output  in various colors-
Reading your note
Be Nice
Have a Good Day

#Listing all Your Notes
node your_app.js list
Output  in various colors-
Be Nice
Have a Good Day

#Removing a note
node your_app.js remove --title "Be nice"
Removing your note
Be Nice
Have a Good Day
```
