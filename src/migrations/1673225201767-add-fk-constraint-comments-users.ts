import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFkConstraintCommentsUsers1673225201767
  implements MigrationInterface
{
  name = 'AddFkConstraintCommentsUsers1673225201767';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "comments" ADD "creator_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE 
        "comments" 
        ADD 
        CONSTRAINT "FK_7761ee03973c7c9375b032ca676" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comments" DROP CONSTRAINT "FK_7761ee03973c7c9375b032ca676"`,
    );
    await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "creator_id"`);
  }
}
