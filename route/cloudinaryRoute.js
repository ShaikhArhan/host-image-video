const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinaryController = require("../controller/cloudinaryController");
const authorization = require("../middleware/authorization");

// Multer configuration for file uploads (memory storage)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB limit
});

// Apply authorization middleware to all cloudinary routes
router.use(authorization);

// ============ FILE ROUTES ============

// POST /api/cloudinary/upload-file (multipart/form-data)
router.post(
  "/upload-file",
  upload.single("file"),
  cloudinaryController.uploadFile
);

// PUT /api/cloudinary/update-file (multipart/form-data)
router.put(
  "/update-file",
  upload.single("file"),
  cloudinaryController.updateFile
);

// GET /api/cloudinary/get-file?publicId=xxx&resourceType=image
router.get("/get-file", cloudinaryController.getFileDetails);

// DELETE /api/cloudinary/delete-file
router.delete("/delete-file", cloudinaryController.deleteFile);

// ============ FOLDER ROUTES ============

// POST /api/cloudinary/create-folder
router.post("/create-folder", cloudinaryController.createFolder);

// GET /api/cloudinary/get-folders?root=e-commerce
router.get("/get-folders", cloudinaryController.getFolders);

// DELETE /api/cloudinary/delete-folder
router.delete("/delete-folder", cloudinaryController.deleteFolder);

module.exports = router;
