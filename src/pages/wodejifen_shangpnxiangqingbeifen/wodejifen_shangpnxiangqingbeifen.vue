<template>
  <div class="flex-col justify-start relative page">
    <div class="flex-col group">
      <div class="flex-col space-y-16">
        <div class="flex-row justify-between items-center group_2">
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
            <span class="text_2">商品详情</span>
          </div>
          <div class="flex-row items-center section_2 space-x-12">
            <div class="flex-col justify-start items-center image-wrapper">
              <img
                class="image_6"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735816096547.png"
              />
            </div>
            <div class="section_3"></div>
            <div class="flex-col justify-start items-center image-wrapper">
              <img
                class="image_5"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735802507405.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col group_3">
        <div class="flex-row items-center space-x-12">
          <img
            class="image_7"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377052165905893.png"
          />
          <div class="flex-col flex-auto space-y-17">
            <span class="self-start text_3">熊</span>
            <div class="flex-row space-x-12">
              <span class="font_1">积分数量</span>
              <span class="font_2">10000</span>
            </div>
            <div class="flex-row space-x-12">
              <span class="font_1">商品价格</span>
              <span class="font_2">99.99元</span>
            </div>
            <div class="flex-row space-x-12">
              <span class="font_1">商品个数</span>
              <span class="font_2">100个</span>
            </div>
          </div>
        </div>
        <span class="self-start font_1 text_4">商品描述</span>
        <span class="self-start font_2 text_5">一只熊</span>
      </div>
      <div class="flex-col justify-start items-center self-center text-wrapper_2">
        <span class="text_7">立即兑换</span>
      </div>
    </div>
    <div class="flex-col justify-start items-center section pos">
      <div class="flex-col justify-start items-center text-wrapper"><span class="text_6">兑换成功</span></div>
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
    padding: 0.88rem 0 1.5rem;
    background-color: #f9f9f9;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .group {
    margin-left: 1rem;
    margin-right: 0.38rem;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 1rem;
  }
  .group_2 {
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
  .section_2 {
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
  .section_3 {
    background-color: #eaeaea;
    width: 0.031rem;
    height: 1.13rem;
  }
  .image_5 {
    width: 1rem;
    height: 1rem;
  }
  .group_3 {
    margin-top: 1.63rem;
  }
  .image_7 {
    border-radius: 0.25rem;
    width: 5.5rem;
    height: 8rem;
  }
  .space-y-17 > *:not(:first-child) {
    margin-top: 1.06rem;
  }
  .text_3 {
    color: #333333;
    font-size: 1.13rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.56rem;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    font-weight: 500;
    color: #111111;
  }
  .font_2 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .text_4 {
    margin-top: 1.13rem;
  }
  .text_5 {
    margin-top: 0.56rem;
    line-height: 1.5rem;
  }
  .text-wrapper_2 {
    margin-top: 26.81rem;
    padding: 0.75rem 0;
    background-color: #5298ff;
    border-radius: 1.38rem;
    width: 18.44rem;
  }
  .text_7 {
    color: #ffffff;
    font-size: 1rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.38rem;
  }
  .section {
    padding: 17.19rem 0 28.06rem;
    background-color: #11111126;
  }
  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .text-wrapper {
    padding: 2.13rem 0 2.31rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
    width: 10.5rem;
  }
  .text_6 {
    color: #999999;
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
  }
</style>