import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { PlaceService } from './place.service';

@Controller('places')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post()
  create(@Body() body: any) {
    return this.placeService.create(body);
  }

  @Get()
  findAll() {
    return this.placeService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.placeService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placeService.remove(Number(id));
  }
}