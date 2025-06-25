const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const adminLogin = async (req, res) => {
  try {
    const { email,password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: 'Email and password are required' });

    const admin = await Admin.findOne({ where: { email } });
    if (!admin)
      return res.status(401).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid email or password' });

    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
        role: 'admin'
      },
      process.env.JWT_SECRET || 'defaultSecret',
      { expiresIn: '1d' }
    );

    const adminData = admin.toJSON();
    delete adminData.password;

    res.status(200).json({
      message: 'Admin login successful',
      token,
      data: adminData
    });

  } catch (err) {
    console.error('Admin login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const addAdmin = async (req, res) => {
  try {
    const { email, password,fullname } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: 'Email and password are required' });

    const existingAdmin = await Admin.findOne({ where: { email } });
    if (existingAdmin)
      return res.status(409).json({ message: 'Admin already exists with this email' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({ email, password: hashedPassword,fullname });

    return res.status(201).json({
      message: 'Admin created successfully',
      admin: {
        id: admin.id,
        email: admin.email,
        fullname: admin.fullname
      }
    });
  } catch (error) {
    console.error('Add Admin Error:', error);
    res.status(500).json({ message: 'Server error while creating admin' });
  }
};

module.exports = { adminLogin,addAdmin };

