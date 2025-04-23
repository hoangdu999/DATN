<template>
    <div class="search-bar">
        <input type="text" v-model="searchQuery" @input="onSearch" placeholder="Search..." />
    </div>
</template>

<script>
export default {
    name: "SearchBar",
    data() {
        return {
            searchQuery: ""
        };
    },
    methods: {
        onSearch() {
            // Emit the search query to the parent component
            this.$emit("search", this.searchQuery);
        }
    }
};
</script>

<style scoped>
.search-bar {
    width: 625px;
}

input {
    width: 100%;
    padding: 8px;
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid black;
}
</style>
