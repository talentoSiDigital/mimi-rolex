import { defineStore, storeToRefs } from "pinia";
import { auth } from './auth.module';


const API_URL = 'http://localhost:3000/api/';
const user = JSON.parse(localStorage.getItem('user'));
const initialState = () => {
    return user ? { status: { loggedIn: true }, user: user } : { status: { loggedIn: false }, user: null };
}

export const cart = defineStore('cart', {
    namespaced: true,
    state: initialState,
    actions:{
        
    }
})
