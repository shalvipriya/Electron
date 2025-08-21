document.getElementById('productForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const product = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price: document.getElementById('price').value,
        brand: document.getElementById('brand').value,
        category: document.getElementById('category').value,
        stock: document.getElementById('stock').value,
        discount: document.getElementById('discount').value,
        images: document.getElementById('images').value.split(','),
        rating: document.getElementById('rating').value,
        reviewsCount: document.getElementById('reviewsCount').value,
        originalPrice: document.getElementById('originalPrice').value,
    };

    // Sending data to backend to insert into MongoDB
    try {
        const response = await fetch('http://localhost:5000/api/products/add-product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert('Error adding product');
    }
});
