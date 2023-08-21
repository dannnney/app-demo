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
          <span class="text_2">图书批次</span>
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
      <div class="flex-col group_4 space-y-16">
        <div class="flex-row justify-between items-center section_4">
          <span class="font_1">图书批次名称</span>
          <div class="flex-row space-x-10">
            <div class="flex-col justify-start items-center text-wrapper"><span class="font_2">修改</span></div>
            <div class="flex-col justify-start items-center text-wrapper_2"><span class="font_2">删除</span></div>
          </div>
        </div>
        <div class="flex-row justify-between items-center section_4">
          <span class="font_1">图书批次名称</span>
          <div class="flex-row space-x-10">
            <div class="flex-col justify-start items-center text-wrapper"><span class="font_2">修改</span></div>
            <div class="flex-col justify-start items-center text-wrapper_2"><span class="font_2">删除</span></div>
          </div>
        </div>
        <div class="flex-row justify-between items-center section_4">
          <span class="font_1">图书批次名称</span>
          <div class="flex-row space-x-10">
            <div class="flex-col justify-start items-center text-wrapper"><span class="font_2">修改</span></div>
            <div class="flex-col justify-start items-center text-wrapper_2"><span class="font_2">删除</span></div>
          </div>
        </div>
        <div class="flex-row justify-between items-center section_4">
          <span class="font_1">图书批次名称</span>
          <div class="flex-row space-x-10">
            <div class="flex-col justify-start items-center text-wrapper"><span class="font_2">修改</span></div>
            <div class="flex-col justify-start items-center text-wrapper_2"><span class="font_2">删除</span></div>
          </div>
        </div>
      </div>
      <div class="flex-col justify-start items-center self-center text-wrapper_4">
        <span class="text_4">增加批次</span>
      </div>
    </div>
    <div class="flex-col justify-start items-center section pos">
      <div class="flex-col section_5 space-y-49">
        <span class="self-center font_3 text_3">确定删除该类型吗?</span>
        <div class="flex-row">
          <div class="flex-col justify-start items-center button"><span class="font_3">否</span></div>
          <div class="flex-col justify-start items-center button_2 text-wrapper_3"><span class="font_3">是</span></div>
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
  .group_3 {
    margin-top: 1rem;
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
  .group_4 {
    margin-top: 2.38rem;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 1rem;
  }
  .section_4 {
    margin-right: 0.63rem;
    padding: 0.75rem 1rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .space-x-10 > *:not(:first-child) {
    margin-left: 0.63rem;
  }
  .text-wrapper {
    background-color: #5298ff;
    border-radius: 0.5rem;
    width: 2.44rem;
    height: 1rem;
  }
  .font_2 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #ffffff;
  }
  .text-wrapper_2 {
    background-color: #ff6b6b;
    border-radius: 0.5rem;
    width: 2.44rem;
    height: 1rem;
  }
  .text-wrapper_4 {
    margin-top: 24.5rem;
    padding: 0.75rem 0;
    background-color: #5298ff;
    border-radius: 1.38rem;
    width: 18.44rem;
  }
  .text_4 {
    color: #ffffff;
    font-size: 1rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.38rem;
  }
  .section {
    padding: 17.81rem 0 23.81rem;
    background-color: #11111126;
  }
  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .section_5 {
    padding: 2.81rem 1rem 0.94rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .space-y-49 > *:not(:first-child) {
    margin-top: 3.06rem;
  }
  .font_3 {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
    color: #ffffff;
  }
  .text_3 {
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
  .text-wrapper_3 {
    padding: 0.13rem 0;
    background-color: #5298ff;
    border-radius: 0.25rem;
    width: 3.44rem;
    height: 1.25rem;
  }
</style>