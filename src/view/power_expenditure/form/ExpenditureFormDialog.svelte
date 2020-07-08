<script lang="ts">
    import "reflect-metadata";
    import {container} from "tsyringe";
    import Dialog, {Title, Content, Actions} from '@smui/dialog';
    import Button, {Label} from '@smui/button';
    import PowerReliability from "../../../model/PowerReliability";
    import ExpenditureService from "../../../service/ExpenditureService";
    import ExpenditureForm from "./ExpenditureForm.svelte";
    import PowerExpenditure from "../../../model/PowerExpenditure";

    let powerExpenditure : PowerExpenditure = new PowerExpenditure();
    let dialog;
    export let open = false;
    $:{
        if (open) {
            dialog.open();
        }
    }

    function closeHandler() {
        open = false;
    }

    let entryService: ExpenditureService = container.resolve(ExpenditureService);
</script>
<Dialog
        bind:this={dialog}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-content"
        on:MDCDialog:closed={closeHandler}
>
    <Title id="dialog-title">电力支出</Title>
    <Content id="dialog-content">
        <ExpenditureForm bind:powerExpenditure={powerExpenditure}/>
    </Content>
    <Actions>
        <Button on:click={()=>entryService.postExpenditure(powerExpenditure)}>
            <Label>电力支出提交</Label>
        </Button>
    </Actions>
</Dialog>
