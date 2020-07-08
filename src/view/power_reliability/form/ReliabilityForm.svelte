<script lang="ts">
    import NullableTextField from "../../NullableTextField.svelte";
    import PowerReliability from "../../../model/PowerReliability";
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';
    export let viewOnly : Boolean = false;
    export let powerReliability : PowerReliability = new PowerReliability();
</script>
<div class="container-fluid">
    <div class="row">
        <div class="col-3">
            <NullableTextField disabled={viewOnly} bind:value={powerReliability.contact} label="联系人"/>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <NullableTextField disabled={viewOnly}  bind:value={powerReliability.contactTel} type="number" label="联系电话"/>
        </div>
        <div class="col-3">
            <NullableTextField  disabled={viewOnly} bind:value={powerReliability.govDept} label="政府部门"/>
        </div>
        <div class="col-3">
            <NullableTextField disabled={viewOnly}  bind:value={powerReliability.office} label="业务科室"/>
        </div>
        <div class="col-3">
            <NullableTextField disabled={viewOnly}  bind:value={powerReliability.relatedDept} label="相关部门"/>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <NullableTextField disabled={viewOnly}  bind:value={powerReliability.blackOutTimeSpan} type="number" label="平均停电持续时间"/>
        </div>
        <div class="col">
            <NullableTextField disabled={viewOnly}  bind:value={powerReliability.blackOutFreq} type="number" label="平均停电次数"/>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <FormField>
                <Checkbox  disabled={viewOnly} bind:checked={powerReliability.isPowerSupplierMonitoringToolAutomatic} />
                <span slot="label">配电公司是否采用自动化工具监控停电</span>
            </FormField>
        </div>
        <div class="col">
            <FormField>
                <Checkbox disabled={viewOnly}  bind:checked={powerReliability.isPowerSupplierRestoringToolAutomatic} />
                <span slot="label">配电公司是否采用自动化工具恢复电力</span>
            </FormField>
        </div>
        <div class="col">
            <FormField>
                <Checkbox disabled={viewOnly}  bind:checked={powerReliability.externalWatchDogPresence} />
                <span slot="label">是否有外部监管机构对配电公司的供电绩效进行监控</span>
            </FormField>
        </div>
        <div class="col">
            <FormField>
                <Checkbox disabled={viewOnly}  bind:checked={powerReliability.budgetaryIntimidationPresence} />
                <span slot="label">是否制定了限制停电的财务威慑</span>
            </FormField>
        </div>
    </div>
</div>
