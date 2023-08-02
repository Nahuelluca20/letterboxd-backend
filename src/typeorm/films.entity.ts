import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Film {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'film_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  title: string;

  @Column({
    nullable: false,
    default: '',
    name: 'sub_title',
  })
  subTitle: string;

  @Column({
    nullable: false,
    default: '',
    name: 'premiere_year',
  })
  premiereYear: string;

  @Column({
    nullable: false,
  })
  director: string;

  @Column({
    nullable: false,
  })
  description: string;

  @Column({
    type: 'string',
    name: 'backdrop_image',
  })
  backdropImage: string;

  @Column({
    type: 'string',
    name: 'cover_image',
  })
  coverImage: string;

  @Column('text', { array: true, nullable: true, default: [] })
  cast: string[];

  @Column('jsonb', { nullable: true, default: null })
  crew: FilmDetails[];

  @Column('jsonb', { nullable: true, default: null })
  details: FilmDetails[];

  @Column('jsonb', { nullable: true, default: null })
  genres: FilmDetails[];

  @Column('jsonb', { nullable: true, default: null })
  releases: ReleasesDetails[];
}

interface FilmDetails {
  role: string;
  detail: string[];
}

interface ReleasesDetails {
  role: string;
  release: ReleasesDetail[];
}

interface ReleasesDetail {
  name: string;
  image: string; 
}