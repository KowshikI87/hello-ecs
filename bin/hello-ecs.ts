#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { HelloEcsStack } from '../lib/hello-ecs-stack';

const app = new cdk.App();
new HelloEcsStack(app, 'HelloEcsStack');
