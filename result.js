
// import incButton from "@/incButton";
const host = 'api.frankfurter.app';
export default {
    props: ['result'],
    template: `
    <p class="top">
          <span v-for="(results) in result.rates">{{results}}</span>
    </p>
`,
}
