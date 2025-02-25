const { Stone } = require("../models/Stone");

// Function to get all stones
async function getAll() {
  return Stone.find().lean();
}

// Function to get the most recent stones
async function getRecent() {
  return Stone.find().sort({ $natural: -1 }).limit(3).lean();
}

// Function to get a stone by ID
async function getById(id) {
  return Stone.findById(id).lean();
}

// Function to create a new stone
async function create(data, authorId) {
  const record = new Stone({
    name: data.name,
    category: data.category,
    color: data.color,
    image: data.image,
    location: data.location,
    formula: data.formula,
    description: data.description,
    author: authorId,
  });

  await record.save();
  return record;
}

// Function to update a stone
async function update(id, data, userId) {
  const record = await Stone.findById(id);

  if (!record) {
    throw new ReferenceError("Record not found: " + id);
  }

  if (record.author.toString() !== userId) {
    throw new Error("Access denied!");
  }

  record.name = data.name;
  record.category = data.category;
  record.color = data.color;
  record.image = data.image;
  record.location = data.location;
  record.formula = data.formula;
  record.description = data.description;

  await record.save();
  return record;
}

// Function to delete a stone by ID
async function deleteById(id, userId) {
  const record = await Stone.findById(id);

  if (!record) {
    throw new ReferenceError("Record not found: " + id);
  }
  
  if (record.author.toString() !== userId) {
    throw new Error("Access denied!");
  }

  await Stone.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  getRecent,
  getById,
  create,
  update,
  deleteById,
};
