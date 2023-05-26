
export class Global {

    private static readonly _LOG_ENABLE: boolean = true;

    static get LOG_ENABLE(): boolean {
        return this._LOG_ENABLE;
    }
}