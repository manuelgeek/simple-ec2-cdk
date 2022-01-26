import * as cdk from '@aws-cdk/core';
import { Template, } from 'aws-cdk-lib/assertions';
import * as SimpleEc2 from '../lib/simple-ec2-stack';
import { expect as expectCDK, haveResourceLike } from '@aws-cdk/assert';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/simple-ec2-stack.ts
test('SQS Queue Created', () => {
//   const app = new cdk.App();
//     // WHEN
//   const stack = new SimpleEc2.SimpleEc2Stack(app, 'MyTestStack');
//     // THEN
//   const template = Template.fromStack(stack);

//   template.hasResourceProperties('AWS::SQS::Queue', {
//     VisibilityTimeout: 300
//   });
});

test('Check InstanceType and SSH KeyName', () => {
  const app = new cdk.App();
  const stack = new SimpleEc2.SimpleEc2Stack(app, 'MyTestStack');

  expectCDK(stack).to(
    haveResourceLike('AWS::EC2::Instance', {
      InstanceType: 't2.micro',
      KeyName: 'simple-instance-1-key'
    })
  )
});
