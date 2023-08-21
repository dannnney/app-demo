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
          <span class="text_2">图书盘点</span>
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
    <div class="flex-col flex-auto group_2 space-y-11">
      <span class="self-start text_3">实时统计</span>
      <div class="flex-col">
        <div class="flex-col section_3">
          <div class="flex-row relative group_3">
            <span class="font_1 pos">图书馆</span>
            <span class="font_2 pos_2">图书馆名称</span>
            <img
              class="image_7 pos_3"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915460743480344061.png"
            />
            <span class="font_1 pos_6">总数量</span>
            <div class="flex-col group_4 pos_4">
              <div class="divider view"></div>
              <div class="divider view_2"></div>
              <div class="flex-col items-center section_4 space-y-8 pos_5">
                <span class="font_3">图书馆名称</span>
                <span class="font_3">图书馆名称</span>
                <span class="font_3">图书馆名称</span>
                <span class="font_3">图书馆名称</span>
              </div>
            </div>
            <span class="font_1 pos_7">当前在借</span>
          </div>
          <div class="flex-row justify-between group_5">
            <span class="font_1">当前在馆</span>
            <span class="font_2 text_4">0</span>
          </div>
          <div class="flex-row justify-between group_6">
            <span class="font_1">积累借阅数量</span>
            <span class="font_2 text_5">0</span>
          </div>
        </div>
        <div class="flex-col relative">
          <div class="flex-row justify-end group_7">
            <div class="flex-row items-center section_5 button space-x-7">
              <span class="font_4">2022年</span>
              <img
                class="shrink-0 image_7"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922396538874113661.png"
              />
            </div>
            <div class="flex-row items-center button space-x-5">
              <span class="font_4">12月</span>
              <img
                class="shrink-0 image_7"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922396537452399453.png"
              />
            </div>
          </div>
          <div class="flex-col section_6 space-y-13">
            <span class="self-start font_1">新上架图书</span>
            <div class="divider"></div>
            <span class="self-start font_1">读书心得总数</span>
            <div class="flex-row justify-between group_8">
              <span class="font_1">直播次数</span>
              <span class="font_2 text_6">1</span>
            </div>
          </div>
          <div class="flex-col items-center section_4 space-y-8 pos_8">
            <span class="font_3">9月</span>
            <span class="font_3">10月</span>
            <span class="font_3">11月</span>
            <span class="font_3">12月</span>
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
  .header {
    padding: 0.88rem 0.38rem 0.63rem 1rem;
    height: 5.69rem;
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
    padding: 1.19rem 1rem 14rem;
    overflow-y: auto;
  }
  .space-y-11 > *:not(:first-child) {
    margin-top: 0.69rem;
  }
  .text_3 {
    color: #333333;
    font-size: 1rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.38rem;
  }
  .section_3 {
    padding-left: 0.75rem;
    padding-right: 0.56rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .group_3 {
    padding: 1.31rem 0.13rem 3.75rem;
    height: 9.78rem;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .pos {
    position: absolute;
    left: 0.13rem;
    top: 1.31rem;
  }
  .font_2 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #111111;
  }
  .pos_2 {
    position: absolute;
    left: 5.88rem;
    top: 1.31rem;
  }
  .image_7 {
    width: 0.75rem;
    height: 0.56rem;
  }
  .pos_3 {
    position: absolute;
    right: 0.31rem;
    top: 1.69rem;
  }
  .pos_6 {
    position: absolute;
    left: 0.13rem;
    bottom: 3.72rem;
  }
  .group_4 {
    padding: 1.13rem 0 2.5rem;
  }
  .pos_4 {
    position: absolute;
    left: 0.13rem;
    right: 0;
    top: 2.25rem;
  }
  .divider {
    background-color: #eeeeee;
    height: 0.063rem;
  }
  .view {
    margin-right: 0.31rem;
  }
  .view_2 {
    margin-right: 0.31rem;
    margin-top: 3.38rem;
  }
  .section_4 {
    padding: 1rem 0 1.25rem;
    filter: drop-shadow(0px 0px 0.19rem #0000001a);
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464069409341957.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 4.88rem;
  }
  .space-y-8 > *:not(:first-child) {
    margin-top: 0.5rem;
  }
  .pos_5 {
    position: absolute;
    right: 0;
    top: 0;
  }
  .font_3 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .pos_7 {
    position: absolute;
    left: 0.13rem;
    bottom: 0.78rem;
  }
  .group_5 {
    padding: 0.75rem 0.13rem;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .text_4 {
    margin-right: 0.19rem;
  }
  .group_6 {
    padding: 0.75rem 0.13rem;
  }
  .text_5 {
    margin-right: 0.19rem;
  }
  .group_7 {
    padding: 1rem 0;
  }
  .section_5 {
    margin-right: 0.75rem;
  }
  .button {
    padding: 0.25rem 0.38rem;
    background-color: #5298ff;
    border-radius: 0.25rem;
    height: 1.5rem;
  }
  .space-x-7 > *:not(:first-child) {
    margin-left: 0.44rem;
  }
  .font_4 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    font-weight: 500;
    color: #ffffff;
  }
  .space-x-5 > *:not(:first-child) {
    margin-left: 0.31rem;
  }
  .section_6 {
    padding: 0.81rem 0.88rem 0;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .space-y-13 > *:not(:first-child) {
    margin-top: 0.81rem;
  }
  .group_8 {
    padding: 0.88rem 0 0.75rem;
    border-top: solid 0.063rem #eeeeee;
  }
  .text_6 {
    margin-right: 0.19rem;
  }
  .pos_8 {
    position: absolute;
    right: 0;
    top: 2.25rem;
  }
</style>