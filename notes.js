// Necessary Imports
const fs = require("fs");
const chalk = require("chalk");

/**
 * Function for Setting the note
 */
const setNotes = (note) => {
  const filejsondata = getJSONdata();
  filejsondata.push(note);
  const jsondata = JSON.stringify(filejsondata);
  fs.writeFileSync("data.json", jsondata);
};

/**
 * Function for Getting the note by its title
 */
const getNote = (title) => {
  const JSONdata = getJSONdata();
  const getNoteIndex = JSONdata.findIndex((el) => el.title === title);
  if (getNoteIndex !== -1) {
    const returnedNote = JSONdata[getNoteIndex];
    return returnedNote;
  } else {
    console.log("No such Note Exists");
  }
};

/**
 * Function for Getting the All notes
 */
const getAllNotes = () => {
  const JSONdata = getJSONdata();
  JSONdata.forEach((element) => {
    const blueTitle = chalk.blue(element.title);
    const YellowBody = chalk.yellow(element.body);
    console.log(blueTitle);
    console.log(YellowBody);
  });
};

/**
 * Function for Removing the note by its title
 */
const removeNotes = (title) => {
  const JSONdata = getJSONdata();
  const removeNoteIndex = JSONdata.findIndex((el) => el.title === title);
  if (removeNoteIndex >= 0) {
    JSONdata.splice(removeNoteIndex, 1);
    fs.writeFileSync("data.json", JSON.stringify(JSONdata));
  } else {
    console.log("No such note exists");
  }
};

/**
 * Function for data from JSON file in JSON
 */
const getJSONdata = () => {
  const jsonbuffer = fs.readFileSync("data.json");
  const jsonparseddata = JSON.parse(jsonbuffer);
  return jsonparseddata;
};

/**
 * Exporting all the necessary functions in an object
 */
module.exports = { getNote, setNotes, removeNotes, getAllNotes };
