// Initialize categories and items
let categories = ["Topwear", "BottomWear", "FootWear", "Accessories"];
let items = JSON.parse(localStorage.getItem('items')) || [];

// Load categories into the dropdown on page load
function loadCategories() {
    const categorySelect = document.getElementById('item-category');
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// Load items into the My List section
function loadItems() {
    const itemsList = document.getElementById('items');
    itemsList.innerHTML = ''; // Clear the list first
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name} (${item.category})</span>
        `;
        itemsList.appendChild(li);
    });
}

// Add a new category
document.getElementById('add-category-button').addEventListener('click', () => {
    const newCategory = document.getElementById('new-category').value;
    if (newCategory && !categories.includes(newCategory)) {
        categories.push(newCategory);
        loadCategories(); // Refresh dropdown
        document.getElementById('new-category').value = ''; // Clear input
    } else {
        alert('Please enter a unique category name.');
    }
});

// Add a new item
document.getElementById('add-button').addEventListener('click', () => {
    const category = document.getElementById('item-category').value;
    const name = document.getElementById('item-name').value;
    const imageInput = document.getElementById('item-image');

    if (category && name && imageInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const newItem = {
                name: name,
                category: category,
                image: e.target.result
            };
            items.push(newItem);
            localStorage.setItem('items', JSON.stringify(items)); // Save to local storage
            loadItems(); // Update displayed items
            document.getElementById('item-name').value = ''; // Clear input
            imageInput.value = ''; // Clear file input
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        alert('Please fill all fields and upload an image.');
    }
});

// Handle pasting images into the paste area
document.getElementById('paste-area').addEventListener('paste', (event) => {
    const itemsList = document.getElementById('items');
    const itemsData = event.clipboardData.items;
    
    for (let i = 0; i < itemsData.length; i++) {
        if (itemsData[i].type.startsWith('image/')) {
            const file = itemsData[i].getAsFile();
            const reader = new FileReader();
            reader.onload = (e) => {
                const newItem = {
                    name: 'Pasted Image',
                    category: 'Miscellaneous',
                    image: e.target.result
                };
                items.push(newItem);
                localStorage.setItem('items', JSON.stringify(items)); // Save to local storage
                loadItems(); // Update displayed items
            };
            reader.readAsDataURL(file);
        }
    }
});

// Load categories and items on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCategories();
    loadItems();
});