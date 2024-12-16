import axios from 'axios'

export async function getter(endpoint, params = {}) {
    const res = await axios.get(
        import.meta.env.VITE_BACKEND_URL + '/' + endpoint,
        Object.assign(
            {
                params: params,
                withCredentials: true
            }
        )
    )
    return res.data
}