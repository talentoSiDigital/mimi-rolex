import http from '../http-commons'

class Cookies {
    getCookies() {
        return http.get("/getCookie");
    }

    updateCookies(value) {
        const formData = new FormData();
        formData.append('choice',value)
        return http.post("/updateCookie", formData, {
            headers: {
              'Content-Type': 'application/json'
            }
        });
    }

}

export default new Cookies();