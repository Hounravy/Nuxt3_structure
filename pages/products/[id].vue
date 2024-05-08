<template>
    <div class="container-fluid">
        <div class="container-full">
<div class="grid grid-cols-2 gap-[10px] py-[68px]">
    <div class="flex justify-center items-center">
         <img :src="productes.image" alt="images" class="w-[450px] h-[450px]"/>
    </div>
    <div class="flex justify-center items-center">
        <div> <p class=" text-24px text-center">{{ productes.title }}</p>
        <p class=" text-18px text-center">${{ productes.price }}</p>

        </div>
       
    </div>
</div>

           <div class=" space-y-[20px]">
                <h5 class="text-20px text-center font-bold uppercase">Popular Products</h5>
                <div class="grid grid-cols-4 gap-[10px]">
                    <div v-for="product in products" :key="product.id" >
                        <NuxtLink :to="`/products/${product.id}`">

                       
                      <div class=" space-y-[10px]">
                         <div class="flex justify-center items-center">
                              <img :src="product.image" alt="images" class="w-[250px] h-[250px]"/>
                        </div>
                      
                        <p class=" text-14px text-center">{{ product.title }}</p>
                        <p class=" text-14px text-center">${{ product.price }}</p>
                      </div>
                    </NuxtLink>
                    </div>
                </div>
               
                
              </div>
            </div>
            </div>
</template>

<script setup>
  const { data: products } = await useFetch(`https://fakestoreapi.com/products?limit=8&sort=desc`);
const {id} = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id
const {data: productes} = await useFetch(uri)
</script>