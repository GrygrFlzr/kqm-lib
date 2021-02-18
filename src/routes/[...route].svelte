<script context="module">
    /**
     * @type { RouteLoad }
     */
    export async function load({ fetch, page }) {
        try {
            const response = await fetch(`/proxy${page.path}`);
            const { head, body } = await response.json();

            if (typeof window === 'undefined') {
                return {
                    props: {
                        head: JSON.parse(
                            Buffer.from(head, 'base64').toString()
                        ),
                        body: JSON.parse(
                            Buffer.from(body, 'base64').toString()
                        ),
                    },
                };
            } else {
                return {
                    props: {
                        head: JSON.parse(atob(head)),
                        body: JSON.parse(atob(body)),
                    },
                };
            }
        } catch (e) {
            console.error(e);
        }
    }
</script>

<script>
    /** @type { string } */
    export let head;
    /** @type { string } */
    export let body;
</script>

<svelte:head>{@html head}</svelte:head>
{#key body}
    {@html body}
{/key}
