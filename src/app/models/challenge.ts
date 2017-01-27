export interface IChallenge {
    title: string;
}
export class Challenge implements IChallenge {
    constructor(public title: string) {}
}