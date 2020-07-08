
<script>
    import "reflect-metadata";
    import {container} from "tsyringe";
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import IconButton, {Icon} from '@smui/icon-button';
    import List, {Item, Text} from '@smui/list';
    import SvelteInfiniteScroll from "svelte-infinite-scroll";
    import FormItem from "./FormItem.svelte";
    import {onMount} from "svelte";
    import Fab from '@smui/fab';
    import InstallationFormDialog from "../power_installation/form/InstallationFormDialog.svelte";
    import SpreadClient from "../../client/SpreadClient";
    import TableEntry from "./TableEntry.svelte";
    import {push, pop, replace} from 'svelte-spa-router'
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
    import {NameStore} from "../../store/NameStore";
    export let params = {}
    let spreadClient = container.resolve(SpreadClient)
    let items = [];
    let page = 0;
    let pagePrev = 0;
    let postOpen = false;
    onMount(
            async () => {
                items = [...(await spreadClient.getPage(params.name, page, 30)).content];
                page = 1;
                pagePrev = 1;
                $NameStore = params.name
            }

    )
    $:(async () => {
        if (page !== pagePrev) {
            items = [...items, ...(await spreadClient.getPage(params.name, page, 30)).content];
            pagePrev = page;
        }
    })()
</script>
<div class="container">
    <div class="row">
        {#each items as item}
            <div class="col" style="margin-bottom: 1em">
                <TableEntry data={item} name={params.name}/>
            </div>
        {/each}
        <SvelteInfiniteScroll on:loadMore={() => page++} />
    </div>
</div>
<Fab style="position: absolute;bottom: 1em;right: 1em" on:click={()=>push('/dialog/editor/'+params.name)}><Icon class="material-icons">add</Icon></Fab>
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
