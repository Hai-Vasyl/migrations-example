import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFkConstraintCommentRatingsUsers1673298306675
  implements MigrationInterface
{
  name = 'AddFkConstraintCommentRatingsUsers1673298306675';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" ADD "creator_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" ADD CONSTRAINT "FK_fa35efa0493189ed2efb4fbdac8" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" DROP CONSTRAINT "FK_fa35efa0493189ed2efb4fbdac8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" DROP COLUMN "creator_id"`,
    );
  }
}
