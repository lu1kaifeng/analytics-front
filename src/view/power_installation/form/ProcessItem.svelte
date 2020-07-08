<script lang="ts">
    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
    import Select, {Option} from '@smui/select';
    import FormField from '@smui/form-field';
    import IconButton, {Icon} from '@smui/icon-button';
    import Checkbox from '@smui/checkbox';
    import InstallationProcess from "../../../model/InstallationProcess";
    import NullableTextField from "../../NullableTextField.svelte";
    import ConcurrentSelectChips from "./ConcurrentSelectChips.svelte";

    export let process: InstallationProcess = new InstallationProcess();
    export let processes: Array<InstallationProcess>;
    export let processNames: Array<String>;
</script>
<Row>
    <Cell>
        <Select bind:value={process.name}>
            {#each processNames as name}
                    <Option value={name} selected={process.name === name}>{name}</Option>
            {/each}
        </Select>
    </Cell>
    <Cell checkbox>
        <FormField>
            <Checkbox bind:checked={process.hasHappened} />
        </FormField>
    </Cell>
    <Cell checkbox>
        <FormField>
            <Checkbox bind:checked={process.isAvailableOnline} />
        </FormField>
    </Cell>
    <Cell>
        <FormField>
            <NullableTextField bind:value={process.daysTaken} type="number" />
        </FormField>
    </Cell>
    <Cell>
        <FormField>
            <NullableTextField bind:value={process.promisedDaysTaken} type="number" />
        </FormField>
    </Cell>
    <Cell>
        <FormField>
            <NullableTextField bind:value={process.cost} type="number" />
        </FormField>
    </Cell>
    <Cell>
        <FormField>
            <NullableTextField bind:value={process.requestDocuments}  type="number"  />
        </FormField>
    </Cell>
    <Cell>
        <FormField>
            <NullableTextField bind:value={process.tripsTaken}  type="number"  />
        </FormField>
    </Cell>
    <Cell>
        <ConcurrentSelectChips bind:process={process} bind:processes={processes}/>
    </Cell>
    <Cell>
        <IconButton style="float: right" class="material-icons" on:click={function() {
          processes =processes.filter(e=>e !== process)

        }}><Icon class="material-icons">delete</Icon></IconButton>
    </Cell>
</Row>
