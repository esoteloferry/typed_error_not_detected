<script lang="ts">
	import { getDimMatrix } from '../lib/test';

	let val : number | string = getDimMatrix([1, 2, 3]);
	let a: number = getDimMatrix([1, 2, 3]);
  console.log(val, a)
</script>

<h1>hello {val}</h1>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
