<template>

<div  style="min-height: 300px;" class="col-md-auto">
  <div class="card">
    <div class="card-header"><b>{{word}}</b></div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li v-for="restrictedWord in restrictedWords" :key="restrictedWord" class="list-group-item">{{restrictedWord}}</li>
        <!-- <li class="list-group-item">Digital Marketing</li>
        <li class="list-group-item">Small Business</li>
        <li class="list-group-item">Email</li>
        <li class="list-group-item">Sales</li> -->
      </ul>
    </div> 
  </div>
</div>

</template>

<script>
export default {
  name: 'Card',
  props: {
    word: String,
    restrictedWords: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group{
  text-align:center;
}
.card-header{
  text-align:center;
}




</style>
