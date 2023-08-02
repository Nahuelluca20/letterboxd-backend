import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFilmDto } from 'src/films/films.dtos';
import { Film } from 'src/typeorm';
import { Repository, FindOneOptions } from 'typeorm';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film) private readonly filmRepository: Repository<Film>,
  ) {}

  createFilm(createFilmDto: CreateFilmDto) {
    const newFilm = this.filmRepository.create(createFilmDto);
    return this.filmRepository.save(newFilm);
  }

  findFilmsById(id: number) {
    const options: FindOneOptions<Film> = { where: { id } };
    return this.filmRepository.findOne(options);
  }
}
