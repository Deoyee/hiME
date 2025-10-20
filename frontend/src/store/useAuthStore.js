import {create} from 'zustand';

export const useAuthStore = create ((set) => ({
    authUser: {name:"kate",_id:122, age:45},
    isLoading:false,
    isLoggedIn:false,

    login:() => {
        console.log("Just logged in");
        set({ isLoggedIn:true, isLoading:true });
    },
}));
