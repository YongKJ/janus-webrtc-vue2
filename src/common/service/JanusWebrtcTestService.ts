import {CommonService} from "@/common/service/CommonService";
import Vue from "vue";
import {Class} from "@/common/pojo/enum/Class";

export class JanusWebrtcTestService extends CommonService<JanusWebrtcTestService> {

    public constructor(vue: { proxy: Vue } | null) {
        super(vue);
    }

    protected getClassName(): string {
        return Class.JanusWebrtcTestService;
    }

    static get class(): string {
        return Class.JanusWebrtcTestService;
    }

}