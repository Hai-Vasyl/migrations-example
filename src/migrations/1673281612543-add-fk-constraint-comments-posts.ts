import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFkConstraintCommentsPosts1673281612543
  implements MigrationInterface
{
  name = 'AddFkConstraintCommentsPosts1673281612543';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "comments" ADD "post_id" uuid`);
    await queryRunner.query(`
    ALTER TABLE 
        "comments" 
        ADD 
        CONSTRAINT "FK_259bf9825d9d198608d1b46b0b5" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comments" DROP CONSTRAINT "FK_259bf9825d9d198608d1b46b0b5"`,
    );
    await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "post_id"`);
  }
}
