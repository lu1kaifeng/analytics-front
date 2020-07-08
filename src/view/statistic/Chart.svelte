<script lang="ts">
    import {onMount} from "svelte";
    import Chart from 'chart.js';
    import Statistic from "../../model/Statistic";
    export let src : Array<{lower,upper,value}> = [];
    let input = { type: 'doughnut',
            data: {
            labels: [],
                datasets: [{
            data: [],
            backgroundColor: [
                'rgba(200, 50, 190,1)',
                'rgba(154, 162, 235,1)',
                'rgba(170, 120, 86,1)',
                'rgba(205, 192, 90,1)',
                'rgba(153, 102, 255,1)',
                'rgba(255, 211, 64,1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 182, 200, 1)',
                'rgba(255, 159, 64, 1)'
            ]
        }]
    },
        options: {
        }}
    let canvas;
    onMount(()=>{
        for(let entry of src){
            input.data.labels.push(entry.lower+'至'+entry.upper);
            input.data.datasets[0].data.push(entry.value);
        }
        new Chart(canvas,input)
    })
</script>
<canvas bind:this={canvas}></canvas>
