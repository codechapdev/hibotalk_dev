const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
require('dotenv').config();



//Import models
const User = require('./models/User');

//Import Routes
const userRoutes = require('./routes/userRoute')
const adminRoutes = require('./routes/adminRoute')
const resourceRoutes = require('./routes/resourceRoute')
const communityRoutes = require('./routes/communityRoute')



const app = express();
const PORT = process.env.PORT || 5000;

app.post('/test', (req, res) => {
  res.send('✅ API is working!');
});

// Middlewares
app.use(cors({ origin:[ 'http://localhost:5173','http://13.250.76.124:5000' ]}));
app.use(express.json());
app.use('/uploads', express.static('public/uploads'));



//routes
app.use('/api',userRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/resource',resourceRoutes)
app.use('/api/community',communityRoutes)






sequelize.authenticate()
.then(()=>{
     console.log('✅ Connected to MySQL');
    return sequelize.sync({ alter: true }) // Sync all models
})
.then(() => {
    console.log('✅ Models synced (altered)');
  })
.then(()=>{
app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
})
.catch(err => console.error('❌ DB connection error:', err));


