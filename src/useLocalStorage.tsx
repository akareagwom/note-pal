export const useLocalStorage=(key: string)=>{
    const setItem =(value:unknown)=>{
        localStorage.setItem(key, JSON.stringify(value));
    }
    return{setItem}
}