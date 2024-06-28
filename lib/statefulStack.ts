import { Stack, StackProps } from 'aws-cdk-lib';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class StatefulStack extends Stack {
  table: Table;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.table = new Table(this, 'stateful-table', {
      tableName: 'stateful-table',
      partitionKey: { name: 'id', type: AttributeType.STRING },
    });
  }
}
