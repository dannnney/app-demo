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
      <div>
        <van-tabs v-model="tabs" :swipeable="true" class="tabs" :line-width="24" background="transparent">
          <van-tab title="全部"></van-tab>
          <van-tab title="待报名"></van-tab>
          <van-tab title="已报名"></van-tab>
          <van-tab title="进行中"></van-tab>
          <van-tab title="已结束"></van-tab>
        </van-tabs>
        <div class="flex-col justify-start group_1">
          <div class="flex-col list space-y-12">
            <div class="flex-col section_4" @click="onClick" v-for="(item, index) in items" :key="index">
              <img
                class="image_6"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915462234131031399.png"
              />
              <div class="flex-col group_5 space-y-9">
                <span class="self-start font_2">穿越记 好书享不停</span>
                <span class="font_3 text_4">
                  招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募…
                </span>
              </div>
              <div class="flex-row justify-between items-end list view">
                <div class="flex-col items-start">
                  <span class="font_4">报名开始：2022-06-04至2022-07-04</span>
                  <span class="font_4">活动开始：2023-03-04至2023-04-03</span>
                  <span class="font_4">活动地点：浙江省杭州市余杭区</span>
                </div>
                <div class="flex-col justify-start items-center button">
                  <span class="font_3 text_5">我要报名</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        items: [null, null],
        tabs: 1,
      };
    },

    methods: {
      onClick() {
        this.$router.push({ name: 'huodong_huodongxiangqing' });
      },
    },
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
    padding: 0.88rem 0.38rem 0.25rem 1rem;
    height: 5.38rem;
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
    height: 40.38rem;
    overflow-y: auto;
  }
  .list {
    padding: 0 1rem;
  }
  .group_1 {
    padding-top: 0.94rem;
  }
  .space-y-12 > *:not(:first-child) {
    margin-top: 0.75rem;
  }
  .section_4 {
    padding-bottom: 0.88rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .image_6 {
    border-radius: 0.25rem 0.25rem 0px 0px;
    width: 21.44rem;
    height: 8rem;
  }
  .group_5 {
    margin: 0.69rem 1.19rem 0 1rem;
  }
  .space-y-9 > *:not(:first-child) {
    margin-top: 0.56rem;
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
  .view {
    margin-top: 0.88rem;
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
  .text_5 {
    color: #ffffff;
    line-height: 1.25rem;
  }
  :deep(.tabs.van-tabs) .van-tab {
    color: #999999;
    font-weight: inherit;
    font-family: 'PingFang SC';
    font-size: 1.13rem;
    line-height: 1.56rem;
  }
  :deep(.tabs.van-tabs) .van-tab--active {
    color: #111111;
    font-weight: 500;
    font-family: 'PingFang SC';
    font-size: 1.13rem;
    line-height: 1.56rem;
  }
</style>