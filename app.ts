import express, { Application, Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'

class App{
    public app: Application
    public port: number

    constructor(port: number) {
        this.port = port
        this.app = express()
        this.config()
        this.routes()
    }

    // config express
    private config(): void{
        const { app } = this

        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(express.json())
        app.use(express.static('public'))

        app.set('view engine', 'pug')
        app.set('views', 'views')
    }

    // contains all routes
    private routes(): void {
        const { app } = this

        app.get('/', (req: Request, res: Response) => {
            res.render('index.pug', {
                message: 'Hello world !'
            })
        })

        app.post('/', (req: Request, res: Response) => {
            
        })
    }

    run() {
        let messageListen = () => {
            console.log(`Server is running at http://localhost:${this.port}`)
        }

        this.app.listen(this.port, messageListen)
    }
}

const PORT = 3000
new App(PORT).run()
