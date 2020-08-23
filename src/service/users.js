import { http } from './config'

export default {

    listUser:() => {
        return http.get('all')
    },

    saveUser:(user) => {
        return http.post('create', user);
    },

    userLogin:(user) => {
        return http.post('login', user)
    }

}