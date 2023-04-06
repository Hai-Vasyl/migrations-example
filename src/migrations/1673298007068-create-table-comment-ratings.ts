import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCommentRatings1673298007068
  implements MigrationInterface
{
  name = 'CreateTableCommentRatings1673298007068';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "comment_ratings" (
        "comment_rating_id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "created_at" TIMESTAMP NOT NULL DEFAULT ('now' :: text):: timestamp(6) with time zone, 
        "updated_at" TIMESTAMP NOT NULL DEFAULT ('now' :: text):: timestamp(6) with time zone, 
        "is_positive" boolean NOT NULL, 
            CONSTRAINT "PK_93635897cba336b1edb70d5f947" PRIMARY KEY ("comment_rating_id")
      )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "comment_ratings"`);
  }
}
