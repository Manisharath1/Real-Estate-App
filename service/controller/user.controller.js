import User from "../data/users.data.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const test = (req, res)=> {
    res.json({
        message: 'Hello Devin',
    });
};

export const updateUser = async (req, res, next) => {
    if(req.user.id !== req.params.id) return next(errorHandler(401, "You can only update your own account!"))
    try {
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }

        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set:{
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                picture: req.body.picture,

            }
        }, {new: true})

        const {password, ...rest} = updateUser._doc

        res.status(200).json(rest);

    } catch (error) {
        next(error)
        
    }
};