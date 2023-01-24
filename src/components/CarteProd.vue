<template >
    <div>
        <h2>{{ product.nom }}</h2>
        <span>{{ product.prix }}</span>
        <span>{{ product.stock }}</span>
    </div>
</template>


<script>
export default {
    nom: 'CarteProd',
    props: [
        'product'
    ]
}
</script>



<style >
    
</style>