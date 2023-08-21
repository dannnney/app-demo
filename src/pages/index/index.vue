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
        <span class="text_2">首页</span>
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
      <van-tabs v-model="tabs_1" :swipeable="true" class="tabs_1" :line-width="24" background="transparent">
        <van-tab title="推荐">
          <div class="flex-col group_5">
            <van-search
              class="section_4 search"
              placeholder="请输入书名/作者/ISBN"
              left-icon="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16916378947420865286.png"
              v-model="search"
              @search="onSearch"
            >
              <img
                class="image_4"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16916378947420865286.png"
                slot="left-icon"
              />
            </van-search>
            <van-swipe class="swiper" :autoplay="3000">
              <van-swipe-item v-for="item in swiper">
                <img
                  class="image_24"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16916378947404245001.png"
                />
              </van-swipe-item>
            </van-swipe>
            <div class="flex-row items-center section_5">
              <img
                class="image_7"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16916378949438641169.png"
              />
              <span class="font_2 text_5">公告</span>
              <span class="font_2 text_6">欢迎来到烟草云图书馆</span>
            </div>
            <div class="flex-col group_22">
              <van-tabs v-model="tabs" :swipeable="true" class="tabs" :line-width="24" background="transparent">
                <van-tab title="机构图书馆">
                  <div class="flex-col justify-start group_25">
                    <div class="flex-col group_24 space-y-12">
                      <div
                        class="flex-row justify-between items-center section_6"
                        v-for="(item, index) in items"
                        :key="index"
                      >
                        <div class="flex-row space-x-8">
                          <img
                            class="image_9"
                            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868757905310974.png"
                          />
                          <div class="flex-col space-y-9">
                            <span class="font_5">图书馆昵称</span>
                            <div class="flex-row items-center group_9 space-x-6">
                              <img
                                class="shrink-0 image_12"
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868756904795101.png"
                              />
                              <span class="font_4">图书：</span>
                              <span class="font_4">3册</span>
                            </div>
                            <div class="flex-row items-center group_10 space-x-6">
                              <img
                                class="shrink-0 image_13"
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922369291768530361.png"
                              />
                              <span class="font_4">位置：</span>
                              <span class="font_4">3册</span>
                            </div>
                          </div>
                        </div>
                        <div class="flex-col">
                          <div class="flex-row items-center space-x-4">
                            <img
                              class="shrink-0 image_10 image_27"
                              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16916378947517297706.png"
                            />
                            <span class="font_11">999</span>
                          </div>
                          <div class="flex-col justify-start text-wrapper button">
                            <span class="font_7 text_8">进入图书馆</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </van-tab>
                <van-tab title="个人图书馆"><span>第 2 个 Tab</span></van-tab>
              </van-tabs>
              <div class="flex-col group_11">
                <div class="flex-col" v-for="(item, index) in items_1" :key="index">
                  <div class="flex-row justify-between items-center">
                    <span class="font_3">智能推荐</span>
                    <div class="flex-row items-center space-x-2">
                      <span class="font_4">更多</span>
                      <img
                        class="shrink-0 image_8"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868759639752817.png"
                      />
                    </div>
                  </div>
                  <div class="flex-row justify-evenly">
                    <div class="flex-col equal-division-item_2 space-y-8">
                      <div class="flex-col justify-start items-end self-start section_1">
                        <div class="flex-col justify-start items-center text-wrapper_2 view_11">
                          <span class="font_8">8.5分</span>
                        </div>
                      </div>
                      <span class="self-center font_9">年轮</span>
                    </div>
                    <div class="flex-col equal-division-item_2 space-y-8">
                      <div class="flex-col justify-start items-end section_8">
                        <div class="flex-col justify-start items-center text-wrapper_2">
                          <span class="font_8">8.5分</span>
                        </div>
                      </div>
                      <span class="self-center font_9">浮生六记</span>
                    </div>
                    <div class="flex-col equal-division-item_2 space-y-8">
                      <div class="flex-col justify-start items-end section_13">
                        <div class="flex-col justify-start items-center text-wrapper_2">
                          <span class="font_8">8.5分</span>
                        </div>
                      </div>
                      <span class="self-center font_9">情绪流</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="借阅排行"><Jiyue></Jiyue></van-tab>
        <van-tab title="共享排行"><Gongxiangphb></Gongxiangphb></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import Gongxiangphb from '../../components/gongxiangphb/gongxiangphb.vue';
  import Jiyue from '../../components/jiyue/jiyue.vue';

  export default {
    components: { Gongxiangphb, Jiyue },
    props: {},
    data() {
      return {
        search: '',
        swiper: [1, 2, 3],
        items: [null, null],
        tabs: 0,
        items_1: [null, null, null, null],
        tabs_1: 0,
      };
    },

    methods: {
      onSearch(event) {
        console.log('search: ', event);
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
    overflow-y: auto;
  }
  .group_5 {
    padding: 0.5rem 0.25rem;
  }
  .section_4 {
    margin: 0 0.75rem;
  }
  .font_2 {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1rem;
  }
  .image_24 {
    width: 21.44rem;
    height: 8rem;
  }
  .section_5 {
    margin: 0.56rem 0.75rem 0;
    padding: 0.5rem 0.81rem;
    background-color: #eef5ff;
    border-radius: 1.06rem;
  }
  .image_7 {
    width: 0.94rem;
    height: 0.75rem;
  }
  .text_5 {
    margin-left: 0.25rem;
    color: #333333;
    font-weight: 500;
    line-height: 1.06rem;
  }
  .text_6 {
    margin-left: 1rem;
    color: #5298ff;
    line-height: 1.06rem;
  }
  .group_22 {
    margin-top: 1.38rem;
    padding: 0 0.63rem;
  }
  .font_3 {
    font-size: 1rem;
    font-family: 'PingFang SC';
    line-height: 1.38rem;
    font-weight: 500;
    color: #111111;
  }
  .space-x-2 > *:not(:first-child) {
    margin-left: 0.13rem;
  }
  .font_4 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .image_8 {
    width: 0.34rem;
    height: 0.59rem;
  }
  .group_25 {
    padding-top: 0.88rem;
  }
  .group_24 {
    padding: 0 0.063rem;
  }
  .space-y-12 > *:not(:first-child) {
    margin-top: 0.75rem;
  }
  .section_6 {
    padding: 0.75rem 1rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .space-x-8 > *:not(:first-child) {
    margin-left: 0.5rem;
  }
  .image_9 {
    border-radius: 0.25rem;
    width: 4rem;
    height: 4rem;
  }
  .space-y-9 > *:not(:first-child) {
    margin-top: 0.56rem;
  }
  .font_5 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .group_9 {
    padding-left: 0.25rem;
  }
  .image_12 {
    width: 0.41rem;
    height: 0.5rem;
  }
  .group_10 {
    padding-left: 0.13rem;
  }
  .space-x-6 > *:not(:first-child) {
    margin-left: 0.38rem;
  }
  .image_13 {
    width: 0.53rem;
    height: 0.5rem;
  }
  .image_10 {
    margin-left: 3.5rem;
  }
  .image_27 {
    width: 0.5rem;
    height: 0.31rem;
  }
  .font_11 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #5298ff;
  }
  .text-wrapper {
    margin-top: 1.56rem;
  }
  .button {
    background-color: #5298ff;
    border-radius: 0.75rem;
  }
  .font_7 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #ffffff;
  }
  .text_8 {
    margin: 0 0.5rem;
  }
  .group_11 {
    margin-top: 1.38rem;
    padding-bottom: 0.94rem;
  }
  .equal-division-item_2 {
    padding: 0.25rem 0.25rem 0.25rem 0.5rem;
    width: 7.16rem;
  }
  .section_1 {
    padding-bottom: 8.06rem;
    border-radius: 0.25rem;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735828089931.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 6.31rem;
  }
  .text-wrapper_2 {
    padding: 0.13rem 0;
    backdrop-filter: blur(1.25rem);
    border-radius: 0px 0.25rem 0px 0.25rem;
    width: 2.06rem;
  }
  .view_11 {
    margin-left: 4.25rem;
  }
  .font_8 {
    font-size: 0.63rem;
    font-family: 'DIN-Medium';
    line-height: 0.75rem;
    color: #ffffff;
  }
  .font_9 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1rem;
    color: #333333;
  }
  .section_8 {
    padding-bottom: 8.06rem;
    border-radius: 0.25rem;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868743025311391.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .section_13 {
    padding-bottom: 8.06rem;
    border-radius: 0.25rem;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868746985751008.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .space-y-8 > *:not(:first-child) {
    margin-top: 0.5rem;
  }
  .search {
    background-color: #eeeeee;
    border-radius: 1.06rem;
    width: 21.44rem;
    height: 2.13rem;
    overflow: hidden;
    padding: 0.38rem 0.75rem;
  }
  .search .van-search__content {
    padding-left: unset;
    background-color: unset;
    border-radius: unset;
    align-items: center;
  }
  .search .van-cell {
    line-height: 1;
    padding: 0;
    margin: 0;
  }
  .swiper {
    position: relative;
    margin: 1.13rem 0.75rem 0;
    width: 21.44rem;
    height: 8rem;
  }
  :deep(.search) .van-field__control {
    font-family: 'PingFang SC';
    font-size: 0.75rem;
    line-height: 1.06rem;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
  :deep(.search) .van-field__value {
    display: flex;
    align-items: center;
    margin-left: 0.63rem;
  }
  :deep(.search) .van-search__label {
    line-height: 1;
    padding: 0;
    margin: 0;
  }
  :deep(.search) .van-icon-clear {
    line-height: 1;
    padding: 0;
    margin: 0;
    position: absolute;
    right: 0.13rem;
  }
  :deep(.search) .van-field__right-icon {
    line-height: 1;
    padding: 0;
    margin: 0;
  }
  :deep(.search) .van-field__left-icon {
    display: flex;
    align-items: center;
    margin-right: unset;
  }
  :deep(.search) .van-field__body {
    width: 100%;
  }
  :deep(.tabs.van-tabs) .van-tab {
    color: #999999;
    font-weight: unset;
    font-family: 'PingFang SC';
    font-size: 1rem;
    line-height: 1.38rem;
  }
  :deep(.tabs.van-tabs) .van-tab--active {
    color: #111111;
    font-weight: 500;
    font-family: 'PingFang SC';
    font-size: 1rem;
    line-height: 1.38rem;
  }
  :deep(.tabs_1.van-tabs) .van-tab {
    color: #999999;
    font-weight: inherit;
    font-family: 'PingFang SC';
    font-size: 1.13rem;
    line-height: 1.56rem;
  }
  :deep(.tabs_1.van-tabs) .van-tab--active {
    color: #111111;
    font-weight: 500;
    font-family: 'PingFang SC';
    font-size: 1.13rem;
    line-height: 1.56rem;
  }
</style>