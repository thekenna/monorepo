import { Get, Injectable } from "@nestjs/common"

@Injectable()
class AppController {
    @Get('/test')
    test () {
        return 'test'
    }
}

export default AppController