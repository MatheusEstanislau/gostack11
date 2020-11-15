import { MigrationInterface, QueryRunner } from 'typeorm'

export class fixAppointments1605443520687 implements MigrationInterface {
  name = 'fixAppointments1605443520687'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "date"`)
    await queryRunner.query(
      `ALTER TABLE "appointments" ADD "date" TIMESTAMP WITH TIME ZONE NOT NULL`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "date"`)
    await queryRunner.query(
      `ALTER TABLE "appointments" ADD "date" TIME WITH TIME ZONE NOT NULL`,
    )
  }
}
