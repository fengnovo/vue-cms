<template>
  <div class="all">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="50vh"
    >
      <rect
        width="300"
        height="300"
        style="fill: yellow; stroke-width: 1; stroke: rgb(0, 0, 0)"
      />
      <rect
        x="60"
        y="40"
        width="60"
        height="60"
        style="fill: #eee; stroke-width: 6; stroke: cyan"
        rx="20"
        ry="20"
      />
      <rect
        x="180"
        y="40"
        width="60"
        height="60"
        style="fill: #eee; stroke-width: 6; stroke: cyan"
        rx="20"
        ry="20"
      />
      <circle
        cx="150"
        cy="150"
        r="20"
        style="storke: black; stroke-width: 2; fill: rgb(252, 204, 149)"
      />
      <ellipse
        cx="150"
        cy="200"
        rx="100"
        ry="30"
        style="storke: white; stroke-width: 1; fill: red"
      />
      <ellipse cx="150" cy="180" rx="100" ry="20" style="fill: yellow" />
      <!-- <line x1="300" y1="0" x2="0" y2="300" style="stroke:pink;stroke-width:5"/> -->
      <circle cx="230" cy="70" r="60" fill="url(#grad1)" />
      <polygon
        points="150,240 120,280 180,280"
        style="fill: brown; stroke: balck; stroke-width: 2"
      />
      <!-- polyline表示不闭合图形有默认填充色黑色 -->
      <polyline
        points="0,180 40,180 40,220 80,220 80,260 120,260 120,300"
        style="fill: yellow; stroke: red; stroke-width: 4"
      />
      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: yellow" />
          <stop offset="100%" style="stop-color: cyan" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>
<script>
export default {
  name: "TestWrapper",
};
</script>
<style lang="scss" scoped="scoped">
.all {
  overflow: hidden;
}
</style>


