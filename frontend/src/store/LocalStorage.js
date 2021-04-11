export const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('ChatUsers', serializedState);
    } catch (e) {
        console.log("Could not save user");
    }
};

export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('ChatUsers');
        if(serializedState === null) {
            return;
        }
        return JSON.parse(serializedState);
    } catch {
        return undefined;
    }
};
