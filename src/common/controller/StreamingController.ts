import {StreamingService} from "@/common/service/StreamingService";

export class StreamingController {

    private streaming: StreamingService;

    public constructor() {
        this.streaming = new StreamingService();
    }

}