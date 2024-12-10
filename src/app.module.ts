import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChildrensModule } from './childrens/childrens.module';

@Module({
  imports: [ChildrensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
