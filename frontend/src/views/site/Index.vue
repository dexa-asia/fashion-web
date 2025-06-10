<template>
    <main class="main-page">
        <section class="carousel">
            <div class="container">
                <img src="https://www.static-src.com/siva/asset/06_2025/CRTV1566_C1_HL_Nanami_05_25.jpg" class="img-fluid round w-100"/>
            </div>
        </section>
        <section class="featured pt-4 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-image">
                                <img src="https://images.tokopedia.net/img/cache/700/VqbcmM/2022/4/4/a500278d-c27e-435a-aa38-093084945155.jpg" class="img-fluid round"/>
                            </div>
                            <div class="card-body">
                                <div class="product-title">Baju Muslim Gadis Cantik</div>
                                <div class="product-about mt-2 mb-3 text-muted">ibi adala produk baju bagus dari kita, sample description</div>
                                <div class="product-price">1.500.000</div>
                                <div class="d-flex justify-content-between mt-2">
                                    <router-link to="/product/view/1234" class="btn btn-outline-secondary btn-round">View</router-link>
                                    <router-link to="/product/buy/1234" class="btn btn-primary btn-round">Buy</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <section class="pt-5"></section>

    </main>
</template>
<style scoped>
    .carousel{min-height: 300px;}
    .card-image img{border-radius: 20px 20px 0px 0px;}
    .product-title{font-weight: 500;font-size: 1.2em;}
    .product-price{}
    .w-100{width:100%!important}
</style>