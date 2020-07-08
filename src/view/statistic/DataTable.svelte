<script lang="ts">
    import Chart from "./Chart.svelte";
    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
    export let src : Array<{lower,upper,value}> = [];
</script>
<div class="container-fluid">
    <div class="row">
        <div class="col">
            <Chart {src}/>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <DataTable table$aria-label="流程" style="margin-top: 1em">
                <Head>
                    <Row>
                        <Cell>由</Cell>
                        <Cell>至</Cell>
                        <Cell>数量</Cell>
                    </Row>
                </Head>
                <Body>
                {#each src as s}
                    <Row>
                        <Cell>{s.lower}</Cell>
                        <Cell>{s.upper}</Cell>
                        <Cell>{s.value}</Cell>
                    </Row>
                {/each}
                </Body>
            </DataTable>
        </div>
    </div>
</div>

<style></style>
