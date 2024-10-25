<script lang="ts">
  import {Dow} from "$const/const";
  export let data;
  const {planning} = data;

  // planning.forEach((item) => {
  //   console.log(item);
  // })  
</script>

<h1 class="text-2xl underline w-full bg-slate-500 rounded-md p-2">Planning</h1>
{#each planning as item,i }

  <span><p>{Dow[i]} {item[1].start} - {item[1].end}</p></span>
  
{/each}