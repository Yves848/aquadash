<script>
  import "../app.css";
  export let data;
  const {day, night} = data.lights;
</script>
<div class="container flex flex-col h-screen w-full px-4 pb-4">
  <div class="container mt-2">
    <header class="flex bg-slate-500 text-blue-300 h-16 text-4xl items-center justify-center rounded-xl"><p class="underline">Aquadash</p>
      {#if day ==="on"}
        <p class=""> 🌞</p>
      {:else}
      <p> 🌙</p>
      {/if}
    </header>
  </div>
  <div class="rounded-md border-4 border-slate-400 h-full my-2">
    <div class="container h-full">
      <div class="grid grid-cols-12 h-full">
        <div class="col-span-2 bg-slate-900 text-cyan-50 text-justify text-3xl flex flex-col justify-start items-center">
          <p class="my-3"><a class=""  href="/lights">Lights</a></p>
          <p class="my-3"><a class=""  href="/planning">Planning</a></p>
          <p class="my-3"><a class=""  href="/settings">Settings</a></p>
        </div>
        <div class="col-span-10 bg-yellow-50 h-full p-4">
          <slot />
        </div>

      </div>
    </div>
 
  </div>
  <div class="align-baseline">
    <footer class="flex bg-slate-500 text-blue-300 h-16 text-4xl items-center justify-center rounded-xl"></footer>
  </div>
</div>
