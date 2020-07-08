<script>
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    export let openDrawer = false;
    export let text = ""
</script>
<TopAppBar variant="static">
    <Row>
        <Section>
            <IconButton class="material-icons" on:click={()=>(openDrawer = true)}>menu</IconButton>
            <Title>{text}</Title>
        </Section>
        <Section align="end" toolbar>
            <slot name="toolbar"/>
        </Section>
    </Row>
</TopAppBar>
<style>
</style>
