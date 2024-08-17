import express from 'express'
import router from './router.js'
import { join } from 'path'
import { serverPort } from './config.json'

const app = express()

app.use(express.json())

app.use(express.static(join(import.meta.dirname, '../../client/dist/')))

app.use(router)

app.listen(serverPort, () => {
    console.log(`🎉 http://127.0.0.1:${serverPort}`)
})