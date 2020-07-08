<script lang="ts">
    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
    import ProcessItem from "./ProcessItem.svelte";
    import IconButton, {Icon} from '@smui/icon-button';
    import InstallationProcess from "../../../model/InstallationProcess";
    export let processes : Array<InstallationProcess> = [];
    let processNames: Array<String> = [
        '用电报装申请',
        '现场勘察，提出供电方案',
        '确定供电方案，计量计费方式',
        '供电方案审批',
        '答复客户',
        '工程设计',
        '设计审查',
        '工程施工',
        '工程中间检查',
        '竣工检验',
        '签订用电合同',
        '装表接电',
        '电费建账立户',
        '资料归档']
</script>
<DataTable table$aria-label="流程">
    <Head>
        <Row>
            <Cell>办理环节</Cell>
            <Cell>是否发生</Cell>
            <Cell>是否可以网上办理</Cell>
            <Cell>办理时限 （工作日）</Cell>
            <Cell>承诺时限 （工作日）</Cell>
            <Cell>办理成本（元）</Cell>
            <Cell>申请材料（件）</Cell>
            <Cell>需要跑几次</Cell>
            <Cell>与何并联办理</Cell>
            <Cell> </Cell>
        </Row>
    </Head>
    <Body>
    {#each processes as process}
        <ProcessItem bind:process={process} bind:processes={processes} bind:processNames={processNames}/>
    {/each}
    <Row><Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell><IconButton style="float: right" class="material-icons" on:click={function() {
          processes.push(new InstallationProcess());
          processes = processes;
        }}><Icon class="material-icons">add</Icon></IconButton></Cell>
    </Row>
    </Body>
</DataTable>

<style lang="scss">
    @import "material-icons/iconfont/material-icons";
</style>
