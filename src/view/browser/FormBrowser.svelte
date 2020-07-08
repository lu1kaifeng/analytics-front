<script lang="ts">
    import "reflect-metadata";
    import {container} from "tsyringe";
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import IconButton, {Icon} from '@smui/icon-button';
    import List, {Item, Text} from '@smui/list';
    import SvelteInfiniteScroll from "svelte-infinite-scroll";
    import FormItem from "./FormItem.svelte";
    import PowerInstallation from "../../model/PowerInstallation";
    import {onMount} from "svelte";
    import InstallationService from "../../service/InstallationService";
    import Fab from '@smui/fab';
    import InstallationFormDialog from "../power_installation/form/InstallationFormDialog.svelte";

    let entryService: InstallationService = container.resolve(InstallationService)
    let items: Array<PowerInstallation> = [];
    let page = 0;
    let pagePrev = 0;
    let postOpen = false;
    onMount(
            async () => {
                items = [...(await entryService.getPage(page)).content];
                page = 1;
                pagePrev = 1;
            }
    )
    $:(async () => {
        if (page !== pagePrev) {
            items = [...items, ...(await entryService.getPage(page)).content];
            pagePrev = page;
        }
    })()
</script>
<div class="container">
<div class="row">
    {#each items as item}
    <div class="col" style="margin-bottom: 1em">
        <FormItem powerInstallation={item}/>
    </div>
    {/each}
    <SvelteInfiniteScroll on:loadMore={() => page++} />
</div>
    <InstallationFormDialog bind:open={postOpen}/>
</div>
<Fab style="position: absolute;bottom: 1em;right: 1em" on:click={()=>postOpen = true}><Icon class="material-icons">add</Icon></Fab>
<style lang="scss">
    .card-container {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        min-height: 500px;
        min-width: 380px;
        background-color: #f8f8f8;
        margin-right: 20px;
        margin-bottom: 20px;
    }
</style>
