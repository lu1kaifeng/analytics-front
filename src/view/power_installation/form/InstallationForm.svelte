<script lang="ts">
    import PowerInstallation from "../../../model/PowerInstallation";
    import NullableTextField from "../../NullableTextField.svelte";
    import TypeSelect from "./TypeSelect.svelte";
    import ScaleSelect from "./ScaleSelect.svelte";
    import InstallationProcessList from "./InstallationProcessList.svelte";
    export let viewOnly : Boolean = false;
    export let powerInstallation: PowerInstallation = new PowerInstallation();
</script>

<div class="container">
    <div class="row">
        <div class="col-3">
            <NullableTextField disabled={viewOnly} bind:value={powerInstallation.name} label="项目名称"/>
        </div>
        <div class="col-3">
            <NullableTextField disabled={viewOnly}  bind:value={powerInstallation.contact} label="联系人"/>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <NullableTextField disabled={viewOnly}  bind:value={powerInstallation.contactTel} type="number" label="联系电话"/>
        </div>
        <div class="col-3">
            <NullableTextField disabled={viewOnly}  bind:value={powerInstallation.govDept} label="政府部门"/>
        </div>
        <div class="col-3">
            <NullableTextField disabled={viewOnly}  bind:value={powerInstallation.office} label="业务科室"/>
        </div>
        <div class="col-3">
            <NullableTextField disabled={viewOnly}  bind:value={powerInstallation.relatedDept} label="相关部门"/>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <TypeSelect disabled={viewOnly}  bind:type={powerInstallation.type}/>
        </div>
        <div class="col-6">
            <ScaleSelect disabled={viewOnly}  bind:scale={powerInstallation.scale}/>
        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <InstallationProcessList bind:processes={powerInstallation.installationProcesses}/>
        </div>
    </div>
</div>
