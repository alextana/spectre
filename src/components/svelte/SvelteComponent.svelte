<script>
  let count = $state(0)
</script>

<div class="component bg-red-400 border border-red-300 p-3 w-max rounded-md">
  <h2>I am a svelte component</h2>
  <button
    class="p-2 rounded-md bg-red-500 my-2 shadow-md hover:bg-red-600"
    onclick={() => count++}>count is {count}</button
  >
</div>
