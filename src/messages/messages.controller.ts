import {Body, Controller, Get, Param, Post} from '@nestjs/common';

@Controller('messages')
export class MessagesController {

    @Get()
    listMessages() {
        return 'Hello listMessages'
    }

    @Post()
    createMessage(@Body() body: any){
        console.log(body)
        return `Hello createMessage ${body}`
    }

    @Get('/:id')
    getMessage(@Param('id') id) {
        return `Hello ${id}`
    }
}
