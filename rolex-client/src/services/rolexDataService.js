import http from '../http-commons'

class Rolex {
 

  getByCollection(id) {
    // getCollectionDetailsV2
    return http.get(`/v2/collection/${id}/`);
  }


 
  getDetailedWatch(id) {
    // getRolexDetailsV2
    return http.get(`/v2/rolex/${id}`);

  }

  getAllAccesories(){
    return http.get('/v2/rolex-accesories/getAll')
  }

  getIndividualAccesories(code){
    return http.get(`/v2/rolex-accesories/get/${code}`)
  }


}

export default new Rolex();