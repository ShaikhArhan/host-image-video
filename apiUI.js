const getApiDocsHTML = (baseUrl) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cloudinary API Documentation</title>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-primary: #0a0a0f;
      --bg-secondary: #12121a;
      --bg-card: #1a1a24;
      --accent: #00d4aa;
      --accent-dim: #00d4aa33;
      --text-primary: #e8e8ed;
      --text-secondary: #8888a0;
      --border: #2a2a3a;
      --method-get: #61affe;
      --method-post: #49cc90;
      --method-put: #fca130;
      --method-delete: #f93e3e;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Outfit', sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      min-height: 100vh;
      background-image: 
        radial-gradient(ellipse at 20% 0%, var(--accent-dim) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 100%, #6366f133 0%, transparent 50%);
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 24px;
    }

    header {
      text-align: center;
      margin-bottom: 60px;
    }

    .logo {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }

    .logo-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, var(--accent), #6366f1);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--text-primary), var(--accent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      color: var(--text-secondary);
      font-size: 1.1rem;
      margin-top: 8px;
    }

    .base-url {
      display: inline-block;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 12px 20px;
      margin-top: 20px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.9rem;
      color: var(--accent);
    }

    .section {
      margin-bottom: 48px;
    }

    .section-title {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .section-title::before {
      content: '';
      width: 4px;
      height: 24px;
      background: var(--accent);
      border-radius: 2px;
    }

    .endpoint-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      margin-bottom: 16px;
      overflow: hidden;
      transition: all 0.2s ease;
    }

    .endpoint-card:hover {
      border-color: var(--accent);
      box-shadow: 0 0 20px var(--accent-dim);
    }

    .endpoint-header {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 20px;
      cursor: pointer;
      user-select: none;
    }

    .method {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: 6px;
      min-width: 70px;
      text-align: center;
      text-transform: uppercase;
    }

    .method-get { background: var(--method-get)22; color: var(--method-get); }
    .method-post { background: var(--method-post)22; color: var(--method-post); }
    .method-put { background: var(--method-put)22; color: var(--method-put); }
    .method-delete { background: var(--method-delete)22; color: var(--method-delete); }

    .endpoint-path {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.95rem;
      color: var(--text-primary);
      flex: 1;
    }

    .endpoint-desc {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    .expand-icon {
      color: var(--text-secondary);
      transition: transform 0.2s ease;
    }

    .endpoint-card.open .expand-icon {
      transform: rotate(180deg);
    }

    .endpoint-body {
      display: none;
      padding: 0 20px 20px;
      border-top: 1px solid var(--border);
    }

    .endpoint-card.open .endpoint-body {
      display: block;
    }

    .param-section {
      margin-top: 16px;
    }

    .param-title {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text-secondary);
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .code-wrapper {
      position: relative;
    }

    .code-block {
      background: var(--bg-primary);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      padding-right: 50px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      overflow-x: auto;
      white-space: pre;
      color: var(--accent);
    }

    .copy-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 6px 10px;
      cursor: pointer;
      color: var(--text-secondary);
      font-size: 0.75rem;
      font-family: 'Outfit', sans-serif;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .copy-btn:hover {
      background: var(--accent);
      color: var(--bg-primary);
      border-color: var(--accent);
    }

    .copy-btn.copied {
      background: var(--method-post);
      color: var(--bg-primary);
      border-color: var(--method-post);
    }

    .try-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--accent);
      color: var(--bg-primary);
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-family: 'Outfit', sans-serif;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      margin-top: 12px;
      transition: all 0.2s ease;
    }

    .try-btn:hover {
      background: #00f0c0;
      transform: translateY(-1px);
    }

    .footer {
      text-align: center;
      padding-top: 40px;
      border-top: 1px solid var(--border);
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    .stats {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin-bottom: 60px;
    }

    .stat-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px 40px;
      text-align: center;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--accent);
    }

    .stat-label {
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin-top: 4px;
    }

    @media (max-width: 768px) {
      .endpoint-header {
        flex-wrap: wrap;
      }
      .endpoint-desc {
        width: 100%;
        margin-top: 8px;
      }
      .stats {
        flex-direction: column;
        gap: 16px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="logo">
        <div class="logo-icon">☁️</div>
        <h1>Cloudinary API</h1>
      </div>
      <p class="subtitle">Image & Video Storage Service Documentation</p>
      <div class="base-url">Base URL: ${baseUrl}/api/cloudinary</div>
      <div class="base-url" style="margin-top: 10px; color: #fca130;">🔐 Header Required: authorization: YOUR_PASS_CODE</div>
    </header>

    <div class="stats">
      <div class="stat-card">
        <div class="stat-number">7</div>
        <div class="stat-label">Total Endpoints</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">4</div>
        <div class="stat-label">File Operations</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">3</div>
        <div class="stat-label">Folder Operations</div>
      </div>
    </div>

    <!-- FILE OPERATIONS -->
    <section class="section">
      <h2 class="section-title">File Operations</h2>

      <!-- UPLOAD FILE -->
      <div class="endpoint-card">
        <div class="endpoint-header" onclick="toggleCard(this)">
          <span class="method method-post">POST</span>
          <span class="endpoint-path">/upload-file</span>
          <span class="endpoint-desc">Upload a new file to a folder</span>
          <span class="expand-icon">▼</span>
        </div>
        <div class="endpoint-body">
          <div class="param-section">
            <div class="param-title">URL</div>
            <div class="code-block">${baseUrl}/api/cloudinary/upload-file</div>
          </div>
          <div class="param-section">
            <div class="param-title">Headers</div>
            <div class="code-block">authorization: YOUR_PASS_CODE
Content-Type: multipart/form-data</div>
          </div>
          <div class="param-section">
            <div class="param-title">Form Data</div>
            <div class="code-block">file: [Select image/video file] (required)
folderName: "e-commerce/products" (optional - if not provided, uploads to root)</div>
          </div>
          <div class="param-section">
            <div class="param-title">cURL</div>
            <div class="code-block curl-block">curl -X POST ${baseUrl}/api/cloudinary/upload-file \\
  -H "authorization: YOUR_PASS_CODE" \\
  -F "file=@C:/path/to/image.jpg" \\
  -F "folderName=e-commerce/products"</div>
          </div>
        </div>
      </div>

      <!-- UPDATE FILE -->
      <div class="endpoint-card">
        <div class="endpoint-header" onclick="toggleCard(this)">
          <span class="method method-put">PUT</span>
          <span class="endpoint-path">/update-file</span>
          <span class="endpoint-desc">Update/Replace an existing file</span>
          <span class="expand-icon">▼</span>
        </div>
        <div class="endpoint-body">
          <div class="param-section">
            <div class="param-title">URL</div>
            <div class="code-block">${baseUrl}/api/cloudinary/update-file</div>
          </div>
          <div class="param-section">
            <div class="param-title">Headers</div>
            <div class="code-block">authorization: YOUR_PASS_CODE
Content-Type: multipart/form-data</div>
          </div>
          <div class="param-section">
            <div class="param-title">Form Data</div>
            <div class="code-block">file: [Select new image/video file]
publicId: "e-commerce/products/abc123"</div>
          </div>
          <div class="param-section">
            <div class="param-title">cURL</div>
            <div class="code-block curl-block">curl -X PUT ${baseUrl}/api/cloudinary/update-file \\
  -H "authorization: YOUR_PASS_CODE" \\
  -F "file=@C:/path/to/new-image.jpg" \\
  -F "publicId=e-commerce/products/abc123"</div>
          </div>
        </div>
      </div>

      <!-- GET FILE -->
      <div class="endpoint-card">
        <div class="endpoint-header" onclick="toggleCard(this)">
          <span class="method method-get">GET</span>
          <span class="endpoint-path">/get-file</span>
          <span class="endpoint-desc">Get file details by publicId</span>
          <span class="expand-icon">▼</span>
        </div>
        <div class="endpoint-body">
          <div class="param-section">
            <div class="param-title">URL</div>
            <div class="code-block">${baseUrl}/api/cloudinary/get-file</div>
          </div>
          <div class="param-section">
            <div class="param-title">Headers</div>
            <div class="code-block">authorization: YOUR_PASS_CODE</div>
          </div>
          <div class="param-section">
            <div class="param-title">Query Parameters</div>
            <div class="code-block">publicId: "e-commerce/products/abc123" (required)
resourceType: "image" or "video" (optional, default: "image")</div>
          </div>
          <div class="param-section">
            <div class="param-title">cURL</div>
            <div class="code-block curl-block">curl -X GET "${baseUrl}/api/cloudinary/get-file?publicId=e-commerce/products/abc123&resourceType=image" \\
  -H "authorization: YOUR_PASS_CODE"</div>
          </div>
        </div>
      </div>

      <!-- DELETE FILE -->
      <div class="endpoint-card">
        <div class="endpoint-header" onclick="toggleCard(this)">
          <span class="method method-delete">DELETE</span>
          <span class="endpoint-path">/delete-file</span>
          <span class="endpoint-desc">Delete a file by publicId</span>
          <span class="expand-icon">▼</span>
        </div>
        <div class="endpoint-body">
          <div class="param-section">
            <div class="param-title">URL</div>
            <div class="code-block">${baseUrl}/api/cloudinary/delete-file</div>
          </div>
          <div class="param-section">
            <div class="param-title">Headers</div>
            <div class="code-block">authorization: YOUR_PASS_CODE
Content-Type: application/json</div>
          </div>
          <div class="param-section">
            <div class="param-title">Body (JSON)</div>
            <div class="code-block">{
  "publicId": "e-commerce/products/abc123",
  "resourceType": "image"
}</div>
          </div>
          <div class="param-section">
            <div class="param-title">cURL</div>
            <div class="code-block curl-block">curl -X DELETE ${baseUrl}/api/cloudinary/delete-file \\
  -H "authorization: YOUR_PASS_CODE" \\
  -H "Content-Type: application/json" \\
  -d '{"publicId": "e-commerce/products/abc123", "resourceType": "image"}'</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOLDER OPERATIONS -->
    <section class="section">
      <h2 class="section-title">Folder Operations</h2>

      <!-- CREATE FOLDER -->
      <div class="endpoint-card">
        <div class="endpoint-header" onclick="toggleCard(this)">
          <span class="method method-post">POST</span>
          <span class="endpoint-path">/create-folder</span>
          <span class="endpoint-desc">Create a new folder</span>
          <span class="expand-icon">▼</span>
        </div>
        <div class="endpoint-body">
          <div class="param-section">
            <div class="param-title">URL</div>
            <div class="code-block">${baseUrl}/api/cloudinary/create-folder</div>
          </div>
          <div class="param-section">
            <div class="param-title">Headers</div>
            <div class="code-block">authorization: YOUR_PASS_CODE
Content-Type: application/json</div>
          </div>
          <div class="param-section">
            <div class="param-title">Body (JSON)</div>
            <div class="code-block">{
  "folderPath": "e-commerce/products/electronics"
}</div>
          </div>
          <div class="param-section">
            <div class="param-title">cURL</div>
            <div class="code-block curl-block">curl -X POST ${baseUrl}/api/cloudinary/create-folder \\
  -H "authorization: YOUR_PASS_CODE" \\
  -H "Content-Type: application/json" \\
  -d '{"folderPath": "e-commerce/products/electronics"}'</div>
          </div>
        </div>
      </div>

      <!-- GET FOLDERS -->
      <div class="endpoint-card">
        <div class="endpoint-header" onclick="toggleCard(this)">
          <span class="method method-get">GET</span>
          <span class="endpoint-path">/get-folders</span>
          <span class="endpoint-desc">Get all subfolders</span>
          <span class="expand-icon">▼</span>
        </div>
        <div class="endpoint-body">
          <div class="param-section">
            <div class="param-title">URL</div>
            <div class="code-block">${baseUrl}/api/cloudinary/get-folders</div>
          </div>
          <div class="param-section">
            <div class="param-title">Headers</div>
            <div class="code-block">authorization: YOUR_PASS_CODE</div>
          </div>
          <div class="param-section">
            <div class="param-title">Query Parameters</div>
            <div class="code-block">root: "e-commerce" (optional - leave empty for root folders)</div>
          </div>
          <div class="param-section">
            <div class="param-title">cURL</div>
            <div class="code-block curl-block">curl -X GET "${baseUrl}/api/cloudinary/get-folders?root=e-commerce" \\
  -H "authorization: YOUR_PASS_CODE"</div>
          </div>
        </div>
      </div>

      <!-- DELETE FOLDER -->
      <div class="endpoint-card">
        <div class="endpoint-header" onclick="toggleCard(this)">
          <span class="method method-delete">DELETE</span>
          <span class="endpoint-path">/delete-folder</span>
          <span class="endpoint-desc">Delete an empty folder</span>
          <span class="expand-icon">▼</span>
        </div>
        <div class="endpoint-body">
          <div class="param-section">
            <div class="param-title">URL</div>
            <div class="code-block">${baseUrl}/api/cloudinary/delete-folder</div>
          </div>
          <div class="param-section">
            <div class="param-title">Headers</div>
            <div class="code-block">authorization: YOUR_PASS_CODE
Content-Type: application/json</div>
          </div>
          <div class="param-section">
            <div class="param-title">Body (JSON)</div>
            <div class="code-block">{
  "folderPath": "e-commerce/old-folder"
}</div>
          </div>
          <div class="param-section">
            <div class="param-title">cURL</div>
            <div class="code-block curl-block">curl -X DELETE ${baseUrl}/api/cloudinary/delete-folder \\
  -H "authorization: YOUR_PASS_CODE" \\
  -H "Content-Type: application/json" \\
  -d '{"folderPath": "e-commerce/old-folder"}'</div>
          </div>
          <div class="param-section">
            <div class="param-title">⚠️ Note</div>
            <div class="code-block" style="color: var(--method-delete);">Folder must be empty to delete</div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>Image & Video Storage API</p>
    </footer>
  </div>

  <script>
    function toggleCard(header) {
      const card = header.parentElement;
      card.classList.toggle('open');
    }

    function copyToClipboard(btn) {
      const codeBlock = btn.parentElement.querySelector('.code-block');
      const text = codeBlock.textContent;
      
      navigator.clipboard.writeText(text).then(() => {
        btn.classList.add('copied');
        btn.innerHTML = '✓ Copied';
        
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = 'Copy';
        }, 2000);
      });
    }

    // Add copy buttons to all cURL code blocks on load
    document.addEventListener('DOMContentLoaded', () => {
      const codeBlocks = document.querySelectorAll('.curl-block');
      codeBlocks.forEach(block => {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-wrapper';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);
        
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = 'Copy';
        copyBtn.onclick = function() { copyToClipboard(this); };
        wrapper.appendChild(copyBtn);
      });
    });
  </script>
</body>
</html>
  `;
};

const apiDocsMiddleware = (req, res) => {
  const protocol = req.protocol;
  const host = req.get("host");
  const baseUrl = `${protocol}://${host}`;
  res.send(getApiDocsHTML(baseUrl));
};

module.exports = { apiDocsMiddleware };
