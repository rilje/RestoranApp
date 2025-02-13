<template>
    <div>
        <!-- <h2 class="text-white">Pregled porudzbina</h2> -->
        <div class="d-flex justify-content-between p-4 align-items-center">
            <div class="border col-md-5 p-2 bg-dark">
                <form class="d-flex" role="search">
                    <input v-model="pretraga" class="form-control me-2" type="search" placeholder="Pretraga po adresi" aria-label="Search">
                    <button class="btn btn-outline-success" disabled type="submit">Pretraga</button>
                    
                </form>
            </div>
            <div class="border col-md-4 p-2 align-items-center d-flex flex-wrap bg-dark">
                <span class="p-1 text-white">Filter podataka</span>
                <!-- <hr class="w-100 my-3 text-white"> -->
                <div class="d-flex gap-1 justify-content-start col-md-12">
                    <span>
                        <button @click="this.filter = 'sve'" class="btn btn-outline-primary btn-sm">Sve <span class="badge text-bg-primary">{{ porudzbine.length }}</span></button>
                    </span>
                    <span>
                        <button @click="this.filter = 'pending'" class="btn btn-outline-warning btn-sm">Na čekanju <span v-if="prebrojPending > 0" class="badge text-bg-warning">{{ prebrojPending }}</span></button>
                    </span>
                    <span>
                        <button @click="this.filter = 'accepted'" class="btn btn-outline-success btn-sm">Prihvaćene <span v-if="prebrojAccepted > 0" class="badge text-bg-success">{{ prebrojAccepted }}</span></button>
                    </span>
                    <span>
                        <button @click="this.filter = 'declined'" class="btn btn-outline-danger btn-sm">Odbijene <span v-if="prebrojDeclined > 0" class="badge text-bg-danger">{{ prebrojDeclined }}</span></button>
                    </span>
                </div>
            </div>
        </div>
        
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li @click="previousPage" class="page-item">
                    <a class="page-link bg-dark text-success" href="#" aria-label="Previous">
                        <span class="text-success" aria-hidden="true">&laquo;</span>
                    </a>
                </li>

                <li v-for="item in ukupnoStrana" class="page-item "><a @click="promeniStranu(item)" class="page-link bg-dark text-success" href="#">{{ item }}</a></li>
                
                <li @click="nextPage" class="page-item">
                    <a class="page-link bg-dark " href="#" aria-label="Next">
                        <span class="text-success" aria-hidden="true">&raquo;</span>
                    </a>
                </li>

            </ul>
        </nav>
        <table class="table border table-dark table-hover manjiTekst">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Ime</th> 
                    <th>Adresa</th>
                    <th>Telefon</th>
                    <th>Plaćanje</th>
                    <th>Status</th>
                    <th>Cena</th>
                    <th>Prihvati</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item,index in this.pretrazenePorudzbine" :key="index">
                    <td><RouterLink :to="`/single-order/${item.id}`">{{ item.id }}</RouterLink></td>
                    <td>{{ item.ime }}</td>
                    <td>{{ item.adresa }}</td>
                    <td>{{ item.brojTelefona }}</td>
                    <td>{{ item.nacinPlacanja }}</td>
                    <td :class="{'pending' : item.status == 'Pending', 'accepted' : item.status == 'Accepted', 'declined' : item.status == 'Declined'}">{{ item.status }}</td>
                    <td>{{ item.ukupnaCena }} rsd</td>
                    <td class="d-flex justify-content-center gap-1">
                        <button @click="prihvati(item.id)" class="btn btn-outline-success btn-sm">Da</button>
                        <button @click="odbij(item.id)" class="btn btn-outline-danger btn-sm">Ne</button>
                        <!-- <button @click="obrisi(index)" class="btn btn-outline-danger btn-sm">Obrisi</button> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'OrderManagerView',
    data() {
        return {
            porudzbine: [],
            trenutnaPorudzbina: {},
            filter: 'sve',
            trenutnaStrana: 1,
            poStrani: 5,
            pretraga: '',
            
        }
    },
    methods: {
        dohvatiPodatke(){
            this.porudzbine = JSON.parse(localStorage.getItem('gotove-porudzbine'))
            console.log(this.porudzbine)    
        },
        prihvati(id){
            console.log(id)
            const index = this.porudzbine.findIndex((porudzbina) => porudzbina.id == id)
            console.log(index)
            this.porudzbine[index].status = 'Accepted'
            localStorage.setItem('gotove-porudzbine', JSON.stringify(this.porudzbine))
        },
        odbij(id){
            console.log(id)
            const index = this.porudzbine.findIndex((porudzbina) => porudzbina.id == id)
            console.log(index)
            this.porudzbine[index].status = 'Declined'
            localStorage.setItem('gotove-porudzbine', JSON.stringify(this.porudzbine))
        },
        // obrisi(index){
        //     this.porudzbine.splice(index,1)
        //     localStorage.setItem('gotove-porudzbine', JSON.stringify(this.porudzbine))
        // }
        promeniStranu(brojStrane){
            
            this.trenutnaStrana = brojStrane
        },
        previousPage(){
            if(this.trenutnaStrana == 1){
                return
            }
            this.trenutnaStrana -- 
        },
        nextPage(){
            if(this.trenutnaStrana == this.ukupnoStrana){
                return
            }
            this.trenutnaStrana ++
        }
        
    },
    computed: {
        filtriranePorudzbine(){
            if(this.filter == 'sve'){
                let startIndex = (this.trenutnaStrana - 1) * this.poStrani
                let lastIndex = (this.trenutnaStrana * this.poStrani)
                return this.porudzbine.slice(startIndex,lastIndex)
            }
            if(this.filter == 'pending'){
                let startIndex = (this.trenutnaStrana - 1) * this.poStrani
                let lastIndex = (this.trenutnaStrana * this.poStrani)
                return this.porudzbine.filter((porudzbina) => porudzbina.status == 'Pending')
            }
            if(this.filter == 'accepted'){
                let startIndex = (this.trenutnaStrana - 1) * this.poStrani
                let lastIndex = (this.trenutnaStrana * this.poStrani)
                return this.porudzbine.filter((porudzbina) => porudzbina.status == 'Accepted')
            }
            if(this.filter == 'declined'){
                let startIndex = (this.trenutnaStrana - 1) * this.poStrani
                let lastIndex = (this.trenutnaStrana * this.poStrani)
                return this.porudzbine.filter((porudzbina) => porudzbina.status == 'Declined')
            }
        },
        prebrojPending(){
            return this.porudzbine.filter((porudzbina) => porudzbina.status == 'Pending').length
        },
        prebrojAccepted(){
            return this.porudzbine.filter((porudzbina) => porudzbina.status == 'Accepted').length
        },
        prebrojDeclined(){
            return this.porudzbine.filter((porudzbina) => porudzbina.status == 'Declined').length
        },
        ukupnoStrana(){
            return Math.ceil(this.porudzbine.length / this.poStrani)
        },
        pretrazenePorudzbine(){
            if(this.pretraga == ''){
                return this.filtriranePorudzbine
            }
            return this.porudzbine.filter((porudzbina) => porudzbina.adresa.toLowerCase().includes(this.pretraga))
        }
       
    },

    mounted() {
        this.dohvatiPodatke()
        
    },

}
</script>
<style scoped>
    th,td{
        text-align: center;
        font-size: 14px;
        
    }
    .pending{
        background-color: rgb(240, 237, 107);


    }
    .accepted{
        background-color: rgb(105, 229, 105);
        color:  white;

    }
    .declined{
        background-color: red;
        color:  white;
    }
    td a{
        color: greenyellow;
        text-decoration: none; 
    }
    th{
        font-size: 15px;
    }
</style>