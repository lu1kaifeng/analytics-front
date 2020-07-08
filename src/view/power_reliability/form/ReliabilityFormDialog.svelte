<script lang="ts">
    import "reflect-metadata";
    import {container} from "tsyringe";
    import ReliabilityForm from "./ReliabilityForm.svelte";
    import Button, {Label} from '@smui/button';
    import Dialog, {Title, Content, Actions} from '@smui/dialog';
    import PowerReliability from "../../../model/PowerReliability";
    import ReliabilityService from "../../../service/ReliabilityService";
    let powerReliability : PowerReliability = new PowerReliability();
    let dialog;
    export let open = false;
    $:{
        if(open){
            dialog.open();
        }
    }
    function closeHandler() {
        open = false;
    }
    let entryService: ReliabilityService = container.resolve(ReliabilityService);
</script>


<Dialog
        bind:this={dialog}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-content"
        on:MDCDialog:closed={closeHandler}
>
    <Title id="dialog-title">电力可靠性</Title>
    <Content id="dialog-content">
        <ReliabilityForm bind:powerReliability={powerReliability}/>
    </Content>
    <Actions>
        <Button on:click={()=>entryService.postReliability(powerReliability)}>
            <Label>电力可靠性提交</Label>
        </Button>
    </Actions>
</Dialog>
