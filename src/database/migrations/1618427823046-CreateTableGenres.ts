import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateTableGenres1618427823046 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'genres',
          columns: [
            {
              name: 'id',
              type: 'uuid'
            },
            {
              name: 'name',
              type: 'varchar',
              isUnique: true
            },
            {
              name: 'description',
              type: 'varchar'
            },
            {
              name: 'created_at',
              type: 'timestamp'
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('genres');
    }

}
