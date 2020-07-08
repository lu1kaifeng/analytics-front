<script lang="ts">
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import IconButton, {Icon} from '@smui/icon-button';
    import List, {Item, Text} from '@smui/list';
    import PowerInstallation from "../../model/PowerInstallation";
    import InstallationFormDialog from "../power_installation/form/InstallationFormDialog.svelte";
    import {push, pop, replace} from 'svelte-spa-router'

    export let name :String
    let open: Boolean = false;
</script>
<div class="card-container short">
    <Card style="width: 320px;" on:click={() => push('/page/browser/'+name.codeName)}>
        <Content>
            <h2 class="mdc-typography--headline6" style="margin: 0;">{name.displayName}</h2>
        </Content>
    </Card>
</div>