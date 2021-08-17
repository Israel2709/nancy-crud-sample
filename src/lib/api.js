const BASE_URL = 'https://dry-refuge-16495.herokuapp.com'

export default {
    async getAllUsers(){
        const response = await fetch(`${BASE_URL}/users`)
        return await response.json()
    },
    async saveUser(userData){
        console.log( userData )
        const response = await fetch(`${BASE_URL}/users`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        return await response.json()
    },
    async deleteUserById( userId ){
        const response = await fetch(`${BASE_URL}/users/${userId}`,{
            method:'DELETE'
        })
        return await response.json()
    },
    async updateUserById( userId ){
        const response = await fetch(`${BASE_URL}/users/${userId}`,{
            method:'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name:"Edited Name"
            })
        })
        return await response.json()
    }

}

/*
    fetch(url,{init})
    --url => url de la base de datos ( endpoint )
    --{init} => objeto de configuración ( method, body, ...)
*/