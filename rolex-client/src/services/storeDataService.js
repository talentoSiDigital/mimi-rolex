import http from '../http-commons'


class Store {

    addComma(price) {
        if (price.length > 3) {
            return `${price.slice(0, price.length - 3)},${price.slice(price.length - 3, price.length)}`
        } else {
            return price
        }
    }
 

    getJoyeria(id) {
        return http.get(`/joyeria/${id}`);
    }

    getJoyeriaDetails(id) {
        return http.get(`/joyeria/producto/${id}`)
    }

    postNewJoyeria(data) {
        let formData = new FormData();
        for (const key in data) {
            if (key == 'price') {

                formData.append(key, this.addComma(data[key]));
            } else {
                formData.append(key, data[key]);

            }
        }
        return http.post("/joyeria/producto/create", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

    }

    getRelojeria(id) {
        return http.get(`/relojeria/${id}`);
    }

    getRelojeriaDetails(id) {
        return http.get(`/relojeria/producto/${id}`)
    }
    
    postNewRelojeria(data) {
        let formData = new FormData();
        let tableContent = []
        for (let index = 1; index <= data["tableRows"]; index++) {
            tableContent.push(`${data[`header${index}`]}: ${data[`content${index}`]}`)
        }

        tableContent = tableContent.join('; ')
        
        formData.append('tableRows', `${tableContent.toString()};`)

        for (const key in data) {
            if (!key.includes('header') && !key.includes('content')) {
                key == 'price' ? formData.append(key, this.addComma(data[key])):formData.append(key, data[key])
            }
        }
       

        return http.post("/relojeria/producto/create", formData,{
            headers:{
              'Content-Type': 'multipart/form-data'
            }
          })

    }
    
    postAddToCart(id,user){
        return http.post(`/cart/relojeria/${user}/${id}`)
    }
    
    getCartByUser(user){
        return http.get(`/cart/relojeria/${user}`)
    }
    
    deleteProductInCart(id,user){
        return http.delete(`/cart/relojeria/delete/${user}/${id}`)
        
    }

}

export default new Store();