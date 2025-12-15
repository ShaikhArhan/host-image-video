const cloudinaryService = require("../service/cloudinaryService");

///////////////////////////////////////////////////////////////////////////////////////////////
// FILES OPERATIONS (IMAGE AND VIDEO)
///////////////////////////////////////////////////////////////////////////////////////////////

// Upload file to a folder (folderName is optional - if not provided, uploads to root)
const uploadFile = async (req, res) => {
  try {
    const { folderName } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "file is required" });
    }
    const response = await cloudinaryService.uploadFile(
      req.file.buffer,
      folderName || "" // empty string = root folder
    );
    return res.json({ success: true, data: response });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Get file details
const getFileDetails = async (req, res) => {
  try {
    const { publicId, resourceType } = req.query;
    if (!publicId) {
      return res.status(400).json({ error: "publicId is required" });
    }
    const response = await cloudinaryService.getFileDetails(
      publicId,
      resourceType
    );
    return res.json({ success: true, data: response });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Update/Replace an existing file
const updateFile = async (req, res) => {
  try {
    const { publicId } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "file is required" });
    }
    if (!publicId) {
      return res.status(400).json({ error: "publicId is required" });
    }
    const response = await cloudinaryService.updateFile(
      req.file.buffer,
      publicId
    );
    return res.json({ success: true, data: response });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a file
const deleteFile = async (req, res) => {
  try {
    const { publicId, resourceType } = req.body;
    if (!publicId) {
      return res.status(400).json({ error: "publicId is required" });
    }
    const response = await cloudinaryService.deleteFile(publicId, resourceType);
    return res.json({ success: true, data: response });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////
// FOLDERS OPERATIONS
///////////////////////////////////////////////////////////////////////////////////////////////

// Create a new folder
const createFolder = async (req, res) => {
  try {
    const { folderPath } = req.body;
    if (!folderPath) {
      return res.status(400).json({ error: "folderPath is required" });
    }
    const response = await cloudinaryService.createFolder(folderPath);
    return res.json({ success: true, data: response });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Get all subfolders
const getFolders = async (req, res) => {
  try {
    const { root } = req.query;
    const response = await cloudinaryService.getFolders(root || "");
    return res.json({ success: true, data: response });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a folder
const deleteFolder = async (req, res) => {
  try {
    const { folderPath } = req.body;
    if (!folderPath) {
      return res.status(400).json({ error: "folderPath is required" });
    }
    const response = await cloudinaryService.deleteFolder(folderPath);
    return res.json({ success: true, data: response });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
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
