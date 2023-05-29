import {CommonService} from "@/common/service/CommonService";
import Vue from "vue";
import {Class} from "@/common/pojo/enum/Class";
import {LogUtil} from "@/common/util/LogUtil";
import {Log} from "@/common/pojo/dto/Log";
import {WallpaperPlusService} from "@/common/service/WallpaperPlusService";

export class DemoTestService extends CommonService<DemoTestService> {

    private _userName: string;
    private _password: string;

    public constructor(vue: { proxy: Vue } | null) {
        super(vue);
        this._userName = "";
        this._password = "";
    }

    public initData(): void {
        this.getService(WallpaperPlusService).on("test", msg => {
            this.info(msg);
            LogUtil.loggerLine(Log.of("DemoTestService", "testEvent", "msg", msg));
        });
        // LogUtil.loggerLine(Log.of("DemoTestService", "initData", "message", this.vue.$message));
        LogUtil.loggerLine(Log.of("DemoTestService", "initData", "vue", this.vue));
        LogUtil.loggerLine(Log.of("DemoTestService", "initData", "WallpaperPlusService", this.getService(WallpaperPlusService)));
    }

    public reset(): void {

    }

    public register(): void {

    }

    public login(): void {

    }

    public connect(): void {

    }

    public disconnect(): void {

    }

    public handleButtonClick(): void {
        this.getService(WallpaperPlusService).emit("test", "Hello world！")
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    protected getClassName(): string {
        return Class.DemoTestService;
    }

    static get class(): string {
        return Class.DemoTestService;
    }

}