import {globalUserId, globalUserToken} from "../components/HeaderAppBar/HeaderAppBar";

interface Header {
    "Content-Type": string
}

export const ResourceState = {
    REQUEST: "REQUEST",
    FETCHING: "FETCHING",
    LOADED: "LOADED"
}

class Client {
    static _urlBase = 'http://localhost:8082'

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
        // .then(response => {
        //     return response.text()
        // })

        return await fetch(full_url, data);
    }

    static async registerNewUser(login: string, password: string, firstName: string, lastName: string) {
        const user = {
            "Email": login,
            "Password": password,
            "FirstName": firstName,
            "LastName": lastName
        }
        return this.getResource("/user/register", "POST", {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }, JSON.stringify(user), null)
    }

    static async loginUser(login: string, password: string) {
        const creds = {
            Email: login,
            Password: password
        }
        return this.getResource(
            "/user/login",
            "POST",
            {"Content-Type": "application/json"},
            JSON.stringify(creds),
            null
        )
    }

    static async getAllTables() {
        return this.getResource(
            "/tables/all",
            "GET",
            {"Content-Type": "application/json"},
            null,
            null
        )
    }

    static async getFavouriteTables() {
        return this.getResource(
            `/user/${globalUserId}/favorites`,
            "GET",
            {
                "Content-Type": "application/json",
                "Authorization": globalUserToken
            },
            null,
            null
        )
    }

    static async markTableAsFavourite(table: number) {
        return this.getResource(
            `/user/${globalUserId}/mark/${table}`,
            "GET",
            {
                "Content-Type": "application/json",
                "Authorization": globalUserToken
            },
            null,
            null
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

    static async getAllUsers() {
        return this.getResource(
            "/user",
            "GET",
            {"Content-Type": "application/json"},
            null,
            null
        )
    }

}

export default Client;