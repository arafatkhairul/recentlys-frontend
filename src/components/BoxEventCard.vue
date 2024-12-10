<template>
    <div class="p-4 text-white transition-shadow rounded-lg shadow-md bg-[#2B2922] hover:shadow-lg">
        <img :src="image" alt="Event Image" class="object-cover w-full h-40 rounded-lg" />
        <div class="mt-4">
            <h3 class="text-lg font-bold">{{ title }}</h3>
            <p class="text-sm text-gray-400">{{ description }}</p>
            <p class="mt-2 text-sm font-semibold text-yellow-500">{{ date }}</p>
            <div class="mt-4">
                <button class="w-full px-4 py-2 font-semibold text-black rounded-lg bg-yellow hover:bg-yellow-600">
                    {{ buttonText }}
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
        description: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        buttonText: {
            type: String,
            default: "Buy Ticket",
        },
    },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>