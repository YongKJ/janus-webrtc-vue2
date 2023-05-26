import {CommonService} from "@/common/service/CommonService";
import Vue from "vue";
import {Class} from "@/common/pojo/enum/Class";
import {LogUtil} from "@/common/util/LogUtil";
import {Log} from "@/common/pojo/dto/Log";

export class DemoTestService extends CommonService<DemoTestService> {

    public constructor(vue: { proxy: Vue } | null) {
        super(vue);
    }

    protected getClassName(): string {
        return Class.DemoTestService;
    }

    static get class(): string {
        return Class.DemoTestService;
    }

}