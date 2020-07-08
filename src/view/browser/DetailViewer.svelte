<script>
    import {onMount} from "svelte";
    import {push, pop, replace} from 'svelte-spa-router'
    import "reflect-metadata";
    import {container} from "tsyringe";
    import SpreadClient from "../../client/SpreadClient";
    import ResultDisplay from "../spread/ResultDisplay.svelte";

    export let params = {}
    let obj=null;
    let spreadClient = container.resolve(SpreadClient)
    onMount(async () => {
        obj = await spreadClient.getById(params.name, params.id)
    })
</script>
{#if obj !== null}
<ResultDisplay data={obj}/>
{/if}