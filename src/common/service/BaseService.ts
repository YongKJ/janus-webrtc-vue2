import Vue from "vue";
import EventEmitter2 from "eventemitter2";
import {CommonService} from "@/common/service/CommonService";

export interface BaseService<U> {

    vue: Vue;

    service: U;

    routerName: string;

    emitter: EventEmitter2;

    emit(event: string, ...values: any[]): void;

    on(event: string, func: (...values: any[]) => void): void;

    hasService<T extends CommonService<any>>(clazz: new (vue: { proxy: Vue } | null) => T, index?: number): boolean;

    getService<T extends CommonService<any>>(clazz: new (vue: { proxy: Vue } | null) => T, index?: number): T;

    getValue(name: string): any;

    getProp(name: string): any;

    getRef(name: string): any;

}