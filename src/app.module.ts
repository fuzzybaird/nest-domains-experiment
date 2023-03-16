import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TravelingModule } from './traveling/traveling.module';
import { CredentialingModule } from './credentialing/credentialing.module';
import { MatchingModule } from './matching/matching.module';

@Module({
  imports: [TravelingModule, CredentialingModule, MatchingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
