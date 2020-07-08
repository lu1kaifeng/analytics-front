<script>
    import "reflect-metadata";
    import XLSX from "xlsx";
    import {container} from "tsyringe";
    import IconButton from '@smui/icon-button';
    import Spreadsheet from "x-data-spreadsheet";
    import {onMount} from "svelte";
    import SpreadClient from "../../client/SpreadClient";
    import {push, pop, replace} from 'svelte-spa-router'
    let spreadClient = container.resolve(SpreadClient)
    import Chip, {Set, Icon, Checkmark, Text} from '@smui/chips';
    import Dialog, {Title, Content, Actions} from '@smui/dialog';
    import TopAppBar, {Row, Section} from '@smui/top-app-bar';
    import Button, {Label} from '@smui/button';
    import ResultDisplay from "./ResultDisplay.svelte";
    import {tableResources} from "../../tables";
    export let params = {}
    let div
    let editor
    let outer
    let loadJSON = async () => {
        if (div.firstChild != null) div.firstChild.remove();
        let res = await fetch(tableResources[params.name].template, {
            method: 'GET'
        })
        let json = (await res.text());
        editor = new Spreadsheet(div, {});
        editor.loadData(JSON.parse(json));
    }


    function xlsxToBlob(workbook) {
        /* bookType can be 'xlsx' or 'xlsm' or 'xlsb' */
        var wopts = {bookType: 'xlsx', bookSST: false, type: 'binary'};

        var wbout = XLSX.write(workbook, wopts);

        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }

        /* the saveAs call downloads a file on the local machine */
        return new Blob([s2ab(wbout)])
    }

    function readFileAsText(file) {
        return new Promise((resolve, reject) => {
            let fr = new FileReader();
            fr.onload = x => resolve(fr.result);
            fr.readAsText(file);
        })
    }

    function convertToXLSX(sdata) {
        var out = XLSX.utils.book_new();
        sdata.forEach(function (xws) {
            var aoa = [[]];
            var rowobj = xws.rows;
            for (var ri = 0; ri < rowobj.len; ++ri) {
                var row = rowobj[ri];
                if (!row) continue;
                aoa[ri] = [];
                Object.keys(row.cells).forEach(function (k) {
                    var idx = +k;
                    if (isNaN(idx)) return;
                    aoa[ri][idx] = row.cells[k].text;
                });
            }
            var ws = XLSX.utils.aoa_to_sheet(aoa);
            XLSX.utils.book_append_sheet(out, ws, xws.name);
        });
        return out;
    }

    async function validate() {
        function typeToErrorMsg(type) {
            if (type === "REQUIRED_FIELD_MISSING") {
                return "必填数据为空"
            }
            if (type === "INVALID_ENUM_VALUE") {
                return "选项错误"
            }
            if (type === "INVALID_NUMBER_VALUE") {
                return "数字格式错误"
            }
            if (type === "INVALID_BOOLEAN_VALUE") {
                return "选项错误"
            }
            if (type === "INVALID_TOKEN") {
                return "分隔符错误"
            }
        }

        let res;
        try {
            objResult = await spreadClient.validate(params.name, await xlsxToBlob(convertToXLSX(editor.getData())))
            buttonAction = submit
        } catch (e) {
            message = "数据错误：在" + e.sheet + "中的" + (1 + parseInt(e.row)) + "行" + (1 + parseInt(e.col)) + "列" + "处的" + typeToErrorMsg(e.type)
        }
    }

    async function submit(){
             await spreadClient.submit(params.name,objResult)
             pop()
    }

    onMount(() => {
        loadJSON()
    })

    let message = "请填写表中信息"
    let objResult = null
    let buttonAction = validate
</script>
<style>
    .top-app-bar-container {
        overflow: auto;
        display: inline-block;
        margin: 0;
        padding: 0;
    }
</style>
<div class="top-app-bar-container">
<TopAppBar variant="static" prominent dense color={'primary'} style="border-top-left-radius: 1em;border-top-right-radius: 1em">
    <Row>
        <Section>
            <IconButton class="material-icons">menu</IconButton>
            <Title>{message}</Title>
        </Section>
        <Section align="end" toolbar>
            <IconButton class="material-icons" aria-label="验证数据" on:click={buttonAction}>bookmark</IconButton>
        </Section>
    </Row>
</TopAppBar>
</div>
<div class="top-app-bar-container" style="border-top-left-radius: 1em;border-top-right-radius: 1em" bind:this={outer}>
    <div class="row">
        <div class="col">

        </div>
    </div>
    <div class="row">
        <div class="col" >
            {#if objResult==null}
            <div bind:this={div} style="z-index: -1"/>
            {:else}
            <ResultDisplay data={objResult}/>
            {/if}
        </div>
    </div>
    <div class="row">
        <div class="col">
            <Button on:click={validate}><Label>验证</Label></Button>
        </div>
    </div>
</div>