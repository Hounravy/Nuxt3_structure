<template>
    <div class="container-fluid">
        <div class=" space-y-[20px] container-full">
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
                <NuxtLink to="/about">
                  <p class="text-center">See More</p>
                </NuxtLink>
                
              </div>
    </div>
</template>

<script setup>

   const { data: products } = await useFetch(`https://fakestoreapi.com/products`);
  
  </script>