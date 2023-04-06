import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePosts1673222441856 implements MigrationInterface {
  name = 'CreateTablePosts1673222441856';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."access_type_enum" AS ENUM('private', 'public')`,
    );
    await queryRunner.query(
      `CREATE TABLE "posts" (
        "post_id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "created_at" TIMESTAMP NOT NULL DEFAULT ('now' :: text):: timestamp(6) with time zone, 
        "updated_at" TIMESTAMP NOT NULL DEFAULT ('now' :: text):: timestamp(6) with time zone, 
        "headline" character varying(30) NOT NULL, 
        "body" character varying(450) NOT NULL, 
        "ratings_number" integer NOT NULL DEFAULT '0', 
        "comments_number" integer NOT NULL DEFAULT '0', 
        "access_type" "public"."access_type_enum" NOT NULL DEFAULT 'public', 
            CONSTRAINT "PK_POSTS" PRIMARY KEY ("post_id")
      )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "posts"`);
    await queryRunner.query(`DROP TYPE "public"."access_type_enum"`);
  }
}
