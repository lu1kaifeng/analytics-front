<script lang="ts">
    import Radio from '@smui/radio';
    import FormField from '@smui/form-field';
    import {Scale} from "../../../model/PowerInstallation";
    export let disabled : Boolean = false;
    export let scale : Scale = Scale.LARGE
</script>
<FormField>
    <FormField >
        <Radio {disabled} bind:group={scale} value={Scale.LARGE} />
        <span slot="label">大型</span>
    </FormField>
    <FormField >
        <Radio  {disabled} bind:group={scale} value={Scale.MEDIUM} />
        <span slot="label">中型</span>
    </FormField>
    <FormField >
        <Radio  {disabled} bind:group={scale} value={Scale.SMALL} />
        <span slot="label">小型</span>
    </FormField>
</FormField>
