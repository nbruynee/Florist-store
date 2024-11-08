let isViewingImageDetail = false; 


function openFileSelector() {
    if (!isViewingImageDetail) { 
        document.getElementById('choose-img').click();
    }
}

function previewImages(event) {
    if (isViewingImageDetail) return;

    const files = event.target.files;
    const previewContainer = document.getElementById('preview-container');
    const placeholderText = document.getElementById('placeholder-text');

    placeholderText.style.display = 'none';

    Array.from(files).forEach((file) => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('image-container');

                const img = document.createElement('img');
                img.src = e.target.result;
                img.onclick = () => viewImage(img.src);

                const deleteBtn = document.createElement('button');
                deleteBtn.classList.add('delete-btn');
                deleteBtn.innerHTML = '×';
                deleteBtn.onclick = (event) => {
                    event.stopPropagation();
                    imgContainer.remove();
                    if (previewContainer.children.length === 0) {
                        placeholderText.style.display = 'block';
                    }
                };

                imgContainer.appendChild(img);
                imgContainer.appendChild(deleteBtn);
                previewContainer.appendChild(imgContainer);
            };

            reader.readAsDataURL(file);
        }
    });
}

function clearImages(event) {
    if (event) event.preventDefault();
    const previewContainer = document.getElementById('preview-container');
    previewContainer.innerHTML = ''; 
    const placeholderText = document.getElementById('placeholder-text');
    placeholderText.style.display = 'block';
}

function viewImage(src) {
    isViewingImageDetail = true;

    const modal = document.createElement('div');
    modal.classList.add('image-modal');
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(233, 236, 239, 0.8)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = 1000;

    modal.onclick = (event) => {
        if (event.target === modal) {
            closeImageModal(modal);
        }
    };

    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = '80%';
    img.style.maxHeight = '80%';
    img.style.borderRadius = '10px';

    const closeBtn = document.createElement('button'); 
    closeBtn.innerHTML = '×';
    closeBtn.classList.add('close-button'); 
    closeBtn.onclick = () => closeImageModal(modal); 

    modal.appendChild(img);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
}

function closeImageModal(modal) {
    isViewingImageDetail = false; 
    modal.remove();
}
