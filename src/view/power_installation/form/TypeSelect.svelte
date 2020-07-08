<script lang="ts">
    import Radio from '@smui/radio';
    import FormField from '@smui/form-field';
    import {Type} from "../../../model/PowerInstallation";
    export let type : Type = Type.FACTORY;
    export let disabled : Boolean = false;
</script>
<FormField>
    <FormField>
        <Radio  {disabled} bind:group={type} value={Type.FACTORY} />
        <span slot="label">工厂</span>
    </FormField>
    <FormField>
        <Radio {disabled}  bind:group={type} value={Type.REAL_ESTATE} />
        <span slot="label">房地产</span>
    </FormField>
    <FormField>
        <Radio  {disabled} bind:group={type} value={Type.WAREHOUSE} />
        <span slot="label">仓库</span>
    </FormField>
</FormField>
