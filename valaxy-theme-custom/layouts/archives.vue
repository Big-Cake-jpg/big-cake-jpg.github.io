<template>
    <Head>
        <title>归档</title>
    </Head>
    <Layout>
        <main class="main">
            <div class="container mx-auto p-3">
                <div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-4 max-w-7xl m-auto">
                    <div class="mb-3 lg:mb-4 lg:col-span-3 lg:mb-0">
                        <div>
                            <ArchivesList />
                        </div>
                    </div>

                    <div class="order-last mb-3 lg:order-first lg:col-span-1 lg:mb-6">
                        <Sidebar>
                            <AsidePages />
                        </Sidebar>
                    </div>

                    <div class="order-2 mb-3 lg:order-last lg:col-span-1 lg:mb-6">
                        <Aside />
                    </div>
                </div>
            </div>
        </main>
        <RightBottomButton />
    </Layout>
</template>
<script setup lang="ts">
import { Head } from '@unhead/vue/components';
</script>