<template>
  <div>
    <h1>Stuff</h1>
    <ul>
      {{ stuff }}
    </ul>

    <button @click="create">
      Create stuff :)
    </button>
  </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      stuff: [],
    };
  },
  mounted() {
    this.fetchStuff();
  },
  methods: {
    async fetchStuff() {
      try {
        const response = await axios.get('http://localhost:8000/api/test');
        this.stuff = response.data;
      } catch (error) {
        console.error('Error fetching stuff:', error);
      }
    },

    async create() {
      try {
        await axios.post('http://localhost:8000/api/create', {
          body: JSON.stringify({content: 'stuff from vue'})
        }).then(async () => {
          await this.fetchStuff();
        });
      } catch (error) {
        console.error('Error creating stuff:', error);
      }
    }
  }
}
</script>
