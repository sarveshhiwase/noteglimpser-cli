#!/usr/bin/env node

// Necessary Imports
const fs = require('fs');
const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');
// Necessary logshortner
const cl = console.log;

/*
 * Function for Checking the file Exists or not
 */
const fileExist = function () {
  const jsonfile = './data.json';
  const jsonArrayfornotes = [];
  const jsondata = JSON.stringify(jsonArrayfornotes);

  try {
    if (!fs.existsSync(jsonfile)) {
      fs.writeFileSync(jsonfile, jsondata);
    }
  } catch (err) {
    cl(err);
  }
};
fileExist();

/*
 * Function for Adding a new note
 */
function addNewNote() {
  cl('Adding Your new note');
  const noteobj = {
    title: yargs.argv.title,
    body: yargs.argv.body,
  };
  notes.setNotes(noteobj);
  const blueTitle = chalk.blue(noteobj.title);
  const YellowBody = chalk.yellow(noteobj.body);
  cl(blueTitle);
  cl(YellowBody);
}

/*
 * Function for Removing a Existing note
 */
function removeNote() {
  cl('Removing your this note');
  const titlenote = yargs.argv.title;
  notes.removeNotes(titlenote);
  const blueTitle = chalk.blue(titlenote);
  cl(blueTitle);
}

/*
 * Function for Reading a Existing note
 */
function readNote() {
  cl('Reading your note');
  const titlenote = yargs.argv.title;
  const returnedNote = notes.getNote(titlenote);
  if (typeof returnedNote === 'object') {
    const blueTitle = chalk.blue(returnedNote.title);
    const YellowBody = chalk.yellow(returnedNote.body);
    cl(blueTitle);
    cl(YellowBody);
  }
}

// Create a add command for YOUR CLI
const add = function () {
  yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Title of your note',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'Body of Your Note',
        demandOption: true,
        type: 'string',
      },
    },
    handler: addNewNote,
  });
};

// Create a remove command for YOUR CLI
const remove = function () {
  yargs.command({
    command: 'remove',
    describe: 'remove a existing note',
    builder: {
      title: {
        describe: 'Title of your note',
        demandOption: true,
        type: 'string',
      },
    },
    handler: removeNote,
  });
};

// Create a list command for YOUR CLI
const list = function () {
  yargs.command({
    command: 'list',
    describe: 'List all your notes',
    handler: function () {
      //Get all the notes stored in JSON file
      cl('Listing All Your Notes');
      notes.getAllNotes();
    },
  });
};

// Create a Read command for YOUR CLI
const read = function () {
  yargs.command({
    command: 'read',
    describe: 'Read a existing note',
    builder: {
      title: {
        describe: 'Title of your note',
        demandOption: true,
        type: 'string',
      },
    },
    handler: readNote,
  });
};

const Noteparser = yargs.parse;

const makeNotes = () => {
  fileExist();
  add();
  read();
  list();
  remove();
  Noteparser();
};

makeNotes();
