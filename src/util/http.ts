import qs from 'qs'
const base_path = 'http:127.0.0.1';
interface Config extends RequestInit {
    data: object,
    token: string
}

const http = (path: string, { data, token, headers, ...customConfig }: Config) => {
    let config = {
        method: "GET",
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "Content-Type": data ? "application/json" : "",
        },
        ...customConfig,
    }

    if (config.method === 'GET') {
        path = path + `?${qs.stringify(data)}`

    } else {
        config.body = JSON.stringify(data)
    }

    return fetch(`${base_path}/${path}`, config).then(
        response => {
            //401 非登录态
            if (response.status === 401) {
                //退回登录
            }

            const data = response.json()
            if (response.ok) {
                return data
            } else {
                return Promise.reject(data)
            }
        }
    )
}
export { http }