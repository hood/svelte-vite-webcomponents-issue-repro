<svelte:options tag="custom-father" />

<script lang="ts">
  import Child1 from './Child1.svelte';
  import Child2 from './Child2.svelte';

  const text = 'ok';
</script>

<main>
  <div class="container">
    <p class="test">Test: {text}</p>

    <Child1 />
    <Child2 />
  </div>
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 200px;
    padding: 16px;
    border: 4px solid Silver;
  }

  .test {
    color: Blue;
  }
</style>
