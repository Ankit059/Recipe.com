const User = require("../model/auth-model");

const loginUser = async (req, res) => {
    try {
        const { userid, password } = req.body;

        if (!userid || !password) {
            return res.status(400).json({ error: 'Missing userid or password' });
        }

        const user = await User.findOne({ userid: userid });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
}

const userSignup = async (req, res) => {
    debugger;
    try {
        const { userid,firstname,lastname,email,password,confirmPass,type } = req.body;
        
        if(password == confirmPass){
            const newUser = new User({ userid,firstname,lastname,email,password,confirmPass,type });
            await newUser.save();
            res.status(201).json("created");
        }
        else{
            res.status(400).json("password and confirm password are not same");
        }
        
    } catch (err) {
        console.log(err);
    }
}



module.exports = { loginUser, userSignup};