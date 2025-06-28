// File upload functionality
const dropZone = document.querySelector('.drop-zone');
const fileInput = document.getElementById('fileInput');
const browseBtn = document.querySelector('.browse-btn');
const progressContainer = document.querySelector('.progress-container');
const progressBar = document.querySelector('.progress');
const progressText = document.querySelector('.progress-text');

// Handle file selection via browse button
browseBtn.addEventListener('click', () => {
    fileInput.click();
});

// Handle file input change
fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
});

// Handle drag and drop
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    handleFiles(e.dataTransfer.files);
});

// Handle file processing
function handleFiles(files) {
    if (files.length === 0) return;
    
    // Show progress container
    progressContainer.removeAttribute('hidden');
    
    // Simulate file upload (replace with actual upload logic)
    uploadFiles(files);
}

// Simulate file upload with progress
function uploadFiles(files) {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            progressText.textContent = 'Upload complete!';
            setTimeout(() => {
                progressContainer.setAttribute('hidden', true);
                progressBar.style.width = '0%';
                progressText.textContent = 'Uploading...';
            }, 2000);
        }
    }, 200);
}
