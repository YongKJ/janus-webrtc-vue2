import {WebRTCMessage} from "@/common/pojo/dto/WebRTCMessage";
import {Global} from "@/common/config/Global";
import {InfoUtil} from "@/common/util/InfoUtil";
import {DataUtil} from "@/common/util/DataUtil";
import {GenUtil} from "@/common/util/GenUtil";

export class PeerService {

    private readonly WEBRTC_PEER = "peer";
    private infoUtil: InfoUtil | null = null;

    private peerSubscribe(resFunc: ((msg: WebRTCMessage) => void)): void {
        if (this.infoUtil == null) this.infoUtil = new InfoUtil(Global.WEBRTC_PEER_BASE_URL, "/webrtc");
       this.infoUtil.sendInfo(this.WEBRTC_PEER, undefined, (data: Record<string, any>) => {
           resFunc(<WebRTCMessage>DataUtil.convertData(data, WebRTCMessage));
       });
    }

    public joinRoom(msg: WebRTCMessage, resFunc: ((msg: WebRTCMessage) => void)): void {
        this.peerSubscribe(resFunc);
        this.sendInfo(msg);
    }

    public sendOffer(msg: WebRTCMessage): void {
        this.sendInfo(msg);
    }

    public sendAnswer(msg: WebRTCMessage): void {
        this.sendInfo(msg);
    }

    public sendCandidate(msg: WebRTCMessage): void {
        this.sendInfo(msg);
    }

    public exitRoom(msg: WebRTCMessage): void {
        this.sendInfo(msg);
    }

    private sendInfo(msg: WebRTCMessage): void {
        if (this.infoUtil == null) this.infoUtil = new InfoUtil(Global.WEBRTC_PEER_BASE_URL, "/webrtc");
        let reqData = GenUtil.objToRecord(msg);
        this.infoUtil.sendInfo(this.WEBRTC_PEER, reqData);
    }

}