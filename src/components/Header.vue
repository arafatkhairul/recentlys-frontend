<script setup>
import SearchBox from "./SearchBox.vue";
import Navigation from "./Navigation.vue";
import Logo from "./Logo.vue";
</script>
<template>
    <nav class="flex items-center justify-between px-6 py-4 text-white bg-transparent">
        <div class="items-center hidden lg:flex space-x-[100px]">
            <!-- Logo -->
            <Logo />
            <!-- Navigation Links -->
            <Navigation />
        </div>

        <!-- Search and User Icons -->
        <div class="flex items-center w-full space-x-4 lg:w-fit">
            <SearchBox />
            <div
                class="items-center justify-center hidden p-2 border rounded-full cursor-pointer lg:flex border-fill text-fill">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </nav>
</template>