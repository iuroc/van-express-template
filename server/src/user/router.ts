import { Router } from 'express'
import { makeApiResponse } from '../common/response.js'

const router = Router()

router.get('/', (_, res) => {
    res.send(makeApiResponse({
        success: true,
        message: '操作成功',
        data: 'Hello World'
    }))
})

export default router