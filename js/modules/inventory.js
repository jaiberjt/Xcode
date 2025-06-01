// Módulo de Inventario
const Inventory = (function() {
    // Variables privadas
    const storageKey = 'inventory_items';
    let items = JSON.parse(localStorage.getItem(storageKey) || '[]');

    // Métodos privados
    const saveToStorage = () => {
        localStorage.setItem(storageKey, JSON.stringify(items));
    };

    const validateProduct = (product) => {
        const requiredFields = ['codigo', 'descripcion', 'cantidad', 'proveedor'];
        return requiredFields.every(field => product[field]);
    };

    // API pública
    return {
        addProduct(product) {
            if (!validateProduct(product)) {
                throw new Error('Producto inválido: faltan campos requeridos');
            }

            const existingProduct = items.find(item => item.codigo === product.codigo);
            if (existingProduct) {
                throw new Error('Ya existe un producto con ese código');
            }

            items.push({
                ...product,
                fechaRegistro: new Date().toISOString(),
                ultimaActualizacion: new Date().toISOString()
            });

            saveToStorage();
            return true;
        },

        updateProduct(codigo, updates) {
            const index = items.findIndex(item => item.codigo === codigo);
            if (index === -1) {
                throw new Error('Producto no encontrado');
            }

            items[index] = {
                ...items[index],
                ...updates,
                ultimaActualizacion: new Date().toISOString()
            };

            saveToStorage();
            return true;
        },

        updateStock(codigo, cantidad) {
            const product = items.find(item => item.codigo === codigo);
            if (!product) {
                throw new Error('Producto no encontrado');
            }

            product.cantidad = cantidad;
            product.ultimaActualizacion = new Date().toISOString();
            saveToStorage();
            return true;
        },

        getProduct(codigo) {
            return items.find(item => item.codigo === codigo);
        },

        getAllProducts() {
            return [...items];
        },

        deleteProduct(codigo) {
            const index = items.findIndex(item => item.codigo === codigo);
            if (index === -1) {
                throw new Error('Producto no encontrado');
            }

            items.splice(index, 1);
            saveToStorage();
            return true;
        },

        searchProducts(query) {
            query = query.toLowerCase();
            return items.filter(item => 
                item.codigo.toLowerCase().includes(query) ||
                item.descripcion.toLowerCase().includes(query) ||
                item.proveedor.toLowerCase().includes(query)
            );
        }
    };
})(); 