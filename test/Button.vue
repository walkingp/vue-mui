<template>
    <div class="app">
        <div class="row">
            <m-button>按钮</m-button>
            <m-button type="primary">按钮</m-button>
            <m-button type="success">按钮</m-button>
            <m-button type="info">按钮</m-button>
            <m-button type="warning">按钮</m-button>
        </div>
        <div class="row">
            <m-button plain>按钮</m-button>
            <m-button plain type="primary">按钮</m-button>
            <m-button plain type="success">按钮</m-button>
            <m-button plain type="info">按钮</m-button>
            <m-button plain type="warning">按钮</m-button>
        </div>
        <div class="row">
            <m-button round plain>按钮</m-button>
            <m-button round plain type="primary">按钮</m-button>
            <m-button round plain type="success">按钮</m-button>
            <m-button round plain type="info">按钮</m-button>
            <m-button round plain type="warning">按钮</m-button>
        </div>
        <div class="row">
            <m-button circle>OK</m-button>
            <m-button circle type="primary">OK</m-button>
            <m-button circle type="success">OK</m-button>
            <m-button circle type="info">OK</m-button>
            <m-button circle type="warning">OK</m-button>
        </div>
        <div class="row">
            <m-button plain>字体</m-button>
            <m-button icon="m-icon-check" circle plain type="primary"></m-button>
            <m-button icon="m-icon-message" circle plain type="success"></m-button>
            <m-button icon="m-icon-search" circle plain type="info"></m-button>
            <m-button icon="m-icon-star-off" plain type="warning">字体图标</m-button>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    jump(e) {}
  }
};
</script>

<style lang="scss" scoped>
.app {
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.row {
  padding: 10px 0;
}
.m-button {
  margin-left: 10px;
}
</style>