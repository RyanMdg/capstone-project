import multer from "multer";

// Configure multer storage and file filter
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload"); // Specify the directory to save the uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Create multer upload middleware
const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload;
