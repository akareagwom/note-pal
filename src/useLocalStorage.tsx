export const useLocalStorage=(key: string)=>{
    const setItem =(note:unknown)=>{
        try{
            localStorage.setItem(key, JSON.stringify(note));
        }catch(error){
            console.log(error)
        }
    }
    return{setItem};
}