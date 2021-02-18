<script context="module">
    import Base64 from 'js-base64';
    /**
     * @type { RouteLoad }
     */
    export async function load({ fetch }) {
        try {
            const response = await fetch(`/proxy`);
            const { head, body } = await response.json();

            return {
                props: {
                    head: Base64.decode(head),
                    body: Base64.decode(body),
                },
            };
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
{@html body}
