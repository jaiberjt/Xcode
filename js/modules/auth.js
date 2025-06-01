// Módulo de Autenticación
const Auth = (function() {
    // Variables privadas
    let currentUser = null;
    const storageKey = 'auth_user';

    // Métodos privados
    const validateCredentials = (username, password) => {
        // Aquí iría la validación real contra un backend
        return username.length > 0 && password.length > 0;
    };

    // API pública
    return {
        login(username, password) {
            if (validateCredentials(username, password)) {
                currentUser = { 
                    username, 
                    role: 'user',
                    nombre: 'Usuario Demo',
                    email: 'demo@helios.com'
                };
                localStorage.setItem(storageKey, JSON.stringify(currentUser));
                return true;
            }
            return false;
        },

        logout() {
            currentUser = null;
            localStorage.removeItem(storageKey);
            window.location.href = 'login.html';
        },

        getCurrentUser() {
            if (!currentUser) {
                const stored = localStorage.getItem(storageKey);
                if (stored) {
                    currentUser = JSON.parse(stored);
                }
            }
            return currentUser;
        },

        isAuthenticated() {
            return this.getCurrentUser() !== null;
        },

        checkAuth() {
            if (!this.isAuthenticated()) {
                window.location.href = 'login.html';
                return false;
            }
            return true;
        }
    };
})(); 