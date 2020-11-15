import { MigrationInterface, QueryRunner } from 'typeorm'

export class userAppointments1605437715993 implements MigrationInterface {
  name = 'userAppointments1605437715993'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "provider"`)
    await queryRunner.query(
      `ALTER TABLE "appointments" ADD "provider_id" uuid NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "date"`)
    await queryRunner.query(
      `ALTER TABLE "appointments" ADD "date" TIME WITH TIME ZONE NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "appointments" ADD CONSTRAINT "FK_e3e268ed1125872144e68b9a41c" FOREIGN KEY ("provider_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "appointments" DROP CONSTRAINT "FK_e3e268ed1125872144e68b9a41c"`,
    )
    await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "date"`)
    await queryRunner.query(
      `ALTER TABLE "appointments" ADD "date" TIMESTAMP WITH TIME ZONE NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "appointments" DROP COLUMN "provider_id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "appointments" ADD "provider" character varying NOT NULL`,
    )
  }
}
