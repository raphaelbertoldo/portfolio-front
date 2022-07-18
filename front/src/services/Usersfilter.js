import { api } from "./config"

export default {
    filterUsers:() => {
        return api.get('defaults/querys?name=Amanda')
    }
}