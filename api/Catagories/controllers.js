const Catagory = require("../../models/Catagory");

exports.getCatagories = async (req, res) => {
  try {
    const catagories = await Catagory.find();
    return res.json(catagories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.CatagoryCreate = async (req, res) => {
  try {
    const newCatagory = await Catagory.create(req.body);
    return res.status(201).json(newCatagory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// exports.recipeCreate = async (req, res) => {
//   try {
//     const CatagoryId = req.params.catagoryId;
//     req.body = { ...req.body, Catagory: CatagoryId };
//     const newRecipe = await recipe.create(req.body);
//     await Catagory.findOneAndUpdate(
//       { _id: req.params.catagoryId },
//       { $push: { recipes: newRecipe._id } }
//     );
//     return res.status(201).json(newRecipe);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
