<template>
    <div>
     <Home :products="products"/>
    </div>
  </template>
  <script setup>

   const { data: products } = await useFetch(`https://fakestoreapi.com/products?limit=12&sort=desc`);
  
  </script>