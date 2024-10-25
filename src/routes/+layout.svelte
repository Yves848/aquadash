<script>
  import "../app.css";
  export let data;
  const {day, night} = data.lights;
</script>
<div class="container flex flex-col h-screen">
  <div class="container mt-2">
    <header class="flex bg-slate-500 text-blue-300 h-16 text-4xl items-center justify-center rounded-md"><p class="underline">Aquadash</p>
      {#if day ==="on"}
        <p class=""> 🌞</p>
      {:else}
      <p> 🌙</p>
      {/if}
    </header>
  </div>
  <div class="rounded-md border-4 border-blue-700 p-8 h-full my-2">
  <slot />
  </div>
  <div class="align-baseline">
    <footer class="flex bg-slate-500 text-blue-300 h-16 text-4xl items-center justify-center rounded-md">Footer</footer>
  </div>
</div>
