<script lang="ts">
  export let data;
  const { lights } = data;

  let day = lights.day;
  let night = lights.night;

  interface iLight {
    day: string;
    night: string;
  }

  const handleMode= async (mode: string): Promise<void> => {
    const response = await fetch("api/mode", {
      method: "POST",
      body: JSON.stringify({
        mode: mode,
      }),
    });

    console.log(`Satus : ${response.status}`);

    const res = await fetch("api/ligths", {
      // mode: 'cors',
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(response);
    const lights = await res.json();
    day = lights.day;
    night = lights.night;
  };
</script>

<h1>Settings</h1>

<button on:click={() => handleMode("auto")}>Auto</button>
<button on:click={() => handleMode("manual")}>Manual</button>
