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
        <div class="flex-row items-center space-x-14">
          <img
            class="shrink-0 image_4"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437501403442894.png"
          />
          <span class="text_2">活动管理</span>
        </div>
        <div class="flex-row items-center section space-x-12">
          <div class="flex-col justify-start items-center image-wrapper">
            <img
              class="image_6"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735816096547.png"
            />
          </div>
          <div class="section_2"></div>
          <div class="flex-col justify-start items-center image-wrapper">
            <img
              class="image_5"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735802507405.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col flex-auto group_2">
      <div class="flex-col group_3">
        <div class="flex-row justify-between items-center section_3">
          <span class="text_3">请输入活动标题/活动地点/活动状态</span>
          <img
            class="image_7"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/26d4526839e8f82a2c5f6dba61e44a19.png"
          />
        </div>
        <div class="flex-row items-center group_4 space-x-14">
          <img
            class="shrink-0 image_8"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/b21fa720e3f9be97aa7f3ea878d62c1a.png"
          />
          <div class="flex-row justify-between flex-auto section_4">
            <div class="flex-col justify-start"><span class="font_1">开始日期</span></div>
            <div class="flex-col justify-start items-center text-wrapper"><span class="font_1">—</span></div>
            <div class="flex-col justify-start"><span class="font_1">结束日期</span></div>
          </div>
        </div>
      </div>
      <div class="flex-col line-tabs">
        <div class="flex-col group_5">
          <div class="flex-row justify-between group_6">
            <span class="font_2">全部</span>
            <span class="font_2">待报名</span>
            <span class="font_2">已报名</span>
            <span class="font_2">进行中</span>
            <span class="font_2 text_4">已结束</span>
          </div>
          <div class="self-end section_5"></div>
        </div>
        <div class="flex-col group_7 space-y-8">
          <img
            class="self-end image_9"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/6243fda81e38161df8e1b7ed4348fc11.png"
          />
          <div class="flex-col justify-start items-end relative group_8">
            <img
              class="image_9"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/6243fda81e38161df8e1b7ed4348fc11.png"
            />
            <div class="flex-col space-y-32 pos">
              <div class="flex-col section_6" v-for="(item, index) in items" :key="index">
                <img
                  class="image_10"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915462234131031399.png"
                />
                <div class="flex-col group_9 space-y-9">
                  <span class="self-start font_3">穿越记 好书享不停</span>
                  <span class="font_4 text_5">
                    招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募…
                  </span>
                </div>
                <div class="flex-col items-start group_3 view">
                  <span class="font_5">报名开始：2022-06-04至2022-07-04</span>
                  <span class="font_5">活动开始：2023-03-04至2023-04-03</span>
                  <span class="font_5">活动地点：浙江省杭州市余杭区</span>
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
  .image_4 {
    width: 0.72rem;
    height: 1.28rem;
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
  .image_6 {
    width: 1.03rem;
    height: 0.34rem;
  }
  .section_2 {
    background-color: #eaeaea;
    width: 0.031rem;
    height: 1.13rem;
  }
  .image_5 {
    width: 1rem;
    height: 1rem;
  }
  .group_2 {
    padding-top: 1.56rem;
    overflow-y: auto;
  }
  .group_3 {
    padding: 0 1rem;
  }
  .section_3 {
    padding: 0.5rem 1rem;
    background-color: #eeeeee;
    border-radius: 1.06rem;
  }
  .text_3 {
    color: #999999;
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
  }
  .image_7 {
    width: 0.94rem;
    height: 0.94rem;
  }
  .group_4 {
    padding-top: 1rem;
  }
  .space-x-14 > *:not(:first-child) {
    margin-left: 0.88rem;
  }
  .image_8 {
    width: 1.22rem;
    height: 1.19rem;
  }
  .section_4 {
    margin-right: 1.25rem;
    padding: 0.19rem 1.31rem;
    background-image: linear-gradient(90deg, #8ac9ff00 0%, #5298ff26 49.03%, #5298ff00 100.7%, #5298ff00 100%);
    height: 1.25rem;
  }
  .font_1 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .text-wrapper {
    width: 2.5rem;
  }
  .line-tabs {
    margin-bottom: -1.69rem;
  }
  .group_5 {
    padding: 0 1rem 0.75rem;
  }
  .group_6 {
    padding: 0.75rem 0 0.063rem;
  }
  .font_2 {
    font-size: 1.13rem;
    font-family: 'PingFang SC';
    line-height: 1.56rem;
    color: #999999;
  }
  .text_4 {
    color: #111111;
    font-weight: 500;
  }
  .section_5 {
    margin-right: 0.94rem;
    background-image: linear-gradient(96deg, #80c4ff 0%, #80c4ff -3.24%, #5298ff 101.33%, #5298ff 100%);
    border-radius: 0.13rem;
    width: 1.5rem;
    height: 0.25rem;
  }
  .group_7 {
    padding: 0.25rem 1rem 0;
  }
  .space-y-8 > *:not(:first-child) {
    margin-top: 0.5rem;
  }
  .image_9 {
    margin-right: 0.19rem;
    width: 0.5rem;
    height: 0.53rem;
  }
  .group_8 {
    padding: 20.5rem 0 15.38rem;
  }
  .space-y-32 > *:not(:first-child) {
    margin-top: 2rem;
  }
  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .section_6 {
    padding-bottom: 0.88rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .image_10 {
    border-radius: 0.25rem 0.25rem 0px 0px;
    width: 21.44rem;
    height: 8rem;
  }
  .group_9 {
    margin: 0.69rem 1.19rem 0 1rem;
  }
  .font_3 {
    font-size: 1rem;
    font-family: 'PingFang SC';
    line-height: 1.38rem;
    font-weight: 500;
    color: #333333;
  }
  .font_4 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.56rem;
    color: #333333;
  }
  .text_5 {
    line-height: 1.5rem;
    text-align: left;
  }
  .view {
    margin-top: 0.88rem;
  }
  .font_5 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    font-weight: 500;
    color: #999999;
  }
  .space-y-9 > *:not(:first-child) {
    margin-top: 0.56rem;
  }
</style>