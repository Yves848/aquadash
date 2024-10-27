<script lang="ts">
  import { CheckboxGroup } from 'stwui';
  export let data;
  const {lights} = data;

  let day = lights.day;
  let night = lights.night;
  let checked = false;

  $: {
    checked, console.log(`checked : ${checked?"true":"false"}`)
  }
  interface iLight {
    day: string
    night : string
  }

  const handleLights = async (mode: boolean) : Promise<void>=> {
    const response = await fetch('api/ligths',{
      method: "POST",
      body: JSON.stringify({
      "mode": (mode ? "day" : "night")
    })
    });
    
    console.log(`Satus : ${response.status}`);

    const  res = await fetch('api/ligths',{
    // mode: 'cors',
    headers: {
      "content-type": "application/json"
    }
  });
  console.log(response);
  const lights = await res.json();
  day = lights.day;
  night = lights.night;
  }
</script>

<p>day : {day} - night : {night}</p>

<CheckboxGroup>
	<CheckboxGroup.Checkbox name="cb-19" value="cb-19" bind:checked>
			<CheckboxGroup.Checkbox.Label class="text-blue-700 text-xl justify-center" slot="label">Day</CheckboxGroup.Checkbox.Label>
	</CheckboxGroup.Checkbox>
</CheckboxGroup>

<button on:click={() => handleLights(true)}>Day</button>
<button on:click={() => handleLights(false)}>Night</button>