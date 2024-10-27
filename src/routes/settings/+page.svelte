<script lang="ts">
  import { Toggle } from 'stwui';
 

  let toggled = true;

  $: {
    toggled, handleMode(toggled ? "auto" : "manual");
  }
 
  const handleMode= async (mode: string): Promise<void> => {
    const response = await fetch("api/mode", {
      method: "POST",
      body: JSON.stringify({
        mode: mode,
      }),
    });

    console.log(`Satus : ${response.status}`);
  };
</script>

<h1>Settings</h1>
<div class="container">
  <div class="flex">
    <Toggle bind:on={toggled}/> <p class="ml-4">{toggled? "Automatic":"Manual"}</p>
  </div>
</div>



