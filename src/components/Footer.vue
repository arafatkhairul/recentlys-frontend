<template>
    <footer class="container px-6 py-8 text-gray-400">
        <div class="flex flex-col items-center justify-between text-sm md:flex-row">
            <!-- Footer Logo -->
            <div class="mb-6 md:mb-0">
                <img :src="Logo" alt="">
            </div>

            <!-- Useful Links -->
            <div class="flex flex-col space-y-4 text-center md:flex-row md:space-y-0 md:space-x-12">
                <div>
                    <h4 class="mb-2 font-bold text-yellow-500">USEFUL</h4>
                    <ul class="space-y-2">
                        <li>Home</li>
                        <li>Works</li>
                    </ul>
                </div>
                <div>
                    <h4 class="mb-2 font-bold text-yellow-500">SOCIALS</h4>
                    <ul class="space-y-2">
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

import Logo from "@/assets/Logo.png"; 
</script>