const { cloudinary } = require("../config/cloudinaryConfig");

// Helper function to upload from buffer using stream
const uploadFromBuffer = (buffer, options) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      options,
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    uploadStream.end(buffer);
  });
};

const uploadFile = async (fileBuffer, folderName) => {
  const options = {
    folder: folderName,
    resource_type: "auto",
    allowed_formats: [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "webp",
      "mp4",
      "mov",
      "avi",
      "mkv",
      "webm",
    ],
  };
  const data = await uploadFromBuffer(fileBuffer, options);
  return data;
};

const createFolder = async (folderPath) => {
  const data = await cloudinary.api.create_folder(folderPath);
  return data;
};

const getFolders = async (rootFolder = "") => {
  const data = await cloudinary.api.sub_folders(rootFolder || "/");
  return data;
};

const deleteFolder = async (folderPath) => {
  const data = await cloudinary.api.delete_folder(folderPath);
  return data;
};

// Update/Replace an existing file
const updateFile = async (fileBuffer, publicId) => {
  const options = {
    public_id: publicId,
    overwrite: true,
    invalidate: true,
    resource_type: "auto",
    allowed_formats: [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "webp",
      "mp4",
      "mov",
      "avi",
      "mkv",
      "webm",
    ],
  };
  const data = await uploadFromBuffer(fileBuffer, options);
  return data;
};

// Delete a file
const deleteFile = async (publicId, resourceType = "image") => {
  const data = await cloudinary.uploader.destroy(publicId, {
    resource_type: resourceType,
  });
  return data;
};

// Get file details
const getFileDetails = async (publicId, resourceType = "image") => {
  const data = await cloudinary.api.resource(publicId, {
    resource_type: resourceType,
  });
  return data;
};

module.exports = {
  uploadFile,
  createFolder,
  getFolders,
  deleteFolder,
  updateFile,
  deleteFile,
  getFileDetails,
};
