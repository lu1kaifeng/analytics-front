<script lang="ts">
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import IconButton, {Icon} from '@smui/icon-button';
    import List, {Item, Text} from '@smui/list';
    import PowerInstallation from "../../model/PowerInstallation";
    import InstallationFormDialog from "../power_installation/form/InstallationFormDialog.svelte";

    export let powerInstallation: PowerInstallation;
    let open: Boolean = false;
</script>
<div class="card-container short">
    <Card style="width: 320px;">
        <Content>
            <h2 class="mdc-typography--headline6" style="margin: 0;">{powerInstallation.name}</h2>
            <h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; color: #888;">{powerInstallation.contact + ' '+powerInstallation.contactTel}</h3>
        </Content>
        <Actions fullBleed>
            <Button on:click={()=>open = true}>
                <Label>详细信息</Label>
                <i class="material-icons" aria-hidden="true">arrow_forward</i>
            </Button>
        </Actions>
    </Card>
</div>
<InstallationFormDialog bind:open={open} power={powerInstallation} viewOnly={true}/>
