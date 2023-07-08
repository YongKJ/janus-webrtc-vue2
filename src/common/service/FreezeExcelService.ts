import {VisualizedAnalysisService} from "@/common/service/VisualizedAnalysisService";
import {CommonService} from "@/common/service/CommonService";
import {Class} from "@/common/pojo/enum/Class";
import Vue from "vue";

export class FreezeExcelService extends CommonService<FreezeExcelService> {

    private _dataRow: string;
    private _dataCol: string;
    private _freezeExcelVisible: boolean;

    public constructor(vue: { proxy: Vue } | null) {
        super(vue);
        this._dataRow = "";
        this._dataCol = "";
        this._freezeExcelVisible = false;
    }

    public async freezeExcelChange(): Promise<void> {
        if (!this.hasService(VisualizedAnalysisService)) return;
        await this.getService(VisualizedAnalysisService).exportExcelData();
        this.dialogCloseChange();
    }

    public dialogCancelChange(): void {
        this.info("取消导出！");
        this.dialogCloseChange();
    }

    public dialogCloseChange(doneFunc?: () => void): void {
        this._dataRow = "";
        this._dataCol = "";
        this._freezeExcelVisible = false;
        if (typeof doneFunc !== "undefined") doneFunc();
    }

    get freezeExcelVisible(): boolean {
        return this._freezeExcelVisible;
    }

    get dataRow(): string {
        return this._dataRow;
    }

    set dataRow(value: string) {
        this._dataRow = value;
    }

    get dataCol(): string {
        return this._dataCol;
    }

    set dataCol(value: string) {
        this._dataCol = value;
    }

    set freezeExcelVisible(value: boolean) {
        this._freezeExcelVisible = value;
    }

    protected getClassName(): string {
        return Class.FreezeExcelService;
    }

    static get class(): string {
        return Class.FreezeExcelService;
    }

}