<template>
    <Layout>
        <main class="main">
            <div class="container mx-auto p-3">
                <div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-4 max-w-7xl m-auto">
                    <div class="card lg:col-span-3 lg:mb-0">
                        <div class="content card-content">
                            <slot>
                                <RouterView></RouterView>
                            </slot>
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