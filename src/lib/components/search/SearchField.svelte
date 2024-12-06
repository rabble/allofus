<script lang="ts">
  interface Props {
    label: string;
    id: string;
    value: string;
    placeholder?: string;
    type?: "text" | "select";
  }

  let { label, id, value, placeholder = "", type = "text" }: Props = $props();
</script>

<div>
  <label class="block text-sm font-medium text-gray-700 mb-2" for={id}>
    {label}
  </label>
  
  {#if type === "text"}
    <input
      {id}
      bind:value
      {placeholder}
      class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-accent"
    />
  {:else}
    <select
      {id}
      bind:value
      class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-accent"
    >
      <slot />
    </select>
  {/if}
</div>