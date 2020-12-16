export default{
    name: "model",
    props:["carproduct", "info", 'show'],
    data: function(){
        return {
        }
    },

    template: 
    `<div class="type-box-item" @click="clickImg(info)">
        <img class="mini" :src="getRealImgPath(carproduct.images)" :alt='carProduct.model'>
        <article  v-if="show == info" :class="{ 'light': show }">
            <h5>{{ caritem.model }}</h5>
            <h5>{{ caritem.price }}</h5>
            <h5>{{ caritem.detail }}</h5>
        </article>
    </div>`,

        methods:{
            clickImg(ind) {

                // console.log(`fired from inside ${this.cooper.model} the component!`);
                this.$emit("change", ind)
            },

            getRealImgPath(imgName){
                return "images/"+imgName;
            }

            
        },
        mounted() {
         console.log('mini',this.carproduct);   
        },
        
}
