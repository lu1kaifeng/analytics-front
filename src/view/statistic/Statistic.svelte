<script lang="ts">
    import "reflect-metadata";
    import Chart from "./Chart.svelte";
    import {onMount} from "svelte";
    import {container} from "tsyringe";
    import StatisticService from "../../service/StatisticService";
    import DataTable from "./DataTable.svelte";

    let entryService: StatisticService = container.resolve(StatisticService)
    let totalCost: Array<{lower,upper,value}> = [];
    let processCount: Array<{lower,upper,value}> = [];
    let timeTaken: Array<{lower,upper,value}> = [];
</script>

<div class="container">
    {#await entryService.getStatistic() then res}
    <div class="row">
        <div class="col-4">
            <DataTable src={res.totalCost}/>
        </div>
        <div class="col-4">
            <DataTable src={res.processCount}/>
        </div>
        <div class="col-4">
            <DataTable  src={res.timeTaken}/>
        </div>
    </div>
    {/await}
</div>
