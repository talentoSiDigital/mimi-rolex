import http from '../http-commons'

class Search {
  getTags(id) {
    return http.get(`/get-tags/${id}`);
  }
  getSearch(id) {
    return http.get(`/search/${id}`);
  }

 
}

export default new Search();