<script>
    import "reflect-metadata";
    import {container} from "tsyringe";
    import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
    import Router from 'svelte-spa-router'
    import TableEntryBrowser from './view/browser/TableEntryBrowser.svelte'
    import DrawerList from "./view/nav/Drawer/DrawerList.svelte";
    import StatisticPage from "./view/statistic/StatisticPage.svelte";
    import TopBar from "./view/nav/TopBar.svelte";

    let prefix = '/page'
    let routes = {
        '/browser/:name': TableEntryBrowser,
        '/statistic/:name':StatisticPage
    }

    let drawer;
    let openDrawer = false;

</script>
<Drawer variant="modal" bind:this={drawer} bind:open={openDrawer}>
    <!--<DrawerHeader header={$MainActivityStore.header}/>-->
    <Content>
        <DrawerList/>
    </Content>
</Drawer>
<Scrim />
<AppContent>
    <TopBar bind:openDrawer={openDrawer} text={""}>
        <div class="float-right" slot="toolbar">
        </div>
    </TopBar>
</AppContent>
<Router {routes} {prefix}/>
