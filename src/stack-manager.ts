import {CloudFormation} from "aws-sdk";

const cf = new CloudFormation();

export class StackManager {
    async getStacks(): Promise<CloudFormation.Stacks> {
        const stacks = await cf.describeStacks().promise();
        if (stacks === undefined) {
            throw new Error('Stacks not found');
        }
        return stacks.Stacks as CloudFormation.Stacks;
        // return new Promise<CloudFormation.Stacks>((resolve, reject) => {
        //     cf.describeStacks((err, data) => {
        //         if (err) {
        //             throw err;
        //         }
        //         resolve(data.Stacks);
        //     });
        // });

    }
}