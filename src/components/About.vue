<script setup>
import Logo from "@/assets/logo.png";
</script>
<template>
    <!-- About Section -->
    <div class="grid bg-[#302E1B] h-[350px] grid-cols-2 gap-4 place-items-center">
        <!-- Left Content -->
        <div class="ml-10 text-left w-[450px]">
            <h2 class="mb-4 text-2xl font-bold text-yellow">
                Know More About Recentlys
            </h2>
            <p class="mb-6 leading-relaxed text-gray-400">
                Lorem Ipsum Dolor Sit Amet Consectetur. A Aliquam Sed Tempus Sagittis Tellus Augue. Id Accumsan A Eu
                Nisi Sed. Ut Praesent Netus Arcu Massa. Lobortis Turpis Risus Sed Pharetra Bibendum Facilisis Sit.
                Lobortis Turpis Risus Sed Pharetra Bibendum Facilisis Sit.
            </p>
            <div class="flex space-x-4">
                <button class="flex px-6 py-2 space-x-2 font-semibold border-2 rounded-lg border-yellow text-yellow">
                    <span>Register</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="currentColor" class="size-6">
                        <path fill-rule="evenodd"
                            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd" />
                    </svg>

                </button>
                <button class="px-6 py-2 font-semibold border-2 rounded-lg border-yellow text-yellow">
                    Log In
                </button>
            </div>
        </div>

        <!-- Right Content -->
        <div class="text-center">
            <img :src="Logo" alt="Logo" class="w-40 h-auto">
        </div>
    </div>
</template>
