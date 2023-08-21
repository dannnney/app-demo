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
        <span class="text_2">我的</span>
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
    <div class="flex-col flex-auto group_2 space-y-16">
      <div class="flex-col space-y-20">
        <div class="flex-row" @click="onClick">
          <img
            class="shrink-0 self-start image_6"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464175316029773.png"
          />
          <div class="flex-col flex-auto group_3 space-y-5">
            <span class="self-start text_3">张亮</span>
            <div class="flex-row">
              <div class="flex-col justify-start items-center text-wrapper button">
                <span class="font_1">管理员</span>
              </div>
              <div class="flex-col justify-start items-center text-wrapper_2 button">
                <span class="font_1">子管理员</span>
              </div>
              <div class="flex-col justify-start items-center text-wrapper_2 button">
                <span class="font_1">普通用户</span>
              </div>
            </div>
          </div>
          <img
            class="shrink-0 self-start image_7"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915461501897686774.png"
          />
        </div>
        <div class="flex-col">
          <div class="flex-col section_3 space-y-10" @click="onClick_1">
            <div class="flex-row justify-between">
              <span class="text_4">借阅证</span>
              <div class="flex-row items-center self-start space-x-4">
                <span class="font_2 text_5">借阅记录</span>
                <img
                  class="shrink-0 image_8"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464177620433856.png"
                />
              </div>
            </div>
            <span class="self-start text_6">156****0869</span>
          </div>
          <div class="flex-row equal-division">
            <div class="flex-col items-center space-y-5">
              <span class="font_3">0</span>
              <span class="font_2">当前在借</span>
            </div>
            <div class="flex-col items-center equal-division-item space-y-5">
              <span class="font_3">10</span>
              <span class="font_2">剩余可借</span>
            </div>
            <div class="flex-col items-center equal-division-item space-y-5">
              <span class="font_3">2</span>
              <span class="font_2">个人借阅时长</span>
            </div>
            <div class="flex-col items-center equal-division-item space-y-5">
              <span class="font_3">50</span>
              <span class="font_2">借阅总数</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col group_4">
        <span class="self-start text_7">常用</span>
        <div class="grid">
          <div class="flex-col grid-item space-y-6">
            <img
              class="self-center image_9"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377151075101381.png"
            />
            <span class="self-start font_4">我的预借</span>
          </div>
          <div class="flex-col grid-item space-y-6">
            <img
              class="self-center image_9"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377149613560311.png"
            />
            <span class="self-start font_4">我的收藏</span>
          </div>
          <div class="flex-col grid-item space-y-6">
            <img
              class="self-center image_10"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377150807163654.png"
            />
            <span class="self-start font_4">我的捐赠</span>
          </div>
          <div class="flex-col grid-item space-y-6">
            <img
              class="self-center image_10"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377150841518329.png"
            />
            <span class="self-start font_4">我的积分</span>
          </div>
          <div class="flex-col grid-item space-y-6">
            <img
              class="self-center image_9"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377150877047668.png"
            />
            <span class="self-start font_4">我的活动</span>
          </div>
          <div class="flex-col grid-item space-y-6">
            <img
              class="self-center image_10"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377151028765487.png"
            />
            <span class="self-start font_4">我的图书馆</span>
          </div>
          <div class="flex-col grid-item space-y-6">
            <img
              class="self-center image_10"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377153400014014.png"
            />
            <span class="self-start font_4">直播分享</span>
          </div>
          <div class="flex-col grid-item space-y-6">
            <img
              class="self-center image_10"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377153987679920.png"
            />
            <span class="self-start font_4">地址管理</span>
          </div>
          <div class="flex-col grid-item space-y-4">
            <img
              class="self-center image_10"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377154374481933.png"
            />
            <span class="self-start font_4">我的心得</span>
          </div>
          <div class="flex-col grid-item space-y-4">
            <img
              class="self-center image_10"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377152301410676.png"
            />
            <span class="self-start font_4">意见箱</span>
          </div>
          <div class="flex-col grid-item space-y-4">
            <img
              class="self-center image_9"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377150778780123.png"
            />
            <span class="self-start font_4">联系我们</span>
          </div>
          <div class="flex-col grid-item space-y-4">
            <img
              class="self-center image_9"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377150810366023.png"
            />
            <span class="self-start font_4">管理员入口</span>
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

    methods: {
      onClick() {
        this.$router.push({ name: 'gerenziliao' });
      },
      onClick_1() {
        this.$router.push({ name: 'jieyuejilu_dangque_shenqingzhong' });
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
    padding: 0.88rem 0.38rem 0.5rem 1rem;
    height: 5.56rem;
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
    padding: 1.06rem 1rem 6.38rem;
    overflow-y: auto;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 1rem;
  }
  .space-y-20 > *:not(:first-child) {
    margin-top: 1.25rem;
  }
  .image_6 {
    margin-top: 0.38rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
  .group_3 {
    margin-left: 0.5rem;
  }
  .text_3 {
    color: #333333;
    font-size: 1.13rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.56rem;
  }
  .text-wrapper {
    flex: 1 1 4.5rem;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #ffffff;
  }
  .text-wrapper_2 {
    flex: 1 1 4.5rem;
    margin-left: 0.5rem;
  }
  .button {
    padding: 0.13rem 0;
    background-color: #5298ff;
    border-radius: 0.75rem;
    height: 1.5rem;
  }
  .image_7 {
    margin-left: 1.25rem;
    margin-top: 1.38rem;
    width: 0.53rem;
    height: 0.91rem;
  }
  .section_3 {
    padding: 0.63rem 1rem 2.63rem;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377148799308694.png');
    background-position: 0% 0%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .space-y-10 > *:not(:first-child) {
    margin-top: 0.63rem;
  }
  .text_4 {
    color: #ffffff;
    font-size: 1.13rem;
    font-family: 'DingTalk JinBuTi';
    line-height: 1.31rem;
    font-style: italic;
  }
  .font_2 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #111111;
  }
  .text_5 {
    color: #ffffff;
  }
  .image_8 {
    width: 0.34rem;
    height: 0.59rem;
  }
  .text_6 {
    color: #ffffff;
    font-size: 1.5rem;
    font-family: 'DIN Condensed';
    font-weight: 700;
    line-height: 1.5rem;
  }
  .equal-division {
    align-self: center;
    margin-top: 1.13rem;
  }
  .font_3 {
    font-size: 1rem;
    font-family: 'DIN Condensed';
    line-height: 1rem;
    font-weight: 700;
    color: #111111;
  }
  .equal-division-item {
    margin-left: 1.88rem;
  }
  .space-y-5 > *:not(:first-child) {
    margin-top: 0.31rem;
  }
  .group_4 {
    padding: 0 0.19rem;
  }
  .text_7 {
    color: #333333;
    font-size: 1rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.38rem;
  }
  .grid {
    margin-left: 0.25rem;
    margin-right: 0.38rem;
    padding-bottom: 5.25rem;
    height: 15.66rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .grid-item {
    padding: 1.13rem 0.5rem;
  }
  .space-y-6 > *:not(:first-child) {
    margin-top: 0.38rem;
  }
  .image_9 {
    filter: drop-shadow(0px 0.13rem 0.13rem #5298ff80);
    width: 1.5rem;
    height: 1.5rem;
  }
  .font_4 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .image_10 {
    width: 1.5rem;
    height: 1.5rem;
  }
  .space-y-4 > *:not(:first-child) {
    margin-top: 0.25rem;
  }
</style>