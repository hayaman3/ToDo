let localStorageObj={}

const initLocalStorageObj = (() => {
    if (localStorage.length > 0){
        localStorageObj = JSON.parse(localStorage)
    }else{
        localStorageObj = {
            "notes":{
        
            },
            "projects":{
        
            }
        }
    }
})();

