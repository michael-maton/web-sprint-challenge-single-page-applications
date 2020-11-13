import * as yup from "yup";

export default yup.object().shape({
  fname: yup
    .string()
    .required("Enter your first name")
    .min(2, "first name must be at least 1 char"),
  lname: yup
    .string()
    .required("Enter your last name")
    .min(2, "last name must be at least 1 char"),
  size: yup
    .string()
    .oneOf(["small", "medium", "large", "extraLarge"], "Choose a size"),
  sauce: yup
    .string()
    .oneOf(["originalRed", "garlicRanch", "bbq", "spinachAlfredo"], "Choose a sauce"),
  // pepperoni: yup.boolean(),
  // sausage: yup.boolean(),
  // spicySausage: yup.boolean(),
  // grilledChicen: yup.boolean(),
  // onions: yup.boolean(),
  // greenPepper: yup.boolean(),
  // dicedTomatoes: yup.boolean(),
  // blackOlives: yup.boolean(),
  // greenOlives: yup.boolean(),
  // roastedGarlic: yup.boolean(),
  // threeCheese: yup.boolean(),
  // beef: yup.boolean(),
  // giardiniera: yup.boolean(),
  // extraCheese: yup.boolean(),
  // glutenFree: yup.boolean(),
  specialInstructions: yup.string(),
  amount: yup.number(),
});