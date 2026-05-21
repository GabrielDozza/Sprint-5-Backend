import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { PlaceModule } from './modules/place/place.module';

@Module({
  imports: [UserModule, AuthModule, PlaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
