import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

const registerUser = async (name, email, password) => {
  if (await userRepository.isUserRegistered(email)) {
    return null;
  }
  const hashedPassword = bcrypt.hashSync(password, 12);
  const result = await userRepository.create(name, email, hashedPassword);
  return result.rows[0];
}

export { registerUser };
