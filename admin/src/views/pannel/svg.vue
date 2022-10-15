<template>
  <div class="all">
    <div>rect 矩形</div>
    <rect
      width="300"
      height="100"
      style="fill: rgb(0, 0, 255); stroke-width: 1; stroke: rgb(0, 0, 0)"
    />
    <br />
    <div>ellipse 可以使用圆形，不过椭圆同样可以满足需求</div>
    <ellipse
      cx="300"
      cy="80"
      rx="100"
      ry="50"
      style="fill: yellow; stroke: purple; stroke-width: 2"
    />
    <br />
    <div>line 直线</div>
    <line
      x1="0"
      y1="0"
      x2="200"
      y2="200"
      style="stroke: rgb(255, 0, 0); stroke-width: 2"
    />
    <br />
    <div>polygon 多边形</div>
    <polygon
      points="200,10 250,190 160,210"
      style="fill: lime; stroke: purple; stroke-width: 1"
    />
    <br />
    <div>polyline 多线段，适用于绘制2d折线图或柱状图</div>
    <polyline
      points="20,20 40,25 60,40 80,120 120,140 200,180"
      style="fill: none; stroke: black; stroke-width: 3"
    />
    <br />
    <div>path 应用范围广，能绘制大部分图形</div>
    <path
      d="M80 100 L80 170 L100 170 L100 100"
      style="stroke: balck; fill: white"
    />
    <br />
  </div>
</template>
<script>
export default {
  name: "TestWrapper",
};
</script>
<style lang="scss" scoped="scoped">
.all {
  border-radius: 8px;
  overflow: hidden;
  background-color: skyblue;
}
</style>


