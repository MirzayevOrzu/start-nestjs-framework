import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { logger } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes('cats');
      // .forRoutes({ path: 'cats', method: RequestMethod.POST });
  }
}
