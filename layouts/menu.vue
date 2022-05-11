<template>
  <div class="common-layout">
    <el-container class="common-layout-container">
      <el-header class="common-layout-header">Header</el-header>
      <el-container>
        <el-aside class="common-layout-aside" width="200px">Aside</el-aside>
        <el-container>
          <el-main class="common-layout-main"><slot></slot></el-main>
          <el-footer class="common-layout-footer">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style lang='less' scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
  &-container {
    height: 100%;
  }
  &-header {
    background-color: #c6e2ff;
  }
  &-aside {
    background-color: #d9ecff;
  }
  &-main {
    background-color: #ecf5ff;
  }
  &-footer {
    background-color: #c6e2ff;
  }
}
</style>