<template>
  <tbody>
    <tr v-if="loadFlag">
      <td colspan="100">
        <div class="loading">
          <p><i class="loading"></i></p>
        </div>
      </td>
    </tr>
    <tr v-else-if="tableData.length" v-for="(row, idx) in tableData" :key="idx">
      <td
        v-for="(col, idx) in columns"
        :key="idx"
        colspan="100"
        :width="col.width ? col.width + 'px' : '200px'"
        :style="{ 'text-align': col.align || 'center' }"
      >
        <td-item :col="col" :row="row" />
      </td>
    </tr>

    <tr v-else>
      <td>暂无数据</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "RowItem",
  props: {
    tableData: Array,
    columns: Array,
  },
  data() {
    return {
      loadFlag: false,
    };
  },
};
</script>
<style scoped>
table tr td {
  border: 1px solid #ccc;
}
table tr:hover {
  background-color: rgb(237, 236, 236);
}
</style>
