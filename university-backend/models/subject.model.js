const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: String,
  professor: String ,
  description: String ,
  faculty: String,
  semester: Number,
  credits:  Number,
  mandatory: String,
  difficulty: Number,
  attendance: String,
  program: String ,
  projects: String,
  exam: String,
  studentsAttending: Number,
  averageGrade: Number,
  isSelected: Boolean,
  isPassed: Boolean,
  isCurrentlyListening: Boolean,
  passedPercentage: Number,
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
