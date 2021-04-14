import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateTableOrders1618428078351 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'orders',
          columns: [
            {
              name: 'id',
              type: 'uuid'
            },
            {
              name: 'created_at',
              type: 'timestamp'
            },
            {
              name: 'updated_at',
              type: 'timestamp'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('orders');
    }

}
