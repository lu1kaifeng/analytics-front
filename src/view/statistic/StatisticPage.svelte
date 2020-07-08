<script>
    import {tableResources} from "../../tables";
    import "reflect-metadata";
    import {container} from "tsyringe";
    import {onMount} from "svelte";
    import {SchemaService} from "../../service/SchemaService";

    let schemaService = container.resolve(SchemaService)

    export let params={}

    let loadJSON = async () => {
        let res = await fetch(tableResources[params.name].schema, {
            method: 'GET'
        })
        let obj = (await res.json());
        console.log(schemaService.getMap(obj))
    }
    onMount(()=>{
        loadJSON()
    })
</script>