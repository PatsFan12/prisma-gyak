import { Module } from '@nestjs/common';
import { ChildrensService } from './childrens.service';
import { ChildrensController } from './childrens.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ChildrensController],
  providers: [ChildrensService, PrismaService],
})
export class ChildrensModule {}
