<template>

    <div class="header-component">

        <div class="rectangle">

        </div>
        <h1>The Magnificent Seven Companies</h1>
    </div>

</template>

<script>

export default {
  name: 'headerComponent',
  props: {
    name: String,
    label: String
  }
}

</script>

<style scoped>
.header-component {
    display: flex;
    align-items: center;
    gap: 24px;
}

.rectangle {
    width: 96px;
    height: 32px;
    border-radius: 0 100px 100px 0;
    background-color: #39DAFF;
}

h1 {
    font-size: 36px;
    color: #F9F9F9;
    font-weight: 500px;
}


</style>