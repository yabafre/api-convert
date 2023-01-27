
import search from "/form.js";
import result from "/result.js";
const host = 'api.frankfurter.app';


let options = {
    data() {
        return{
            result :[]
        };
    },
    methods: {
        handleConvertData(data) {
            fetch(`https://${host}/latest?amount=${data.amount}&from=${data.selectedA}&to=${data.selectedB}`)
                .then(response => response.json())
                .then(
                    json => {
                        console.log(json)
                        this.result = json
                    }
                );
        }
    },
    components: {
        Search: search,
        Result: result,
    }
};
const app = Vue.createApp(options).mount('#app');

