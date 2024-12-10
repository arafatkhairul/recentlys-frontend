<template>
    <section class="px-6 py-6 text-white ">
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-lg font-bold lg:text-2xl">Upcoming Events</h2>
            <h6 class="text-sm font-semibold text-grayWhite">See all</h6>
        </div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <EventCard v-for="event in events" :key="event.id" :image="event.image" :title="event.title"
                :location="event.location" :date="event.date" :price="event.price" />
        </div>
    </section>
</template>

<script>
import EventCard from "./EventCard.vue";

export default {
    name: "UpcomingEvents",
    components: {
        EventCard,
    },
    data() {
        return {
            events: [
                {
                    id: 1,
                    image: "https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Satellite mega festival - 2023",
                    location: "New Ranip",
                    date: "23 Dec 2023",
                    price: 150,
                },
                {
                    id: 2,
                    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Rise & Restore Music Festival - 2024",
                    location: "ULAB",
                    date: "5 Oct 2024",
                    price: 150,
                },
                {
                    id: 3,
                    image: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Satellite mega festival - 2023",
                    location: "New York",
                    date: "23 Dec 2023",
                    price: 150,
                },
                // {
                //     id: 4,
                //     image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                //     title: "Satellite mega festival - 2023",
                //     location: "Miami",
                //     date: "23 Dec 2023",
                //     price: 150,
                // },
            ],
        };
    },
};
</script>

<style scoped>
/* Add additional styles if necessary */
</style>