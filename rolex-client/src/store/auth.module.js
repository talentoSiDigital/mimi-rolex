import AuthService from '../services/auth/authDataService';
import { defineStore } from "pinia";
import storeDataService from '../services/storeDataService.js';



const user = JSON.parse(localStorage.getItem('user'));
const initialState = ()=>{
   return user ? { status: { loggedIn: true }, user:user }: { status: { loggedIn: false }, user: null };}

export const auth = defineStore('auth',{
  namespaced: true, 
  state: initialState,
  actions: {
    login(user) {
      return AuthService.login(user).then(
        user => {
          this.$state.status.loggedIn=true;
          this.$state.user=user;
          
          return Promise.resolve(user); 
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    logout() {
      AuthService.logout() 
      this.$state.status.loggedIn=true;
      this.$state.user=user;
      
    },
    register(user) {
      return AuthService.register(user).then(
        response => {
          return Promise.resolve(response.data);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
   
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
});
