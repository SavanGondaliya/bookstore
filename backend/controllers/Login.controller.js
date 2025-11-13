import dotenv from "dotenv"

dotenv.config();

const USERNAME = process.env.USRNAME;
const PASSWORD = process.env.PASSWORD;
const token = process.env.USER_TOKEN

export const login = async (req,res) => {
    try {
        console.log(req.body);
        
        const {username,password} = req.body;
        console.log(username,password);
        console.log(USERNAME,PASSWORD);
        
        if(username === USERNAME && password === PASSWORD){
              return res.status(200).json({ 
                success: true, 
                token,
                message: 'Login successful' 
            });
        }
        return res.status(404).json({
            success:false,
            message: "Login Unsuccessful"
        })
    } catch (error) {
        console.error('Login error:', error); // This will show the actual error
        return res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
}