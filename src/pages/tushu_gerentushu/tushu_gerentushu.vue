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
        <span class="text_2">图书</span>
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
      <van-tabs v-model="tabs" :swipeable="true" class="tabs" :line-width="24" background="transparent">
        <van-tab title="机构图书"><span>第 1 个 Tab</span></van-tab>
        <van-tab title="个人图书">
          <div class="flex-col group_1">
            <van-search
              class="section_4 search"
              placeholder="请输入书名/ISBN/作者"
              left-icon="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/26d4526839e8f82a2c5f6dba61e44a19.png"
              v-model="search"
              @search="onSearch"
            >
              <img
                class="image_6"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/26d4526839e8f82a2c5f6dba61e44a19.png"
                slot="left-icon"
              />
            </van-search>
            <div class="group_5 cf_sidebar_wrapper sidebar">
              <van-sidebar class="group_5" v-model="sidebar">
                <van-sidebar-item title="所有分类"></van-sidebar-item>
                <van-sidebar-item title="历史"></van-sidebar-item>
                <van-sidebar-item title="政治"></van-sidebar-item>
                <van-sidebar-item title="科幻"></van-sidebar-item>
                <van-sidebar-item title="网络"></van-sidebar-item>
                <van-sidebar-item title="小说"></van-sidebar-item>
              </van-sidebar>
              <div class="cf_sidebar_content_wrapper">
                <div class="flex-col justify-start section_5 view_8" v-if="sidebar === 0">
                  <div class="flex-col group_12">
                    <div class="flex-col" v-for="(item, index) in items" :key="index">
                      <div class="flex-row justify-center items-center section_6 space-x-8">
                        <img
                          class="image_7"
                          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437505150279503.png"
                        />
                        <div class="flex-col group_6 space-y-8">
                          <div class="flex-row items-center space-x-6">
                            <span class="font_3">情绪流</span>
                            <img
                              class="image_9"
                              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437505635953713.png"
                            />
                            <span class="font_4">1231</span>
                          </div>
                          <div class="flex-row">
                            <span class="font_5">作者：</span>
                            <span class="font_5">章浩</span>
                          </div>
                          <div class="flex-row">
                            <span class="font_5 text_11">心理学</span>
                            <span class="font_5 text_10">分类：</span>
                          </div>
                          <div class="flex-row">
                            <span class="font_5 text_13">阅览室名称(张亮)</span>
                            <span class="font_5 text_12">阅览室：</span>
                          </div>
                        </div>
                        <div class="flex-col">
                          <span class="self-center font_7">剩余可借：5本</span>
                          <div class="flex-col justify-start items-center text-wrapper_2 button" @click="onClick">
                            <span class="font_2">申请借阅</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex-row justify-evenly items-center self-start group_10">
                        <img
                          class="image_10"
                          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/d314073b4c0693106f0b5dc9c2fd8bd2.png"
                        />
                        <span class="font_6">999</span>
                        <img
                          class="image_11"
                          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/c2127d5d4c22f1141c521dda98e5ced5.png"
                        />
                        <span class="font_6">999</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="flex justify-center items-center" style="height:100%; font-size:20px" v-if="sidebar === 1">
                  第 2 个 SidebarItem
                </p>
                <p class="flex justify-center items-center" style="height:100%; font-size:20px" v-if="sidebar === 2">
                  第 3 个 SidebarItem
                </p>
                <p class="flex justify-center items-center" style="height:100%; font-size:20px" v-if="sidebar === 3">
                  第 4 个 SidebarItem
                </p>
                <p class="flex justify-center items-center" style="height:100%; font-size:20px" v-if="sidebar === 4">
                  第 5 个 SidebarItem
                </p>
                <p class="flex justify-center items-center" style="height:100%; font-size:20px" v-if="sidebar === 5">
                  第 6 个 SidebarItem
                </p>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        search: '',
        items: [null, null],
        sidebar: 0,
        tabs: 1,
      };
    },

    methods: {
      onSearch(event) {
        console.log('search: ', event);
      },
      onClick() {
        this.$router.push({ name: 'tushuxiangxi_yujiezhuangtai' });
      },
    },
  };
