import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ChildrensService } from './childrens.service';
import { CreateChildrenDto } from './dto/create-children.dto';
import { UpdateChildrenDto } from './dto/update-children.dto';

@Controller('childrens')
export class ChildrensController {
  constructor(private readonly childrensService: ChildrensService) {}

  @Post()
  create(@Body() createChildrenDto: CreateChildrenDto) {
    return this.childrensService.create(createChildrenDto);
  }

  @Get()
  findAll() {
    return this.childrensService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const children = await this.childrensService.findOne(+id);
    if (children == null){
      throw new NotFoundException("Nincs ilyen gyerek")
    }
    return children
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChildrenDto: UpdateChildrenDto) {
    return this.childrensService.update(+id, updateChildrenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.childrensService.remove(+id);
  }
}
