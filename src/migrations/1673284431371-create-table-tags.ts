import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableTags1673284431371 implements MigrationInterface {
  name = 'CreateTableTags1673284431371';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE "tags" (
        "tag_id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "created_at" TIMESTAMP NOT NULL DEFAULT ('now' :: text):: timestamp(6) with time zone, 
        "updated_at" TIMESTAMP NOT NULL DEFAULT ('now' :: text):: timestamp(6) with time zone, 
        "name" character varying(30) NOT NULL, 
        "color" character varying NOT NULL, 
            CONSTRAINT "UQ_d90243459a697eadb8ad56e9092" UNIQUE ("name"), 
            CONSTRAINT "PK_06a35221325edeb80ad2ec1ff85" PRIMARY KEY ("tag_id")
      )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tags"`);
  }
}
