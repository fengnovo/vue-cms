<template>
  <div class="container">
    <component :is="table.tableComp" :table="table"></component>
  </div>
</template>

<script>
import { lowcode } from "@/api/listApi.js";
export default {
  name: "App",
  data() {
    return {
      table: {
        tableComp: "Table",
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      lowcode().then((res) => {
        this.table = res.data;
        console.log(this.table);
      });
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>