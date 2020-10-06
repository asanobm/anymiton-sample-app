import dotenv from 'dotenv'

dotenv.config()

export const ANYMOTION_CLIENT_ID = process.env.REACT_APP_ANYMOTION_CLIENT_ID
export const ANYMOTION_CLIENT_SECRET= process.env.REACT_APP_ANYMOTION_CLIENT_SECRET

console.log(ANYMOTION_CLIENT_ID)
console.log(ANYMOTION_CLIENT_SECRET)

// export AAA = REACT_APP_