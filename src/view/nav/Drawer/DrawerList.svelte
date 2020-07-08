<script>
    import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
    import Router,{wrap,push} from 'svelte-spa-router'
    import {NameStore} from "../../../store/NameStore";
    let currentPage = {
        icon:"",
        url:"browser",
        text:"浏览"
    };
    let itemList = [{
        icon:"",
        url:"browser",
        text:"浏览"
    },{
        icon:"",
        url:"statistic",
        text:"统计"
    }];
</script>
<List>
    {#each itemList as item,index (item.text)}
        <Item href="javascript:void(0)" on:click={function() {
                push('/page/'+item.url+'/'+$NameStore);
            }
        } activated={item.activated}>
            <Graphic class="material-icons" aria-hidden="true">{item.icon}</Graphic>
            <Text>{item.text}</Text>
        </Item>
    {/each}
</List>
