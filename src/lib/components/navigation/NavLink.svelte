<script lang="ts">
  export let to: string;
  export let className: string = '';
  export let role: string = '';
</script>

<a href={to} class={className} role={role}>
  <slot></slot>
</a>