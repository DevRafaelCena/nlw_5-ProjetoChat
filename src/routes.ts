import { Router} from "express"

import {SettingsController} from './controllers/SettingsController'
import {UsersController} from './controllers/UsersController'
import {MessagesController} from './controllers/MessagesController'

const routes = Router()

const settingsControler = new SettingsController
const usersControler = new UsersController
const messagesControler = new MessagesController


routes.post("/settings", settingsControler.create)


routes.post("/users",  usersControler.create)

routes.post("/messages", messagesControler.create)

routes.get("/messages/:id", messagesControler.showByUser)


export {routes}