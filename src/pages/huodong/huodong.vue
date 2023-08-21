<template>
  <div class="flex-col page">
    <div class="flex-col header space-y-16">
      <div class="flex-row justify-between items-center group">
        <span class="text">9:41</span>
        <div class="flex-row space-x-4">
          <img
            class="image"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735782826391.png"
          />
          <img
            class="image_2"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735763872939.png"
          />
          <img
            class="image_3"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/c0194aaf4254461e3505b30093a5166e.png"
          />
        </div>
      </div>
      <div class="flex-row justify-between items-center">
        <span class="text_2">活动</span>
        <div class="flex-row items-center section space-x-12">
          <div class="flex-col justify-start items-center image-wrapper">
            <img
              class="image_5"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735816096547.png"
            />
          </div>
          <div class="section_2"></div>
          <div class="flex-col justify-start items-center image-wrapper">
            <img
              class="image_4"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735802507405.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col justify-start flex-auto group_2">
      <div class="flex-col space-y-3">
        <div class="flex-col group_3">
          <div class="flex-row justify-between group_4">
            <span class="font_1 text_3">全部</span>
            <span class="font_1">待报名</span>
            <span class="font_1">已报名</span>
            <span class="font_1">进行中</span>
            <span class="font_1">已结束</span>
          </div>
          <div class="self-start section_3"></div>
        </div>
        <div class="flex-col list group_5 space-y-12">
          <div class="flex-col list-item" v-for="(item, index) in items" :key="index">
            <img
              class="image_6"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915462234131031399.png"
            />
            <div class="flex-col group_6 space-y-9">
              <span class="self-start font_2">穿越记 好书享不停</span>
              <span class="font_3 text_4">
                招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募…
              </span>
            </div>
            <div class="flex-row justify-between items-end list">
              <div class="flex-col items-start">
                <span class="font_4">报名开始：2022-06-04至2022-07-04</span>
                <span class="font_4">活动开始：2023-03-04至2023-04-03</span>
                <span class="font_4">活动地点：浙江省杭州市余杭区</span>
              </div>
              <div class="flex-col justify-start items-center button"><span class="font_5">我要报名</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-row justify-between tab-bar">
      <div class="flex-col items-center group_8">
        <img
          class="image_8"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/edb4c546f55b1b1becd6eefe54966997.png"
        />
        <span class="font_6">首页</span>
      </div>
      <div class="flex-col items-center group_8">
        <img
          class="image_8"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/94499e0a4cde5f6fddc48fd526071313.png"
        />
        <span class="font_6">图书</span>
      </div>
      <div class="flex-col items-center group_8">
        <img
          class="image_8"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/ae02826851aabc6fa2f53669e41f6089.png"
        />
        <span class="font_6">读书心得</span>
      </div>
      <div class="flex-col items-center group_8">
        <img
          class="image_8"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/e80f6167f5dd7930108442cdcea9ef71.png"
        />
        <span class="font_4 text_6">活动</span>
      </div>
      <div class="flex-col items-center group_9">
        <img
          class="image_8"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/d0cdd823551c23c2f906a460c70723a4.png"
        />
        <span class="font_6">我的</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        items: [null, null, null],
      };
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
  .header {
    padding: 0.88rem 0.38rem 0.38rem 1rem;
    height: 5.5rem;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 1rem;
  }
  .group {
    padding-left: 1.13rem;
    padding-right: 0.5rem;
  }
  .text {
    color: #000000;
    font-size: 0.94rem;
    font-family: '.AppleSystemUIFont';
    line-height: 1.13rem;
    letter-spacing: -0.019rem;
  }
  .space-x-4 > *:not(:first-child) {
    margin-left: 0.25rem;
  }
  .image {
    width: 1.06rem;
    height: 0.69rem;
  }
  .image_2 {
    width: 0.97rem;
    height: 0.69rem;
  }
  .image_3 {
    width: 1.53rem;
    height: 0.72rem;
  }
  .text_2 {
    color: #111111;
    font-size: 1.38rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.88rem;
  }
  .section {
    margin-top: 0.13rem;
    padding: 0.38rem 0.75rem;
    background-color: #ffffff9e;
    border-radius: 0.97rem;
    height: 1.94rem;
    border: solid 0.031rem #00000012;
  }
  .space-x-12 > *:not(:first-child) {
    margin-left: 0.75rem;
  }
  .image-wrapper {
    width: 1.03rem;
  }
  .image_5 {
    width: 1.03rem;
    height: 0.34rem;
  }
  .section_2 {
    background-color: #eaeaea;
    width: 0.031rem;
    height: 1.13rem;
  }
  .image_4 {
    width: 1rem;
    height: 1rem;
  }
  .group_2 {
    height: 62.19rem;
    overflow-y: auto;
  }
  .space-y-3 > *:not(:first-child) {
    margin-top: 0.19rem;
  }
  .group_3 {
    padding: 0 1rem 0.81rem;
  }
  .group_4 {
    padding: 0.81rem 0 0.063rem;
  }
  .font_1 {
    font-size: 1.13rem;
    font-family: 'PingFang SC';
    line-height: 1.56rem;
    color: #999999;
  }
  .text_3 {
    color: #111111;
    font-weight: 500;
  }
  .section_3 {
    margin-left: 0.38rem;
    background-image: linear-gradient(96deg, #80c4ff 0%, #80c4ff -3.24%, #5298ff 101.33%, #5298ff 100%);
    border-radius: 0.13rem;
    width: 1.5rem;
    height: 0.25rem;
  }
  .list {
    margin-top: 0.88rem;
    padding: 0 1rem;
  }
  .group_5 {
    margin-top: 0;
  }
  .space-y-12 > *:not(:first-child) {
    margin-top: 0.75rem;
  }
  .list-item {
    padding-bottom: 0.88rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .image_6 {
    width: 21.44rem;
    height: 8rem;
  }
  .group_6 {
    margin: 0.69rem 1.19rem 0 1rem;
  }
  .font_2 {
    font-size: 1rem;
    font-family: 'PingFang SC';
    line-height: 1.38rem;
    font-weight: 500;
    color: #333333;
  }
  .font_3 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.56rem;
    color: #333333;
  }
  .text_4 {
    line-height: 1.5rem;
    text-align: left;
  }
  .font_4 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    font-weight: 500;
    color: #999999;
  }
  .button {
    padding: 0.13rem 0;
    background-color: #5298ff;
    border-radius: 0.75rem;
    width: 4.5rem;
    height: 1.5rem;
  }
  .font_5 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #ffffff;
  }
  .space-y-9 > *:not(:first-child) {
    margin-top: 0.56rem;
  }
  .tab-bar {
    padding: 0.13rem 2.13rem 0;
    background-color: #ffffff;
  }
  .group_8 {
    height: 2.59rem;
  }
  .image_8 {
    width: 1.69rem;
    height: 1.69rem;
  }
  .font_6 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    font-weight: 500;
    color: #333333;
  }
  .text_6 {
    color: #5298ff;
  }
  .group_9 {
    height: 2.66rem;
  }
</style>