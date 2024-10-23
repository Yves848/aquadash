<script>
  import '../app.css';
  import {goto} from "$app/navigation";
  const handleClick = () => {
    console.log('Button was clicked');
    goto('/products');
  }

  
</script>

<h1 class="text-3xl text-red-500">Welcome Home!</h1>

<a href="/blog" class="">Blog</a>
<a href="/products" class="">Products</a>

<button on:click={handleClick}>Place Order</button>
