import {CommonService} from "@/common/service/CommonService";
import Vue from "vue";
import {Class} from "@/common/pojo/enum/Class";

export class JanusAudioTestService extends CommonService<JanusAudioTestService> {

    public constructor(vue: { proxy: Vue } | null) {
        super(vue);
    }

    protected getClassName(): string {
        return Class.JanusAudioTestService;
    }

    static get class(): string {
        return Class.JanusAudioTestService;
    }

}