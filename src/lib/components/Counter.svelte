<script lang="ts">
  let count: number = 0;
  
  function increment() {
    count += 1;
  }
</script>

<button on:click={increment} class="counter-button">
  count is {count}
</button>

<style>
  .counter-button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  
  .counter-button:hover {
    border-color: #646cff;
  }
  
  .counter-button:focus,
  .counter-button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    .counter-button {
      background-color: #f9f9f9;
    }
  }
</style>