<template>
  <div class="flex-col page">
    <div class="flex-col flex-auto group">
      <div class="flex-col section space-y-23">
        <span class="self-start text">首页</span>
        <div class="flex-col">
          <div class="flex-row space-x-16">
            <span class="font_1">推荐</span>
            <span class="font_1 text_2">借阅排行</span>
            <span class="text_3">共享排行</span>
          </div>
          <div class="self-center section_3"></div>
        </div>
      </div>
      <Gongxiangphb></Gongxiangphb>
    </div>
    <div class="flex-row tab-bar">
      <div class="flex-col justify-start items-center image-wrapper">
        <img
          class="image_3"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922369271566695259.png"
        />
      </div>
      <div class="flex-col justify-start items-center image-wrapper view_2">
        <img
          class="image_3"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16916378951463496578.png"
        />
      </div>
      <div class="flex-col justify-start items-center image-wrapper view_3">
        <img
          class="image_4"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922369273119808667.png"
        />
      </div>
      <div class="flex-col justify-start items-center image-wrapper view_4">
        <img
          class="image_3"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16916378950963796658.png"
        />
      </div>
      <div class="flex-col justify-start items-center image-wrapper view_5">
        <img
          class="image_5"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16916378951632302848.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Gongxiangphb from '../../components/gongxiangphb/gongxiangphb.vue';

  export default {
    components: { Gongxiangphb },
    props: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    background-color: #f9f9f9;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .group {
    overflow-y: auto;
  }
  .section {
    padding: 3rem 1rem 1.56rem;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922369266030831954.png');
    background-position: 0% 0%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .space-y-23 > *:not(:first-child) {
    margin-top: 1.44rem;
  }
  .text {
    color: #ffffff;
    font-size: 1.38rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.88rem;
  }
  .space-x-16 > *:not(:first-child) {
    margin-left: 1rem;
  }
  .font_1 {
    font-size: 1.13rem;
    font-family: 'PingFang SC';
    line-height: 1.56rem;
    color: #ffffff80;
  }
  .text_2 {
    font-weight: 500;
  }
  .text_3 {
    color: #ffffff;
    font-size: 1.13rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.56rem;
  }
  .section_3 {
    background-image: linear-gradient(96deg, #80c4ff 0%, #80c4ff -3.24%, #5298ff 101.33%, #5298ff 100%);
    border-radius: 0.13rem;
    width: 1.5rem;
    height: 0.25rem;
  }
  .tab-bar {
    padding: 0.25rem 1.63rem 0;
    background-color: #ffffff;
  }
  .image-wrapper {
    width: 2.69rem;
  }
  .image_3 {
    width: 1.5rem;
    height: 2.5rem;
  }
  .view_2 {
    margin-left: 1.38rem;
  }
  .view_3 {
    margin-left: 2rem;
  }
  .image_4 {
    width: 2.69rem;
    height: 2.5rem;
  }
  .view_4 {
    margin-left: 1.94rem;
  }
  .view_5 {
    margin-left: 1.38rem;
  }
  .image_5 {
    width: 1.5rem;
    height: 2.53rem;
  }
</style>