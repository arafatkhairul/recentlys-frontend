<template>
    <section class="px-6 py-0 text-white">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <BoxEventCard v-for="event in events" :key="event.id" :image="event.image" :title="event.title"
                :description="event.description" :date="event.date" :buttonText="event.buttonText" />
        </div>
    </section>
</template>

<script>
import BoxEventCard from "./BoxEventCard.vue";

export default {
    name: "EventSection",
    components: {
        BoxEventCard,
    },
    data() {
        return {
            events: [
                {
                    id: 1,
                    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Why Don't We",
                    description: "Live at Synchronized Fest",
                    date: "25 OCT 2024, 4:00 PM",
                    buttonText: "Buy Ticket",
                },
                {
                    id: 2,
                    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Why Don't We",
                    description: "Live at Synchronized Fest",
                    date: "25 OCT 2024, 4:00 PM",
                    buttonText: "Buy Ticket",
                },
                {
                    id: 3,
                    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Why Don't We",
                    description: "Live at Synchronized Fest",
                    date: "25 OCT 2024, 4:00 PM",
                    buttonText: "Buy Ticket",
                },
                {
                    id: 4,
                    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Why Don't We",
                    description: "Live at Synchronized Fest",
                    date: "25 OCT 2024, 4:00 PM",
                    buttonText: "Buy Ticket",
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Add additional styles if necessary */
</style>