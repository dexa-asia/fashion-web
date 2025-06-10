<template>
    <main class="g-sidenav-show" @mousemove="resetTimer" @keydown="resetTimer">
        <Navbar/>
            <div class="main-page">
                 <router-view/>
            </div>
       
        <Footer/>
    </main>
    
</template>


<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default{
    components:{
        Navbar,
        Footer
    }
}
</script>