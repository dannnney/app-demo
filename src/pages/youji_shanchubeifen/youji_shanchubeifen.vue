<template>
  <div class="flex-col justify-start relative page">
    <div class="flex-col group">
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
      <div class="flex-row justify-between items-center group_3">
        <div class="flex-row items-center space-x-14">
          <img
            class="shrink-0 image_4"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437501403442894.png"
          />
          <span class="text_2">邮寄</span>
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
      <div class="flex-col group view space-y-12">
        <div class="flex-row justify-between items-center section_4">
          <div class="flex-col space-y-5">
            <div class="flex-row items-center space-x-7">
              <span class="font_1">张亮</span>
              <span class="font_1">15637481239</span>
              <div class="flex-col justify-start relative group_4">
                <div class="section_5"></div>
                <span class="font_2 text_3 pos_2">默认</span>
              </div>
            </div>
            <span class="font_2">河南省 郑州市 中原区 枫杨街道银杏路中鸿花园</span>
          </div>
          <div class="flex-row items-center space-x-4">
            <img
              class="shrink-0 image_7"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464128008287538.png"
            />
            <span class="font_3">修改</span>
          </div>
        </div>
        <div class="flex-row group space-x-4">
          <div class="flex-row justify-between items-center shrink-0 section_6">
            <div class="flex-col space-y-5">
              <div class="flex-row space-x-5">
                <span class="font_1">张亮</span>
                <span class="font_1">15637481239</span>
              </div>
              <span class="font_2">河南省 郑州市 中原区 枫杨街道银杏路中鸿花园</span>
            </div>
            <div class="flex-row items-center group_5 space-x-4">
              <img
                class="shrink-0 image_7"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464128008287538.png"
              />
              <span class="font_3">修改</span>
            </div>
          </div>
          <div class="flex-col justify-start items-center shrink-0 text-wrapper">
            <span class="font_1 text_4">删除</span>
          </div>
        </div>
      </div>
      <div class="flex-col justify-start items-center self-center text-wrapper_3">
        <span class="text_6">添加收货地址</span>
      </div>
    </div>
    <div class="flex-col justify-start items-center section pos">
      <div class="flex-col section_7 space-y-52">
        <span class="self-center font_4 text_5">是否删除改地址</span>
        <div class="flex-row">
          <div class="flex-col justify-start items-center button"><span class="font_4">否</span></div>
          <div class="flex-col justify-start items-center button_2 text-wrapper_2"><span class="font_4">是</span></div>
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
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    padding: 1rem 0;
    background-color: #f9f9f9;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .group {
    overflow-x: hidden;
  }
  .group_2 {
    padding-left: 2.13rem;
    padding-right: 0.88rem;
  }
  .text {
    color: #000000;
    font-size: 0.94rem;
    font-family: '.AppleSystemUIFont';
    line-height: 1.13rem;
    letter-spacing: -0.019rem;
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
  .group_3 {
    margin-top: 1rem;
    padding-left: 0.94rem;
    padding-right: 0.38rem;
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
  .view {
    margin-top: 1.88rem;
  }
  .space-y-12 > *:not(:first-child) {
    margin-top: 0.75rem;
  }
  .section_4 {
    margin: 0 1rem;
    padding: 0.69rem 1rem 0.88rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .space-y-5 > *:not(:first-child) {
    margin-top: 0.31rem;
  }
  .space-x-7 > *:not(:first-child) {
    margin-left: 0.44rem;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    font-weight: 500;
    color: #111111;
  }
  .group_4 {
    width: 1.88rem;
  }
  .section_5 {
    background-color: #ff6b6b;
    border-radius: 0.41rem;
    height: 0.88rem;
  }
  .font_2 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    font-weight: 500;
    color: #111111;
  }
  .text_3 {
    color: #ffffff;
    width: 1.25rem;
  }
  .pos_2 {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
  .image_7 {
    width: 0.63rem;
    height: 0.59rem;
  }
  .font_3 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #5298ff;
  }
  .section_6 {
    margin-left: -1.38rem;
    padding: 0.69rem 0 0.88rem;
    background-color: #ffffff;
    border-radius: 0 0.25rem 0.25rem 0;
    width: 20.44rem;
    height: 4rem;
  }
  .space-x-5 > *:not(:first-child) {
    margin-left: 0.31rem;
  }
  .group_5 {
    margin-right: 1rem;
  }
  .space-x-4 > *:not(:first-child) {
    margin-left: 0.25rem;
  }
  .text-wrapper {
    padding: 1.38rem 0;
    background-color: #ff6b6b;
    border-radius: 0.25rem;
    width: 4.13rem;
    height: 3.94rem;
  }
  .text_4 {
    color: #ffffff;
  }
  .text-wrapper_3 {
    margin-top: 31.31rem;
    padding: 0.75rem 0;
    background-color: #5298ff;
    border-radius: 1.38rem;
    width: 18.44rem;
  }
  .text_6 {
    color: #ffffff;
    font-size: 1rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.38rem;
  }
  .section {
    padding: 20.81rem 0;
    background-color: #11111126;
  }
  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .section_7 {
    padding: 2.63rem 1rem 0.94rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .space-y-52 > *:not(:first-child) {
    margin-top: 3.25rem;
  }
  .font_4 {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
    color: #ffffff;
  }
  .text_5 {
    color: #999999;
  }
  .button {
    padding: 0.13rem 0;
    background-color: #5298ff80;
    border-radius: 0.25rem;
    width: 3.44rem;
    height: 1.25rem;
  }
  .button_2 {
    margin-left: 1.63rem;
  }
  .text-wrapper_2 {
    padding: 0.13rem 0;
    background-color: #5298ff;
    border-radius: 0.25rem;
    width: 3.44rem;
    height: 1.25rem;
  }
</style>