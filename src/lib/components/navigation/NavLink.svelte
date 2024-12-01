<script lang="ts">
  import { Link } from "svelte-routing";
  export let to: string;
</script>

<Link 
  {to} 
  class="hover:text-accent transition-colors duration-200"
>
  <slot />
</Link>