
import multer from 'multer';

// Multer disk storage configuration
export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Multer file filter to accept only image files
export const fileFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('Only image files are allowed!'));
  }
  cb(null, true);
};

// Multer upload instance configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export default upload;
