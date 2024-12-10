<template>
    <div
        class="fixed bottom-0 rounded-tl-[30px] rounded-tr-[30px] flex items-center justify-around w-full p-4 text-gray-400 bg-[#242424]">
        <!-- Home Icon -->
        <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path fill="currentColor" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3z" />
            </svg>
            <span class="mt-1 text-sm">Home</span>
        </div>

        <!-- Pins Icon -->
        <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path fill="currentColor"
                    d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3zm2-3.05l5-2.15l5 2.15V5H7zM7 5h10z" />
            </svg>
            <span class="mt-1 text-sm">Pins</span>
        </div>

        <!-- Tickets Icon -->
        <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                <rect width="48" height="48" fill="none" />
                <defs>
                    <mask id="ipSTicket0">
                        <g fill="none" stroke-linecap="round" stroke-width="4">
                            <path stroke="#fff" stroke-linejoin="round" d="M9 16L34 6l4 10" />
                            <path fill="#fff" stroke="#fff" stroke-linejoin="round"
                                d="M4 16h40v6c-3 0-6 2-6 5.5s3 6.5 6 6.5v6H4v-6c3 0 6-2 6-6s-3-6-6-6z" />
                            <path stroke="#000" d="M17 25.385h6m-6 6h14" />
                        </g>
                    </mask>
                </defs>
                <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTicket0)" />
            </svg>
            <span class="mt-1 text-sm">Tickets</span>
        </div>

        <!-- Profile Icon -->
        <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <g fill="none">
                    <path fill="currentColor" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"
                        opacity="0.16" />
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                        d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                    <circle cx="12" cy="7" r="3" stroke="currentColor" stroke-width="2" />
                </g>
            </svg>
            <span class="mt-1 text-sm">Profile</span>
        </div>
    </div>
</template>