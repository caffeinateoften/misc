import {MigrationInterface, QueryRunner} from "typeorm";

export class personHasAliases1626222543098 implements MigrationInterface {
    name = 'personHasAliases1626222543098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" ADD "aliases" text array`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "person" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "person" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "aliases"`);
    }

}
