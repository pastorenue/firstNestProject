import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { req } from './middlewares/req.middleware';

@Module({
  imports: [CatsModule],
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, req)
      .forRoutes({path: 'cats', method: RequestMethod.GET});
  }
}
