import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateJunctionTableTagsPosts1673290664174
  implements MigrationInterface
{
  name = 'CreateJunctionTableTagsPosts1673290664174';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "tags_posts" (
        "tag_id" uuid NOT NULL, 
        "post_id" uuid NOT NULL, 
        CONSTRAINT "PK_ebee619e95dc29b333a37952d52" PRIMARY KEY ("tag_id", "post_id")
      )`);
    await queryRunner.query(
      `CREATE INDEX "IDX_6bfae2678a312adb286aad0e40" ON "tags_posts" ("tag_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_265f08fd81eac8ba9f58b7cbab" ON "tags_posts" ("post_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD CONSTRAINT "FK_6bfae2678a312adb286aad0e403" FOREIGN KEY ("tag_id") REFERENCES "tags"("tag_id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD CONSTRAINT "FK_265f08fd81eac8ba9f58b7cbabe" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tags_posts" DROP CONSTRAINT "FK_265f08fd81eac8ba9f58b7cbabe"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" DROP CONSTRAINT "FK_6bfae2678a312adb286aad0e403"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_265f08fd81eac8ba9f58b7cbab"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_6bfae2678a312adb286aad0e40"`,
    );
    await queryRunner.query(`DROP TABLE "tags_posts"`);
  }
}
