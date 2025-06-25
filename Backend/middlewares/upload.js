const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/profile'); 
  },
  filename: function (req, file, cb) {
  const now = new Date();

  // Convert to IST manually
  const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
  const istNow = new Date(now.getTime() + istOffset);

  // Format: YYYY-MM-DD_HH-MM-SS-MMM
  const formattedDateTime = istNow.toISOString()
    .replace(/T/, '_')               // Replace T with _
    .replace(/:/g, '-')              // Replace : with -
    .replace(/\..+/, '')            // Remove default milliseconds and Z
    + '-' + istNow.getMilliseconds(); // Append IST milliseconds

  const finalName = `${formattedDateTime}-${file.originalname}`;

  cb(null, finalName);
}

});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mime = allowedTypes.test(file.mimetype);
  if (ext && mime) {
    cb(null, true);
  } else {
    cb(new Error('Only images (jpeg, jpg, png) are allowed'));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 } // 2MB limit
});

module.exports = upload;

