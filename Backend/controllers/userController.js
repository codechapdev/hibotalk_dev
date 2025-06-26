const {User} = require('../models/User');
const Token = require('../models/Token');
const Specialization = require('../models/Specialization')
const Intrested = require('../models/Intrested')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

require('dotenv').config();

const signup = async(req,res) => {
    try {
      const {
      fullname,
      email,
      password,
      dob,
      bio,
      intrested,
      specialization,
      qualification,
      experience,
      virtual_id,
      id_no,
      id_proof,
      user_type,
      language_id
    } = req.body;

     const profile_pic = req.file ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}` : null;


    //check for fullname,email and pass
    if (!fullname) {
  return res.status(400).json({ message: 'Please enter your full name' });
    }
    if (!email) {
    return res.status(400).json({ message: 'Please enter your email' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
    if (!password) {
    return res.status(400).json({ message: 'Please enter your password' });
    }



    //check user already exist
    const existingUser = await User.findOne({ where : {email}});

    if(existingUser){
        return res.status(409).json({ message: 'Email already exists' });
    }
   

    
    //Hashpassword
    const hashedPassword = await bcrypt.hash(password,10);

    // Create user
    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
      dob,
      bio,
      intrested,
      specialization,
      qualification,
      experience,
      virtual_id: virtual_id ?? null,
      id_no: id_no ?? null,
      id_proof: id_proof ?? null,
      profile_pic: profile_pic ?? null,
      user_type,
      original_type: user_type,
      language_id
    });

    //Generate jwt token
    const token = jwt.sign({
        id: newUser.id,
        email: newUser.email,
        user_type: newUser.user_type,
    },
    process.env.JWT_SECRET || 'secretkey1533'
   )

   await Token.create({
    token,
    userId: newUser.id,

   })

   // Prepare full user data (exclude password)
    const userData = newUser.toJSON();
    delete userData.password;

   return res.status(201).json({
  message: 'User registered successfully',
  user: userData,
  status: 201,
   token
    });

    } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
    }
}

const login = async(req,res) => {
  try {
    const {email,password} = req.body;

    // Check for email and password
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    //user exist or not
    const user = await User.findOne({where: {email}});

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    //compare password
    const isMatch = await bcrypt.compare(password,user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        user_type: user.user_type
      },
      process.env.JWT_SECRET || 'defaultSecret'
    );

    //save token in db
    await Token.create({
      token,
      userId: user.id
    });

    const userData = {
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      user_type: user.user_type,
      original_type: user.original_type,
      language_id: user.language_id,
      profile_pic: user.profile_pic,
      status: user.status,
      social_login: user.social_login,
      dob: user.dob,
      intrested: user.intrested,
      specialization: user.specialization,
      qualification: user.qualification,
      experience: user.experience,
      virtual_id: user.virtual_id,
      id_no: user.id_no,
      id_proof: user.id_proof,
      created_date: user.created_date,
    };

     res.status(200).json({
      message: 'Login successful',
      status:200,
      token,
      user: userData
    });


  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
}

const switchRole = async(req,res) => {
try {

  const userId = req.params.id;

  const user = await User.findByPk(userId);

  if (!user) return res.status(404).json({ message: 'User not found' });
  
   let newType;

   if (user.user_type === newType) {
      return res.status(200).json({ message: `Already in ${newType} role` });
    }

  if(user.user_type === 'mentor'){
    newType = 'mentee';
  }else if(user.user_type === 'mentee'){
    newType = 'mentor';
  }else {
      return res.status(400).json({ message: 'User type not switchable' });
    }

  user.user_type = newType;
  await user.save();

  res.status(200).json({
      message: `User type switched to ${newType}`,
      user_type: newType,
    });

} catch (error) {
  console.error('Switch role error:', error);
  res.status(500).json({ message: 'Server error' });
}
}

const forgotPassword = async(req,res)=>{
  const {email} = req.body;
   
  try {
     if (!email) return res.status(400).json({ message: 'Email is required' });

     const user = await User.findOne({where: {email}});
     if (!user) return res.status(404).json({ message: 'User not found' });

      // Generate JWT token valid for 15 mins
      const token = jwt.sign({id: user.id,email: user.email},process.env.JWT_SECRET || 'secretkey',{expiresIn: '15m'});

      const resetLink = `http://localhost:5000/reset-password?token=${token}` ;

       // Send email via SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    await transporter.sendMail({
      from: ' "hibotalk" <yashsisodia5062@gmail.com>',
      to: email,
      subject: 'Reset Your Password',
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password. This link expires in 15 minutes.</p>`
    });

    
    return res.status(200).json({ message: 'Reset link sent to your email',token: token});

  } catch (error) {
    console.error('Forgot password error:', error);
    return res.status(500).json({ message: 'Server error' });
  }


}

const resetPassword = async(req,res) => {
    
  const {newPassword,token} = req.body;
    
  try {
    if (!token || !newPassword) {
      return res.status(400).json({ message: 'Token and new password are required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secretkey');

    const user = await User.findByPk(decoded.id);

    const isSamePassword = await bcrypt.compare(newPassword,user.password);
     if (isSamePassword) {
      return res.status(400).json({ message: 'New password must be different from the old password' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
     
    await user.save();

    return res.status(200).json({ message: 'Password reset successfully' });

  } catch (error) {
    console.error('Reset password error:', error);
    return res.status(400).json({ message: 'Invalid or expired token' });
  }
}

const logout = async(req,res) => {
  try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return res.status(400).json({ message: 'Authorization token missing' });
      }

      const token = authHeader.split(' ')[1];
      
      const deleted = await Token.destroy({ where: { token } })

      if (!deleted) {
      return res.status(400).json({ message: 'Token not found or already logged out' });
      }

      return res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ message: 'Server error during logout' });
  }
} 

const uploadProfilePic = async(req,res) => {

  try {
    
    const userId = req.user.id;

    const profile_pic = req.file?.filename;

    if (!profile_pic) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
   
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

     user.profile_pic = profile_pic;
     await user.save();

      res.status(200).json({
      status:201,
      message: 'Profile picture uploaded successfully',
      profile_pic: profile_pic,
      url: `${req.protocol}://${req.get('host')}/uploads/profile/${profile_pic}`
    });

  } catch (error) {
    console.error('Upload error:', error)
    res.status(500).json({message: 'Server Error'})
  }
}

