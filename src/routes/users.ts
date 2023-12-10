import express, { NextFunction, Request, Response, Router } from 'express'


/**
 * Load the Express.js router
 * 
 * @since 1.0.0
 */
const router: Router = express.Router()

/**
 * Load the user page
 * 
 * @since 1.0.0
 */
router.get('/', function (req: Request, res: Response, next: NextFunction): void {
	res.send('Respond with a resource')
})

export default router
