<script setup lang="ts">
import { useAppStore } from 'valaxy'
import { onMounted } from 'vue'

const app = useAppStore()
onMounted(() => {
    app.showLoading = false
})
</script>

<template>
    <Layout>
        <main class="main">
            <div class="container mx-auto p-3">
                <div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-4 max-w-7xl m-auto">
                    <div class="mb-3 lg:col-span-3 md:mb-0 lg:mb-6">
                        <div>
                            <PostContent>
                                <RouterView />
                            </PostContent>
                        </div>
                    </div>

                    <div class="order-last mb-3 lg:order-first lg:col-span-1 lg:mb-6">
                        <Sidebar>
                            <AsidePages />
                        </Sidebar>
                    </div>

                    <div class="order-2 mb-3 lg:order-last lg:col-span-1 lg:mb-6">
                        <Aside>
                            <SidebarDesktopToc class="hidden lg:block" />
                        </Aside>
                    </div>
                </div>
            </div>
        </main>
        <RightBottomButton>
            <div class="block lg:hidden">
                <TocButton />
            </div>
        </RightBottomButton>
    </Layout>
</template>