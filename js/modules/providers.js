// Módulo de Gestión de Proveedores
const Providers = (function() {
    // Variables privadas
    const storageKey = 'providers_data';
    let providers = JSON.parse(localStorage.getItem(storageKey) || '[]');

    // Métodos privados
    const saveToStorage = () => {
        localStorage.setItem(storageKey, JSON.stringify(providers));
    };

    const validateProvider = (provider) => {
        const requiredFields = ['nombre', 'ruc', 'direccion', 'telefono', 'email'];
        return requiredFields.every(field => provider[field]);
    };

    // API pública
    return {
        addProvider(provider) {
            if (!validateProvider(provider)) {
                throw new Error('Proveedor inválido: faltan campos requeridos');
            }

            const existingProvider = providers.find(p => p.ruc === provider.ruc);
            if (existingProvider) {
                throw new Error('Ya existe un proveedor con ese RUC');
            }

            providers.push({
                ...provider,
                id: Date.now().toString(),
                fechaRegistro: new Date().toISOString(),
                estado: 'activo'
            });

            saveToStorage();
            return true;
        },

        updateProvider(id, updates) {
            const index = providers.findIndex(p => p.id === id);
            if (index === -1) {
                throw new Error('Proveedor no encontrado');
            }

            // Evitar actualizar campos críticos
            const { id: _, fechaRegistro: __, ...validUpdates } = updates;

            providers[index] = {
                ...providers[index],
                ...validUpdates,
                ultimaActualizacion: new Date().toISOString()
            };

            saveToStorage();
            return true;
        },

        getProvider(id) {
            return providers.find(p => p.id === id);
        },

        getAllProviders() {
            return [...providers];
        },

        deleteProvider(id) {
            const index = providers.findIndex(p => p.id === id);
            if (index === -1) {
                throw new Error('Proveedor no encontrado');
            }

            // Soft delete
            providers[index].estado = 'inactivo';
            providers[index].fechaBaja = new Date().toISOString();
            
            saveToStorage();
            return true;
        },

        searchProviders(query) {
            query = query.toLowerCase();
            return providers.filter(provider => 
                provider.nombre.toLowerCase().includes(query) ||
                provider.ruc.includes(query) ||
                provider.email.toLowerCase().includes(query)
            );
        },

        getActiveProviders() {
            return providers.filter(p => p.estado === 'activo');
        }
    };
})(); 