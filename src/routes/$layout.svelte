<script>
    import { page } from '$app/stores';
    import './_global.pcss';
</script>

<div>
    {#key $page.path}
        <slot />
    {/key}
</div>

<style>
    :root {
        @apply bg-gray-900;
    }
    :global(body > div > div > div > div) {
        @apply bg-gray-700 !important;
    }
    div :global(h1) {
        @apply text-gray-100 !important;
    }
    div :global(table tr) {
        @apply bg-gray-700 border-gray-500 !important;
    }
    div :global(p a) {
        @apply text-purple-400 !important;
    }
    div :global([class*='--header-']) {
        @apply bg-gray-700 text-gray-100 !important;
        @apply border-gray-900 !important;
    }
    div :global([class*='--mobileHeader-']) {
        @apply bg-gray-700 text-gray-100 !important;
        @apply border-gray-900 !important;
    }
    div :global([class*='--overlay-']) {
        @apply border-gray-900 !important;
    }
    div :global([class*='--wholeContentPage-']) {
        @apply bg-gray-700 text-gray-100 !important;
    }
    div :global([class*='--pageDescription-']) {
        @apply text-gray-400 !important;
    }
    div :global([class*='--contentNavigation-']) {
        @apply bg-gray-900 border-gray-700 !important;
    }
    div :global([class*='--contentNavigationInner-']) {
        @apply bg-gray-900 border-gray-900 !important;
    }
    div :global([class*='--navigationHeader-']) {
        @apply border-gray-700 !important;
    }
    div :global([class*='--sidebar-']) {
        @apply bg-gray-900 text-gray-50 !important;
    }
    div :global([class*='--sidebarMain-']) {
        @apply bg-gray-900 text-gray-50 !important;
    }
    div :global([class*='--logoText-']) {
        @apply text-gray-50 hover:text-purple-400 transition-colors !important;
    }
    div :global([class*='--navButtonClickable-']) {
        @apply hover:bg-gray-800 hover:text-gray-100 !important;
        @apply hover:border-gray-800 !important;
    }
    div :global([class*='--navButtonOpened-']) {
        @apply bg-gray-700 hover:bg-gray-700 text-gray-100 !important;
        @apply border-gray-800 !important;
    }
    div :global([class*='--footer-']:before) {
        @apply hidden !important;
    }
    div :global([class*='--pageDocumentChildren-']:before) {
        @apply bg-gray-900 !important;
    }
    div :global([class*='--trademark-']) {
        @apply bg-gray-600 text-gray-400 hover:text-gray-200 transition-colors !important;
    }
    div :global([class*='--blockHint-']) {
        @apply bg-gray-600 !important;
    }
    div :global([class*='--blankslateEmptyPage-']) {
        @apply bg-gray-600 border-gray-800 !important;
    }
    div :global([class*='--whiteCard-']) {
        @apply bg-gray-600 border-gray-800 shadow hover:shadow-md !important;
    }
    div :global([class*='--whiteCard-'] [class*='--textContentFamily-']) {
        @apply text-gray-100 !important;
    }
    div :global([class*='--cardIcon-'] svg) {
        @apply text-gray-400 !important;
    }
    div :global([class*='--tabsItem-']) {
        @apply bg-gray-800 text-gray-400 hover:text-gray-200 border-gray-500 !important;
    }
    div :global([class*='--tabsItem-'] + [class*='--tabsItem-']) {
        @apply ml-1 !important;
    }
    div :global([class*='--tabsItemActive-']) {
        @apply bg-gray-700 text-gray-200 border-gray-500 border-b-0 !important;
    }
    div :global([class*='--tabsBody-']) {
        @apply bg-gray-700 text-gray-200 border-gray-500 !important;
    }
    div :global(ul [class^='blockParagraph-']) {
        @apply text-gray-300 !important;
    }
</style>
