import { api } from './config'

export default { 
    list:() => {
        return api.get('me')
    },
    
   
}