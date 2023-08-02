import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { IsNumber, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from '@nestjs/class-transformer';

export class CreateFilmDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(3)
  subTitle: string;

  @IsString()
  @MinLength(4)
  premiereYear: string;

  @IsString()
  @MinLength(4)
  director: string;

  @IsString()
  @MinLength(10)
  description: string;

  @IsString()
  backdropImage: string;

  @IsString()
  coverImage: string;

  @IsArray()
  @IsString({ each: true })
  cast: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FilmDetails)
  crew: FilmDetails[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FilmDetails)
  details: FilmDetails[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FilmDetails)
  genres: FilmDetails[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReleasesDetails)
  releases: ReleasesDetails[];
}

export class FilmDetails {
  @IsString()
  role: string;

  @IsArray()
  @IsString({ each: true })
  detail: string[];
}

export class ReleasesDetails {
  @IsString()
  role: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReleasesDetail)
  release: ReleasesDetail[];
}

export class ReleasesDetail {
  @IsString()
  name: string;

  @IsString()
  image: string;
}