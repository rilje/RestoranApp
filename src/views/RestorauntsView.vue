<template >
    <div>
        <div>
            <div class="">
                <!-- <div>
                    <img class="slikaCover" :src="`/Cover/pizaCover.jpg`" alt="">
                </div> -->
                <br>
            </div>
            <div >
                <h3 class="text-white">[{{ id }}] {{ name }}</h3>
                <RouterLink :to="'/'"><button class="btn btn-success btn-sm">Početna strana</button></RouterLink>
            </div>
            <!-- <div class="accordion accordion-flush col-md-3" id="accordionFlushExample">
                <div class="accordion-item ">
                    <h2 class="accordion-header">
                    <button class="accordion-button  bg-light text-white collapsed d-flex gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <div  class="btn btn-success position-relative">
                            Korpa
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                
                                {{ prebrojJelaKorpe }}
                            </span>
                        </div>
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <table class="table table-striped">
                                <thead>
                                    <th>Name</th>
                                    <th>Price</th>
                                </thead>
                                <tbody>
                                    <tr v-for="jelo,index in this.porudzbina" :key="index">
                                        <td>{{ jelo.name }}</td>
                                        <td>{{ jelo.price }} rsd</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <hr>
                            <div>
                                <button class="btn btn-primary btn-sm">Continue to payment</button>
                            </div>
                        </div>
                    </div>
                </div>  
            </div> -->
        </div>
        <br>
        <div class="d-flex flex-wrap gap-3 justify-content-between col-md-11 ">
            <div v-for="restoran,index in this.restorani" class="card col-md-3 flex-fill text-dark border border-success">
                <h5 class="card-header">{{ restoran.radnoVreme }}</h5>
                <div class="card-body telo">
                    <h5 class="card-title">{{ restoran.name }}</h5>
                    <p class="card-text">Dostava: {{ restoran.dostava }}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <button @click="prikaziMeni(restoran)" class="btn btn-outline-success btn-sm">Pogledaj Meni</button>
                        <button @click="promeniStranu(restoran.id)"  class="btn btn-outline-success btn-sm">Poseti Restoran</button>
                    </div>
                    <br>
                    <div v-if="restoran.prikaziMeni">
                        <div class="list-group">
                            
                            <a v-for="jelo,index in restoran.meni" href="#" class="list-group-item list-group-item-action manjiTekst">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{{ jelo.name }}</h5>
                                <small class="text-body-secondary">[{{ jelo.id }}]</small>
                                </div>
                                <p class="mb-1"><b>{{ jelo.price }} rsd</b></p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <small class="text-body-secondary"><i>Opis obroka</i></small>
                                    
                                </div>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    props: ['id','name'],
    data() {
        return {
            vrsteRestorana: [],
            restorani: [],
            porudzbina: [
                
            ],
            porudzbine: [],
            korpa: [],
        }
    },
    methods: {
        dohvatiPodatke(){
            this.vrsteRestorana = JSON.parse(localStorage.getItem('restoraunts')).find((restoran) => restoran.id == this.id)
            this.restorani = this.vrsteRestorana.restorani
            console.log(this.restorani)
            console.log('VRSTA RESTORANA',this.vrsteRestorana)
            
        },
        prikaziMeni(objekat){
            objekat.prikaziMeni = !objekat.prikaziMeni
        },
        
        promeniStranu(restoranID){
            // console.log(restoranID)
            // console.log(this.id)
            this.$router.push({name:'single-restoraunt', params:{id:this.id ,restoranID:restoranID}})
        }
    },
    mounted() {
        this.dohvatiPodatke()
    },
    computed: {
        prebrojJelaKorpe(){
            return this.porudzbina.length
        }
    }
}
</script>
<style scoped>
    .drugaBoja{
        color: rgb(173, 247, 61);
        
    }
    .slikaCover{
        width: 100%;
        height: 350px;
    }

    
</style>