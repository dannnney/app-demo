<template>
  <div class="flex-col justify-start relative page">
    <div class="flex-col group">
      <div class="flex-row items-center section space-x-14">
        <img
          class="image"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437498935904099.png"
        />
        <span class="text">我的积分</span>
      </div>
      <div class="flex-col relative group_2 space-y-24">
        <div class="flex-col section_2 space-y-25">
          <div class="flex-row justify-between items-start">
            <span class="text_2">可用积分</span>
            <img
              class="image_2 image_3"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377122328698450.png"
            />
          </div>
          <div class="flex-row justify-between items-center">
            <span class="text_3">99999</span>
            <img
              class="image_2"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377122389542898.png"
            />
          </div>
        </div>
        <div class="flex-row justify-between">
          <span class="font_1 text_4">积分商城</span>
          <span class="font_1 text_5">积分规则</span>
        </div>
      </div>
    </div>
    <div class="grid pos">
      <div class="flex-col grid-item">
        <div class="flex-col items-center group_3">
          <img
            class="image_4"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464147607060800.png"
          />
          <span class="font_1">熊</span>
          <span class="font_2 text_6">1积分</span>
          <span class="font_3 text_7">剩余1</span>
        </div>
        <div class="flex-col justify-start items-center text-wrapper button"><span class="font_4">立即兑换</span></div>
      </div>
      <div class="flex-col grid-item">
        <div class="flex-col items-center group_3">
          <img
            class="image_4"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464147607060800.png"
          />
          <span class="font_1">熊</span>
          <span class="font_2 text_6">1积分</span>
          <span class="font_3 text_7">剩余1</span>
        </div>
        <div class="flex-col justify-start items-center text-wrapper button"><span class="font_4">立即兑换</span></div>
      </div>
      <div class="flex-col grid-item">
        <div class="flex-col items-center group_3">
          <img
            class="image_4"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464147607060800.png"
          />
          <span class="font_1">熊</span>
          <span class="font_2 text_6">1积分</span>
          <span class="font_3 text_7">剩余1</span>
        </div>
        <div class="flex-col justify-start items-center text-wrapper button"><span class="font_4">立即兑换</span></div>
      </div>
      <div class="flex-col grid-item">
        <div class="flex-col items-center group_3">
          <img
            class="image_4"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464147607060800.png"
          />
          <span class="font_1">熊</span>
          <span class="font_2 text_6">1积分</span>
          <span class="font_3 text_7">剩余1</span>
        </div>
        <div class="flex-col justify-start items-center text-wrapper button"><span class="font_4">立即兑换</span></div>
      </div>
      <div class="flex-col justify-start items-center grid-item_2">
        <img
          class="image_4"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464147607060800.png"
        />
      </div>
    </div>
    <div class="flex-col justify-start items-center equal-division-item image-wrapper">
      <img
        class="image_4"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464147607060800.png"
      />
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    padding-bottom: 3.63rem;
    background-color: #f9f9f9;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .group {
    height: 47.13rem;
  }
  .section {
    padding: 3rem 1rem 4.88rem;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922369266030831954.png');
    background-position: 0% 0%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .space-x-14 > *:not(:first-child) {
    margin-left: 0.88rem;
  }
  .image {
    width: 0.72rem;
    height: 1.28rem;
  }
  .text {
    color: #ffffff;
    font-size: 1.38rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.88rem;
  }
  .group_2 {
    margin-top: -1.19rem;
    padding: 0 1rem 28.38rem;
  }
  .space-y-24 > *:not(:first-child) {
    margin-top: 1.5rem;
  }
  .section_2 {
    padding: 1rem 0 1.94rem 1rem;
    filter: drop-shadow(0px 0.13rem 0.34rem #5298ff70);
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377121995337225.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .space-y-25 > *:not(:first-child) {
    margin-top: 1.56rem;
  }
  .text_2 {
    color: #ffffff;
    font-size: 1.13rem;
    font-family: 'DingTalk JinBuTi';
    line-height: 1.31rem;
    font-style: italic;
  }
  .image_2 {
    width: 3.25rem;
    height: 1.25rem;
  }
  .image_3 {
    margin-top: 0.56rem;
  }
  .text_3 {
    color: #ffffff;
    font-size: 1.5rem;
    font-family: 'DIN Condensed';
    font-weight: 700;
    line-height: 1.5rem;
  }
  .font_1 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    font-weight: 500;
    color: #333333;
  }
  .text_4 {
    color: #5298ff;
  }
  .text_5 {
    margin-right: 0.19rem;
    color: #999999;
  }
  .grid {
    height: 34.63rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0.63rem;
    column-gap: 0.63rem;
  }
  .pos {
    position: absolute;
    left: 0.69rem;
    right: 1rem;
    top: 20.06rem;
  }
  .grid-item {
    padding-bottom: 1rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .group_3 {
    padding: 0.56rem 0 0.38rem;
  }
  .image_4 {
    border-radius: 0.25rem;
    width: 4.63rem;
    height: 6.44rem;
  }
  .font_2 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #5298ff;
  }
  .text_6 {
    margin-top: 0.25rem;
  }
  .font_3 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #111111;
  }
  .text_7 {
    margin-top: 0.19rem;
  }
  .text-wrapper {
    align-self: center;
  }
  .button {
    padding: 0.25rem 0;
    background-color: #5298ff;
    border-radius: 0.84rem;
    width: 4.5rem;
  }
  .font_4 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #ffffff;
  }
  .grid-item_2 {
    padding-top: 0.56rem;
    background-color: #ffffff;
    border-radius: 0.25rem 0.25rem 0 0;
  }
  .equal-division-item {
    position: absolute;
    right: 1.31rem;
    top: 47.69rem;
  }
  .image-wrapper {
    padding-top: 0.56rem;
    background-color: #ffffff;
    border-radius: 0.25rem 0.25rem 0 0;
    width: 10.44rem;
  }
</style>