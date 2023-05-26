import {VueConstructor} from 'vue'
import {
    Row,
    Col,
    Form,
    Input,
    Button,
    FormItem,
} from "element-ui";

export const ElementUI = {
    install(Vue: VueConstructor) {
        Vue.component(Row.name, Row);
        Vue.component(Col.name, Col);

        Vue.component(Form.name, Form);
        Vue.component(Input.name, Input);
        Vue.component(FormItem.name, FormItem);

        Vue.component(Button.name, Button);
    }
}