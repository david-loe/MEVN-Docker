<script setup>
import { ref } from 'vue'
import { getter } from './api.js'
import HelloWorld from './components/HelloWorld.vue'

// Create a ref to hold user data
const user = ref(null)

// Fetch user data asynchronously
const fetchUser = async () => {
  user.value = await getter('user')
}

// Call the function to fetch data
fetchUser()
</script>

<template>
  <Suspense>
    <template #default>
      <p v-if="user">User: {{ user }}</p>
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>

  <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

  <div class="wrapper">
    <HelloWorld msg="You did it!" />
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
