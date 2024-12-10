import { Injectable } from '@nestjs/common';
import { CreateChildrenDto } from './dto/create-children.dto';
import { UpdateChildrenDto } from './dto/update-children.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChildrensService {
  db: PrismaService

  constructor(db:PrismaService){
    this.db = db;
  }


  create(createChildrenDto: CreateChildrenDto) {
    return this.db.children.create({
      data: createChildrenDto
    })
  }

  findAll() {
    return this.db.children.findMany();  }

  findOne(id: number) {
    return this.db.children.findUnique({
      where: {
        id : id
      }
    })  
  }

  update(id: number, updateChildrenDto: UpdateChildrenDto) {
    return this.db.children.update({
      where: {
        id : id
      },
      data: updateChildrenDto
    })  
  }

  remove(id: number) {
    return this.db.children.delete({
      where: {
        id : id
      }
    })
  }
}
