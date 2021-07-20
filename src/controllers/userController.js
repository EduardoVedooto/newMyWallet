import * as userService from "../services/userService.js";

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.sendStatus(400);
    }

    const registered = await userService.registerUser(name, email, password);
    console.log(registered);


    if (!registered) {
      return res.sendStatus(409);
    }

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export { signUp };