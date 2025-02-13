<template >

    <br><br><br><br><br><br><br><br>
    <div class="card text-center bg-dark text-white p-3 stickyFooter">

        <div class="card-body">
            <h5 class="card-title">@Vue.Restoraunts</h5>
            <!-- <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p> -->
            <a href="#" class="btn btn-outline-success">Go somewhere</a>
        </div>
        <br>
        <!-- <div class="card-footer text-white border">
            <i class="text-white">2 days ago</i>
        </div> -->
    </div>
</template>
<script>
export default {
    name: 'Footer',
}
</script>
<style scopeds>
    .stickyFooter{
        position: fixed;
        bottom: 0;
        width: 100%;
        margin-top: auto;
    }
</style>