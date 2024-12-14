<script>
  let count = $state(0)
</script>

<div class="component">
  <h2>I am a svelte component</h2>
  <button onclick={() => count++}>count is {count}</button>
</div>
