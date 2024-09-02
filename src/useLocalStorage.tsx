export const useLocalStorage=(key: string)=>{
    const setItem =(cards:unknown)=>{
        localStorage.setItem(key, JSON.stringify(cards));
    }
    return{setItem}
}