<script lang="ts">
    import "reflect-metadata";
    import {tables} from '../../tables.js'
    import TableItem from "./TableItem.svelte";
    import Drawer, {AppContent, Content, Header, Subtitle, Scrim} from '@smui/drawer';
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
</script>
<AppContent>
<TopAppBar variant="static">
    <Row>
        <Section>
            <h5 class="mdc-typography--headline6">请选择表格</h5>
        </Section>
        <Section align="end" toolbar>
            <slot name="toolbar"/>
        </Section>
    </Row>
</TopAppBar>
<div class="container" style="margin-top: 1em">
    <div class="row">
        {#each tables as item}
            <div class="col" style="margin-bottom: 1em">
                <TableItem name={item}/>
            </div>
        {/each}
    </div>
</div>
</AppContent>
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

    *{
        padding: 0;
        margin: 0;
    }
</style>
