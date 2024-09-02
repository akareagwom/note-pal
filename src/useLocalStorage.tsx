export const useLocalStorage=(key: string)=>{
    const setItem =(note:unknown)=>{
        localStorage.setItem(key, JSON.stringify(note));
    }
    return{setItem};
}