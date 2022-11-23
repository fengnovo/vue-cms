<template>
  <thead>
    <tr>
      <th
        v-for="(col, idx) in columns"
        :key="idx"
        colspan="100"
        :width="col.width ? col.width + 'px' : '200px'"
        :style="{ 'text-align': col.align || 'center' }"
      >
        {{ col.title }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "TableHeader",
  props: {
    columns: Array,
  },
};
</script>
<style scoped>
table tr th {
  border: 1px solid #ccc;
}
</style>

