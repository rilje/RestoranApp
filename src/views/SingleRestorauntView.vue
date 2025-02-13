<template>
    <div>
      <div class="text-white">
        <h2>{{ restoran.name }}</h2>
        <h4>Radno vreme {{ restoran.radnoVreme }}</h4>
        <h4>Dostava: {{ restoran.dostava }}</h4>
        <p><button @click="vratiSe" class="btn btn-success btn-sm">Vrati se nazad</button></p>
      </div>
      <div class="text-dark">
        <div class="d-flex gap-3">
          <div class="card col-md-7" style="max-height: 390px; overflow-y: auto;">
            <h5 class="card-header">Jelovnik</h5>
            <div
              v-for="(item, index) in this.restoran.meni"
              :key="index"
              class="card-body d-flex justify-content-between align-items-center"
            >
              <div
                class="col-md-7 border d-flex justify-content-between align-items-center p-2 shadow"
              >
                <div>
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p class="card-text">
                    <i>Neki nasumični sastojci ovog jela...</i>
                  </p>
                </div>
                <div>
                  <i>...{{ item.price }} rsd</i>
                </div>
              </div>
              <div>
                <a
                  @click="dodajHranu(item)"
                  href="#"
                  class="btn btn-outline-success btn-sm shadow"
                  >Dodaj u korpu</a
                >
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item bg-light p-2">
                <button type="button" class="btn btn-outline-danger btn-sm">
                  Korpa <span class="badge text-bg-danger">{{ porudzbina.korpa.length }}</span>
                </button>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div v-if="this.porudzbina.korpa.length" class="accordion-body">
                    <p>ID porudzbine: {{ porudzbina.id }}</p>
                    <table
                      
                      class="table table-hover border"
                    >
                      <thead>
                        <th>Naziv artikla</th>
                        <th>Cena</th>
                        <th></th>
                      </thead>
                      <tbody>
                        <tr
                          v-for="artikal,index in this.porudzbina.korpa"
                          :key="index"
                        >
                          <td>{{ artikal.name }}</td>
                          <td>{{ artikal.price }}</td>
                          <td>
                            <a
                              @click="ukloniIzKorpe(index)"
                              class="cancelDugme"
                            >
                              <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-x-octagon-fill"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"
                                />
                              </svg>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
  
                    <div v-if="this.porudzbina.korpa.length" class="border p-3">
                      <h6>
                        <b>Ukupno za plaćanje: {{ ukupnaCena() }} rsd</b>
                      </h6>
                      <hr />
                      <div>
                        <button @click="dodajPorudzbinu" class="btn btn-primary btn-sm">
                          Nastavi sa plaćanjem
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </template>
  
  <script>


  export default {
    name: 'SingleRestoraunt',
    props: ['id', 'restoranID'],
    data() {
      return {
        vrstaRestorana: {},
        restoran: {},
        porudzbina : {
          id: Date.now(), 
          korpa: [],
        },
        finalnaPorudzbina: []
      };
    },
    methods: {
      dohvatiPodatke() {
        this.vrstaRestorana = JSON.parse(
          localStorage.getItem('restoraunts')
        ).find((vrstaRestorana) => vrstaRestorana.id == this.id);
        // console.log(this.vrstaRestorana);
        this.restoran = this.vrstaRestorana.restorani.find(
          (restoran) => restoran.id == this.restoranID
        );
        // console.log(this.restoran);
        if(!JSON.parse(localStorage.getItem('restorani-porudzbine'))){
          localStorage.setItem('restorani-porudzbine', JSON.stringify([]))
        }
      },
      dodajHranu(objekat){
        
        this.porudzbina.korpa.push(objekat)
        
      },
      ukloniIzKorpe(index){
        this.porudzbina.korpa.splice(index,1)
      },
      dodajPorudzbinu(){
        this.finalnaPorudzbina = JSON.parse(localStorage.getItem('restorani-porudzbine'))
        console.log('finalna porudzbina:',this.porudzbina)
        this.finalnaPorudzbina.push(this.porudzbina)
        localStorage.setItem('korpa', JSON.stringify(this.porudzbina.korpa))
        localStorage.setItem('restorani-porudzbine',JSON.stringify(this.finalnaPorudzbina))
        this.$router.push({name: 'finish-order', params:{id: this.porudzbina.id}})
      },
      ukupnaCena(){
        let cena = 0
        for (const item of this.porudzbina.korpa) {
          cena += item.price
        }
        return cena
      },
      vratiSe(){
        window.history.back();
      }
    },
  
    mounted() {
      this.dohvatiPodatke();
    }
  };
  </script>
  
  <style scoped>
  .cancelDugme {
    color: red;
  }
  </style>
  