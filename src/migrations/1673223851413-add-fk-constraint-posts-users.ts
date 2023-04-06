import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFkConstraintPostsUsers1673223851413
  implements MigrationInterface
{
  name = 'AddFkConstraintPostsUsers1673223851413';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "posts" ADD "creator_id" uuid`);
    await queryRunner.query(
      `ALTER TYPE "public"."access_type_enum" RENAME TO "access_type_enum_old"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."posts_access_type_enum" AS ENUM('private', 'public')`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ALTER COLUMN "access_type" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ALTER COLUMN "access_type" TYPE "public"."posts_access_type_enum" USING "access_type"::"text"::"public"."posts_access_type_enum"`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ALTER COLUMN "access_type" SET DEFAULT 'public'`,
    );
    await queryRunner.query(`DROP TYPE "public"."access_type_enum_old"`);
    await queryRunner.query(
      `ALTER TABLE 
        "posts" 
        ADD 
        CONSTRAINT "FK_POSTS_creator_id_USERS_user_id" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "posts" DROP CONSTRAINT "FK_POSTS_creator_id_USERS_user_id"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."access_type_enum_old" AS ENUM('private', 'public')`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ALTER COLUMN "access_type" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ALTER COLUMN "access_type" TYPE "public"."access_type_enum_old" USING "access_type"::"text"::"public"."access_type_enum_old"`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ALTER COLUMN "access_type" SET DEFAULT 'public'`,
    );
    await queryRunner.query(`DROP TYPE "public"."posts_access_type_enum"`);
    await queryRunner.query(
      `ALTER TYPE "public"."access_type_enum_old" RENAME TO "access_type_enum"`,
    );
    await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "creator_id"`);
  }
}
