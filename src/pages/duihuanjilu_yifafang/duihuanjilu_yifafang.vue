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
          <span class="text_2">兑换记录</span>
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
    <div class="flex-col justify-start flex-auto group_2">
      <div class="flex-col">
        <div class="flex-col group_3">
          <div class="flex-row justify-center relative group_4">
            <span class="font_1 pos">全部</span>
            <span class="font_1">待发放</span>
            <span class="font_1 text_3 pos_2">已发放</span>
          </div>
          <div class="self-end section_3"></div>
        </div>
        <div class="flex-col list space-y-16">
          <div class="flex-col list-item" v-for="(item, index) in items" :key="index">
            <div class="flex-row items-center group_5 space-x-10">
              <img
                class="image_7"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464069977522891.png"
              />
              <div class="flex-col items-start">
                <span class="font_2">张亮</span>
                <span class="font_3">13712837192</span>
              </div>
            </div>
            <div class="flex-row items-center group_6 space-x-8">
              <img
                class="image_8"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464069661639706.png"
              />
              <div class="flex-col items-start">
                <span class="font_4">熊</span>
                <span class="font_3">积分数量：10000</span>
                <span class="font_3">商品价格：99.99</span>
                <span class="font_3">申请时间：2023-08-03 14:01:35</span>
                <span class="font_3">发放时间：2023-08-03 14:01:35</span>
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
        items: [null, null, null, null],
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
    height: 5.44rem;
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
  .space-x-14 > *:not(:first-child) {
    margin-left: 0.88rem;
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
    padding-top: 0.38rem;
    height: 45.31rem;
    overflow-y: auto;
  }
  .group_3 {
    padding: 0 3.5rem 1rem 4.13rem;
  }
  .group_4 {
    padding: 1rem 0 0.19rem;
  }
  .font_1 {
    font-size: 1.13rem;
    font-family: 'PingFang SC';
    line-height: 1.56rem;
    color: #999999;
  }
  .pos {
    position: absolute;
    left: 0;
    bottom: 0.19rem;
  }
  .text_3 {
    color: #111111;
    font-weight: 500;
  }
  .pos_2 {
    position: absolute;
    right: 0;
    bottom: 0.19rem;
  }
  .section_3 {
    margin-right: 0.94rem;
    background-image: linear-gradient(96deg, #80c4ff 0%, #80c4ff -3.24%, #5298ff 101.33%, #5298ff 100%);
    border-radius: 0.13rem;
    width: 1.5rem;
    height: 0.25rem;
  }
  .list {
    padding: 0 1rem;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 1rem;
  }
  .list-item {
    padding: 0 1rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .group_5 {
    padding: 0.75rem 0 0.56rem;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .space-x-10 > *:not(:first-child) {
    margin-left: 0.63rem;
  }
  .image_7 {
    border-radius: 50%;
    width: 2.25rem;
    height: 2.25rem;
  }
  .font_2 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    font-weight: 500;
    color: #333333;
  }
  .font_3 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .group_6 {
    padding: 0.75rem 0 1rem;
  }
  .image_8 {
    border-radius: 0.25rem;
    width: 3.44rem;
    height: 5rem;
  }
  .font_4 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .space-x-8 > *:not(:first-child) {
    margin-left: 0.5rem;
  }
</style>