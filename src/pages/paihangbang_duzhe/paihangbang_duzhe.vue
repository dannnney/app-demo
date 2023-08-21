<template>
  <div class="flex-col page">
    <div class="flex-col flex-auto group">
      <div class="flex-col section space-y-23">
        <span class="self-start text">首页</span>
        <div class="flex-col">
          <div class="flex-row space-x-16">
            <span class="font_1">推荐</span>
            <span class="text_2">借阅排行</span>
            <span class="font_1 text_3">共享排行</span>
          </div>
          <div class="self-start section_2 view"></div>
        </div>
      </div>
      <div class="flex-col relative section_3">
        <div class="flex-col group_2">
          <div class="flex-row justify-between group_3">
            <span class="font_2 text_4">图书排行榜</span>
            <span class="text_5">读者排行榜</span>
          </div>
          <div class="self-end section_2 view_2"></div>
        </div>
        <Duzhephb></Duzhephb>
      </div>
    </div>
    <div class="flex-row tab-bar">
      <div class="flex-col justify-start items-center image-wrapper">
        <img
          class="image_2"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922369275228413776.png"
        />
      </div>
      <div class="flex-col justify-start items-center image-wrapper view_3">
        <img
          class="image_2"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16916378951463496578.png"
        />
      </div>
      <div class="flex-col justify-start items-center image-wrapper view_4">
        <img
          class="image_3"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922369277178914170.png"
        />
      </div>
      <div class="flex-col justify-start items-center image-wrapper view_5">
        <img
          class="image_2"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16916378950963796658.png"
        />
      </div>
      <div class="flex-col justify-start items-center image-wrapper view_6">
        <img
          class="image_4"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16916378951632302848.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Duzhephb from '../../components/duzhephb/duzhephb.vue';

  export default {
    components: { Duzhephb },
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
    padding: 3rem 1rem 6.25rem;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922369275173927702.png');
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
    color: #ffffff;
    font-size: 1.13rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.56rem;
  }
  .text_3 {
    font-weight: 500;
  }
  .section_2 {
    background-image: linear-gradient(96deg, #80c4ff 0%, #80c4ff -3.24%, #5298ff 101.33%, #5298ff 100%);
    border-radius: 0.13rem;
    width: 1.5rem;
    height: 0.25rem;
  }
  .view {
    margin-left: 4.75rem;
  }
  .section_3 {
    margin: -4.94rem 1rem 0;
    padding: 1.44rem 2.63rem 1.19rem;
    background-color: #ffffff;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  .group_2 {
    padding: 0 1.06rem;
  }
  .group_3 {
    padding-bottom: 0.19rem;
  }
  .font_2 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1rem;
    color: #333333;
  }
  .text_4 {
    color: #dddddd;
    line-height: 1.25rem;
  }
  .text_5 {
    color: #111111;
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.25rem;
  }
  .view_2 {
    margin-right: 1.44rem;
  }
  .tab-bar {
    padding: 0.25rem 1.63rem;
    background-color: #ffffff;
  }
  .image-wrapper {
    width: 2.69rem;
  }
  .image_2 {
    width: 1.5rem;
    height: 2.5rem;
  }
  .view_3 {
    margin-left: 1.38rem;
  }
  .view_4 {
    margin-left: 2rem;
  }
  .image_3 {
    width: 2.69rem;
    height: 2.5rem;
  }
  .view_5 {
    margin-left: 1.94rem;
  }
  .view_6 {
    margin-left: 1.38rem;
  }
  .image_4 {
    width: 1.5rem;
    height: 2.53rem;
  }
</style>