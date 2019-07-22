import fetch from 'isomorphic-fetch'

export default Request={
    POST:(url,query,data)=>{
        return fetch(url+"?"+query, {
            method: 'POST',
            mode: 'CORS',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    GET:(url,query)=>{
        return fetch(url+"?"+query, {
            method: 'POST',
            mode: 'CORS'
        })
    },
    PUT:(url,query,data)=>{
        return fetch(url+"?"+query, {
            method: 'POST',
            mode: 'CORS',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}
