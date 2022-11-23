<template>
  <div class="table">
    <table>
      <!--表头-->
      <component
        :is="table.tableHeaderComp"
        :columns="table.tableColumns"
      ></component>

      <!--表体-->
      <component
        :is="table.tableBodyComp"
        :columns="table.tableColumns"
        :tableData="table.tableData"
      ></component>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    table: Object,
  },
};
</script>
<style scoped>
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
}
</style>
