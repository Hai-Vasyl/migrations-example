import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFkConstraintTagsUsers1673284637070
  implements MigrationInterface
{
  name = 'AddFkConstraintTagsUsers1673284637070';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tags" ADD "creator_id" uuid`);
    await queryRunner.query(`
    ALTER TABLE 
        "tags" 
    ADD 
        CONSTRAINT "FK_78e65343656c6c8895a87e1efb5" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tags" DROP CONSTRAINT "FK_78e65343656c6c8895a87e1efb5"`,
    );
    await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "creator_id"`);
  }
}
