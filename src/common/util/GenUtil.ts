
export class GenUtil {

    private constructor() {
    }

    public static sleep(waitTimeInMs: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, waitTimeInMs));
    }

    public static getUrlKey(key: string): string | undefined {
        let url = window.location.href;
        if (url.indexOf("?") !== -1) {
            let cs_str = url.split('?')[1];
            let cs_arr = cs_str.split('&');
            let cs: Record<string, any> = {};
            for (let i = 0; i < cs_arr.length; i++) {
                cs[cs_arr[i].split('=')[0]] = cs_arr[i].split('=')[1];
            }
            return (<Record<string, any>>cs)[key];
        }
        return '';
    }

}