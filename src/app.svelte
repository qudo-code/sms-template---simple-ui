<h1>IT WORKED</h1>

<button on:click={() => service.send("GO_ONE")}>
    GO ONE
</button>
<button on:click={() => service.send("RESET")}>
    RESET
</button>

<pre>
    {JSON.stringify(components)}
</pre>

{#each components as { component, children, props }}
    <svelte:component this={component} components={children} />
{/each}

<script>
import service from "shared/service.js";

$: ({
    components = [],
} = $service.context);

</script>