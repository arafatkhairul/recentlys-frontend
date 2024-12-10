<template>
    <div class="flex  p-3 text-white bg-[#333332] rounded-lg shadow-md">
        <!-- Image -->
        <img :src="image" alt="Event" class="object-cover w-24 h-24 rounded-lg">

        <!-- Content -->
        <div class="flex flex-col justify-between ml-4">
            <div>
                <h3 class="text-lg font-bold">{{ title }}</h3>
            </div>
            <div class="flex items-center justify-between">
                <p class="flex items-center text-sm text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>

                    {{ location }}
                </p>
                <span :class="price === 'Free' ? 'bg-yellow text-black' : 'bg-white text-[#BE492B]'"
                    class="px-3 py-1 text-sm font-bold rounded-lg">
                    {{ price }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecommendationCard",
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
        price: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
/* Additional styling if needed */
</style>