import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUsers1673222076806 implements MigrationInterface {
  name = 'CreateTableUsers1673222076806';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."users_gender_enum" AS ENUM('male', 'female', 'other')`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" (
        "user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "created_at" TIMESTAMP NOT NULL DEFAULT ('now' :: text):: timestamp(6) with time zone, 
        "updated_at" TIMESTAMP NOT NULL DEFAULT ('now' :: text):: timestamp(6) with time zone, 
        "first_name" character varying(30) NOT NULL, 
        "last_name" character varying(30) NOT NULL, 
        "email" character varying NOT NULL, 
        "password" character varying NOT NULL, 
        "gender" "public"."users_gender_enum" NOT NULL, 
        "birth" TIMESTAMP NOT NULL, 
        "color" character varying NOT NULL, 
            CONSTRAINT "PK_USERS" PRIMARY KEY ("user_id")
      )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TYPE "public"."users_gender_enum"`);
  }
}
