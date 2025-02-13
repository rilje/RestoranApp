<template>
    <div class="text-white">
        <br>
       <div class="d-flex justify-content-center gap-2 bg-dark p-4">
            <div class="border border-light p-3 col-md-6">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-white">Ime i prezime</label>
                    <input v-model="finalnaPorudzbina.ime" type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
                   
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-white">Adresa</label>
                    <input v-model="finalnaPorudzbina.adresa" type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
                    
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-white">Broj telefona</label>
                    <input v-model="finalnaPorudzbina.brojTelefona" type="text " class="form-control" id="exampleFormControlInput1" placeholder="">
                  
                </div>
                <div class="mb-3">
                    <label for="dsa" class=" text-white">Odaberite način plaćanja</label>
                    <select v-model="finalnaPorudzbina.nacinPlacanja" class="form-select" aria-label="Default select example">
                        <option value="Gotovina">Keš</option>
                        <option value="Kartica" disabled>Kartica</option>
                    </select>
                    
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label text-white">Detalji porudzbine</label>
                    <textarea v-model="finalnaPorudzbina.detalji" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div>
                    <button @click="zavrsi" class="btn btn-primary btn-sm">Završi porudžbinu</button>
                </div>
                
            </div>
            <div class="col-md-4 ">
                <div class="card" >
                    <div class="card-header">
                        Porudzbina: {{ id }}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li  v-for="item,index in this.porudzbina" :key="index" class="list-group-item d-flex justify-content-between"> 
                            <span>{{ item.name }}</span> <span>{{ item.price }} rsd</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span><b>Ukupno:</b></span> <span><b>{{ ukupnaCena }} RSD</b></span>
                        </li>
                        
                    </ul>
                </div>
                
                
            </div>
       </div>
        
    </div>
</template>
<script>
export default {
    props: ['id'],
    data() {    
        return {
            porudzbina: [],
            finalnaPorudzbina: {
                ime: '',
                adresa: '',
                brojTelefona: '',
                nacinPlacanja: '',
                detalji: '',
                status: 'Pending',
                porucenaJela: [],
                id: null,
                ukupnaCena: null,
            },
            gotovePorudzbine: [],

            
            
        }
    },
    methods:{
        dohvatiPodatke(){
            this.porudzbina = JSON.parse(localStorage.getItem('korpa'))
            // console.log(this.porudzbina)
            this.gotovePorudzbine = JSON.parse(localStorage.getItem('gotove-porudzbine'))
        },
        inicirajLocalStorage(){
            if(!JSON.parse(localStorage.getItem('gotove-porudzbine'))){
                localStorage.setItem('gotove-porudzbine', JSON.stringify([]))
            }
        },  
        zavrsi(){
            if(this.finalnaPorudzbina.ime == '' || this.finalnaPorudzbina.adresa == '' || this.finalnaPorudzbina.brojTelefona == '' || this.finalnaPorudzbina.nacinPlacanja == ''){
                console.log('DOSLO JE DO GRESKE')
                return
            }
            this.finalnaPorudzbina.porucenaJela = this.porudzbina
            console.log(this.finalnaPorudzbina.porucenaJela)
            this.finalnaPorudzbina.id = this.id
            console.log(this.finalnaPorudzbina.id)
            this.finalnaPorudzbina.ukupnaCena = this.ukupnaCena
            console.log(this.finalnaPorudzbina.ukupnaCena)
            console.log(this.finalnaPorudzbina)
            this.gotovePorudzbine.push(this.finalnaPorudzbina)
            console.log(this.gotovePorudzbine)
            localStorage.setItem('gotove-porudzbine', JSON.stringify(this.gotovePorudzbine))
            this.$router.push('/order-manager')
        }
    },
    computed: {
        ukupnaCena(){
            let cena = 0
            for (const item of this.porudzbina) {
                cena += item.price
            }
            return cena
        }
    },
    mounted() {
        this.inicirajLocalStorage()
        this.dohvatiPodatke()
    },
}
</script>
<style scoped>
    label{
        text-align: white;
    }
</style>