import dotenv from 'dotenv'

// checking if project has .env file
if (dotenv.config().error !== undefined) throw new Error("there is no .env file")

export default class Env{
    // use static to export object
    static PORT: number = Number(process.env.PORT)
}
