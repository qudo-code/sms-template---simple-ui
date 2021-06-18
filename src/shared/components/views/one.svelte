<h2>View One</h2>

<button on:click={() => service.send("GO_TWO")}>
    GO TWO
</button>

<!-- Render child components -->
{#each components as { component, children, props }}
    <svelte:component this={component} components={children} />
{/each}

<script>
export let components = [];

import service from "shared/service.js";
</script>