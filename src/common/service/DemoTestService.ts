import {CommonService} from "@/common/service/CommonService";
import Vue from "vue";
import {Class} from "@/common/pojo/enum/Class";
import {LogUtil} from "@/common/util/LogUtil";
import {Log} from "@/common/pojo/dto/Log";
import {WallpaperPlusService} from "@/common/service/WallpaperPlusService";
import {DemoTest} from "@/common/pojo/po/DemoTest";
import {StreamFile} from "@/common/pojo/dto/StreamFile";
import {ExcelUtil} from "@/common/util/ExcelUtil";

export class DemoTestService extends CommonService<DemoTestService> {

    private _url: string;
    private _userName: string;
    private _password: string;
    private _files: Array<StreamFile>;
    private excelFile: Array<Map<string, any>>;

    public constructor(vue: { proxy: Vue } | null) {
        super(vue);
        this._url = "";
        this._userName = "";
        this._password = "";
        this.excelFile = DemoTest.EXCEL_FILE;
        this._files = new Array<StreamFile>();
    }

    public initData(): void {
        this.getService(WallpaperPlusService).on("test", msg => {
            this.info(msg);
            LogUtil.loggerLine(Log.of("DemoTestService", "testEvent", "msg", msg));
        });
        // LogUtil.loggerLine(Log.of("DemoTestService", "initData", "message", this.vue.$message));
        LogUtil.loggerLine(Log.of("DemoTestService", "initData", "excelFile", this.excelFile));
        LogUtil.loggerLine(Log.of("DemoTestService", "initData", "vue", this.vue));
        LogUtil.loggerLine(Log.of("DemoTestService", "initData", "WallpaperPlusService", this.getService(WallpaperPlusService)));
    }

    public changeFiles(file: StreamFile, fileList: Array<StreamFile>): void {
        DemoTestService.readExcel(file.raw).then();
        LogUtil.loggerLine(Log.of("JanusStreamTestService", "changeFiles", "file", file));
        LogUtil.loggerLine(Log.of("JanusStreamTestService", "changeFiles", "fileList", fileList));
    }

    private static async readExcel(excel: File): Promise<void> {
        let lstData = await ExcelUtil.toMap(excel, 0);
        LogUtil.loggerLine(Log.of("JanusStreamTestService", "changeFiles", "lstData", lstData));
    }

    public uploadFiles(): void {

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
        this._userName = "Hello world!";
        this._password = "Hello world!";
        // this.service.userName = "Hello world!";
        // this.service.password = "Hello world!";
        this.getService(WallpaperPlusService).emit("test", "Hello world！");
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

    get files(): Array<StreamFile> {
        return this._files;
    }

    set files(value: Array<StreamFile>) {
        this._files = value;
    }

    get url(): string {
        return this._url;
    }

    protected getClassName(): string {
        return Class.DemoTestService;
    }

    static get class(): string {
        return Class.DemoTestService;
    }

}