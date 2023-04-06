import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFkConstraintPostRatingsUsers1673291992054
  implements MigrationInterface
{
  name = 'AddFkConstraintPostRatingsUsers1673291992054';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "post_ratings" ADD "creator_id" uuid`);
    await queryRunner.query(`
    ALTER TABLE 
        "post_ratings" 
    ADD 
        CONSTRAINT "FK_db31af977d27c789e8024cc0fd8" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION
  `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post_ratings" DROP CONSTRAINT "FK_db31af977d27c789e8024cc0fd8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_ratings" DROP COLUMN "creator_id"`,
    );
  }
}
