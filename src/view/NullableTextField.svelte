<script lang="ts">
    import Textfield, {Input, Textarea} from '@smui/textfield';
    export let value : String = "";
    export let label;
    export let type = undefined;
    export let disabled : Boolean = false;
</script>
    <Textfield {disabled} variant="outlined" dense bind:value={value} {label} {type}/>

