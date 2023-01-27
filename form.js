const host = 'api.frankfurter.app';
export default {
    data() {
        return{
            amount:'',
            origines: '',
            after :'',
            selectedA:'',
            selectedB:'',
        };
    },
    template: `
    <form @submit.prevent="convert" class="label">
            <label for="origne" class="label">
                Origne:
                </label>
            <select v-model="selectedA">
                <option v-for="(origine, key) in origines" :value="key">{{origine}}</option>
            </select>
            <label for="amout" class="label">
                Amount:
            </label>
            <input type="number" class="amount label" v-model="amount">
            <label for="after" class="label">
                After:
            </label>
            <select v-model="selectedB">
                <option v-for="(afters, key) in after" :value="key" >{{afters}}</option>
            </select>
            <button type="submit"> Convert</button>
        </form>
    `,
    methods: {
        convert() {
            if (!this.amount || !this.selectedA || !this.selectedB) {
                alert("Tous les champs doivent être remplis");
                return;
            }
            if (this.selectedA === this.selectedB) {
                alert("La devise d'origine et la devise de destination doivent être différentes");
                return;
            }
            this.$emit("convert-data", {
                amount: this.amount,
                selectedA: this.selectedA,
                selectedB: this.selectedB
            });
        }
    },
    mounted() {
        fetch(`https://${host}/currencies`)
            .then(response => response.json())
            .then(
                json => {
                    this.after = json
                    this.origines = json
                }
            )
    },
}