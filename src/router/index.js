import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../pages/index/index.vue';
import Wode from '../pages/wode/wode.vue';
import Huodong_daibaoming from '../pages/huodong_daibaoming/huodong_daibaoming.vue';
import Dushuxinde from '../pages/dushuxinde/dushuxinde.vue';
import Tabbar_Xg9eVgrr from '../pages/tabbar_Xg9eVgrr/tabbar_Xg9eVgrr.vue';
import Guanliyuanrukou from '../pages/guanliyuanrukou/guanliyuanrukou.vue';
import Quanjushezhi from '../pages/quanjushezhi/quanjushezhi.vue';
import Quanjushezhi_tushufenlei from '../pages/quanjushezhi_tushufenlei/quanjushezhi_tushufenlei.vue';
import Quanjushezhi_tushupici from '../pages/quanjushezhi_tushupici/quanjushezhi_tushupici.vue';
import Quanjushezhi_bianjijieyueka from '../pages/quanjushezhi_bianjijieyueka/quanjushezhi_bianjijieyueka.vue';
import Quanjushezhi_canshushezhi from '../pages/quanjushezhi_canshushezhi/quanjushezhi_canshushezhi.vue';
import Quanjushezhi_tusshanchudanchuang from '../pages/quanjushezhi_tusshanchudanchuang/quanjushezhi_tusshanchudanchuang.vue';
import Quanjushezhi_tushufenlei_shanchu from '../pages/quanjushezhi_tushufenlei_shanchu/quanjushezhi_tushufenlei_shanchu.vue';
import Quanjushezhi_tusei_tianjiafenlei from '../pages/quanjushezhi_tusei_tianjiafenlei/quanjushezhi_tusei_tianjiafenlei.vue';
import Quanjushezhi_tuspici_zengjiapici from '../pages/quanjushezhi_tuspici_zengjiapici/quanjushezhi_tuspici_zengjiapici.vue';
import Quanjushezhi_tushupici_xiugai from '../pages/quanjushezhi_tushupici_xiugai/quanjushezhi_tushupici_xiugai.vue';
import Quanjushezhi_tushufenlei_bianji from '../pages/quanjushezhi_tushufenlei_bianji/quanjushezhi_tushufenlei_bianji.vue';
import Quanjushezhi_lunbotu from '../pages/quanjushezhi_lunbotu/quanjushezhi_lunbotu.vue';
import Quanjushezhi_lunbotubeifen from '../pages/quanjushezhi_lunbotubeifen/quanjushezhi_lunbotubeifen.vue';
import Quanjushezhi_gonggaoxinxi from '../pages/quanjushezhi_gonggaoxinxi/quanjushezhi_gonggaoxinxi.vue';
import Quanjushezhi_tushuguanguanli from '../pages/quanjushezhi_tushuguanguanli/quanjushezhi_tushuguanguanli.vue';
import Quanjushezhi_tustianjiatushuguan from '../pages/quanjushezhi_tustianjiatushuguan/quanjushezhi_tustianjiatushuguan.vue';
import Quanjushezhi_tusatushuguanbeifen from '../pages/quanjushezhi_tusatushuguanbeifen/quanjushezhi_tusatushuguanbeifen.vue';
import Wodetushuguan_tuanli_tushubianji from '../pages/wodetushuguan_tuanli_tushubianji/wodetushuguan_tuanli_tushubianji.vue';
import Tushubianmu from '../pages/tushubianmu/tushubianmu.vue';
import Guanliyuan_tushushenhezhong_luru from '../pages/guanliyuan_tushushenhezhong_luru/guanliyuan_tushushenhezhong_luru.vue';
import Guanliyuan_tushu_chucuodanchuang from '../pages/guanliyuan_tushu_chucuodanchuang/guanliyuan_tushu_chucuodanchuang.vue';
import Jifenshangpin_zengjiashangpin from '../pages/jifenshangpin_zengjiashangpin/jifenshangpin_zengjiashangpin.vue';
import Huodongguanli_xinzenghuodong from '../pages/huodongguanli_xinzenghuodong/huodongguanli_xinzenghuodong.vue';
import Huodongguanli_xing_shijianshezhi from '../pages/huodongguanli_xing_shijianshezhi/huodongguanli_xing_shijianshezhi.vue';
import Wuliuguanli_xinzengwuliu from '../pages/wuliuguanli_xinzengwuliu/wuliuguanli_xinzengwuliu.vue';
import Wuliuguanli_bianji from '../pages/wuliuguanli_bianji/wuliuguanli_bianji.vue';
import Jifenshangpin_xiugai from '../pages/jifenshangpin_xiugai/jifenshangpin_xiugai.vue';
import Tushubianmu_tushuguan from '../pages/tushubianmu_tushuguan/tushubianmu_tushuguan.vue';
import Tushubianmu_fenlei from '../pages/tushubianmu_fenlei/tushubianmu_fenlei.vue';
import Tushubianmu_pici from '../pages/tushubianmu_pici/tushubianmu_pici.vue';
import Tushuguanli from '../pages/tushuguanli/tushuguanli.vue';
import Guanliyuan_jieyuhu_shenqingzhong from '../pages/guanliyuan_jieyuhu_shenqingzhong/guanliyuan_jieyuhu_shenqingzhong.vue';
import Guanliyuan_jieyug_jujuedanchuang from '../pages/guanliyuan_jieyug_jujuedanchuang/guanliyuan_jieyug_jujuedanchuang.vue';
import Guanliyuan_jieyutongguodanchuang from '../pages/guanliyuan_jieyutongguodanchuang/guanliyuan_jieyutongguodanchuang.vue';
import Guanliyuan_jieyuhu_shenqingzhong_1 from '../pages/guanliyuan_jieyuhu_shenqingzhong_1/guanliyuan_jieyuhu_shenqingzhong_1.vue';
import Guanliyuan_jieyug_jujuedanchuang_1 from '../pages/guanliyuan_jieyug_jujuedanchuang_1/guanliyuan_jieyug_jujuedanchuang_1.vue';
import Guanliyuan_jieyutongguodanchuang_1 from '../pages/guanliyuan_jieyutongguodanchuang_1/guanliyuan_jieyutongguodanchuang_1.vue';
import Guanliyuan_jieyuuetushu_daifahuo from '../pages/guanliyuan_jieyuuetushu_daifahuo/guanliyuan_jieyuuetushu_daifahuo.vue';
import Guanliyuan_jieyuietushu_daifahuo from '../pages/guanliyuan_jieyuietushu_daifahuo/guanliyuan_jieyuietushu_daifahuo.vue';
import Guanliyuan_jieyutushu_daishouhuo from '../pages/guanliyuan_jieyutushu_daishouhuo/guanliyuan_jieyutushu_daishouhuo.vue';
import Guanliyuan_jieyutushu_daishouhuo_1 from '../pages/guanliyuan_jieyutushu_daishouhuo_1/guanliyuan_jieyutushu_daishouhuo_1.vue';
import Guanliyuan_jieyueyuetushu_zaijie from '../pages/guanliyuan_jieyueyuetushu_zaijie/guanliyuan_jieyueyuetushu_zaijie.vue';
import Guanliyuan_jieyuujietushu_zaijie from '../pages/guanliyuan_jieyuujietushu_zaijie/guanliyuan_jieyuujietushu_zaijie.vue';
import Guanliyuan_jieyu_yihuandaiqueren from '../pages/guanliyuan_jieyu_yihuandaiqueren/guanliyuan_jieyu_yihuandaiqueren.vue';
import Guanliyuan_jieyu_yihuandaiqueren_1 from '../pages/guanliyuan_jieyu_yihuandaiqueren_1/guanliyuan_jieyu_yihuandaiqueren_1.vue';
import Guanliyuan_jieyun_jujuedanchuang from '../pages/guanliyuan_jieyun_jujuedanchuang/guanliyuan_jieyun_jujuedanchuang.vue';
import Guanliyuan_jieyun_jujuedanchuang_1 from '../pages/guanliyuan_jieyun_jujuedanchuang_1/guanliyuan_jieyun_jujuedanchuang_1.vue';
import Guanliyuan_jieyueyuetushu_yihuan from '../pages/guanliyuan_jieyueyuetushu_yihuan/guanliyuan_jieyueyuetushu_yihuan.vue';
import Guanliyuan_jieyuujietushu_yihuan from '../pages/guanliyuan_jieyuujietushu_yihuan/guanliyuan_jieyuujietushu_yihuan.vue';
import Guanliyuan_jieyuyuetushu_yijujue from '../pages/guanliyuan_jieyuyuetushu_yijujue/guanliyuan_jieyuyuetushu_yijujue.vue';
import Guanliyuan_jieyujietushu_yijujue from '../pages/guanliyuan_jieyujietushu_yijujue/guanliyuan_jieyujietushu_yijujue.vue';
import Guanliyuan_jieyuuetushu_yiquxiao from '../pages/guanliyuan_jieyuuetushu_yiquxiao/guanliyuan_jieyuuetushu_yiquxiao.vue';
import Guanliyuan_jieyuuetushu_yiquxiao_1 from '../pages/guanliyuan_jieyuuetushu_yiquxiao_1/guanliyuan_jieyuuetushu_yiquxiao_1.vue';
import Guanliyuan_jieyueyuetushu_yiyuqi from '../pages/guanliyuan_jieyueyuetushu_yiyuqi/guanliyuan_jieyueyuetushu_yiyuqi.vue';
import Guanliyuan_jieyuejilu_yuqitushu from '../pages/guanliyuan_jieyuejilu_yuqitushu/guanliyuan_jieyuejilu_yuqitushu.vue';
import Guanliyuan_jieyuujietushu_yiyuqi from '../pages/guanliyuan_jieyuujietushu_yiyuqi/guanliyuan_jieyuujietushu_yiyuqi.vue';
import Guanliyuan_tushuguihuan from '../pages/guanliyuan_tushuguihuan/guanliyuan_tushuguihuan.vue';
import Guanliyuan_tushushou_shenhezhong from '../pages/guanliyuan_tushushou_shenhezhong/guanliyuan_tushushou_shenhezhong.vue';
import Jifenshangpin from '../pages/jifenshangpin/jifenshangpin.vue';
import Duihuanjilu from '../pages/duihuanjilu/duihuanjilu.vue';
import Duihuanjilu_daifafang from '../pages/duihuanjilu_daifafang/duihuanjilu_daifafang.vue';
import Duihuanjilu_yifafang from '../pages/duihuanjilu_yifafang/duihuanjilu_yifafang.vue';
import Tushupandian from '../pages/tushupandian/tushupandian.vue';
import Liuyancaina from '../pages/liuyancaina/liuyancaina.vue';
import Yuangongguanli from '../pages/yuangongguanli/yuangongguanli.vue';
import Yuangongguanli_zengjiachengyuan from '../pages/yuangongguanli_zengjiachengyuan/yuangongguanli_zengjiachengyuan.vue';
import Yuangongguanli_doruyuangongxinxi from '../pages/yuangongguanli_doruyuangongxinxi/yuangongguanli_doruyuangongxinxi.vue';
import Wuliuguanli from '../pages/wuliuguanli/wuliuguanli.vue';
import Yuangongguanli_jinyong_qiyong from '../pages/yuangongguanli_jinyong_qiyong/yuangongguanli_jinyong_qiyong.vue';
import Yuangongguanli_jong_qiyongbeifen from '../pages/yuangongguanli_jong_qiyongbeifen/yuangongguanli_jong_qiyongbeifen.vue';
import Yuangongguanli_zhuguanliyuan from '../pages/yuangongguanli_zhuguanliyuan/yuangongguanli_zhuguanliyuan.vue';
import Liuyancaina_yicaina from '../pages/liuyancaina_yicaina/liuyancaina_yicaina.vue';
import Liuyancaina_weicaina from '../pages/liuyancaina_weicaina/liuyancaina_weicaina.vue';
import Liuyancaina_cainajianyidanchuang from '../pages/liuyancaina_cainajianyidanchuang/liuyancaina_cainajianyidanchuang.vue';
import Liuyancaina_bucaajianyidanchuang from '../pages/liuyancaina_bucaajianyidanchuang/liuyancaina_bucaajianyidanchuang.vue';
import Tushupandian_xuanzetushuguan from '../pages/tushupandian_xuanzetushuguan/tushupandian_xuanzetushuguan.vue';
import Tushupandian_xianshiyuefen from '../pages/tushupandian_xianshiyuefen/tushupandian_xianshiyuefen.vue';
import Guanliyuan_tushuu_jujuedanchuang from '../pages/guanliyuan_tushuu_jujuedanchuang/guanliyuan_tushuu_jujuedanchuang.vue';
import Guanliyuan_tushuieshou_yitongguo from '../pages/guanliyuan_tushuieshou_yitongguo/guanliyuan_tushuieshou_yitongguo.vue';
import Guanliyuan_tushujieshou_yijujue from '../pages/guanliyuan_tushujieshou_yijujue/guanliyuan_tushujieshou_yijujue.vue';
import Guanliyuan_tushuguihuandanchuang from '../pages/guanliyuan_tushuguihuandanchuang/guanliyuan_tushuguihuandanchuang.vue';
import Tushuguanli_leixing from '../pages/tushuguanli_leixing/tushuguanli_leixing.vue';
import Tushuguanli_tushuguanmingcheng from '../pages/tushuguanli_tushuguanmingcheng/tushuguanli_tushuguanmingcheng.vue';
import Tushuguanli_tushuxiangqing from '../pages/tushuguanli_tushuxiangqing/tushuguanli_tushuxiangqing.vue';
import Guanliyuan_jieyuhuo_youjifangshi from '../pages/guanliyuan_jieyuhuo_youjifangshi/guanliyuan_jieyuhuo_youjifangshi.vue';
import Guanliyuan_jieyuhuo_youjifangshi_1 from '../pages/guanliyuan_jieyuhuo_youjifangshi_1/guanliyuan_jieyuhuo_youjifangshi_1.vue';
import Huodongguanli from '../pages/huodongguanli/huodongguanli.vue';
import Huodongguanli_daibaoming from '../pages/huodongguanli_daibaoming/huodongguanli_daibaoming.vue';
import Huodongguanli_yibaoming from '../pages/huodongguanli_yibaoming/huodongguanli_yibaoming.vue';
import Huodongguanli_daikaishi from '../pages/huodongguanli_daikaishi/huodongguanli_daikaishi.vue';
import Huodongguanli_yijieshu from '../pages/huodongguanli_yijieshu/huodongguanli_yijieshu.vue';
import Huodongguanli_huodongxiangqing from '../pages/huodongguanli_huodongxiangqing/huodongguanli_huodongxiangqing.vue';
import Guanliyuan_tushushou_chakanshuji from '../pages/guanliyuan_tushushou_chakanshuji/guanliyuan_tushushou_chakanshuji.vue';
import Guanliyuan_tushuenhe_shenhezhong from '../pages/guanliyuan_tushuenhe_shenhezhong/guanliyuan_tushuenhe_shenhezhong.vue';
import Guanliyuan_tushuhenhezhong_jujue from '../pages/guanliyuan_tushuhenhezhong_jujue/guanliyuan_tushuhenhezhong_jujue.vue';
import Guanliyuan_tushunhezhong_tongguo from '../pages/guanliyuan_tushunhezhong_tongguo/guanliyuan_tushunhezhong_tongguo.vue';
import Guanliyuan_tushushenhe_yitongguo from '../pages/guanliyuan_tushushenhe_yitongguo/guanliyuan_tushushenhe_yitongguo.vue';
import Guanliyuan_tushushenhe_yijujue from '../pages/guanliyuan_tushushenhe_yijujue/guanliyuan_tushushenhe_yijujue.vue';
import Guanliyuan_xindeenhe_shenhezhong from '../pages/guanliyuan_xindeenhe_shenhezhong/guanliyuan_xindeenhe_shenhezhong.vue';
import Guanliyuan_xindehenhezhongbeifen from '../pages/guanliyuan_xindehenhezhongbeifen/guanliyuan_xindehenhezhongbeifen.vue';
import Guanliyuan_xindeshenhe_yitongguo from '../pages/guanliyuan_xindeshenhe_yitongguo/guanliyuan_xindeshenhe_yitongguo.vue';
import Guanliyuan_xindeenhezhong_tongyi from '../pages/guanliyuan_xindeenhezhong_tongyi/guanliyuan_xindeenhezhong_tongyi.vue';
import Guanliyuan_xindehenhezhong_jujue from '../pages/guanliyuan_xindehenhezhong_jujue/guanliyuan_xindehenhezhong_jujue.vue';
import Zhiboguanli_fabu from '../pages/zhiboguanli_fabu/zhiboguanli_fabu.vue';
import Zhiboguanli from '../pages/zhiboguanli/zhiboguanli.vue';
import Zhiboguanli_fabu_fabu from '../pages/zhiboguanli_fabu_fabu/zhiboguanli_fabu_fabu.vue';
import Duihuanjilu_shangpinxiangqing from '../pages/duihuanjilu_shangpinxiangqing/duihuanjilu_shangpinxiangqing.vue';
import Jifenshangpin_shangpinxiangqing from '../pages/jifenshangpin_shangpinxiangqing/jifenshangpin_shangpinxiangqing.vue';
import Wodexinde_shenhezhong from '../pages/wodexinde_shenhezhong/wodexinde_shenhezhong.vue';
import Wodexinde_shenhezhong_shanchu from '../pages/wodexinde_shenhezhong_shanchu/wodexinde_shenhezhong_shanchu.vue';
import Wodexinde_yijujue from '../pages/wodexinde_yijujue/wodexinde_yijujue.vue';
import Wodexinde_yitongguo from '../pages/wodexinde_yitongguo/wodexinde_yitongguo.vue';
import Lianxiwomen from '../pages/lianxiwomen/lianxiwomen.vue';
import Gerenziliao from '../pages/gerenziliao/gerenziliao.vue';
import Jieyuejilu_dangqnjieyue_daifahuo from '../pages/jieyuejilu_dangqnjieyue_daifahuo/jieyuejilu_dangqnjieyue_daifahuo.vue';
import Youji from '../pages/youji/youji.vue';
import Youji_shanchu from '../pages/youji_shanchu/youji_shanchu.vue';
import Youji_shanchubeifen from '../pages/youji_shanchubeifen/youji_shanchubeifen.vue';
import Jieyuejilu_tianjiashouhuodizhi from '../pages/jieyuejilu_tianjiashouhuodizhi/jieyuejilu_tianjiashouhuodizhi.vue';
import Jieyuejilu_bianjishouhuodizhi from '../pages/jieyuejilu_bianjishouhuodizhi/jieyuejilu_bianjishouhuodizhi.vue';
import Wodeyujie_shenqingzhong from '../pages/wodeyujie_shenqingzhong/wodeyujie_shenqingzhong.vue';
import Jieyuejilu_dangque_shenqingzhong from '../pages/jieyuejilu_dangque_shenqingzhong/jieyuejilu_dangque_shenqingzhong.vue';
import Wodejuanzeng_shenhezhong from '../pages/wodejuanzeng_shenhezhong/wodejuanzeng_shenhezhong.vue';
import Wodehuodong from '../pages/wodehuodong/wodehuodong.vue';
import Wodehuodong_daibaoming from '../pages/wodehuodong_daibaoming/wodehuodong_daibaoming.vue';
import Wodehuodong_yibaoming from '../pages/wodehuodong_yibaoming/wodehuodong_yibaoming.vue';
import Wodehuodong_jinhangzhong from '../pages/wodehuodong_jinhangzhong/wodehuodong_jinhangzhong.vue';
import Wodehuodong_yijieshu from '../pages/wodehuodong_yijieshu/wodehuodong_yijieshu.vue';
import Wodejifen from '../pages/wodejifen/wodejifen.vue';
import Wodejifen_jifenmingxi from '../pages/wodejifen_jifenmingxi/wodejifen_jifenmingxi.vue';
import Wodejifen_jifenguize from '../pages/wodejifen_jifenguize/wodejifen_jifenguize.vue';
import Wodetushuguan from '../pages/wodetushuguan/wodetushuguan.vue';
import Wodetushuguan_tuguanli_yitongguo from '../pages/wodetushuguan_tuguanli_yitongguo/wodetushuguan_tuguanli_yitongguo.vue';
import Wodetushuguan_tuanli_shenhezhong from '../pages/wodetushuguan_tuanli_shenhezhong/wodetushuguan_tuanli_shenhezhong.vue';
import Wodetushuguan_tuhuguanli_yijujue from '../pages/wodetushuguan_tuhuguanli_yijujue/wodetushuguan_tuhuguanli_yijujue.vue';
import Wodetushuguan_jilu_shenqingzhong from '../pages/wodetushuguan_jilu_shenqingzhong/wodetushuguan_jilu_shenqingzhong.vue';
import Wodetushuguan_woue_shenqingzhong from '../pages/wodetushuguan_woue_shenqingzhong/wodetushuguan_woue_shenqingzhong.vue';
import Zhibofenxiang from '../pages/zhibofenxiang/zhibofenxiang.vue';
import Wodetushuguan_woejieyue_daifahuo from '../pages/wodetushuguan_woejieyue_daifahuo/wodetushuguan_woejieyue_daifahuo.vue';
import Wodetushuguan_wojieyue_yishouhuo from '../pages/wodetushuguan_wojieyue_yishouhuo/wodetushuguan_wojieyue_yishouhuo.vue';
import Wodetushuguan_wodejieyue_zaijie from '../pages/wodetushuguan_wodejieyue_zaijie/wodetushuguan_wodejieyue_zaijie.vue';
import Wodetushuguan_wo_yihuandaiqueren from '../pages/wodetushuguan_wo_yihuandaiqueren/wodetushuguan_wo_yihuandaiqueren.vue';
import Wodetushuguan_ji_yihuandaiqueren from '../pages/wodetushuguan_ji_yihuandaiqueren/wodetushuguan_ji_yihuandaiqueren.vue';
import Wodetushuguan_wodejieyue_yihuan from '../pages/wodetushuguan_wodejieyue_yihuan/wodetushuguan_wodejieyue_yihuan.vue';
import Wodetushuguan_wodejieyue_yijujue from '../pages/wodetushuguan_wodejieyue_yijujue/wodetushuguan_wodejieyue_yijujue.vue';
import Wodetushuguan_woejieyue_yiquxiao from '../pages/wodetushuguan_woejieyue_yiquxiao/wodetushuguan_woejieyue_yiquxiao.vue';
import Wodetushuguan_jieyuejilu_riqi from '../pages/wodetushuguan_jieyuejilu_riqi/wodetushuguan_jieyuejilu_riqi.vue';
import Wodetushuguan_jiyuejilu_daifahuo from '../pages/wodetushuguan_jiyuejilu_daifahuo/wodetushuguan_jiyuejilu_daifahuo.vue';
import Wodetushuguan_jiejilu_daishouhuo from '../pages/wodetushuguan_jiejilu_daishouhuo/wodetushuguan_jiejilu_daishouhuo.vue';
import Wodetushuguan_jiouhuo_wuliuxinxi from '../pages/wodetushuguan_jiouhuo_wuliuxinxi/wodetushuguan_jiouhuo_wuliuxinxi.vue';
import Wodetushuguan_jieyuejilu_zaijie from '../pages/wodetushuguan_jieyuejilu_zaijie/wodetushuguan_jieyuejilu_zaijie.vue';
import Wodetushuguan_jieyuejilu_yihuan from '../pages/wodetushuguan_jieyuejilu_yihuan/wodetushuguan_jieyuejilu_yihuan.vue';
import Wodetushuguan_jieyuejilu_yijujue from '../pages/wodetushuguan_jieyuejilu_yijujue/wodetushuguan_jieyuejilu_yijujue.vue';
import Wodetushuguan_jiyuejilu_yiquxiao from '../pages/wodetushuguan_jiyuejilu_yiquxiao/wodetushuguan_jiyuejilu_yiquxiao.vue';
import Wodetushuguan_tushuguanli_xiajia from '../pages/wodetushuguan_tushuguanli_xiajia/wodetushuguan_tushuguanli_xiajia.vue';
import Wodetushuguan_tuuguanli_shangjia from '../pages/wodetushuguan_tuuguanli_shangjia/wodetushuguan_tuuguanli_shangjia.vue';
import Wodetushuguan_queshengye from '../pages/wodetushuguan_queshengye/wodetushuguan_queshengye.vue';
import Wodejifen_duihuanjilu_queshengye from '../pages/wodejifen_duihuanjilu_queshengye/wodejifen_duihuanjilu_queshengye.vue';
import Wodetushuguan_xiugai from '../pages/wodetushuguan_xiugai/wodetushuguan_xiugai.vue';
import Wodetushuguan_xiai_shifouzhanshi from '../pages/wodetushuguan_xiai_shifouzhanshi/wodetushuguan_xiai_shifouzhanshi.vue';
import Yijianxiang from '../pages/yijianxiang/yijianxiang.vue';
import Yijianxiang_queshengye from '../pages/yijianxiang_queshengye/yijianxiang_queshengye.vue';
import Yijianxiang_tianjianyi_danchuang from '../pages/yijianxiang_tianjianyi_danchuang/yijianxiang_tianjianyi_danchuang.vue';
import Yijianxiang_tianjiajianyi from '../pages/yijianxiang_tianjiajianyi/yijianxiang_tianjiajianyi.vue';
import Wodejuanzeng_yitongguo from '../pages/wodejuanzeng_yitongguo/wodejuanzeng_yitongguo.vue';
import Wodejuanzeng_yijujue from '../pages/wodejuanzeng_yijujue/wodejuanzeng_yijujue.vue';
import Wodetuijian_tianjiajuanzengshuji from '../pages/wodetuijian_tianjiajuanzengshuji/wodetuijian_tianjiajuanzengshuji.vue';
import Tushuluru from '../pages/tushuluru/tushuluru.vue';
import Wodetushuguan_tuanli_tushubianji_1 from '../pages/wodetushuguan_tuanli_tushubianji_1/wodetushuguan_tuanli_tushubianji_1.vue';
import Wodeyujie_daifahuo from '../pages/wodeyujie_daifahuo/wodeyujie_daifahuo.vue';
import Wodeyujie_daishouhuo from '../pages/wodeyujie_daishouhuo/wodeyujie_daishouhuo.vue';
import Jieyuejilu_dangqieyue_daishouhuo from '../pages/jieyuejilu_dangqieyue_daishouhuo/jieyuejilu_dangqieyue_daishouhuo.vue';
import Jieyuejilu_dangqianjieyue_zaijie from '../pages/jieyuejilu_dangqianjieyue_zaijie/jieyuejilu_dangqianjieyue_zaijie.vue';
import Jieyuejilu_dangq_yihuandaiqueren from '../pages/jieyuejilu_dangq_yihuandaiqueren/jieyuejilu_dangq_yihuandaiqueren.vue';
import Jieyuejilu_dangqianjieyue_yihuan from '../pages/jieyuejilu_dangqianjieyue_yihuan/jieyuejilu_dangqianjieyue_yihuan.vue';
import Jieyuejilu_dangqanjieyue_yijujue from '../pages/jieyuejilu_dangqanjieyue_yijujue/jieyuejilu_dangqanjieyue_yijujue.vue';
import Jieyuejilu_dangqnjieyue_yiquxiao from '../pages/jieyuejilu_dangqnjieyue_yiquxiao/jieyuejilu_dangqnjieyue_yiquxiao.vue';
import Jieyuejilu_dangqianjieyue_yiyuqi from '../pages/jieyuejilu_dangqianjieyue_yiyuqi/jieyuejilu_dangqianjieyue_yiyuqi.vue';
import Wodeyujie_zaijie from '../pages/wodeyujie_zaijie/wodeyujie_zaijie.vue';
import Wodeyujie_yihuandaiqueren from '../pages/wodeyujie_yihuandaiqueren/wodeyujie_yihuandaiqueren.vue';
import Wodeyujie_yihuan from '../pages/wodeyujie_yihuan/wodeyujie_yihuan.vue';
import Wodeyujie_yijujue from '../pages/wodeyujie_yijujue/wodeyujie_yijujue.vue';
import Wodeyujie_yiquxiao from '../pages/wodeyujie_yiquxiao/wodeyujie_yiquxiao.vue';
import Wodeyujie_yiyuqi from '../pages/wodeyujie_yiyuqi/wodeyujie_yiyuqi.vue';
import Wodeyujie_zaijie_guihuan from '../pages/wodeyujie_zaijie_guihuan/wodeyujie_zaijie_guihuan.vue';
import Jieyuejilu_dangqe_zaijie_guihuan from '../pages/jieyuejilu_dangqe_zaijie_guihuan/jieyuejilu_dangqe_zaijie_guihuan.vue';
import Wodeyujie_queshengye from '../pages/wodeyujie_queshengye/wodeyujie_queshengye.vue';
import Jieyuejilu_lishijieyue from '../pages/jieyuejilu_lishijieyue/jieyuejilu_lishijieyue.vue';
import Jieyuejilu_lishiieyue_queshengye from '../pages/jieyuejilu_lishiieyue_queshengye/jieyuejilu_lishiieyue_queshengye.vue';
import Wodejifen_duihuanjilu from '../pages/wodejifen_duihuanjilu/wodejifen_duihuanjilu.vue';
import Wodejifen_shangpinxiangqing from '../pages/wodejifen_shangpinxiangqing/wodejifen_shangpinxiangqing.vue';
import Wodejifen_shangpnxiangqingbeifen from '../pages/wodejifen_shangpnxiangqingbeifen/wodejifen_shangpnxiangqingbeifen.vue';
import Wodejifen_shangpng_duihuanshibai from '../pages/wodejifen_shangpng_duihuanshibai/wodejifen_shangpng_duihuanshibai.vue';
import Wodetushuguan_jihuo_youjifangshi from '../pages/wodetushuguan_jihuo_youjifangshi/wodetushuguan_jihuo_youjifangshi.vue';
import Wodehuodong_huoding_woyaobaoming from '../pages/wodehuodong_huoding_woyaobaoming/wodehuodong_huoding_woyaobaoming.vue';
import Wodehuodong_huodngqing_yibaoming from '../pages/wodehuodong_huodngqing_yibaoming/wodehuodong_huodngqing_yibaoming.vue';
import Wodehuodong_huoding_jinhangzhong from '../pages/wodehuodong_huoding_jinhangzhong/wodehuodong_huoding_jinhangzhong.vue';
import Wodehuodong_huodangqing_yijieshu from '../pages/wodehuodong_huodangqing_yijieshu/wodehuodong_huodangqing_yijieshu.vue';
import Huodong from '../pages/huodong/huodong.vue';
import Huodong_baomingcenggongdanchuang from '../pages/huodong_baomingcenggongdanchuang/huodong_baomingcenggongdanchuang.vue';
import Huodong_baomingshibaidanchuang from '../pages/huodong_baomingshibaidanchuang/huodong_baomingshibaidanchuang.vue';
import Huodong_queshengye from '../pages/huodong_queshengye/huodong_queshengye.vue';
import Huodong_yibaoming from '../pages/huodong_yibaoming/huodong_yibaoming.vue';
import Huodong_jinhangzhong from '../pages/huodong_jinhangzhong/huodong_jinhangzhong.vue';
import Huodong_yijieshu from '../pages/huodong_yijieshu/huodong_yijieshu.vue';
import Huodong_huodongxiangqing from '../pages/huodong_huodongxiangqing/huodong_huodongxiangqing.vue';
import Dushuxinde_fabu from '../pages/dushuxinde_fabu/dushuxinde_fabu.vue';
import Dushuxinde_xindexiangqing from '../pages/dushuxinde_xindexiangqing/dushuxinde_xindexiangqing.vue';
import Dushuxinde_fabu_shenhedanchuang from '../pages/dushuxinde_fabu_shenhedanchuang/dushuxinde_fabu_shenhedanchuang.vue';
import Tushu from '../pages/tushu/tushu.vue';
import Tushu_yujie_qushufangshi from '../pages/tushu_yujie_qushufangshi/tushu_yujie_qushufangshi.vue';
import Tushu_gerentushu from '../pages/tushu_gerentushu/tushu_gerentushu.vue';
import Sousuo from '../pages/sousuo/sousuo.vue';
import Sousuo_sousuoshuji from '../pages/sousuo_sousuoshuji/sousuo_sousuoshuji.vue';
import Tushuxiangxi_jiechu from '../pages/tushuxiangxi_jiechu/tushuxiangxi_jiechu.vue';
import Tushuxiangxi_yujiezhuangtai from '../pages/tushuxiangxi_yujiezhuangtai/tushuxiangxi_yujiezhuangtai.vue';
import Xuanzeyouji from '../pages/xuanzeyouji/xuanzeyouji.vue';
import Xuanzeyouji_xuanzhongzhuangtai from '../pages/xuanzeyouji_xuanzhongzhuangtai/xuanzeyouji_xuanzhongzhuangtai.vue';
import Shouyebeifen_2 from '../pages/shouyebeifen_2/shouyebeifen_2.vue';
import Shouye_gerenyuelanshi from '../pages/shouye_gerenyuelanshi/shouye_gerenyuelanshi.vue';
import Paihangbang from '../pages/paihangbang/paihangbang.vue';
import Paihangbang_duzhe from '../pages/paihangbang_duzhe/paihangbang_duzhe.vue';
import Paihangbang_gongxiangpaihang from '../pages/paihangbang_gongxiangpaihang/paihangbang_gongxiangpaihang.vue';
import Sousuo_1 from '../pages/sousuo_1/sousuo_1.vue';
import Sousuo_sousuoshuji_1 from '../pages/sousuo_sousuoshuji_1/sousuo_sousuoshuji_1.vue';
import Jigoutushuguan_gengduo from '../pages/jigoutushuguan_gengduo/jigoutushuguan_gengduo.vue';
import Haoshutuijian_gengduo from '../pages/haoshutuijian_gengduo/haoshutuijian_gengduo.vue';
import Haoshutuijian_gengduobeifen from '../pages/haoshutuijian_gengduobeifen/haoshutuijian_gengduobeifen.vue';
import Xinshutuijian_gengduo from '../pages/xinshutuijian_gengduo/xinshutuijian_gengduo.vue';
import Houtaituijian_gengduo from '../pages/houtaituijian_gengduo/houtaituijian_gengduo.vue';
import Jigoutushuguan_queshengye from '../pages/jigoutushuguan_queshengye/jigoutushuguan_queshengye.vue';
import Gerentushuguan_gengduo from '../pages/gerentushuguan_gengduo/gerentushuguan_gengduo.vue';
import Gerentushuguan_queshengye from '../pages/gerentushuguan_queshengye/gerentushuguan_queshengye.vue';
import Sousuo_zanwugaitushu from '../pages/sousuo_zanwugaitushu/sousuo_zanwugaitushu.vue';
import Tushuxiangxi from '../pages/tushuxiangxi/tushuxiangxi.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'tabbar_Xg9eVgrr',
    component: Tabbar_Xg9eVgrr,
    children: [
      {
        path: '/',
        name: 'index',
        component: Index,
      },
      {
        path: '/wode',
        name: 'wode',
        component: Wode,
      },
      {
        path: '/huodong_daibaoming',
        name: 'huodong_daibaoming',
        component: Huodong_daibaoming,
      },
      {
        path: '/dushuxinde',
        name: 'dushuxinde',
        component: Dushuxinde,
      },
    ],
  },
  {
    path: '/guanliyuanrukou',
    name: 'guanliyuanrukou',
    component: Guanliyuanrukou,
  },
  {
    path: '/quanjushezhi',
    name: 'quanjushezhi',
    component: Quanjushezhi,
  },
  {
    path: '/quanjushezhi_tushufenlei',
    name: 'quanjushezhi_tushufenlei',
    component: Quanjushezhi_tushufenlei,
  },
  {
    path: '/quanjushezhi_tushupici',
    name: 'quanjushezhi_tushupici',
    component: Quanjushezhi_tushupici,
  },
  {
    path: '/quanjushezhi_bianjijieyueka',
    name: 'quanjushezhi_bianjijieyueka',
    component: Quanjushezhi_bianjijieyueka,
  },
  {
    path: '/quanjushezhi_canshushezhi',
    name: 'quanjushezhi_canshushezhi',
    component: Quanjushezhi_canshushezhi,
  },
  {
    path: '/quanjushezhi_tusshanchudanchuang',
    name: 'quanjushezhi_tusshanchudanchuang',
    component: Quanjushezhi_tusshanchudanchuang,
  },
  {
    path: '/quanjushezhi_tushufenlei_shanchu',
    name: 'quanjushezhi_tushufenlei_shanchu',
    component: Quanjushezhi_tushufenlei_shanchu,
  },
  {
    path: '/quanjushezhi_tusei_tianjiafenlei',
    name: 'quanjushezhi_tusei_tianjiafenlei',
    component: Quanjushezhi_tusei_tianjiafenlei,
  },
  {
    path: '/quanjushezhi_tuspici_zengjiapici',
    name: 'quanjushezhi_tuspici_zengjiapici',
    component: Quanjushezhi_tuspici_zengjiapici,
  },
  {
    path: '/quanjushezhi_tushupici_xiugai',
    name: 'quanjushezhi_tushupici_xiugai',
    component: Quanjushezhi_tushupici_xiugai,
  },
  {
    path: '/quanjushezhi_tushufenlei_bianji',
    name: 'quanjushezhi_tushufenlei_bianji',
    component: Quanjushezhi_tushufenlei_bianji,
  },
  {
    path: '/quanjushezhi_lunbotu',
    name: 'quanjushezhi_lunbotu',
    component: Quanjushezhi_lunbotu,
  },
  {
    path: '/quanjushezhi_lunbotubeifen',
    name: 'quanjushezhi_lunbotubeifen',
    component: Quanjushezhi_lunbotubeifen,
  },
  {
    path: '/quanjushezhi_gonggaoxinxi',
    name: 'quanjushezhi_gonggaoxinxi',
    component: Quanjushezhi_gonggaoxinxi,
  },
  {
    path: '/quanjushezhi_tushuguanguanli',
    name: 'quanjushezhi_tushuguanguanli',
    component: Quanjushezhi_tushuguanguanli,
  },
  {
    path: '/quanjushezhi_tustianjiatushuguan',
    name: 'quanjushezhi_tustianjiatushuguan',
    component: Quanjushezhi_tustianjiatushuguan,
  },
  {
    path: '/quanjushezhi_tusatushuguanbeifen',
    name: 'quanjushezhi_tusatushuguanbeifen',
    component: Quanjushezhi_tusatushuguanbeifen,
  },
  {
    path: '/wodetushuguan_tuanli_tushubianji',
    name: 'wodetushuguan_tuanli_tushubianji',
    component: Wodetushuguan_tuanli_tushubianji,
  },
  {
    path: '/tushubianmu',
    name: 'tushubianmu',
    component: Tushubianmu,
  },
  {
    path: '/guanliyuan_tushushenhezhong_luru',
    name: 'guanliyuan_tushushenhezhong_luru',
    component: Guanliyuan_tushushenhezhong_luru,
  },
  {
    path: '/guanliyuan_tushu_chucuodanchuang',
    name: 'guanliyuan_tushu_chucuodanchuang',
    component: Guanliyuan_tushu_chucuodanchuang,
  },
  {
    path: '/jifenshangpin_zengjiashangpin',
    name: 'jifenshangpin_zengjiashangpin',
    component: Jifenshangpin_zengjiashangpin,
  },
  {
    path: '/huodongguanli_xinzenghuodong',
    name: 'huodongguanli_xinzenghuodong',
    component: Huodongguanli_xinzenghuodong,
  },
  {
    path: '/huodongguanli_xing_shijianshezhi',
    name: 'huodongguanli_xing_shijianshezhi',
    component: Huodongguanli_xing_shijianshezhi,
  },
  {
    path: '/wuliuguanli_xinzengwuliu',
    name: 'wuliuguanli_xinzengwuliu',
    component: Wuliuguanli_xinzengwuliu,
  },
  {
    path: '/wuliuguanli_bianji',
    name: 'wuliuguanli_bianji',
    component: Wuliuguanli_bianji,
  },
  {
    path: '/jifenshangpin_xiugai',
    name: 'jifenshangpin_xiugai',
    component: Jifenshangpin_xiugai,
  },
  {
    path: '/tushubianmu_tushuguan',
    name: 'tushubianmu_tushuguan',
    component: Tushubianmu_tushuguan,
  },
  {
    path: '/tushubianmu_fenlei',
    name: 'tushubianmu_fenlei',
    component: Tushubianmu_fenlei,
  },
  {
    path: '/tushubianmu_pici',
    name: 'tushubianmu_pici',
    component: Tushubianmu_pici,
  },
  {
    path: '/tushuguanli',
    name: 'tushuguanli',
    component: Tushuguanli,
  },
  {
    path: '/guanliyuan_jieyuhu_shenqingzhong',
    name: 'guanliyuan_jieyuhu_shenqingzhong',
    component: Guanliyuan_jieyuhu_shenqingzhong,
  },
  {
    path: '/guanliyuan_jieyug_jujuedanchuang',
    name: 'guanliyuan_jieyug_jujuedanchuang',
    component: Guanliyuan_jieyug_jujuedanchuang,
  },
  {
    path: '/guanliyuan_jieyutongguodanchuang',
    name: 'guanliyuan_jieyutongguodanchuang',
    component: Guanliyuan_jieyutongguodanchuang,
  },
  {
    path: '/guanliyuan_jieyuhu_shenqingzhong_1',
    name: 'guanliyuan_jieyuhu_shenqingzhong_1',
    component: Guanliyuan_jieyuhu_shenqingzhong_1,
  },
  {
    path: '/guanliyuan_jieyug_jujuedanchuang_1',
    name: 'guanliyuan_jieyug_jujuedanchuang_1',
    component: Guanliyuan_jieyug_jujuedanchuang_1,
  },
  {
    path: '/guanliyuan_jieyutongguodanchuang_1',
    name: 'guanliyuan_jieyutongguodanchuang_1',
    component: Guanliyuan_jieyutongguodanchuang_1,
  },
  {
    path: '/guanliyuan_jieyuuetushu_daifahuo',
    name: 'guanliyuan_jieyuuetushu_daifahuo',
    component: Guanliyuan_jieyuuetushu_daifahuo,
  },
  {
    path: '/guanliyuan_jieyuietushu_daifahuo',
    name: 'guanliyuan_jieyuietushu_daifahuo',
    component: Guanliyuan_jieyuietushu_daifahuo,
  },
  {
    path: '/guanliyuan_jieyutushu_daishouhuo',
    name: 'guanliyuan_jieyutushu_daishouhuo',
    component: Guanliyuan_jieyutushu_daishouhuo,
  },
  {
    path: '/guanliyuan_jieyutushu_daishouhuo_1',
    name: 'guanliyuan_jieyutushu_daishouhuo_1',
    component: Guanliyuan_jieyutushu_daishouhuo_1,
  },
  {
    path: '/guanliyuan_jieyueyuetushu_zaijie',
    name: 'guanliyuan_jieyueyuetushu_zaijie',
    component: Guanliyuan_jieyueyuetushu_zaijie,
  },
  {
    path: '/guanliyuan_jieyuujietushu_zaijie',
    name: 'guanliyuan_jieyuujietushu_zaijie',
    component: Guanliyuan_jieyuujietushu_zaijie,
  },
  {
    path: '/guanliyuan_jieyu_yihuandaiqueren',
    name: 'guanliyuan_jieyu_yihuandaiqueren',
    component: Guanliyuan_jieyu_yihuandaiqueren,
  },
  {
    path: '/guanliyuan_jieyu_yihuandaiqueren_1',
    name: 'guanliyuan_jieyu_yihuandaiqueren_1',
    component: Guanliyuan_jieyu_yihuandaiqueren_1,
  },
  {
    path: '/guanliyuan_jieyun_jujuedanchuang',
    name: 'guanliyuan_jieyun_jujuedanchuang',
    component: Guanliyuan_jieyun_jujuedanchuang,
  },
  {
    path: '/guanliyuan_jieyun_jujuedanchuang_1',
    name: 'guanliyuan_jieyun_jujuedanchuang_1',
    component: Guanliyuan_jieyun_jujuedanchuang_1,
  },
  {
    path: '/guanliyuan_jieyueyuetushu_yihuan',
    name: 'guanliyuan_jieyueyuetushu_yihuan',
    component: Guanliyuan_jieyueyuetushu_yihuan,
  },
  {
    path: '/guanliyuan_jieyuujietushu_yihuan',
    name: 'guanliyuan_jieyuujietushu_yihuan',
    component: Guanliyuan_jieyuujietushu_yihuan,
  },
  {
    path: '/guanliyuan_jieyuyuetushu_yijujue',
    name: 'guanliyuan_jieyuyuetushu_yijujue',
    component: Guanliyuan_jieyuyuetushu_yijujue,
  },
  {
    path: '/guanliyuan_jieyujietushu_yijujue',
    name: 'guanliyuan_jieyujietushu_yijujue',
    component: Guanliyuan_jieyujietushu_yijujue,
  },
  {
    path: '/guanliyuan_jieyuuetushu_yiquxiao',
    name: 'guanliyuan_jieyuuetushu_yiquxiao',
    component: Guanliyuan_jieyuuetushu_yiquxiao,
  },
  {
    path: '/guanliyuan_jieyuuetushu_yiquxiao_1',
    name: 'guanliyuan_jieyuuetushu_yiquxiao_1',
    component: Guanliyuan_jieyuuetushu_yiquxiao_1,
  },
  {
    path: '/guanliyuan_jieyueyuetushu_yiyuqi',
    name: 'guanliyuan_jieyueyuetushu_yiyuqi',
    component: Guanliyuan_jieyueyuetushu_yiyuqi,
  },
  {
    path: '/guanliyuan_jieyuejilu_yuqitushu',
    name: 'guanliyuan_jieyuejilu_yuqitushu',
    component: Guanliyuan_jieyuejilu_yuqitushu,
  },
  {
    path: '/guanliyuan_jieyuujietushu_yiyuqi',
    name: 'guanliyuan_jieyuujietushu_yiyuqi',
    component: Guanliyuan_jieyuujietushu_yiyuqi,
  },
  {
    path: '/guanliyuan_tushuguihuan',
    name: 'guanliyuan_tushuguihuan',
    component: Guanliyuan_tushuguihuan,
  },
  {
    path: '/guanliyuan_tushushou_shenhezhong',
    name: 'guanliyuan_tushushou_shenhezhong',
    component: Guanliyuan_tushushou_shenhezhong,
  },
  {
    path: '/jifenshangpin',
    name: 'jifenshangpin',
    component: Jifenshangpin,
  },
  {
    path: '/duihuanjilu',
    name: 'duihuanjilu',
    component: Duihuanjilu,
  },
  {
    path: '/duihuanjilu_daifafang',
    name: 'duihuanjilu_daifafang',
    component: Duihuanjilu_daifafang,
  },
  {
    path: '/duihuanjilu_yifafang',
    name: 'duihuanjilu_yifafang',
    component: Duihuanjilu_yifafang,
  },
  {
    path: '/tushupandian',
    name: 'tushupandian',
    component: Tushupandian,
  },
  {
    path: '/liuyancaina',
    name: 'liuyancaina',
    component: Liuyancaina,
  },
  {
    path: '/yuangongguanli',
    name: 'yuangongguanli',
    component: Yuangongguanli,
  },
  {
    path: '/yuangongguanli_zengjiachengyuan',
    name: 'yuangongguanli_zengjiachengyuan',
    component: Yuangongguanli_zengjiachengyuan,
  },
  {
    path: '/yuangongguanli_doruyuangongxinxi',
    name: 'yuangongguanli_doruyuangongxinxi',
    component: Yuangongguanli_doruyuangongxinxi,
  },
  {
    path: '/wuliuguanli',
    name: 'wuliuguanli',
    component: Wuliuguanli,
  },
  {
    path: '/yuangongguanli_jinyong_qiyong',
    name: 'yuangongguanli_jinyong_qiyong',
    component: Yuangongguanli_jinyong_qiyong,
  },
  {
    path: '/yuangongguanli_jong_qiyongbeifen',
    name: 'yuangongguanli_jong_qiyongbeifen',
    component: Yuangongguanli_jong_qiyongbeifen,
  },
  {
    path: '/yuangongguanli_zhuguanliyuan',
    name: 'yuangongguanli_zhuguanliyuan',
    component: Yuangongguanli_zhuguanliyuan,
  },
  {
    path: '/liuyancaina_yicaina',
    name: 'liuyancaina_yicaina',
    component: Liuyancaina_yicaina,
  },
  {
    path: '/liuyancaina_weicaina',
    name: 'liuyancaina_weicaina',
    component: Liuyancaina_weicaina,
  },
  {
    path: '/liuyancaina_cainajianyidanchuang',
    name: 'liuyancaina_cainajianyidanchuang',
    component: Liuyancaina_cainajianyidanchuang,
  },
  {
    path: '/liuyancaina_bucaajianyidanchuang',
    name: 'liuyancaina_bucaajianyidanchuang',
    component: Liuyancaina_bucaajianyidanchuang,
  },
  {
    path: '/tushupandian_xuanzetushuguan',
    name: 'tushupandian_xuanzetushuguan',
    component: Tushupandian_xuanzetushuguan,
  },
  {
    path: '/tushupandian_xianshiyuefen',
    name: 'tushupandian_xianshiyuefen',
    component: Tushupandian_xianshiyuefen,
  },
  {
    path: '/guanliyuan_tushuu_jujuedanchuang',
    name: 'guanliyuan_tushuu_jujuedanchuang',
    component: Guanliyuan_tushuu_jujuedanchuang,
  },
  {
    path: '/guanliyuan_tushuieshou_yitongguo',
    name: 'guanliyuan_tushuieshou_yitongguo',
    component: Guanliyuan_tushuieshou_yitongguo,
  },
  {
    path: '/guanliyuan_tushujieshou_yijujue',
    name: 'guanliyuan_tushujieshou_yijujue',
    component: Guanliyuan_tushujieshou_yijujue,
  },
  {
    path: '/guanliyuan_tushuguihuandanchuang',
    name: 'guanliyuan_tushuguihuandanchuang',
    component: Guanliyuan_tushuguihuandanchuang,
  },
  {
    path: '/tushuguanli_leixing',
    name: 'tushuguanli_leixing',
    component: Tushuguanli_leixing,
  },
  {
    path: '/tushuguanli_tushuguanmingcheng',
    name: 'tushuguanli_tushuguanmingcheng',
    component: Tushuguanli_tushuguanmingcheng,
  },
  {
    path: '/tushuguanli_tushuxiangqing',
    name: 'tushuguanli_tushuxiangqing',
    component: Tushuguanli_tushuxiangqing,
  },
  {
    path: '/guanliyuan_jieyuhuo_youjifangshi',
    name: 'guanliyuan_jieyuhuo_youjifangshi',
    component: Guanliyuan_jieyuhuo_youjifangshi,
  },
  {
    path: '/guanliyuan_jieyuhuo_youjifangshi_1',
    name: 'guanliyuan_jieyuhuo_youjifangshi_1',
    component: Guanliyuan_jieyuhuo_youjifangshi_1,
  },
  {
    path: '/huodongguanli',
    name: 'huodongguanli',
    component: Huodongguanli,
  },
  {
    path: '/huodongguanli_daibaoming',
    name: 'huodongguanli_daibaoming',
    component: Huodongguanli_daibaoming,
  },
  {
    path: '/huodongguanli_yibaoming',
    name: 'huodongguanli_yibaoming',
    component: Huodongguanli_yibaoming,
  },
  {
    path: '/huodongguanli_daikaishi',
    name: 'huodongguanli_daikaishi',
    component: Huodongguanli_daikaishi,
  },
  {
    path: '/huodongguanli_yijieshu',
    name: 'huodongguanli_yijieshu',
    component: Huodongguanli_yijieshu,
  },
  {
    path: '/huodongguanli_huodongxiangqing',
    name: 'huodongguanli_huodongxiangqing',
    component: Huodongguanli_huodongxiangqing,
  },
  {
    path: '/guanliyuan_tushushou_chakanshuji',
    name: 'guanliyuan_tushushou_chakanshuji',
    component: Guanliyuan_tushushou_chakanshuji,
  },
  {
    path: '/guanliyuan_tushuenhe_shenhezhong',
    name: 'guanliyuan_tushuenhe_shenhezhong',
    component: Guanliyuan_tushuenhe_shenhezhong,
  },
  {
    path: '/guanliyuan_tushuhenhezhong_jujue',
    name: 'guanliyuan_tushuhenhezhong_jujue',
    component: Guanliyuan_tushuhenhezhong_jujue,
  },
  {
    path: '/guanliyuan_tushunhezhong_tongguo',
    name: 'guanliyuan_tushunhezhong_tongguo',
    component: Guanliyuan_tushunhezhong_tongguo,
  },
  {
    path: '/guanliyuan_tushushenhe_yitongguo',
    name: 'guanliyuan_tushushenhe_yitongguo',
    component: Guanliyuan_tushushenhe_yitongguo,
  },
  {
    path: '/guanliyuan_tushushenhe_yijujue',
    name: 'guanliyuan_tushushenhe_yijujue',
    component: Guanliyuan_tushushenhe_yijujue,
  },
  {
    path: '/guanliyuan_xindeenhe_shenhezhong',
    name: 'guanliyuan_xindeenhe_shenhezhong',
    component: Guanliyuan_xindeenhe_shenhezhong,
  },
  {
    path: '/guanliyuan_xindehenhezhongbeifen',
    name: 'guanliyuan_xindehenhezhongbeifen',
    component: Guanliyuan_xindehenhezhongbeifen,
  },
  {
    path: '/guanliyuan_xindeshenhe_yitongguo',
    name: 'guanliyuan_xindeshenhe_yitongguo',
    component: Guanliyuan_xindeshenhe_yitongguo,
  },
  {
    path: '/guanliyuan_xindeenhezhong_tongyi',
    name: 'guanliyuan_xindeenhezhong_tongyi',
    component: Guanliyuan_xindeenhezhong_tongyi,
  },
  {
    path: '/guanliyuan_xindehenhezhong_jujue',
    name: 'guanliyuan_xindehenhezhong_jujue',
    component: Guanliyuan_xindehenhezhong_jujue,
  },
  {
    path: '/zhiboguanli_fabu',
    name: 'zhiboguanli_fabu',
    component: Zhiboguanli_fabu,
  },
  {
    path: '/zhiboguanli',
    name: 'zhiboguanli',
    component: Zhiboguanli,
  },
  {
    path: '/zhiboguanli_fabu_fabu',
    name: 'zhiboguanli_fabu_fabu',
    component: Zhiboguanli_fabu_fabu,
  },
  {
    path: '/duihuanjilu_shangpinxiangqing',
    name: 'duihuanjilu_shangpinxiangqing',
    component: Duihuanjilu_shangpinxiangqing,
  },
  {
    path: '/jifenshangpin_shangpinxiangqing',
    name: 'jifenshangpin_shangpinxiangqing',
    component: Jifenshangpin_shangpinxiangqing,
  },
  {
    path: '/wodexinde_shenhezhong',
    name: 'wodexinde_shenhezhong',
    component: Wodexinde_shenhezhong,
  },
  {
    path: '/wodexinde_shenhezhong_shanchu',
    name: 'wodexinde_shenhezhong_shanchu',
    component: Wodexinde_shenhezhong_shanchu,
  },
  {
    path: '/wodexinde_yijujue',
    name: 'wodexinde_yijujue',
    component: Wodexinde_yijujue,
  },
  {
    path: '/wodexinde_yitongguo',
    name: 'wodexinde_yitongguo',
    component: Wodexinde_yitongguo,
  },
  {
    path: '/lianxiwomen',
    name: 'lianxiwomen',
    component: Lianxiwomen,
  },
  {
    path: '/gerenziliao',
    name: 'gerenziliao',
    component: Gerenziliao,
  },
  {
    path: '/jieyuejilu_dangqnjieyue_daifahuo',
    name: 'jieyuejilu_dangqnjieyue_daifahuo',
    component: Jieyuejilu_dangqnjieyue_daifahuo,
  },
  {
    path: '/youji',
    name: 'youji',
    component: Youji,
  },
  {
    path: '/youji_shanchu',
    name: 'youji_shanchu',
    component: Youji_shanchu,
  },
  {
    path: '/youji_shanchubeifen',
    name: 'youji_shanchubeifen',
    component: Youji_shanchubeifen,
  },
  {
    path: '/jieyuejilu_tianjiashouhuodizhi',
    name: 'jieyuejilu_tianjiashouhuodizhi',
    component: Jieyuejilu_tianjiashouhuodizhi,
  },
  {
    path: '/jieyuejilu_bianjishouhuodizhi',
    name: 'jieyuejilu_bianjishouhuodizhi',
    component: Jieyuejilu_bianjishouhuodizhi,
  },
  {
    path: '/wodeyujie_shenqingzhong',
    name: 'wodeyujie_shenqingzhong',
    component: Wodeyujie_shenqingzhong,
  },
  {
    path: '/jieyuejilu_dangque_shenqingzhong',
    name: 'jieyuejilu_dangque_shenqingzhong',
    component: Jieyuejilu_dangque_shenqingzhong,
  },
  {
    path: '/wodejuanzeng_shenhezhong',
    name: 'wodejuanzeng_shenhezhong',
    component: Wodejuanzeng_shenhezhong,
  },
  {
    path: '/wodehuodong',
    name: 'wodehuodong',
    component: Wodehuodong,
  },
  {
    path: '/wodehuodong_daibaoming',
    name: 'wodehuodong_daibaoming',
    component: Wodehuodong_daibaoming,
  },
  {
    path: '/wodehuodong_yibaoming',
    name: 'wodehuodong_yibaoming',
    component: Wodehuodong_yibaoming,
  },
  {
    path: '/wodehuodong_jinhangzhong',
    name: 'wodehuodong_jinhangzhong',
    component: Wodehuodong_jinhangzhong,
  },
  {
    path: '/wodehuodong_yijieshu',
    name: 'wodehuodong_yijieshu',
    component: Wodehuodong_yijieshu,
  },
  {
    path: '/wodejifen',
    name: 'wodejifen',
    component: Wodejifen,
  },
  {
    path: '/wodejifen_jifenmingxi',
    name: 'wodejifen_jifenmingxi',
    component: Wodejifen_jifenmingxi,
  },
  {
    path: '/wodejifen_jifenguize',
    name: 'wodejifen_jifenguize',
    component: Wodejifen_jifenguize,
  },
  {
    path: '/wodetushuguan',
    name: 'wodetushuguan',
    component: Wodetushuguan,
  },
  {
    path: '/wodetushuguan_tuguanli_yitongguo',
    name: 'wodetushuguan_tuguanli_yitongguo',
    component: Wodetushuguan_tuguanli_yitongguo,
  },
  {
    path: '/wodetushuguan_tuanli_shenhezhong',
    name: 'wodetushuguan_tuanli_shenhezhong',
    component: Wodetushuguan_tuanli_shenhezhong,
  },
  {
    path: '/wodetushuguan_tuhuguanli_yijujue',
    name: 'wodetushuguan_tuhuguanli_yijujue',
    component: Wodetushuguan_tuhuguanli_yijujue,
  },
  {
    path: '/wodetushuguan_jilu_shenqingzhong',
    name: 'wodetushuguan_jilu_shenqingzhong',
    component: Wodetushuguan_jilu_shenqingzhong,
  },
  {
    path: '/wodetushuguan_woue_shenqingzhong',
    name: 'wodetushuguan_woue_shenqingzhong',
    component: Wodetushuguan_woue_shenqingzhong,
  },
  {
    path: '/zhibofenxiang',
    name: 'zhibofenxiang',
    component: Zhibofenxiang,
  },
  {
    path: '/wodetushuguan_woejieyue_daifahuo',
    name: 'wodetushuguan_woejieyue_daifahuo',
    component: Wodetushuguan_woejieyue_daifahuo,
  },
  {
    path: '/wodetushuguan_wojieyue_yishouhuo',
    name: 'wodetushuguan_wojieyue_yishouhuo',
    component: Wodetushuguan_wojieyue_yishouhuo,
  },
  {
    path: '/wodetushuguan_wodejieyue_zaijie',
    name: 'wodetushuguan_wodejieyue_zaijie',
    component: Wodetushuguan_wodejieyue_zaijie,
  },
  {
    path: '/wodetushuguan_wo_yihuandaiqueren',
    name: 'wodetushuguan_wo_yihuandaiqueren',
    component: Wodetushuguan_wo_yihuandaiqueren,
  },
  {
    path: '/wodetushuguan_ji_yihuandaiqueren',
    name: 'wodetushuguan_ji_yihuandaiqueren',
    component: Wodetushuguan_ji_yihuandaiqueren,
  },
  {
    path: '/wodetushuguan_wodejieyue_yihuan',
    name: 'wodetushuguan_wodejieyue_yihuan',
    component: Wodetushuguan_wodejieyue_yihuan,
  },
  {
    path: '/wodetushuguan_wodejieyue_yijujue',
    name: 'wodetushuguan_wodejieyue_yijujue',
    component: Wodetushuguan_wodejieyue_yijujue,
  },
  {
    path: '/wodetushuguan_woejieyue_yiquxiao',
    name: 'wodetushuguan_woejieyue_yiquxiao',
    component: Wodetushuguan_woejieyue_yiquxiao,
  },
  {
    path: '/wodetushuguan_jieyuejilu_riqi',
    name: 'wodetushuguan_jieyuejilu_riqi',
    component: Wodetushuguan_jieyuejilu_riqi,
  },
  {
    path: '/wodetushuguan_jiyuejilu_daifahuo',
    name: 'wodetushuguan_jiyuejilu_daifahuo',
    component: Wodetushuguan_jiyuejilu_daifahuo,
  },
  {
    path: '/wodetushuguan_jiejilu_daishouhuo',
    name: 'wodetushuguan_jiejilu_daishouhuo',
    component: Wodetushuguan_jiejilu_daishouhuo,
  },
  {
    path: '/wodetushuguan_jiouhuo_wuliuxinxi',
    name: 'wodetushuguan_jiouhuo_wuliuxinxi',
    component: Wodetushuguan_jiouhuo_wuliuxinxi,
  },
  {
    path: '/wodetushuguan_jieyuejilu_zaijie',
    name: 'wodetushuguan_jieyuejilu_zaijie',
    component: Wodetushuguan_jieyuejilu_zaijie,
  },
  {
    path: '/wodetushuguan_jieyuejilu_yihuan',
    name: 'wodetushuguan_jieyuejilu_yihuan',
    component: Wodetushuguan_jieyuejilu_yihuan,
  },
  {
    path: '/wodetushuguan_jieyuejilu_yijujue',
    name: 'wodetushuguan_jieyuejilu_yijujue',
    component: Wodetushuguan_jieyuejilu_yijujue,
  },
  {
    path: '/wodetushuguan_jiyuejilu_yiquxiao',
    name: 'wodetushuguan_jiyuejilu_yiquxiao',
    component: Wodetushuguan_jiyuejilu_yiquxiao,
  },
  {
    path: '/wodetushuguan_tushuguanli_xiajia',
    name: 'wodetushuguan_tushuguanli_xiajia',
    component: Wodetushuguan_tushuguanli_xiajia,
  },
  {
    path: '/wodetushuguan_tuuguanli_shangjia',
    name: 'wodetushuguan_tuuguanli_shangjia',
    component: Wodetushuguan_tuuguanli_shangjia,
  },
  {
    path: '/wodetushuguan_queshengye',
    name: 'wodetushuguan_queshengye',
    component: Wodetushuguan_queshengye,
  },
  {
    path: '/wodejifen_duihuanjilu_queshengye',
    name: 'wodejifen_duihuanjilu_queshengye',
    component: Wodejifen_duihuanjilu_queshengye,
  },
  {
    path: '/wodetushuguan_xiugai',
    name: 'wodetushuguan_xiugai',
    component: Wodetushuguan_xiugai,
  },
  {
    path: '/wodetushuguan_xiai_shifouzhanshi',
    name: 'wodetushuguan_xiai_shifouzhanshi',
    component: Wodetushuguan_xiai_shifouzhanshi,
  },
  {
    path: '/yijianxiang',
    name: 'yijianxiang',
    component: Yijianxiang,
  },
  {
    path: '/yijianxiang_queshengye',
    name: 'yijianxiang_queshengye',
    component: Yijianxiang_queshengye,
  },
  {
    path: '/yijianxiang_tianjianyi_danchuang',
    name: 'yijianxiang_tianjianyi_danchuang',
    component: Yijianxiang_tianjianyi_danchuang,
  },
  {
    path: '/yijianxiang_tianjiajianyi',
    name: 'yijianxiang_tianjiajianyi',
    component: Yijianxiang_tianjiajianyi,
  },
  {
    path: '/wodejuanzeng_yitongguo',
    name: 'wodejuanzeng_yitongguo',
    component: Wodejuanzeng_yitongguo,
  },
  {
    path: '/wodejuanzeng_yijujue',
    name: 'wodejuanzeng_yijujue',
    component: Wodejuanzeng_yijujue,
  },
  {
    path: '/wodetuijian_tianjiajuanzengshuji',
    name: 'wodetuijian_tianjiajuanzengshuji',
    component: Wodetuijian_tianjiajuanzengshuji,
  },
  {
    path: '/tushuluru',
    name: 'tushuluru',
    component: Tushuluru,
  },
  {
    path: '/wodetushuguan_tuanli_tushubianji_1',
    name: 'wodetushuguan_tuanli_tushubianji_1',
    component: Wodetushuguan_tuanli_tushubianji_1,
  },
  {
    path: '/wodeyujie_daifahuo',
    name: 'wodeyujie_daifahuo',
    component: Wodeyujie_daifahuo,
  },
  {
    path: '/wodeyujie_daishouhuo',
    name: 'wodeyujie_daishouhuo',
    component: Wodeyujie_daishouhuo,
  },
  {
    path: '/jieyuejilu_dangqieyue_daishouhuo',
    name: 'jieyuejilu_dangqieyue_daishouhuo',
    component: Jieyuejilu_dangqieyue_daishouhuo,
  },
  {
    path: '/jieyuejilu_dangqianjieyue_zaijie',
    name: 'jieyuejilu_dangqianjieyue_zaijie',
    component: Jieyuejilu_dangqianjieyue_zaijie,
  },
  {
    path: '/jieyuejilu_dangq_yihuandaiqueren',
    name: 'jieyuejilu_dangq_yihuandaiqueren',
    component: Jieyuejilu_dangq_yihuandaiqueren,
  },
  {
    path: '/jieyuejilu_dangqianjieyue_yihuan',
    name: 'jieyuejilu_dangqianjieyue_yihuan',
    component: Jieyuejilu_dangqianjieyue_yihuan,
  },
  {
    path: '/jieyuejilu_dangqanjieyue_yijujue',
    name: 'jieyuejilu_dangqanjieyue_yijujue',
    component: Jieyuejilu_dangqanjieyue_yijujue,
  },
  {
    path: '/jieyuejilu_dangqnjieyue_yiquxiao',
    name: 'jieyuejilu_dangqnjieyue_yiquxiao',
    component: Jieyuejilu_dangqnjieyue_yiquxiao,
  },
  {
    path: '/jieyuejilu_dangqianjieyue_yiyuqi',
    name: 'jieyuejilu_dangqianjieyue_yiyuqi',
    component: Jieyuejilu_dangqianjieyue_yiyuqi,
  },
  {
    path: '/wodeyujie_zaijie',
    name: 'wodeyujie_zaijie',
    component: Wodeyujie_zaijie,
  },
  {
    path: '/wodeyujie_yihuandaiqueren',
    name: 'wodeyujie_yihuandaiqueren',
    component: Wodeyujie_yihuandaiqueren,
  },
  {
    path: '/wodeyujie_yihuan',
    name: 'wodeyujie_yihuan',
    component: Wodeyujie_yihuan,
  },
  {
    path: '/wodeyujie_yijujue',
    name: 'wodeyujie_yijujue',
    component: Wodeyujie_yijujue,
  },
  {
    path: '/wodeyujie_yiquxiao',
    name: 'wodeyujie_yiquxiao',
    component: Wodeyujie_yiquxiao,
  },
  {
    path: '/wodeyujie_yiyuqi',
    name: 'wodeyujie_yiyuqi',
    component: Wodeyujie_yiyuqi,
  },
  {
    path: '/wodeyujie_zaijie_guihuan',
    name: 'wodeyujie_zaijie_guihuan',
    component: Wodeyujie_zaijie_guihuan,
  },
  {
    path: '/jieyuejilu_dangqe_zaijie_guihuan',
    name: 'jieyuejilu_dangqe_zaijie_guihuan',
    component: Jieyuejilu_dangqe_zaijie_guihuan,
  },
  {
    path: '/wodeyujie_queshengye',
    name: 'wodeyujie_queshengye',
    component: Wodeyujie_queshengye,
  },
  {
    path: '/jieyuejilu_lishijieyue',
    name: 'jieyuejilu_lishijieyue',
    component: Jieyuejilu_lishijieyue,
  },
  {
    path: '/jieyuejilu_lishiieyue_queshengye',
    name: 'jieyuejilu_lishiieyue_queshengye',
    component: Jieyuejilu_lishiieyue_queshengye,
  },
  {
    path: '/wodejifen_duihuanjilu',
    name: 'wodejifen_duihuanjilu',
    component: Wodejifen_duihuanjilu,
  },
  {
    path: '/wodejifen_shangpinxiangqing',
    name: 'wodejifen_shangpinxiangqing',
    component: Wodejifen_shangpinxiangqing,
  },
  {
    path: '/wodejifen_shangpnxiangqingbeifen',
    name: 'wodejifen_shangpnxiangqingbeifen',
    component: Wodejifen_shangpnxiangqingbeifen,
  },
  {
    path: '/wodejifen_shangpng_duihuanshibai',
    name: 'wodejifen_shangpng_duihuanshibai',
    component: Wodejifen_shangpng_duihuanshibai,
  },
  {
    path: '/wodetushuguan_jihuo_youjifangshi',
    name: 'wodetushuguan_jihuo_youjifangshi',
    component: Wodetushuguan_jihuo_youjifangshi,
  },
  {
    path: '/wodehuodong_huoding_woyaobaoming',
    name: 'wodehuodong_huoding_woyaobaoming',
    component: Wodehuodong_huoding_woyaobaoming,
  },
  {
    path: '/wodehuodong_huodngqing_yibaoming',
    name: 'wodehuodong_huodngqing_yibaoming',
    component: Wodehuodong_huodngqing_yibaoming,
  },
  {
    path: '/wodehuodong_huoding_jinhangzhong',
    name: 'wodehuodong_huoding_jinhangzhong',
    component: Wodehuodong_huoding_jinhangzhong,
  },
  {
    path: '/wodehuodong_huodangqing_yijieshu',
    name: 'wodehuodong_huodangqing_yijieshu',
    component: Wodehuodong_huodangqing_yijieshu,
  },
  {
    path: '/huodong',
    name: 'huodong',
    component: Huodong,
  },
  {
    path: '/huodong_baomingcenggongdanchuang',
    name: 'huodong_baomingcenggongdanchuang',
    component: Huodong_baomingcenggongdanchuang,
  },
  {
    path: '/huodong_baomingshibaidanchuang',
    name: 'huodong_baomingshibaidanchuang',
    component: Huodong_baomingshibaidanchuang,
  },
  {
    path: '/huodong_queshengye',
    name: 'huodong_queshengye',
    component: Huodong_queshengye,
  },
  {
    path: '/huodong_yibaoming',
    name: 'huodong_yibaoming',
    component: Huodong_yibaoming,
  },
  {
    path: '/huodong_jinhangzhong',
    name: 'huodong_jinhangzhong',
    component: Huodong_jinhangzhong,
  },
  {
    path: '/huodong_yijieshu',
    name: 'huodong_yijieshu',
    component: Huodong_yijieshu,
  },
  {
    path: '/huodong_huodongxiangqing',
    name: 'huodong_huodongxiangqing',
    component: Huodong_huodongxiangqing,
  },
  {
    path: '/dushuxinde_fabu',
    name: 'dushuxinde_fabu',
    component: Dushuxinde_fabu,
  },
  {
    path: '/dushuxinde_xindexiangqing',
    name: 'dushuxinde_xindexiangqing',
    component: Dushuxinde_xindexiangqing,
  },
  {
    path: '/dushuxinde_fabu_shenhedanchuang',
    name: 'dushuxinde_fabu_shenhedanchuang',
    component: Dushuxinde_fabu_shenhedanchuang,
  },
  {
    path: '/tushu',
    name: 'tushu',
    component: Tushu,
  },
  {
    path: '/tushu_yujie_qushufangshi',
    name: 'tushu_yujie_qushufangshi',
    component: Tushu_yujie_qushufangshi,
  },
  {
    path: '/tushu_gerentushu',
    name: 'tushu_gerentushu',
    component: Tushu_gerentushu,
  },
  {
    path: '/sousuo',
    name: 'sousuo',
    component: Sousuo,
  },
  {
    path: '/sousuo_sousuoshuji',
    name: 'sousuo_sousuoshuji',
    component: Sousuo_sousuoshuji,
  },
  {
    path: '/tushuxiangxi_jiechu',
    name: 'tushuxiangxi_jiechu',
    component: Tushuxiangxi_jiechu,
  },
  {
    path: '/tushuxiangxi_yujiezhuangtai',
    name: 'tushuxiangxi_yujiezhuangtai',
    component: Tushuxiangxi_yujiezhuangtai,
  },
  {
    path: '/xuanzeyouji',
    name: 'xuanzeyouji',
    component: Xuanzeyouji,
  },
  {
    path: '/xuanzeyouji_xuanzhongzhuangtai',
    name: 'xuanzeyouji_xuanzhongzhuangtai',
    component: Xuanzeyouji_xuanzhongzhuangtai,
  },
  {
    path: '/shouyebeifen_2',
    name: 'shouyebeifen_2',
    component: Shouyebeifen_2,
  },
  {
    path: '/shouye_gerenyuelanshi',
    name: 'shouye_gerenyuelanshi',
    component: Shouye_gerenyuelanshi,
  },
  {
    path: '/paihangbang',
    name: 'paihangbang',
    component: Paihangbang,
  },
  {
    path: '/paihangbang_duzhe',
    name: 'paihangbang_duzhe',
    component: Paihangbang_duzhe,
  },
  {
    path: '/paihangbang_gongxiangpaihang',
    name: 'paihangbang_gongxiangpaihang',
    component: Paihangbang_gongxiangpaihang,
  },
  {
    path: '/sousuo_1',
    name: 'sousuo_1',
    component: Sousuo_1,
  },
  {
    path: '/sousuo_sousuoshuji_1',
    name: 'sousuo_sousuoshuji_1',
    component: Sousuo_sousuoshuji_1,
  },
  {
    path: '/jigoutushuguan_gengduo',
    name: 'jigoutushuguan_gengduo',
    component: Jigoutushuguan_gengduo,
  },
  {
    path: '/haoshutuijian_gengduo',
    name: 'haoshutuijian_gengduo',
    component: Haoshutuijian_gengduo,
  },
  {
    path: '/haoshutuijian_gengduobeifen',
    name: 'haoshutuijian_gengduobeifen',
    component: Haoshutuijian_gengduobeifen,
  },
  {
    path: '/xinshutuijian_gengduo',
    name: 'xinshutuijian_gengduo',
    component: Xinshutuijian_gengduo,
  },
  {
    path: '/houtaituijian_gengduo',
    name: 'houtaituijian_gengduo',
    component: Houtaituijian_gengduo,
  },
  {
    path: '/jigoutushuguan_queshengye',
    name: 'jigoutushuguan_queshengye',
    component: Jigoutushuguan_queshengye,
  },
  {
    path: '/gerentushuguan_gengduo',
    name: 'gerentushuguan_gengduo',
    component: Gerentushuguan_gengduo,
  },
  {
    path: '/gerentushuguan_queshengye',
    name: 'gerentushuguan_queshengye',
    component: Gerentushuguan_queshengye,
  },
  {
    path: '/sousuo_zanwugaitushu',
    name: 'sousuo_zanwugaitushu',
    component: Sousuo_zanwugaitushu,
  },
  {
    path: '/tushuxiangxi',
    name: 'tushuxiangxi',
    component: Tushuxiangxi,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;