import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./assets/upload");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + "-" + String(file.originalname).replace(/[^0-9a-zA-Z.]/g, ''));
  },
});
export let upload = multer({
  storage,
  limits: { files: 200, fileSize: 50 * 1024 * 1024 * 1024 },
});
