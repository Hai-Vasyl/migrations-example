import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFkConstraintCommentRatingsComments1673298821306
  implements MigrationInterface
{
  name = 'AddFkConstraintCommentRatingsComments1673298821306';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" ADD "comment_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" ADD CONSTRAINT "FK_b92f56f9f61606f96117a89f8e2" FOREIGN KEY ("comment_id") REFERENCES "comments"("comment_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" DROP CONSTRAINT "FK_b92f56f9f61606f96117a89f8e2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" DROP COLUMN "comment_id"`,
    );
  }
}
