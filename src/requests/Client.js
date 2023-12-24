interface Header {
    "Content-Type": string
}

export const ResourceState = {
    REQUEST: "REQUEST",
    FETCHING: "FETCHING",
    LOADED: "LOADED"
}

class Client {
    static _urlBase = 'http://localhost:4000'

    static async getResource(url, method: "POST" | "PUT" | "GET", headers: Header, payload: any, query: any) {
        const data = {
            method: method,
            headers: headers,
            body: payload
        }

        var full_url
        if (query != null)
            full_url = `${this._urlBase}${url}` + new URLSearchParams(query)
        else
            full_url = `${this._urlBase}${url}`

        console.log(`request to ${full_url}`)
        const res = await fetch(full_url, data)
            // .then(response => {
            //     return response.text()
            // })

        return res;
    }

    static async registerNewUser(login: string, password: string, firstName: string, lastName: string) {
        const user = {
            Login: login,
            Password: password,
            FirstName: firstName,
            LastName: lastName
        }
        return this.getResource("/user/register/?", "POST", {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }, null, user)
    }

    static async loginUser(login: string, password: string) {
        const creds = {
            Login: login,
            Password: password
        }
        return this.getResource(
            "/user/login/?",
            "GET",
            {"Content-Type": "application/json"},
            null,
            creds
        )
    }

    static async getAllArticles() {
        return this.getResource(
            "/article/all/",
            "GET",
            {"Content-Type": "application/json"},
            null,
            null
        )
    }

    static async getArticleText(id: number) {
        return this.getResource(
            "/article/download?",
            "GET",
            {"Content-Type": "application/json"},
            null,
            {id: id}
        )
    }

    static async getAllPhotos() {
        return this.getResource(
            "/photo/all/",
            "GET",
            {"Content-Type": "application/json"},
            null,
            null
        )
    }

    static async getPhotoDownload(id: number) {
        return this.getResource(
            "/photo/download?",
            "GET",
            {"Content-Type": "application/json"},
            null,
            {id: id}
        )
    }

    static async getCurrentUser(token: string) {
        return this.getResource(
            "/user/protected/",
            "GET",
            {"Authorization": `Bearer ${token}`},
            null,
            null
        )
    }

}

export default Client;