<script>
  const dummy = true
</script>

<div class="flex grid">
  tailwind css reordering works here
  {#if dummy}
    <span class="flex grid"> also works here </span>
  {:else}
    <span class="grid flex"> but DOES NOT work here.</span>
  {/if}
</div>
