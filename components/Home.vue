<template>
    <div class=" container-fluid h-[30vw] banner-bg bg-bottom">
    </div>
    <div class="container-fluid">
        <div class="container-full">
            <div class=" grid grid-cols-3 py-[20px]" >
                <div v-for="item in categData" :key="item.id">
                      <NuxtLink :to="item.linkTo">
                    <div>
                        <img :src="`/_nuxt/assets/images/home/${item.images.url}`" :alt="item.images.alt" height="100%" width="100%"/>
                    </div>
                </NuxtLink>
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
                <NuxtLink to="/products">
                  <p class="text-center">See More</p>
                </NuxtLink>
                
              </div>
              <div class="  h-[20vw] footer-bg bg-no-repeat bg-cover bg-bottom">
    </div>
        </div>

    </div>
</template>

<script>
 
export default {
    props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      categData: [
        {
          id: '1',
          linkTo: '/electronics',
          images: {
            url:'categ01.png',
            alt: 'thumb categ01'
          }
        },
        {
          id: '2',
          linkTo: '/jewelery',
          images: {
            url: 'categ02.png',
            alt: 'thumb categ02'
          }
        },
        {
          id: '3',
          linkTo: '/mens-clothing',
          images: {
            url: 'categ03.png',
            alt: 'thumb categ03'
          }
        }
      ]
    }
  }
}
</script>
