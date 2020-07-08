<script lang="ts">
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import IconButton, {Icon} from '@smui/icon-button';
    import List, {Item, Text} from '@smui/list';
    import PowerInstallation from "../../model/PowerInstallation";
    import InstallationFormDialog from "../power_installation/form/InstallationFormDialog.svelte";
    import {push, pop, replace} from 'svelte-spa-router'
    export let data;
    export let name;

</script>
<div class="card-container short">
    <Card style="width: 320px;">
        <Content>
            <h2 class="mdc-typography--headline6" style="margin: 0;">{data.name}</h2>
            <h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; color: #888;">{data.contact + ' '+data.contactTel}</h3>
        </Content>
        <Actions fullBleed>
            <Button on:click={()=>push('/dialog/detail/'+name+'/'+data.id)}>
                <Label>详细信息</Label>
                <i class="material-icons" aria-hidden="true">arrow_forward</i>
            </Button>
        </Actions>
    </Card>
</div>
