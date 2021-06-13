# Welcome to NoteGlimpser

This is a CLI note taking app for taking your notes

It uses JSON to store data on local machine in a local file(data.json in your directory)

Dependencies used are Chalk and fs.

## Example HOW to USE-

```
#Install noteglimpser
- npm i noteglimpser (Install locally)

- npm i -g noteglimpser (Install globally, never lose your notes again)

--------------------------------------------------------------

#Adding a note
noteglimpser add --title "Be Nice" --body "Have a Good Day"
Output  in various colors-
Be Nice
Have a Good Day

--------------------------------------------------------------

#Reading a note
noteglimpser read --title "Be Nice"
Output  in various colors-
Reading your note
Be Nice
Have a Good Day

--------------------------------------------------------------

#Listing all Your Notes
noteglimpser list
Output  in various colors-
Be Nice
Have a Good Day

--------------------------------------------------------------

#Removing a note
noteglimpser remove --title "Be nice"
Removing your note
Be Nice
Have a Good Day
```

## Tutorial

![Note Tutorial](https://github.com/sarveshhiwase/noteglimpser-cli/blob/master/img/note.png?raw=true)