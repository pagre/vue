computed(){
    cheData(){
        return this.$store.state.carData
    }
}




mounted(){
    this.$store.dispatch('cartDataG',{})
}


<p>{{cheData}}</p>