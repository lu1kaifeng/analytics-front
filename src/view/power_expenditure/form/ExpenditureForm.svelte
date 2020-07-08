<script lang="ts">
    import NullableTextField from "../../NullableTextField.svelte";
    import PowerExpenditure from "../../../model/PowerExpenditure";
    export let powerExpenditure : PowerExpenditure = new PowerExpenditure();
    export let viewOnly : Boolean = false;
</script>
<div class="container-fluid">
    <div class="row">
        <div class="col-3">
            <NullableTextField  disabled={viewOnly}  bind:value={powerExpenditure.contact} label="联系人"/>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <NullableTextField disabled={viewOnly}  bind:value={powerExpenditure.contactTel} type="number" label="联系电话"/>
        </div>
        <div class="col-3">
            <NullableTextField disabled={viewOnly}  bind:value={powerExpenditure.govDept} label="政府部门"/>
        </div>
        <div class="col-3">
            <NullableTextField  disabled={viewOnly} bind:value={powerExpenditure.office} label="业务科室"/>
        </div>
        <div class="col-3">
            <NullableTextField  disabled={viewOnly} bind:value={powerExpenditure.relatedDept} label="相关部门"/>
        </div>
    </div>
    <div class="row">
        <div class="col-md-2 col-sm-2">
            <NullableTextField disabled={viewOnly}  bind:value={powerExpenditure.powerUsageKWh} type="number" label="用电度数"/>
        </div>
        <div class="col-md-2 col-sm-2">
            <NullableTextField disabled={viewOnly}  bind:value={powerExpenditure.avgPowerPrice} type="number" label="平均电价"/>
        </div>
        <div class="col-md-2 col-sm-2">
            <NullableTextField  disabled={viewOnly} bind:value={powerExpenditure.powerExpenditure} type="number" label="电费支出"/>
        </div>
        <div class="col-md-2 col-sm-2">
            <NullableTextField disabled={viewOnly}  bind:value={powerExpenditure.revenue} type="number" label="企业收入"/>
        </div>
        <div class="col-md-2 col-sm-2">
            <NullableTextField disabled={viewOnly}  bind:value={powerExpenditure.expenditureRevenueRatio} type="number" label="电费收入比"/>
        </div>
    </div>
</div>
