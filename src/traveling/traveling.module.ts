import { Module } from '@nestjs/common';
import { resolve } from 'path';
import { TsxViewsModule } from 'nestjs-tsx-views';
import { TravelingController } from './traveling.controller';
@Module({
  imports: [
    TsxViewsModule.register({
      viewsDirectory: resolve(__dirname, './views'),
      prettify: true,
      forRoutes: [TravelingController],
    }),
  ],
  controllers: [TravelingController],
})
export class TravelingModule {}
