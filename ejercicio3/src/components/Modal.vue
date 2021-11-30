<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="mt-1 text-xl font-semibold uppercase leading-tight truncate">          
            Current Hero: "{{ currentHero.name}}"
          <button type="button" class="btn-close" @click="closeModal" aria-label="Close modal">
            x
          </button>
        </header>

        <section class="modal-body">
            <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Name:
                </label>
                </div>
                <div class="md:w-2/3">
                <input v-model="currentHero.name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="inline-full-name" type="text" maxlength="20">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                    Description:
                </label>
                </div>
                <div class="md:w-2/3">
                
                <textarea v-model="currentHero.description" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="inline-password" rows="10" maxlength="300"></textarea>
                    
                </div>
            </div>
                     
            </form>
        </section>

        <footer class="modal-footer">        
            <div class="content-btn-footer">
                <button type="button" class="btn-green btn-red btn-footer" @click="closeModal" aria-label="Cancel">
                    Close 🚫
                </button>            
            </div>
        </footer>
      </div>
    </div>
  </transition>
</template>



<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    min-width: 460px;
    padding: 10px;
    font-size: 16px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: end;    
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    padding: 7px 0px;
  }
  .btn-red{
      background: rgba(239,68,68,1);
      border: 1px solid rgba(239,68,68,1);
      
  }
  .btn-footer{
      line-height: inherit;
        margin: 0px 10px;
        min-width: 100px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>
<script>


  export default {
    name: 'Modal',
    props: ['currentHero'],
    methods: {
      closeModal() {
        this.$emit('closeModal');
      },
    
    },
  };
</script>