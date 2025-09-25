const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require('../controllers/captain.controllers');


router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 character long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 characters long"),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("Capacity must be at least 1"),
    body("vehicle.vehivleType")
      .isLength(["car", "motorcycle", "auto"])
      .withMessage("Inavlid vehicle type"),
  ],
  captainController.registerCaptain
);



router.post('/login', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({min :6}).withMessage('Password must at least 6 characters'),
],
captainController.loginCaptian
)

module.exports = router;



