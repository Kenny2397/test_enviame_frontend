<template>
  <div id="app" class="bg-gray-300">

    <navbar-component />

    <div class="w-full container mx-auto flex flex-wrap justify-center items-center mt-0 px-2 py-5">    

      <div class="flex items-center mt-10" id="store-nav-content">
          <div class="flex items-center py-2">
              <div class="flex border-2 rounded">
                  <input v-model="search" type="text" style="width: 75vw;" class="px-4 py-2 outline-none border-2 border-r-0 focus:border-red-500" placeholder="Search for your favorite hero by..." @keyup.enter="filterHero">
                  <button type="button" title="Buscar" class="flex items-center justify-center px-4 font-semibold py-2 px-4 border-2 bg-red-500  border-red-500 focus:outline-none focus:bg-white focus:border-red-500"  @click="filterHero">
                      <svg class="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                      </svg>
                  </button>
              </div>              
          </div>
      </div>
          
    </div>
    
    <section class="pb-10 bg-gray-300">
        <div class="container mx-auto px-4">
        
          <div id="container_heros" class="flex flex-wrap mt-10">    
              <card-component @openModal="openModal" v-for="hero of heros" :key="hero.id" :hero="hero" />          
          </div>

          <no-result id="no_result" class="hidden"/>

        </div>
    </section>

    <footer-component />

    <modal v-show="isModalVisible" @closeModal="closeModal" :currentHero="currentHero" />

  </div>
</template>

<script>
import axios from 'axios';
import NavbarComponent from "./components/Navbar.vue";
import CardComponent from "./components/Card.vue";
import FooterComponent from "./components/Footer.vue";
import Modal from "./components/Modal.vue";
import NoResult from "./components/NoResult.vue";

const api_key ='67740b71c9a0e270270cd6aa34dd1838';
const hash ='47abb5bc2d18ca98600d465ff3a53e23';


export default {
  name: 'App',
  data: function(){
    return {
      heros : [],
      search : '',
      offset : 0,
      currentHero : {},
      isModalVisible : false,
      limit : 12
    }
  },
  created(){
    this.loadData(),    
    window.addEventListener("scroll", this.infiniteScroll);
  },
  methods: {
    loadData(){
      const params = {
        api_key : api_key,
        hash: hash,
        limit : this.limit,
        search : (this.search == '') ? '' : '&nameStartsWith='+this.search,
        offset : this.offset
      }, 
      url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${params.api_key}&hash=${params.hash}&limit=${params.limit}&offset=${params.offset}${params.search}`;

      axios.get(url)
      .then((res)=>{ 
        if((res.data.data.results).length !== 0){
          document.getElementById("container_heros").classList.add('block');
          document.getElementById("no_result").classList.add('hidden');
          document.getElementById("no_result").classList.remove('block');
          document.getElementById("container_heros").classList.remove('hidden');
          this.heros = res.data.data.results;
        }else{
          document.getElementById("container_heros").classList.add('hidden');
          document.getElementById("no_result").classList.add('block');
          document.getElementById("no_result").classList.remove('hidden');
          document.getElementById("container_heros").classList.remove('block');
        }
        
       })
      .catch((error) =>{ console.log(error); });
    },
    filterHero(){
      this.loadData()
    },
    openModal(hero){            
      this.getInformationHero(hero)
    },
    async getInformationHero(hero){      
      this.currentHero = hero;
      this.isModalVisible = true;
    },     
    closeModal() {
      this.isModalVisible = false;
    },
      infiniteScroll() {            
      if( window.scrollY + window.innerHeight >= document.documentElement.scrollHeight ){
        this.limit += 12;
        
        if(this.limit >= 100){ 
          console.warn("Only a maximum of 100 heroes can be listed per query. But I'm using a little 'trick', which generally works fine, or so I think.😅");
          let limit = this.limit;         
          this.limit = limit % 100;
          this.offset += 1;       
        }
        this.loadData();        
      }
    }
  },
  components: {
    NavbarComponent,
    CardComponent,
    FooterComponent,
    Modal,
    NoResult
  }
}
</script>



