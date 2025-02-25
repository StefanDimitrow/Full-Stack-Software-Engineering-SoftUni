const { Router } = require("express");
const { body, validationResult } = require("express-validator");
const { getRecent, create, getById, update, deleteById } = require("../services/stone");
const { isUser } = require("../middlewares/guards");
const { parseError } = require("../util");

const stoneRouter = Router();

stoneRouter.get("/create", isUser(), async (req, res) => {
  res.render("create");
});

stoneRouter.post(
  "/create",
  isUser(),
  // Validation checks
  body("name")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long"),
  body("category")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Category must be at least 3 characters long"),
  body("color")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Color must be at least 2 characters long"),
  body("formula")
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage("Formula must be between 3 and 30 characters long"),
  body("location")
    .trim()
    .isLength({ min: 5, max: 15 })
    .withMessage("Location must be between 5 and 15 characters long"),
  body("description")
    .trim()
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters long"),
  body("image")
    .trim()
    .isURL({require_tld: false})
    .withMessage("Image must be a valid URL"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw errors.array();
      }

      const result = await create(req.body, req.user._id);
      res.redirect("/catalog");
    } catch (err) {
      res.render("create", {
        data: req.body,
        errors: parseError(err),
      });
    }
  }
);

stoneRouter.post("/edit/:id", isUser(), async (req, res) => {
  const stone = await getById(req.params.id);

  if(!stone) {
    res.render('404');
    return;
  }
  const isOwner = req.user._id == stone.author.toString();

  if(!isOwner) {
    res.redirect('/login');
    return;
  }

  res.render("edit", {data: stone });
});

stoneRouter.post(
  "/edit/:id",
  isUser(),
  // Validation checks
  body("name")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long"),
  body("category")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Category must be at least 3 characters long"),
  body("color")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Color must be at least 2 characters long"),
  body("formula")
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage("Formula must be between 3 and 30 characters long"),
  body("location")
    .trim()
    .isLength({ min: 5, max: 15 })
    .withMessage("Location must be between 5 and 15 characters long"),
  body("description")
    .trim()
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters long"),
  body("image")
    .trim()
    .isURL({require_tld: false})
    .withMessage("Image must be a valid URL"),
  async (req, res) => {
    const stoneId = req.params.id;
    const userId = req.user._id
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw errors.array();
      }

      const result = await update(req.body, req.user._id);
      res.redirect("/catalog");
    } catch (err) {
      res.render("create", {
        data: req.body,
        errors: parseError(err),
      });
    }
  }
);

module.exports = { stoneRouter };

