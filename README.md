# 🖼️ Host Image & Video API

A simple and fast API service for hosting images and videos.

## 🌐 Live Demo

**API Documentation:** [https://host-image-video.onrender.com/](https://host-image-video.onrender.com/)

## ✨ Features

- 📷 Upload and host images
- 🎥 Upload and host videos
- 🔗 Get shareable direct links
- ⚡ Fast CDN delivery
- 📄 Interactive API documentation

## 🚀 Getting Started

### Base URL

```
https://host-image-video.onrender.com
```

### API Endpoints

| Method   | Endpoint    | Description              |
| -------- | ----------- | ------------------------ |
| `POST`   | `/upload`   | Upload an image or video |
| `GET`    | `/file/:id` | Retrieve a hosted file   |
| `DELETE` | `/file/:id` | Delete a hosted file     |

## 📝 Usage Example

### Upload a file

```bash
curl -X POST https://host-image-video.onrender.com/upload \
  -F "file=@your-image.jpg"
```

### Response

```json
{
  "success": true,
  "url": "https://host-image-video.onrender.com/file/abc123",
  "id": "abc123"
}
```

## 🛠️ Tech Stack

- Node.js
- Express.js
- Render (Hosting)

## 📄 License

MIT License

---

Made with ❤️ by [ShaikhArhan](https://github.com/ShaikhArhan)
