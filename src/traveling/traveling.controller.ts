import { Controller, Get, Render } from '@nestjs/common';
import { MyViewProps } from './views/travel';
import { resolve } from 'path';
@Controller('traveling')
export class TravelingController {
  @Get()
  @Render('travel')
  test(): MyViewProps {
    console.log(__dirname);
    console.log(resolve(__dirname, 'views'));
    return { name: 'boobs' };
  }
}
