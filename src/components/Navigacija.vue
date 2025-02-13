<template>
    <div>
        <nav class="navbar bg-dark border-bottom border-body  navbar-expand-lg  " data-bs-theme="dark">
            <div class="container-fluid">
                <RouterLink class="navbar-brand" :to="'/'">
                    <img class="logoSlika" :src="'logoo.png'" alt="">
                </RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li v-for="item,index in meni" :key="index" class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" :to="item.path">{{ item.name }}</RouterLink>
                    </li>
                    
                    
                </ul>
                <div class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: "Navigacija",
    data() {
        return {
            meni: [
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'Orger Manager',
                    path: '/order-manager'
                },
                
            ]
        }
    },
}
</script>
<style scoped>
    .logoSlika{
        width: 80px;
    }
</style>