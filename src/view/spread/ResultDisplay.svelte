<script>
    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
    import {onMount} from "svelte";
    import Jsontableify from 'jsontableify'
    export let data;
    let table;
    onMount(()=>{
        table = new Jsontableify().toHtml(data).html + '<style>\n' +
                '    table {\n' +
                '        font-family: \'Source Sans Pro\', sans-serif;\n' +
                '        border: 1px solid thin #c1c1c1;\n' +
                '        background-color: #EEEEEE;\n' +
                '        width: 100%;\n' +
                '        text-align: left;\n' +
                '        table-layout:fixed;\n' +
                '        border-collapse: collapse;\n' +
                '    }\n' +
                '\n' +
                '    td,\n' +
                '    th {\n' +
                '        text-transform: capitalize;\n' +
                '        text-align: left;\n' +
                '        vertical-align: center;\n' +
                '        text-overflow: ellipsis;\n' +
                '        border: 2px solid thin #c1c1c1;\n' +
                '        word-wrap: break-word;\n' +
                '        padding: 3px 3px;\n' +
                '        font-size: 13px;\n' +
                '    }\n' +
                '\n' +
                '    table tr:nth-child(even) {\n' +
                '        background: #e5e5e5;\n' +
                '    }\n' +
                '\n' +
                '    .thead {\n' +
                '        font-size: 15px;\n' +
                '        font-weight: bold;\n' +
                '        color: #FFFFFF;\n' +
                '        border-left: 1px solid thin #a3a3a3;\n' +
                '        background: #5585b9;\n' +
                '    }\n' +
                '\n' +
                '    hr {\n' +
                '        border-top: 1px dotted black;\n' +
                '    }\n' +
                '\n' +
                '    .no-break {\n' +
                '        page-break-inside: avoid !important;\n' +
                '    }\n' +
                '\n' +
                '    table,tr,td,div {\n' +
                '        page-break-inside: auto !important;\n' +
                '    }\n' +
                '\n' +
                '    th {\n' +
                '        width: 30%;\n' +
                '        border-right: 1px solid #c1c1c1 !important;\n' +
                '    }\n' +
                '</style>'
    })
</script>
{@html table}
