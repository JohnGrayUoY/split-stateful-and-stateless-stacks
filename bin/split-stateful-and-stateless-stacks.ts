#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StatefulStack } from '../lib/statefulStack';
import { StatelessStack } from '../lib/statelessStack';

const app = new cdk.App();

const statefulStack = new StatefulStack(app, 'stateful-stack');
const { table } = statefulStack;

const statelessStack = new StatelessStack(app, 'stateless-stack', { table });
