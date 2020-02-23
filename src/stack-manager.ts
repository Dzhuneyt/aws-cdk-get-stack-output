import {CloudFormation} from "aws-sdk";

export class StackManager {
    getStacks(): Promise<CloudFormation.Stacks> {
        return new Promise<CloudFormation.Stacks>((resolve, reject) => {
            new CloudFormation().describeStacks((err, data) => {
                if (err) {
                    throw err;
                }
                resolve(data.Stacks);
            });
        });

    }
}