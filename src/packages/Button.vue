<template>
 <div>
     <button>
       <!-- 判断标签内是否有值，有值则显示无值则不显示标签 -->
       <span v-if="this.$slots.default"><slot></slot></span>
     </button>
 </div>
</template>

<script>
 export default {
   name:'em-button',
   props:{
     type:{
        type:'String',
        default:'',
        validator(type){
          if(type&&!['primary','success','info','warning','danger'].includes(type)){
            console.error('type的类型必须为'+['primary','success','info','warning','danger'].join('、'))
          }
        }
     }
   },
   data () {
     return {

     }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>