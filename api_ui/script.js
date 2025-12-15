// Toggle endpoint card expand/collapse
function toggleCard(header) {
  const card = header.parentElement;
  card.classList.toggle('open');
}

// Copy code block content to clipboard
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

// Generate and copy Postman collection
function copyPostmanCollection(btn) {
  const baseUrl = window.location.origin;
  
  const collection = {
    info: {
      name: "Host-Image-Video-APIs",
      description: "Image & Video Storage API Collection",
      schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    item: [
      {
        name: "File Operations",
        item: [
          {
            name: "Upload File",
            request: {
              method: "POST",
              header: [
                { key: "authorization", value: "YOUR_PASS_CODE", type: "text" }
              ],
              body: {
                mode: "formdata",
                formdata: [
                  { key: "file", type: "file", src: "" },
                  { key: "folderName", value: "e-commerce/products", type: "text" }
                ]
              },
              url: {
                raw: baseUrl + "/api/upload-file",
                host: [baseUrl],
                path: ["api", "upload-file"]
              }
            }
          },
          {
            name: "Update File",
            request: {
              method: "PUT",
              header: [
                { key: "authorization", value: "YOUR_PASS_CODE", type: "text" }
              ],
              body: {
                mode: "formdata",
                formdata: [
                  { key: "file", type: "file", src: "" },
                  { key: "publicId", value: "e-commerce/products/abc123", type: "text" }
                ]
              },
              url: {
                raw: baseUrl + "/api/update-file",
                host: [baseUrl],
                path: ["api", "update-file"]
              }
            }
          },
          {
            name: "Get File",
            request: {
              method: "GET",
              header: [
                { key: "authorization", value: "YOUR_PASS_CODE", type: "text" }
              ],
              url: {
                raw: baseUrl + "/api/get-file?publicId=e-commerce/products/abc123&resourceType=image",
                host: [baseUrl],
                path: ["api", "get-file"],
                query: [
                  { key: "publicId", value: "e-commerce/products/abc123" },
                  { key: "resourceType", value: "image" }
                ]
              }
            }
          },
          {
            name: "Delete File",
            request: {
              method: "DELETE",
              header: [
                { key: "authorization", value: "YOUR_PASS_CODE", type: "text" },
                { key: "Content-Type", value: "application/json", type: "text" }
              ],
              body: {
                mode: "raw",
                raw: JSON.stringify({ publicId: "e-commerce/products/abc123", resourceType: "image" }, null, 2)
              },
              url: {
                raw: baseUrl + "/api/delete-file",
                host: [baseUrl],
                path: ["api", "delete-file"]
              }
            }
          }
        ]
      },
      {
        name: "Folder Operations",
        item: [
          {
            name: "Create Folder",
            request: {
              method: "POST",
              header: [
                { key: "authorization", value: "YOUR_PASS_CODE", type: "text" },
                { key: "Content-Type", value: "application/json", type: "text" }
              ],
              body: {
                mode: "raw",
                raw: JSON.stringify({ folderPath: "e-commerce/products/electronics" }, null, 2)
              },
              url: {
                raw: baseUrl + "/api/create-folder",
                host: [baseUrl],
                path: ["api", "create-folder"]
              }
            }
          },
          {
            name: "Get Folders",
            request: {
              method: "GET",
              header: [
                { key: "authorization", value: "YOUR_PASS_CODE", type: "text" }
              ],
              url: {
                raw: baseUrl + "/api/get-folders?root=e-commerce",
                host: [baseUrl],
                path: ["api", "get-folders"],
                query: [
                  { key: "root", value: "e-commerce" }
                ]
              }
            }
          },
          {
            name: "Delete Folder",
            request: {
              method: "DELETE",
              header: [
                { key: "authorization", value: "YOUR_PASS_CODE", type: "text" },
                { key: "Content-Type", value: "application/json", type: "text" }
              ],
              body: {
                mode: "raw",
                raw: JSON.stringify({ folderPath: "e-commerce/old-folder" }, null, 2)
              },
              url: {
                raw: baseUrl + "/api/delete-folder",
                host: [baseUrl],
                path: ["api", "delete-folder"]
              }
            }
          }
        ]
      }
    ]
  };

  navigator.clipboard.writeText(JSON.stringify(collection, null, 2)).then(() => {
    btn.classList.add('copied');
    btn.innerHTML = '✅ Copied! Paste in Postman';
    
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = '📋 Copy Postman Collection';
    }, 3000);
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

