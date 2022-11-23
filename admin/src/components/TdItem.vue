<template>
  <span>
    <a v-if="row[col.hasLink]" :href="row[col.hasLink]" target="_blank">{{
      row[col.field]
    }}</a>
    <span
      v-else-if="row[col.hasAction]"
      @click="customerAction(row)"
      class="cursor"
      >{{ row[col.field] }}</span
    >
    <span v-else>{{ row[col.field] }}</span>
  </span>
</template>

<script>
export default {
  name: "TdItem",
  props: {
    row: Object,
    col: Object,
  },
  methods: {
    customerAction(row) {
      return eval(row.customerAction);
    },
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
.cursor {
  cursor: pointer;
}
.cursor:hover {
  color: red;
}
</style>
