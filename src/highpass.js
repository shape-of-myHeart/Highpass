const listeners = {};

export default {
    on: (name, listener) => {
        if (typeof name !== 'string' || typeof listener !== 'function') return;
        if (!Array.isArray(listeners[name])) listeners[name] = [];

        listeners[name].push(listener);
    },
    emit: (name, parameters) => {
        if (!Array.isArray(listeners[name])) return;
        for (let i = 0; i < listeners[name].length; i++) {
            listeners[name][i](parameters);
        }
    }
};
