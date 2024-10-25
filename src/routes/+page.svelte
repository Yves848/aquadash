<script>
  import '../app.css';
  import {goto} from "$app/navigation";
  import Lights from '../components/lights/lights.svelte';
  export let data;
  const { lights } = data;
  const handleClick = () => {
    console.log('Button was clicked');
    goto('/products');
  }
</script>

<Lights day= {lights.day} night={lights.night}></Lights>


