const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: { type: String },
  professor: { type: String },
  description: { type: String },
  faculty: { type: String },
  semester: { type: Number },
  credits: { type: Number },
  mandatory: { type: String },
  difficulty: { type: Number },
  attendance: { type: String },
  program: { type: String },
  projects: { type: String },
  exam: { type: String },
  isSelected: { type: Boolean },
  isPassed: { type: Boolean }
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