const updateProfilePhoto = async(req,res) => {
  try {
     const userId = req.user.id;

    const profile_pic = req.file?.filename;

    if (!profile_pic) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
   
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.profile_pic = profile_pic;

    await user.save();

    res.status(200).json({
      message: 'Profile photo updated successfully',
      updated_profile_pic: profile_pic,
      profile_pic_url: `${req.protocol}://${req.get('host')}/uploads/profile/${profile_pic}`
    });
  } catch (error) {
    console.error('Error updating profile photo:', error);
    res.status(500).json({ message: 'Server error' });
  }
}

const addSpecializations = async(req,res) => {
  try {
    const specializationList = req.body;

    if (!Array.isArray(specializationList)) {
      return res.status(400).json({ message: 'Data must be an array of strings' });
    }

    const dataToInsert = specializationList.map(name => ({ name }));

    await Specialization.bulkCreate(dataToInsert);

    res.status(201).json({ message: 'Specializations added successfully' });
  } catch (err) {
    console.error('Error saving specializations:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

const getAllSpecializations = async(req,res)=>{
    try {
        const specializations = await Specialization.findAll({
            attributes: ['id','name']
        })

      res.status(200).json({
      message: 'Specializations fetched successfully',
      data: specializations
    });
    } catch (error) {
    console.error('Error fetching specializations:', error);
    res.status(500).json({ message: 'Server error' });
  } 
    
}

const getUserSpecializations = async(req,res)=>{
    try {
        const userId = req.params.id;

        const user = await User.findByPk(userId);

        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }

        //no speci assigned
         if (!user.specialization) {
        return res.status(200).json({
        message: 'User fetched successfully (no specializations)',
        data: {
          ...user.toJSON(),
          specializations: []
        }
        });
       }

       const specIds = user.specialization
      .split(',')
      .map(id => parseInt(id.trim()))
      .filter(Boolean);

      const specializations = await Specialization.findAll({
        where: { id: specIds },
        attributes: ['id', 'name']
      })

      res.status(200).json({
      message: 'User fetched successfully',
      data: {
        ...user.toJSON(),
        specializations
      }
    })

    } catch (error) {
    console.error('Error fetching user specializations:', error);
    res.status(500).json({ message: 'Server error' });
    }
}

const addIntrested = async(req,res) => {
  try {
    const intrestedList = req.body;

    if (!Array.isArray(intrestedList)) {
      return res.status(400).json({ message: 'Data must be an array of strings' });
    }

    const dataToInsert = intrestedList.map(name => ({ name }));
    

    await Intrested.bulkCreate(dataToInsert);

    res.status(201).json({ message: 'Intrested added successfully' });
  } catch (err) {
    console.error('Error saving in intrested:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

const getAllIntrest = async(req,res)=>{
    try {
        const intrest = await Intrested.findAll({
            attributes: ['id','name']
        })

      res.status(200).json({
      message: 'Specializations fetched successfully',
      data: intrest
    });
    } catch (error) {
    console.error('Error fetching intrest:', error);
    res.status(500).json({ message: 'Server error' });
  } 
    
}

const getUserIntrest = async(req,res)=>{
    try {
        const userId = req.params.id;

        const user = await User.findByPk(userId);

        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }

        //no speci assigned
         if (!user.intrested) {
        return res.status(200).json({
        message: 'User fetched successfully (no intrest)',
        data: {
          ...user.toJSON(),
          intrested: []
        }
        });
       }

       const specIds = user.intrested
      .split(',')
      .map(id => parseInt(id.trim()))
      .filter(Boolean);

      const intrest = await Intrested.findAll({
        where: { id: specIds },
        attributes: ['id', 'name']
      })

      res.status(200).json({
      message: 'User fetched successfully',
      data: {
        ...user.toJSON(),
        intrest
      }
    })

    } catch (error) {
    console.error('Error fetching user intrest:', error);
    res.status(500).json({ message: 'Server error' });
    }
}







module.exports = {
    signup,
    login,
    switchRole,
    forgotPassword,
    resetPassword,
    logout,
    uploadProfilePic,
    updateProfilePhoto,
    addSpecializations,
    getAllSpecializations,
    getUserSpecializations,
    addIntrested,
    getAllIntrest,
    getUserIntrest
}