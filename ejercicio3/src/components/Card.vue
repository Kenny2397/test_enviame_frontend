<template>
    <div class="w-full sm:w-12/12 md:w-6/12 lg:w-4/12 px-4 py-4 mr-auto ml-auto">
        <div>
            <div class="thumb_hero">
                <img :src="pathThumb(hero.thumbnail)" alt="Thumb Hero" class="w-full object-cover object-center rounded-lg shadow-md">    
            </div>
                
            <div class="relative px-4 -mt-5">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex items-baseline">                
                        <div class="bg-blue-200 text-blue-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                            {{ modifiedFormatted(hero.modified) }}
                        </div>  
                    </div>
                    
                    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{{ hero.name }}</h4>
                
                    <div :class="classDescription(hero.description)">
                        <span> {{ textDescription(hero.description) }} </span>                
                    </div>
                    <div class="mt-4">
                        <button title="Edit information" class="text-yellow-600 text-md font-semibold cursor-pointer bg-yellow-200 text-center py-1 rounded-full w-full" @click="editInformation(hero)">✏ Edit information</button>                
                    </div>  
                </div>
            </div>
  
        </div>
    </div>

    
</template>

<script>
export default {
    props: ['hero'],    
    methods:{
        textDescription(description){            
            return (description.trim() === '') ? 'We do not have a description of this hero yet.😅 Can you help us put one on it?.🥳' : description;
        },
        classDescription(description){            
            return (description.trim() === '') ? 'my-14 bg-red-100 px-1 py-2 text-red-500' : 'mt-2 text-gray-600';            
        },
        modifiedFormatted(date){
            let date_formatted = (date.split("T")[0]).split("-");
            return date_formatted = `(Modified: ${date_formatted[2]}-${date_formatted[1]}-${date_formatted[0]})`;
        },
        pathThumb(thumb){
            return thumb.path+'.'+thumb.extension;
        },
        editInformation(hero){
            this.$emit('openModal',hero);
        }
    }
}
</script>

<style>
    .thumb_hero img{
        height: 18.75rem;        
    }
</style>