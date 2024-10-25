<script lang="ts">
  import { Dow } from "$const/const";
  export let data;
  const { planning } = data;

  // planning.forEach((item) => {
  //   console.log(item);
  // })
</script>

<h1 class="text-2xl underline w-full bg-slate-500 rounded-md p-2 mb-4">Planning</h1>
<div class="table w-full">
  <div class="table-header-group mb-8 rounded-md">
    <div class="table-row  bg-slate-400 h-12 text-xl shadow-xl p-2 mb-8 rounded-md">
      <div class="table-cell align-middle text-left">Jour</div>
      <div class="table-cell align-middle text-center">Debut</div>
      <div class="table-cell align-middle text-center">Fin</div>
    </div>
  </div>
  <div class="table-row-group">
    {#each planning as item, i}
    <div class="table-row h-12">
      <div class="table-cell text-left">{Dow[i]}</div>
      <div class="table-cell text-center">{item[1].start}</div>
      <div class="table-cell text-center">{item[1].end}</div>
    </div>
    {/each}
  </div>
</div>