<script lang="ts">
    import "reflect-metadata";
    import {container} from "tsyringe";
    import Button, {Label} from '@smui/button';
    import Dialog, {Title, Content, Actions} from '@smui/dialog';
    import InstallationService from "../../../service/InstallationService";
    import Form from "./InstallationForm.svelte";
    import Tab, {Icon} from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import ReliabilityForm from "../../power_reliability/form/ReliabilityForm.svelte";
    import PowerInstallation from "../../../model/PowerInstallation";
    import ExpenditureForm from "../../power_expenditure/form/ExpenditureForm.svelte";

    export let open = false;
    export let viewOnly : Boolean = false;
    let dialog;
    export let power: PowerInstallation;
    let entryService: InstallationService = container.resolve(InstallationService);
    $:{
        if (open) {
            dialog.open();
        }
    }

    function closeHandler() {
        open = false;
    }

    let tab;
    let active;
</script>
<Dialog
        bind:this={dialog}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-content"
        on:MDCDialog:closed={closeHandler}
>
    <Title id="dialog-title">调查填写</Title>
    <Content id="dialog-content">
        <TabBar tabs={['电力安装', '电力可靠性', '电力支出']} let:tab bind:active>
            <!-- Notice that the `tab` property is required! -->
            <Tab {tab}>
                <Label>{tab}</Label>
            </Tab>
        </TabBar>
        {#if active === '电力安装'}
        <Form {viewOnly} bind:powerInstallation={power}/>
        {/if}
        {#if active === '电力可靠性'}
            <ReliabilityForm {viewOnly} bind:powerReliability={power.reliability}/>
        {/if}
        {#if active === '电力支出'}
            <ExpenditureForm {viewOnly} bind:powerExpenditure={power.expenditure}/>
        {/if}
    </Content>
    <Actions>
        {#if !viewOnly}
            <Button on:click={()=>entryService.postInstallation(power)}>
                <Label>提交</Label>
            </Button>
        {:else}
            <Button on:click={()=>open = false}>
                <Label>关闭</Label>
            </Button>
        {/if}
    </Actions>
</Dialog>
