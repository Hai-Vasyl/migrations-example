import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePostRatings1673291774756 implements MigrationInterface {
  name = 'CreateTablePostRatings1673291774756';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "post_ratings" (
        "post_rating_id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "is_positive" boolean NOT NULL, 
        "created_at" TIMESTAMP NOT NULL DEFAULT ('now' :: text):: timestamp(6) with time zone, 
        "updated_at" TIMESTAMP NOT NULL DEFAULT ('now' :: text):: timestamp(6) with time zone, 
            CONSTRAINT "PK_184e2e324400bbd62be1e549423" PRIMARY KEY ("post_rating_id")
      )
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "post_ratings"`);
  }
}
