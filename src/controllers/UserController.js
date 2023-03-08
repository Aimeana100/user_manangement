import { users } from '../models';

const allUsers = async (req, res) => {
    console.log(users);
    const data = await users.findAll({});
    res.status(200).json({status: "ok", data });
}
 
const addUser = async (req, res) => {
   const user = await users.create(req.body);
    return res.status(201).json(user);
}

export default {allUsers, addUser};