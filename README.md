# ☁️ Image & Video Storage API

A powerful REST API service for uploading, managing, and organizing images and videos with cloud storage.

## 🌐 Live Demo

**API Documentation:** [https://host-image-video.onrender.com/](https://host-image-video.onrender.com/)

Visit the root URL to see the interactive API documentation.

---

## ✨ Features

- 📷 Upload images (JPG, PNG, GIF, WebP)
- 🎥 Upload videos (MP4, MOV, AVI, MKV, WebM)
- 📁 Organize files in folders
- 🔄 Update/Replace existing files
- 🗑️ Delete files and folders
- ⚡ Fast CDN delivery
- 🔐 Authorization protected endpoints
- 📄 Interactive API documentation UI

---

## 🚀 Getting Started

### Base URL

```
https://host-image-video.onrender.com/api
```

### Authentication

All API endpoints require an `authorization` header:

```
authorization: YOUR_PASS_CODE
```

---

## 📋 API Endpoints

### File Operations

| Method   | Endpoint       | Description                     |
| -------- | -------------- | ------------------------------- |
| `POST`   | `/upload-file` | Upload a new image/video        |
| `PUT`    | `/update-file` | Update/Replace an existing file |
| `GET`    | `/get-file`    | Get file details by publicId    |
| `DELETE` | `/delete-file` | Delete a file by publicId       |

### Folder Operations

| Method   | Endpoint         | Description            |
| -------- | ---------------- | ---------------------- |
| `POST`   | `/create-folder` | Create a new folder    |
| `GET`    | `/get-folders`   | Get all subfolders     |
| `DELETE` | `/delete-folder` | Delete an empty folder |

---

## 📝 Usage Examples

### 1. Upload a File

```bash
curl -X POST https://host-image-video.onrender.com/api/upload-file \
  -H "authorization: YOUR_PASS_CODE" \
  -F "file=@/path/to/image.jpg" \
  -F "folderName=e-commerce/products"
```

**Response:**

```json
{
  "success": true,
  "data": {
    "public_id": "e-commerce/products/abc123xyz",
    "secure_url": "https://cdn.example.com/abc123xyz.jpg",
    "format": "jpg",
    "width": 1920,
    "height": 1080
  }
}
```

### 2. Get File Details

```bash
curl -X GET "https://host-image-video.onrender.com/api/get-file?publicId=e-commerce/products/abc123xyz&resourceType=image" \
  -H "authorization: YOUR_PASS_CODE"
```

### 3. Update/Replace a File

```bash
curl -X PUT https://host-image-video.onrender.com/api/update-file \
  -H "authorization: YOUR_PASS_CODE" \
  -F "file=@/path/to/new-image.jpg" \
  -F "publicId=e-commerce/products/abc123xyz"
```

### 4. Delete a File

```bash
curl -X DELETE https://host-image-video.onrender.com/api/delete-file \
  -H "authorization: YOUR_PASS_CODE" \
  -H "Content-Type: application/json" \
  -d '{"publicId": "e-commerce/products/abc123xyz", "resourceType": "image"}'
```

### 5. Create a Folder

```bash
curl -X POST https://host-image-video.onrender.com/api/create-folder \
  -H "authorization: YOUR_PASS_CODE" \
  -H "Content-Type: application/json" \
  -d '{"folderPath": "e-commerce/products/electronics"}'
```

### 6. Get Folders

```bash
curl -X GET "https://host-image-video.onrender.com/api/get-folders?root=e-commerce" \
  -H "authorization: YOUR_PASS_CODE"
```

### 7. Delete a Folder

```bash
curl -X DELETE https://host-image-video.onrender.com/api/delete-folder \
  -H "authorization: YOUR_PASS_CODE" \
  -H "Content-Type: application/json" \
  -d '{"folderPath": "e-commerce/old-folder"}'
```

> ⚠️ **Note:** Folder must be empty to delete.

---

## 📁 Project Structure

```
├── app.js                    # Main entry point
├── apiUI.js                  # API documentation UI
├── config/
│   └── storageConfig.js      # Cloud storage configuration
├── route/
│   ├── indexRoute.js         # Main router
│   └── storageRoute.js       # Storage routes
├── controller/
│   └── storageController.js  # Request handlers
├── service/
│   └── storageService.js     # Business logic
├── middleware/
│   └── authorization.js      # Auth middleware
└── .env                      # Environment variables
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret
PASS_CODE=your_authorization_passcode
```

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **File Upload:** Multer
- **Cloud Storage:** Cloud CDN
- **Hosting:** Render

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/ShaikhArhan/live_image_store.git

# Install dependencies
npm install

# Create .env file and add your credentials

# Start the server
npm start
```

---

## 📄 License

MIT License

---

Made with ❤️ by [ShaikhArhan](https://github.com/ShaikhArhan)
