import {Request, Response} from 'express'

import {MessagesService} from '../services/MessageService'

class MessagesController {

    async create(request:Request,response:Response) {
        const {user_id,text,admin_id} = request.body    


       try{
        const messagesService = new MessagesService()
        const messages = await messagesService.create({admin_id,text,user_id})
      

       return response.status(200).json(messages)
       }catch(err){
           return response.status(400).json({message:err.message})
       }





    }

    async showByUser(request:Request, response:Response){
        const {id} = request.params
        const messagesService = new MessagesService()

        const list = await messagesService.listByUser(id)

        return response.status(200).json(list)


    }

}

export {MessagesController}