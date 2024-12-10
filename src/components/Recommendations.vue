<template>
    <section class="px-6 py-12 text-white">
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold">Recommendations for you</h2>
            <a href="#" class="font-bold text-orange-500 hover:underline">See All</a>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <RecommendationCard v-for="(recommendation, index) in recommendations" :key="index"
                :image="recommendation.image" :title="recommendation.title" :location="recommendation.location"
                :price="recommendation.price" />
        </div>
    </section>
</template>

<script>
import RecommendationCard from "./RecommendationCard.vue";

export default {
    name: "Recommendations",
    components: {
        RecommendationCard,
    },
    data() {
        return {
            recommendations: [
                {
                    image: "https://plus.unsplash.com/premium_photo-1661759013744-4754d402459d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Dance party at the top of the town - 2022",
                    location: "Bapunagar",
                    price: "$30.00",
                },
                {
                    image: "https://plus.unsplash.com/premium_photo-1661759013744-4754d402459d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Couple Dance Event - 2022",
                    location: "Usmanpura",
                    price: "$30.00",
                },
                {
                    image: "https://plus.unsplash.com/premium_photo-1661759013744-4754d402459d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Festival event at kudasan - 2022",
                    location: "Gota",
                    price: "Free",
                },
                {
                    image: "https://plus.unsplash.com/premium_photo-1661759013744-4754d402459d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Party with friends at night - 2022",
                    location: "Chandlodiya",
                    price: "Free",
                },
                {
                    image: "https://plus.unsplash.com/premium_photo-1661759013744-4754d402459d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Festival event at kudasan - 2022",
                    location: "Gota",
                    price: "Free",
                },
                {
                    image: "https://plus.unsplash.com/premium_photo-1661759013744-4754d402459d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Party with friends at night - 2022",
                    location: "Chandlodiya",
                    price: "Free",
                },
            ],
        };
    },
};
</script>
