<template>
    <nav class='sticky top-0 z-30 bg-[#F3F3F3] container-fluid '>
    <div class="container-full">
        <div class=" flex justify-between items-center">
            <NuxtLink to="/">  <div class=" max-w-[80px]">
                <img src="/assets/images/logo.png" alt="thumb"  >
            </div></NuxtLink>
          
            <div>
                <ul class="flex gap-[50px] text-li">
                    <NuxtLink to="/about"> <li>Contact</li></NuxtLink>
                    <li>Eng</li>
                </ul>
            </div>
            
        </div>

    </div>
    </nav>
</template>