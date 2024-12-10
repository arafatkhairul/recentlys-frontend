<template>
    <div
        class="text-white p-3 lg:p-0 flex flex-row lg:flex-col transition-shadow bg-[#242424] rounded-lg shadow-md hover:shadow-lg">

        <img :src="image" :alt="title"
            class="object-cover w-[100px] h-[100px] lg:w-full lg:h-[180px] rounded-lg lg:rounded-t-lg" />

        <div class="mt-4 ml-3 lg:ml-0 lg:p-4">
            <h3 class="font-semibold text-md lg:text-lg line-clamp-2">{{ title }}</h3>
            <div class="flex items-center justify-between my-2">
                <p class="flex items-center mt-1 text-sm text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>

                    <span class="font-semibold">{{ location }}</span>
                </p>
                <button class="px-8 py-1 text-black rounded-lg lg:hidden bg-yellow hover:bg-yellow-600">
                    Buy
                </button>
                <p class="mt-1 hidden lg:block text-sm text-[#BD4A2B]">{{ date }}</p>
            </div>
            <div class="items-center justify-between hidden mt-4 lg:flex">
                <div class="flex flex-col text-sm">
                    <span class="text-yellow">Price</span>
                    <span class="text-lg font-bold">${{ price }}</span>
                </div>
                <button class="px-10 py-2 text-black rounded-lg bg-yellow hover:bg-yellow-600">
                    Buy
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EventCard",
    props: {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style scoped>
/* Add additional styles if necessary */
</style>