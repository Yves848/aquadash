<script>
  import {goto, beforeNavigate, afterNavigate} from "$app/navigation";
  const handleClick = () => {
    console.log('Button was clicked');
    goto('/products');
  }

  beforeNavigate((navigation) => {
    console.log('beforeNavigate', navigation);
  });
  afterNavigate((navigation) => {
    console.log('afterNavigate', navigation);
  });
</script>
<h1>Welcome Home!</h1>

<a href="/blog" class="">Blog</a>
<a href="/products" class="">Products</a>

<button on:click={handleClick}>Place Order</button>