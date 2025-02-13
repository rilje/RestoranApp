<template>
    <div>
        <h2 class="text-white">Single order</h2>
        <p class="text-white">{{ id }}</p>
        <div class="card text-center">
            <div class="card-header">
                ID: {{ id }}
            </div>
            <div class="card-body">
                <h5 class="card-title">Status: {{ porudzbina.status }}</h5>
                <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
                <div class="d-flex gap-2">
                    <ul class="list-group col-md-6">
                        <li class="list-group-item">Ime: {{ porudzbina.ime }}</li>
                        <li class="list-group-item">Adresa: {{ porudzbina.adresa }}</li>
                        <li class="list-group-item">Broj telefona: {{ porudzbina.brojTelefona }}</li>
                        <li class="list-group-item">Plaćanje: {{ porudzbina.nacinPlacanja }}</li>
                        <li class="list-group-item">Detalji: {{ porudzbina.detalji }}</li>
                        
                    </ul>
                    <div class="col-md-6 ">
                     
                        
                        <ul class="list-group col-md-12">
                            <li  v-for="jelo,index in this.porudzbina.porucenaJela" :key="index"  class="list-group-item d-flex justify-content-between"> 
                                <span><small>[{{ index + 1}}]</small> {{ jelo.name }}</span>
                                <span>...{{ jelo.price }} rsd</span>
                            </li>
                            <li class="list-group-item text-end"><b>Ukupan iznos: {{ porudzbina.ukupnaCena }} rsd</b></li>
                        </ul>
                    </div>
                </div>
                <br>
                <div class="d-flex gap-2 justify-content-center">
                    <RouterLink :to="'/order-manager'" class="btn btn-primary btn-sm">Vrati se nazad</RouterLink>
                    <a href="#" class="btn btn-danger btn-sm">Obriši porudžbinu</a>
                </div>
            </div>
            <div class="card-footer text-body-secondary">
                2 days ago
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SingleOrderView',
    props: ['id'],
    data() {
        return {
            porudzbina: {},
        }
    },
    methods: {
        dohvatiPodatke(){
            this.porudzbina = JSON.parse(localStorage.getItem('gotove-porudzbine')).find((porudzbina) => porudzbina.id == this.id)
            console.log(this.porudzbina)
        }
    },
    mounted() {
        this.dohvatiPodatke()
    },
}
</script>
<style scoped>
    
</style>