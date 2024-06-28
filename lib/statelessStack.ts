import {
  Duration,
  NestedStackProps,
  RemovalPolicy,
  Stack,
  StackProps,
} from 'aws-cdk-lib';
import { Table } from 'aws-cdk-lib/aws-dynamodb';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

class StatelessStackProps implements StackProps {
  table: Table;

  readonly parameters?: {
    [key: string]: string;
  };
  readonly timeout?: Duration;
  readonly notificationArns?: string[];
  readonly removalPolicy?: RemovalPolicy;
  readonly description?: string;
}

export class StatelessStack extends Stack {
  constructor(scope: Construct, id: string, props?: StatelessStackProps) {
    super(scope, id, props as NestedStackProps);

    const statelessLambda = new NodejsFunction(this, 'stateless-lambda', {
      runtime: Runtime.NODEJS_20_X,
      entry: 'lambda/statelessLambda.ts',
      handler: 'handler',
      functionName: 'stateless-lambda',
      environment: {
        TABLE_NAME: props!.table.tableName,
      },
    });

    const statelessLambda2 = new NodejsFunction(this, 'stateless-lambda-2', {
      runtime: Runtime.NODEJS_20_X,
      entry: 'lambda/statelessLambda.ts',
      handler: 'handler',
      functionName: 'stateless-lambda-2',
      environment: {
        TABLE_NAME: props!.table.tableName,
      },
    });
  }
}
