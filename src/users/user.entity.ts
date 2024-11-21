import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() // Define que a propriedade 'id' é a chave primária e será gerada automaticamente.
  id: number;

  @Column() // Define que 'name' será uma coluna na tabela.
  name: string;

  @Column() // Define que 'email' também será uma coluna na tabela.
  email: string;
}
