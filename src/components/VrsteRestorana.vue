<template>
    <div class="d-flex gap-2 justify-content-evenly">
        <div v-for="restoran,index in vrsteRestorana" :key="index" class="card" style="width: 18rem;">
            <img :src="restoran.image" class="card-img-top slikaNeka" alt="...">
            <div class="card-body">
                <RouterLink :to="`/restoraunts/${restoran.id}/${restoran.name}`" class="nazivRestorana">
                    <h5 class="card-text text-center">{{ restoran.name }}</h5>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'VrsteRestorana',
    data() {
        return {
            vrsteRestorana: [
                {
                    id: 1,
                    name: 'Pizza',
                    image: 'Vrste-restorana/piza.png',
                    restorani: [
                        {
                            id: 1,
                            name: 'New York Slice',
                            radnoVreme: '00:00-24:00',
                            dostava: 'Besplatna',
                            prikaziMeni: false,
                            meni: [
                                {
                                    id: 1, name: 'Chicken Supreme', price: 1599,
                                },
                                {
                                    id: 2, name: 'South Bronx', price: 1699,
                                },
                                {
                                    id: 3, name: 'Pepperoni', price: 1399,
                                },
                                {
                                    id: 4, name: 'Capricosa', price: 1199,
                                }
                            ]           
                        },
                        {
                            id: 2,
                            name: 'Pizza Bar',
                            radnoVreme: '09:00-00:00',
                            dostava: '350 rsd',
                            prikaziMeni: false,

                            meni: [
                                {
                                    id: 1, name: 'Porchetta', price: 1899,
                                },
                                {
                                    id: 2, name: 'White n Hot', price: 1790,
                                },
                                {
                                    id: 3, name: 'Carbonara', price: 1690,
                                },
                                
                            ]
                        },
                        {
                            id: 3,
                            name: 'Popaj',
                            radnoVreme: '08:00-23:00',
                            dostava: 'Besplatna',
                            prikaziMeni: false,

                            meni: [
                                {
                                    id: 1, name: 'Capricosa', price: 1500,
                                },
                                {
                                    id: 2, name: 'Popaj Pizza', price: 1700,
                                },
                                {
                                    id: 3, name: 'Quatro formagio', price: 1890,
                                }
                            ]
                        },
                    ],
                },
                {
                    id: 2,
                    name: 'Pasta',
                    image: 'Vrste-restorana/pasta.png',
                    restorani: [
                        {
                            id: 1,
                            name: 'Faro Pasta',
                            radnoVreme: '08:00-22:00',
                            dostava: '250 rsd',
                            prikaziMeni: false,

                            meni: [
                                {
                                    id: 1, name: 'Bolognese', price: 799,
                                },
                                {
                                    id: 2, name: 'Carbonara', price: 599,
                                },
                                {
                                    id: 3, name: 'Mac n Cheese', price: 690,
                                }
                            ]
                        },
                        {
                            id: 2,
                            name: 'Buba Pasta',
                            radnoVreme: '10:00-23:00',
                            dostava: '300 rsd',
                            prikaziMeni: false,

                            meni: [
                                {
                                    id: 1, name: 'Bolognese', price: 799,
                                },
                                {
                                    id: 2, name: 'Carbonara', price: 599,
                                },
                                {
                                    id: 3, name: 'Mac n Cheese', price: 690,
                                }
                            ]
                        },
                        {
                            id: 3,
                            name: 'AlDente Pasta',
                            radnoVreme: '12:00-21:00',
                            dostava: 'Besplatna',
                            prikaziMeni: false,

                            meni: [
                                {
                                    id: 1, name: 'Bolognese', price: 799,
                                },
                                {
                                    id: 2, name: 'Carbonara', price: 599,
                                },
                                {
                                    id: 3, name: 'Mac n Cheese', price: 690,
                                }
                            ]
                        },

                    ],
                },
                {
                    id: 3,
                    name: 'Roštilj',
                    image: 'Vrste-restorana/stilj.png',
                    restorani: [
                        {
                            id: 1,
                            name: 'Djeneral',
                            radnoVreme: '09:00-22:00',
                            dostava: 'Besplatna za porudzbine preko 800 rsd',
                            prikaziMeni: false,

                            meni: [
                                {
                                    id: 1, name: 'Gurmanska pljeskavica', price: 450
                                },
                                {
                                    id: 2, name: 'Cevapi (10 komada)', price: 500
                                },
                                {
                                    id: 3, name: 'Bela vesalica', price: 540
                                }
                            ]
                        },
                        {
                            id: 2,
                            name: 'Galop',
                            radnoVreme: '08:30-00:00',
                            dostava: 'Besplatna',
                            prikaziMeni: false,

                            meni: [
                                {
                                    id: 1, name: 'Gurmanska pljeskavica', price: 450
                                },
                                {
                                    id: 2, name: 'Cevapi (10 komada)', price: 500
                                },
                                {
                                    id: 3, name: 'Bela vesalica', price: 540
                                }
                            ]
                        },
                        {
                            id: 3,
                            name: 'Poncho',
                            radnoVreme: '08:00-01:00',
                            dostava: 'Besplatna za porudzbine preko 650 rsd',
                            prikaziMeni: false,

                            meni: [
                                {
                                    id: 1, name: 'Gurmanska pljeskavica', price: 450, prilozi: []
                                },
                                {
                                    id: 2, name: 'Cevapi (10 komada)', price: 500, prilozi: []
                                },
                                {
                                    id: 3, name: 'Bela vesalica', price: 540, prilozi: []
                                }
                            ]
                        },
                    ],
                },
                {
                    id: 4,
                    name: 'Burgeri',
                    image: 'Vrste-restorana/burger.png',
                    restorani: [
                        {
                            id: 1,
                            name: 'Republika Food',
                            radnoVreme: '09:00-22:00',
                            dostava: 'Besplatna za porudzbine preko 700 rsd',
                            prikaziMeni: false,

                            meni: [
                                {
                                    id: 1, name: 'Onion burger', price: 899
                                },
                                {
                                    id: 2, name: 'Classic burger', price: 750
                                },
                                {
                                    id: 3, name: 'Spicy Halapenho', price: 980
                                }
                            ]
                        },
                        {
                            id: 2,
                            name: 'Smash Burger',
                            radnoVreme: '08:30-02:00',
                            dostava: 'Besplatna',
                            prikaziMeni: false,

                            meni: [
                                {
                                    id: 1, name: 'Onion burger', price: 899
                                },
                                {
                                    id: 2, name: 'Classic burger', price: 750
                                },
                                {
                                    id: 3, name: 'Spicy Halapenho', price: 980
                                }
                            ]
                        },
                        {
                            id: 3,
                            name: 'Cheese&Beef',
                            radnoVreme: '08:00-01:00',
                            dostava: 'Besplatna za porudzbine preko 650 rsd',
                            prikaziMeni: false,

                            meni: [
                                {
                                    id: 1, name: 'Onion burger', price: 899
                                },
                                {
                                    id: 2, name: 'Classic burger', price: 750
                                },
                                {
                                    id: 3, name: 'Spicy Halapenho', price: 980
                                }
                            ]
                        },
                    ],
                },
                
                
            ]
        }
    },
    methods: {
        dohvatiPodatke(){
            localStorage.setItem('restoraunts',JSON.stringify(this.vrsteRestorana))
        }
    },
    mounted() {
        this.dohvatiPodatke()
    },
}
</script>
<style scoped>
    .slikaNeka{
        width: 100%;
        height: 100%;
    }
    .nazivRestorana{
        text-decoration: none;
        color: rgb(28, 30, 35);
    }
</style>