import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableComments1673224602065 implements MigrationInterface {
  name = 'CreateTableComments1673224602065';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "posts" DROP CONSTRAINT "FK_POSTS_creator_id_USERS_user_id"`,
    );
    await queryRunner.query(
      `CREATE TABLE "comments" (
        "comment_id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "created_at" TIMESTAMP NOT NULL DEFAULT ('now' :: text):: timestamp(6) with time zone, 
        "updated_at" TIMESTAMP NOT NULL DEFAULT ('now' :: text):: timestamp(6) with time zone, 
        "body" character varying(150) NOT NULL, 
        "ratings_number" integer NOT NULL DEFAULT '0', 
        "comments_number" integer NOT NULL DEFAULT '0', 
        "is_attached" boolean NOT NULL DEFAULT false, 
        CONSTRAINT "PK_eb0d76f2ca45d66a7de04c7c72b" PRIMARY KEY ("comment_id")
      )`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ADD CONSTRAINT "FK_c810f0ccb5f80b289391454d4ad" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "posts" DROP CONSTRAINT "FK_c810f0ccb5f80b289391454d4ad"`,
    );
    await queryRunner.query(`DROP TABLE "comments"`);
    await queryRunner.query(
      `ALTER TABLE "posts" ADD CONSTRAINT "FK_POSTS_creator_id_USERS_user_id" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
