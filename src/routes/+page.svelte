<script>
  import '../app.css';
  import {goto} from "$app/navigation";
  const handleClick = () => {
    console.log('Button was clicked');
    goto('/products');
  }

  
</script>

<h1 class="text-3xl text-red-500">Aquadash!</h1>

<u class="list-inside list-none">
  <li class="text-2xl text-blue-900 no-underline">Lights</li>
</u>
