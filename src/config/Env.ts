import dotenv from 'dotenv'

dotenv.config()
export const API_DOMAIN = process.env.REACT_APP_API_DOMAIN
export const ACCESS_TOKEN = localStorage.getItem('AccessToken')
// export AAA = REACT_APP_
