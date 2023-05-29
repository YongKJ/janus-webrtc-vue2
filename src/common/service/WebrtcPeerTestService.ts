import {CommonService} from "@/common/service/CommonService";
import Vue from "vue";
import {Class} from "@/common/pojo/enum/Class";

export class WebrtcPeerTestService extends CommonService<WebrtcPeerTestService> {

    public constructor(vue: { proxy: Vue } | null) {
        super(vue);
    }

    protected getClassName(): string {
        return Class.WebrtcPeerTestService;
    }

    static get class(): string {
        return Class.WebrtcPeerTestService;
    }

}