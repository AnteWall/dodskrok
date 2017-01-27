export interface IPlayer {
    name: string;
    icon: string;
    color: string;
}
export class Player implements IPlayer {
    constructor(public name: string, public color: string, public icon: string) {}
}