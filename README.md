# AWS CDK stacks output
The alternative to "cdk output" we've been waiting for...

## Deprecated
> Note: This library was useful at the time of creation, but now AWS CDK supports emiting stack outputs to a .json file natively via `cdk deploy --outputs-file my-outputs.json`. The repository is left here for historical reasons.

### Pre-requisite
Export the following standard AWS config variables to the execution environment 

    AWS_PROFILE
    AWS_REGION
    
### Usage

    npx aws-cdk-output --name=frontendurl --fromStack=my-cdk-stack
    
Both parameter support partial searching, e.g. if you search for `--name=productionEndpoint`, it will also match a CloudFormation output named `productionapiEndpointF5643F35`.
### Contributors

[![Dzhuneyt](https://avatars2.githubusercontent.com/u/1754428?s=100&v=4)](https://dzhuneyt.com)
[![Stoyan](https://avatars2.githubusercontent.com/u/49834377?s=100&v=4)](https://dzhuneyt.com)

![npm](https://github.com/Dzhuneyt/cdk-get-stack-output/workflows/npm/badge.svg)
