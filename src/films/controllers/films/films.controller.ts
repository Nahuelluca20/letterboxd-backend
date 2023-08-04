import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateFilmDto } from 'src/films/films.dtos';
import { FilmsService } from 'src/films/services/films/films.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('films')
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createUsers(@Body() createFilmDto: CreateFilmDto) {
    return this.filmsService.createFilm(createFilmDto);
  }

  @Get('/:id')
  findFilmsById(@Param('id', ParseIntPipe) id: number) {
    return this.filmsService.findFilmsById(id);
  }
}
