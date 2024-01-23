import http from '../http-commons'

class Store {

    getJoyeria(id) {
        return http.get(`/joyeria/${id}`);
    }
    
    getJoyeriaDetails(id){
        return http.get(`/joyeria/producto/${id}`)
    }
    
    getRelojeria(id) {
        return http.get(`/relojeria/${id}`);
    }

    getRelojeriaDetails(id){
        return http.get(`/relojeria/producto/${id}`)
    }


}

export default new Store();