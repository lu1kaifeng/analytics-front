<script>
    import "reflect-metadata";
    import {container} from "tsyringe";
    import Router from 'svelte-spa-router'
    import SpreadEditor from './view/spread/SpreadEditor.svelte'
    import DetailViewer from './view/browser/DetailViewer.svelte'
    let prefix = '/dialog'

    let routes={
        '/editor/:name':SpreadEditor,
        '/detail/:name/:id':DetailViewer
    }
</script>

<Router {routes} {prefix}/>