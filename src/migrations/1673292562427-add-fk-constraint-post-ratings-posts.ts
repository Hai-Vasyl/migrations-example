import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFkConstraintPostRatingsPosts1673292562427
  implements MigrationInterface
{
  name = 'AddFkConstraintPostRatingsPosts1673292562427';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "post_ratings" ADD "post_id" uuid`);
    await queryRunner.query(`
    ALTER TABLE 
        "post_ratings" 
    ADD 
        CONSTRAINT "FK_d0c3ef2c6c5d74854f251d683d7" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE NO ACTION ON UPDATE NO ACTION
  `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post_ratings" DROP CONSTRAINT "FK_d0c3ef2c6c5d74854f251d683d7"`,
    );
    await queryRunner.query(`ALTER TABLE "post_ratings" DROP COLUMN "post_id"`);
  }
}
