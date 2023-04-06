import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterPrimaryColulmnType1673550466323
  implements MigrationInterface
{
  name = 'AlterPrimaryColulmnType1673550466323';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tags_posts" DROP CONSTRAINT "FK_6bfae2678a312adb286aad0e403"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags" DROP CONSTRAINT "FK_78e65343656c6c8895a87e1efb5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags" DROP CONSTRAINT "PK_06a35221325edeb80ad2ec1ff85"`,
    );
    await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "tag_id"`);
    await queryRunner.query(`ALTER TABLE "tags" ADD "tag_id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "tags" ADD CONSTRAINT "PK_06a35221325edeb80ad2ec1ff85" PRIMARY KEY ("tag_id")`,
    );
    await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "creator_id"`);
    await queryRunner.query(`ALTER TABLE "tags" ADD "creator_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "post_ratings" DROP CONSTRAINT "FK_db31af977d27c789e8024cc0fd8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" DROP CONSTRAINT "FK_c810f0ccb5f80b289391454d4ad"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" DROP CONSTRAINT "FK_fa35efa0493189ed2efb4fbdac8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" DROP CONSTRAINT "FK_7761ee03973c7c9375b032ca676"`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_USERS"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user_id"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "user_id" SERIAL NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_ratings" DROP CONSTRAINT "FK_d0c3ef2c6c5d74854f251d683d7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_ratings" DROP COLUMN "creator_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_ratings" ADD "creator_id" integer`,
    );
    await queryRunner.query(`ALTER TABLE "post_ratings" DROP COLUMN "post_id"`);
    await queryRunner.query(`ALTER TABLE "post_ratings" ADD "post_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "tags_posts" DROP CONSTRAINT "FK_265f08fd81eac8ba9f58b7cbabe"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" DROP CONSTRAINT "FK_259bf9825d9d198608d1b46b0b5"`,
    );
    await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "PK_POSTS"`);
    await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "post_id"`);
    await queryRunner.query(
      `ALTER TABLE "posts" ADD "post_id" SERIAL NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ADD CONSTRAINT "PK_e55cc433639d0e21c3dbf637bce" PRIMARY KEY ("post_id")`,
    );
    await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "creator_id"`);
    await queryRunner.query(`ALTER TABLE "posts" ADD "creator_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" DROP CONSTRAINT "FK_b92f56f9f61606f96117a89f8e2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" DROP CONSTRAINT "FK_93ce08bdbea73c0c7ee673ec35a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" DROP CONSTRAINT "PK_eb0d76f2ca45d66a7de04c7c72b"`,
    );
    await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "comment_id"`);
    await queryRunner.query(
      `ALTER TABLE "comments" ADD "comment_id" SERIAL NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" ADD CONSTRAINT "PK_eb0d76f2ca45d66a7de04c7c72b" PRIMARY KEY ("comment_id")`,
    );
    await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "creator_id"`);
    await queryRunner.query(`ALTER TABLE "comments" ADD "creator_id" integer`);
    await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "post_id"`);
    await queryRunner.query(`ALTER TABLE "comments" ADD "post_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "comments" DROP COLUMN "parent_comment_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" ADD "parent_comment_id" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" DROP COLUMN "creator_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" ADD "creator_id" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" DROP COLUMN "comment_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" ADD "comment_id" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" DROP CONSTRAINT "PK_ebee619e95dc29b333a37952d52"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD CONSTRAINT "PK_265f08fd81eac8ba9f58b7cbabe" PRIMARY KEY ("post_id")`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_6bfae2678a312adb286aad0e40"`,
    );
    await queryRunner.query(`ALTER TABLE "tags_posts" DROP COLUMN "tag_id"`);
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD "tag_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" DROP CONSTRAINT "PK_265f08fd81eac8ba9f58b7cbabe"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD CONSTRAINT "PK_ebee619e95dc29b333a37952d52" PRIMARY KEY ("post_id", "tag_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" DROP CONSTRAINT "PK_ebee619e95dc29b333a37952d52"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD CONSTRAINT "PK_6bfae2678a312adb286aad0e403" PRIMARY KEY ("tag_id")`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_265f08fd81eac8ba9f58b7cbab"`,
    );
    await queryRunner.query(`ALTER TABLE "tags_posts" DROP COLUMN "post_id"`);
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD "post_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" DROP CONSTRAINT "PK_6bfae2678a312adb286aad0e403"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD CONSTRAINT "PK_ebee619e95dc29b333a37952d52" PRIMARY KEY ("tag_id", "post_id")`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6bfae2678a312adb286aad0e40" ON "tags_posts" ("tag_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_265f08fd81eac8ba9f58b7cbab" ON "tags_posts" ("post_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "tags" ADD CONSTRAINT "FK_78e65343656c6c8895a87e1efb5" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_ratings" ADD CONSTRAINT "FK_db31af977d27c789e8024cc0fd8" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_ratings" ADD CONSTRAINT "FK_d0c3ef2c6c5d74854f251d683d7" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ADD CONSTRAINT "FK_c810f0ccb5f80b289391454d4ad" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" ADD CONSTRAINT "FK_7761ee03973c7c9375b032ca676" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" ADD CONSTRAINT "FK_259bf9825d9d198608d1b46b0b5" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" ADD CONSTRAINT "FK_93ce08bdbea73c0c7ee673ec35a" FOREIGN KEY ("parent_comment_id") REFERENCES "comments"("comment_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" ADD CONSTRAINT "FK_fa35efa0493189ed2efb4fbdac8" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" ADD CONSTRAINT "FK_b92f56f9f61606f96117a89f8e2" FOREIGN KEY ("comment_id") REFERENCES "comments"("comment_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
      `ALTER TABLE "comment_ratings" DROP CONSTRAINT "FK_b92f56f9f61606f96117a89f8e2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" DROP CONSTRAINT "FK_fa35efa0493189ed2efb4fbdac8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" DROP CONSTRAINT "FK_93ce08bdbea73c0c7ee673ec35a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" DROP CONSTRAINT "FK_259bf9825d9d198608d1b46b0b5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" DROP CONSTRAINT "FK_7761ee03973c7c9375b032ca676"`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" DROP CONSTRAINT "FK_c810f0ccb5f80b289391454d4ad"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_ratings" DROP CONSTRAINT "FK_d0c3ef2c6c5d74854f251d683d7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_ratings" DROP CONSTRAINT "FK_db31af977d27c789e8024cc0fd8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags" DROP CONSTRAINT "FK_78e65343656c6c8895a87e1efb5"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_265f08fd81eac8ba9f58b7cbab"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_6bfae2678a312adb286aad0e40"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" DROP CONSTRAINT "PK_ebee619e95dc29b333a37952d52"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD CONSTRAINT "PK_6bfae2678a312adb286aad0e403" PRIMARY KEY ("tag_id")`,
    );
    await queryRunner.query(`ALTER TABLE "tags_posts" DROP COLUMN "post_id"`);
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD "post_id" uuid NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_265f08fd81eac8ba9f58b7cbab" ON "tags_posts" ("post_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" DROP CONSTRAINT "PK_6bfae2678a312adb286aad0e403"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD CONSTRAINT "PK_ebee619e95dc29b333a37952d52" PRIMARY KEY ("post_id", "tag_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" DROP CONSTRAINT "PK_ebee619e95dc29b333a37952d52"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD CONSTRAINT "PK_265f08fd81eac8ba9f58b7cbabe" PRIMARY KEY ("post_id")`,
    );
    await queryRunner.query(`ALTER TABLE "tags_posts" DROP COLUMN "tag_id"`);
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD "tag_id" uuid NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6bfae2678a312adb286aad0e40" ON "tags_posts" ("tag_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" DROP CONSTRAINT "PK_265f08fd81eac8ba9f58b7cbabe"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD CONSTRAINT "PK_ebee619e95dc29b333a37952d52" PRIMARY KEY ("tag_id", "post_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" DROP COLUMN "comment_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" ADD "comment_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" DROP COLUMN "creator_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" ADD "creator_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" DROP COLUMN "parent_comment_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" ADD "parent_comment_id" uuid`,
    );
    await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "post_id"`);
    await queryRunner.query(`ALTER TABLE "comments" ADD "post_id" uuid`);
    await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "creator_id"`);
    await queryRunner.query(`ALTER TABLE "comments" ADD "creator_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE "comments" DROP CONSTRAINT "PK_eb0d76f2ca45d66a7de04c7c72b"`,
    );
    await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "comment_id"`);
    await queryRunner.query(
      `ALTER TABLE "comments" ADD "comment_id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" ADD CONSTRAINT "PK_eb0d76f2ca45d66a7de04c7c72b" PRIMARY KEY ("comment_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" ADD CONSTRAINT "FK_93ce08bdbea73c0c7ee673ec35a" FOREIGN KEY ("parent_comment_id") REFERENCES "comments"("comment_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" ADD CONSTRAINT "FK_b92f56f9f61606f96117a89f8e2" FOREIGN KEY ("comment_id") REFERENCES "comments"("comment_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "creator_id"`);
    await queryRunner.query(`ALTER TABLE "posts" ADD "creator_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE "posts" DROP CONSTRAINT "PK_e55cc433639d0e21c3dbf637bce"`,
    );
    await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "post_id"`);
    await queryRunner.query(
      `ALTER TABLE "posts" ADD "post_id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ADD CONSTRAINT "PK_POSTS" PRIMARY KEY ("post_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" ADD CONSTRAINT "FK_259bf9825d9d198608d1b46b0b5" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD CONSTRAINT "FK_265f08fd81eac8ba9f58b7cbabe" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`ALTER TABLE "post_ratings" DROP COLUMN "post_id"`);
    await queryRunner.query(`ALTER TABLE "post_ratings" ADD "post_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE "post_ratings" DROP COLUMN "creator_id"`,
    );
    await queryRunner.query(`ALTER TABLE "post_ratings" ADD "creator_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE "post_ratings" ADD CONSTRAINT "FK_d0c3ef2c6c5d74854f251d683d7" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "PK_96aac72f1574b88752e9fb00089"`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user_id"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "user_id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "PK_USERS" PRIMARY KEY ("user_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" ADD CONSTRAINT "FK_7761ee03973c7c9375b032ca676" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment_ratings" ADD CONSTRAINT "FK_fa35efa0493189ed2efb4fbdac8" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ADD CONSTRAINT "FK_c810f0ccb5f80b289391454d4ad" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_ratings" ADD CONSTRAINT "FK_db31af977d27c789e8024cc0fd8" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "creator_id"`);
    await queryRunner.query(`ALTER TABLE "tags" ADD "creator_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE "tags" DROP CONSTRAINT "PK_06a35221325edeb80ad2ec1ff85"`,
    );
    await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "tag_id"`);
    await queryRunner.query(
      `ALTER TABLE "tags" ADD "tag_id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags" ADD CONSTRAINT "PK_06a35221325edeb80ad2ec1ff85" PRIMARY KEY ("tag_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags" ADD CONSTRAINT "FK_78e65343656c6c8895a87e1efb5" FOREIGN KEY ("creator_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags_posts" ADD CONSTRAINT "FK_6bfae2678a312adb286aad0e403" FOREIGN KEY ("tag_id") REFERENCES "tags"("tag_id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }
}
