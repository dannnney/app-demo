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
          <span class="text_2">发布</span>
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
      <div class="flex-col justify-start section_4">
        <div class="flex-col section_5 space-y-149">
          <span class="self-start font_1">发布心得</span>
          <span class="self-end font_1">0/300</span>
        </div>
      </div>
      <div class="flex-col justify-start items-center self-center text-wrapper"><span class="text_4">发布</span></div>
    </div>
    <div class="flex-col justify-start items-center section pos"><Fabuchengg></Fabuchengg></div>
  </div>
</template>

<script>
  import Fabuchengg from '../../components/fabuchengg/fabuchengg.vue';

  export default {
    components: { Fabuchengg },
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
  .section_4 {
    margin-right: 0.63rem;
    margin-top: 1.88rem;
    padding: 1rem 0;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .section_5 {
    margin: 0 0.88rem;
    padding: 0.56rem 0.75rem;
    background-color: #f9f9f9;
    border-radius: 0.25rem;
  }
  .space-y-149 > *:not(:first-child) {
    margin-top: 9.31rem;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #dddddd;
  }
  .text-wrapper {
    margin-top: 24.56rem;
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
</style>