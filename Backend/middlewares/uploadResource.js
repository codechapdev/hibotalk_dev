const multer = require('multer');
const path = require('path');

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/resources/');
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

// File filter based on field name
const fileFilter = (req, file, cb) => {
  const thumbnailMimeTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
  const fileMimeTypes = [
    'application/pdf', 
    'application/msword', 
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'video/mp4',
    'video/x-matroska',
    'video/webm',
    'video/ogg'];

  if (file.fieldname === 'thumbnailUrl') {
    if (thumbnailMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files allowed for thumbnail'), false);
    }
  } else if (file.fieldname === 'fileUrl') {
    if (fileMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF or Video files allowed'), false);
    }
  } else {
    cb(new Error('Unknown field'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload.fields([
  { name: 'thumbnailUrl', maxCount: 1 },
  { name: 'fileUrl', maxCount: 1 }
]);