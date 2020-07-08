<script lang="ts">
    import Chip, {Set, Icon, Text} from '@smui/chips';
    import InstallationProcess from "../../../model/InstallationProcess";
    import MenuSurface, {Anchor} from '@smui/menu-surface';
    import List, {Item, Separator} from '@smui/list';
    export let process: InstallationProcess = new InstallationProcess();
    export let processes : Array<InstallationProcess>;
    let menuSurface;
</script>
<div class="container-fluid">
    <div class="row">
        <div class="col">
    {#each process.concurrentProcesses as pro}
        <Chip><Text>{pro}</Text></Chip>
    {/each}
            <Chip on:click={()=>menuSurface.setOpen(true)}><Text>新增</Text><Icon class="material-icons" trailing tabindex="0">add</Icon></Chip>
    <MenuSurface bind:this={menuSurface} anchorCorner="BOTTOM_LEFT">
        <List>
            {#each processes as pro}
                <Item on:SMUI:action={function (){
                    process.concurrentProcesses.push(pro.name);
                    process = process;
                }}><Text>{pro.name}</Text></Item>
            {/each}
        </List>
    </MenuSurface>
            <Chip on:click={function() {
              process.concurrentProcesses.length = 0;
              process = process
            }}><Text>清空</Text><Icon class="material-icons" trailing tabindex="0">cancel</Icon></Chip>
        </div>
    </div>
</div>
