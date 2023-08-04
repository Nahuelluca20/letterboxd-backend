import { MinLength } from 'class-validator';
import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from '@nestjs/class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFilmDto {
  @IsString()
  @MinLength(3)
  @ApiProperty({
    description: 'Title of film',
    minimum: 10,
  })
  title: string;

  @IsString()
  @MinLength(3)
  @ApiProperty({
    description: 'subtitle of film',
    minimum: 10,
  })
  subTitle: string;

  @IsString()
  @MinLength(4)
  @ApiProperty({
    description: 'Age of film',
    minimum: 4,
  })
  premiereYear: string;

  @IsString()
  @MinLength(4)
  @ApiProperty({
    description: 'Name of director',
    minimum: 4,
  })
  director: string;

  @IsString()
  @MinLength(10)
  @ApiProperty({
    description: 'Description of film',
    minimum: 10,
  })
  description: string;

  @IsString()
  @ApiProperty({ type: String })
  backdropImage: string;

  @IsString()
  @ApiProperty({ type: String })
  coverImage: string;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({ type: [String] })
  cast: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FilmDetails)
  @ApiProperty({ type: () => FilmDetails })
  crew: FilmDetails[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FilmDetails)
  @ApiProperty({ type: () => FilmDetails })
  details: FilmDetails[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FilmDetails)
  @ApiProperty({ type: () => FilmDetails })
  genres: FilmDetails[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReleasesDetails)
  @ApiProperty({ type: () => ReleasesDetails })
  releases: ReleasesDetails[];
}

export class FilmDetails {
  @IsString()
  @ApiProperty({ type: String })
  role: string;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({ type: String })
  detail: string[];
}

export class ReleasesDetails {
  @IsString()
  @ApiProperty({ type: String })
  role: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReleasesDetail)
  @ApiProperty({ type: () => ReleasesDetail })
  release: ReleasesDetail[];
}

export class ReleasesDetail {
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @IsString()
  @ApiProperty({ type: String })
  image: string;
}