</script>

<style scoped lang="css">
  .page {
    background-color: #ffffff;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .header {
    padding: 0.88rem 0.38rem 0.25rem 1rem;
    height: 5.31rem;
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
  .group_1 {
    padding-top: 1rem;
  }
  .section_4 {
    margin: 0 1rem;
  }
  .image_6 {
    width: 0.94rem;
    height: 0.94rem;
  }
  .group_5 {
    margin-top: 0.63rem;
  }
  .font_2 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #ffffff;
  }
  .font_3 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .section_5 {
    flex: 1 1 auto;
  }
  .view_8 {
    padding: 1rem 0 16.06rem;
    background-color: #f9f9f9;
    height: 33.88rem;
  }
  .group_12 {
    margin-left: 0.31rem;
    margin-right: 1rem;
  }
  .section_6 {
    padding: 0.81rem 1rem 1rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .space-x-8 > *:not(:first-child) {
    margin-left: 0.5rem;
  }
  .image_7 {
    border-radius: 0.25rem;
    width: 3.44rem;
    height: 5rem;
  }
  .group_6 {
    width: 7rem;
  }
  .space-y-8 > *:not(:first-child) {
    margin-top: 0.5rem;
  }
  .space-x-6 > *:not(:first-child) {
    margin-left: 0.38rem;
  }
  .image_9 {
    width: 0.97rem;
    height: 0.88rem;
  }
  .font_4 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    font-weight: 500;
    color: #333333;
  }
  .font_5 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .text_11 {
    margin-left: 1.69rem;
  }
  .text_10 {
    margin-left: -3.56rem;
  }
  .text_13 {
    margin-left: 2.19rem;
  }
  .text_12 {
    margin-left: -7rem;
  }
  .font_7 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #18b800;
  }
  .text-wrapper_2 {
    margin-top: 2.63rem;
  }
  .button {
    padding: 0.13rem 0;
    background-color: #5298ff;
    border-radius: 0.75rem;
    width: 4.5rem;
  }
  .group_10 {
    padding: 0.25rem;
    width: 4.72rem;
  }
  .image_10 {
    width: 0.56rem;
    height: 0.53rem;
  }
  .font_6 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #5298ff;
  }
  .image_11 {
    width: 0.56rem;
    height: 0.38rem;
  }
  .search {
    background-color: #eeeeee;
    border-radius: 1.06rem;
    width: 21.44rem;
    height: 2.13rem;
    overflow: hidden;
    padding: 0.5rem 1rem;
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
    margin-left: 0.79rem;
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
  :deep(.sidebar) .van-sidebar {
    width: 4.25rem;
    margin: 0;
    flex: none;
    background-color: #ffffff;
  }
  :deep(.sidebar) .van-sidebar-item--select::before {
    display: none;
  }
  :deep(.sidebar) .van-sidebar-item {
    color: #333333;
    font-weight: inherit;
    font-family: 'PingFang SC';
    font-size: 0.88rem;
    line-height: 1.25rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: #00000000;
    padding: 0.31rem 0.38rem;
  }
  :deep(.sidebar) .van-sidebar-item--select {
    color: #ffffff;
    font-weight: inherit;
    font-family: 'PingFang SC';
    font-size: 0.88rem;
    line-height: 1.25rem;
    background-color: #5298ff;
    padding: 0.31rem 0.38rem;
  }
  :deep(.tabs.van-tabs) .van-tab {
    color: #999999;
    font-weight: inherit;
    font-family: 'PingFang SC';
    font-size: 1.13rem;
    line-height: 1.56rem;
  }
  :deep(.tabs.van-tabs) .van-tab--active {
    color: #111111;
    font-weight: 500;
    font-family: 'PingFang SC';
    font-size: 1.13rem;
    line-height: 1.56rem;
  }
</style>