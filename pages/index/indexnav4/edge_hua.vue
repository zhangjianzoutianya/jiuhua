<template>
	<view class="livr_box">
			<view class="npi_live">
			    <view class="uni-padding-wrap">
			        <view class="page-section swiper">
			            <view class="page-section-spacing">
			                <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :circular="circular" :interval="interval" :duration="duration">
			                    <swiper-item v-for="(item , index) in banner_list">
			                        <view class="swiper-item uni_live_img">
										<image  :src="item.ad_code"></image>
									</view>
			                    </swiper-item>
			                </swiper>
			            </view>
			        </view>
			    </view>      
			</view>			
			<view class="edge_list">
				<view class="edge_list_conent" @click="goMsg('shop_show')">
					<view class="edga_conent">
						<view class="edge_title">店铺指引</view>
						<view class="edge_bott">为您指引最潮店铺</view>
					</view>
					<view class="edge_lis_img">
						<image src="../../../static/index/dian_pu.png" mode=""></image>
					</view>
				</view>		
				<view class="edge_list_conent">
					<view class="edga_conent">
						<view class="edge_title">智慧停车</view>
						<view class="edge_bott">为您推荐最好停车位</view>
					</view>
					<view class="edge_lis_img">
						<image src="../../../static/index/dian_pu1.png" mode=""></image>
					</view>
				</view>	
				<view class="edge_list_conent">
					<view class="edga_conent">
						<view class="edge_title">会员</view>
						<view class="edge_bott">会员豪礼享不停</view>
					</view>
					<view class="edge_lis_img">
						<image src="../../../static/index/dian_pu2.png" mode=""></image>
					</view>
				</view>	
				<view class="edge_list_conent">
					<view class="edga_conent">
						<view class="edge_title">积分</view>
						<view class="edge_bott">积分当钱花</view>
					</view>
					<view class="edge_lis_img">
						<image src="../../../static/index/dian_pu3.png" mode=""></image>
					</view>
				</view>	
			</view>			
			<view class="live_banner">
				<view class="uni-title uni-common-mt live_banner_top">
                   <text>商业综合体</text>
				   <view class="colo_opi">
				   	 <text>查看更多</text>
					 <view class="play_top_img">
					 	<image src="../../../static/index/gen2.png" mode=""></image>
					 </view>
				   </view>
				</view>
				<view>
					<scroll-view class="scroll-view_H" scroll-x="true">
						<view class="scroll-view-item_P">
							<view class="scroll-view-item_H">
								<view class="img_opi">
									<image src="../../../static/index/banner_live3.png" mode=""></image>
									<text>￥39899元/月起</text>
								</view>
								<view class="tet_atore">香奈儿集团杭州大江东义蓬街道...</view>
								<view class="tet_atore_img">
									<view class="tsore_img">
										<image src="../../../static/index/gen3.png" mode=""></image>										
									</view>
									<text>上海市浦东新区乔安路299号</text>
								</view>
								<view class="tetore_ul">
									<text>近地铁</text>
									<text>新房源</text>
									<text>公司办公精选</text>
								</view>
							</view>
						</view>					
					    <view class="scroll-view-item_P">
							<view class="scroll-view-item_H">
								<view class="img_opi">
									<image src="../../../static/index/banner_live3.png" mode=""></image>
									<text>￥39899元/月起</text>
								</view>
								<view class="tet_atore">香奈儿集团杭州大江东义蓬街道...</view>
								<view class="tet_atore_img">
									<view class="tsore_img">
										<image src="../../../static/index/gen3.png" mode=""></image>
									</view>
									<text>上海市浦东新区乔安路299号</text>
								</view>
								<view class="tetore_ul">
									<text>近地铁</text>
									<text>新房源</text>
									<text>公司办公精选</text>
								</view>
							</view>
						</view>
					    <view class="scroll-view-item_P">
							<view class="scroll-view-item_H">
								<view class="img_opi">
									<image src="../../../static/index/banner_live3.png" mode=""></image>
									<text>￥39899元/月起</text>
								</view>
								<view class="tet_atore">香奈儿集团杭州大江东义蓬街道...</view>
								<view class="tet_atore_img">
									<view class="tsore_img">
										<image src="../../../static/index/gen3.png" mode=""></image>
									</view>
									<text>上海市浦东新区乔安路299号</text>
								</view>
								<view class="tetore_ul">
									<text>近地铁</text>
									<text>新房源</text>
									<text>公司办公精选</text>
								</view>
							</view>
						</view>
				    </scroll-view>
				</view>
			</view>	
			<view class="activity_center">
			   <view class="uni-title uni-common-mt live_banner_top">
				   <text>活动中心</text>
				   <view class="colo_opi">
				   	 <text>查看更多</text>
					 <view class="play_top_img">
					 	<image src="../../../static/index/gen2.png" mode=""></image>
					 </view>
				   </view>
				</view>
				<view class="activity_lisy" v-for="(list,index) in contentList" :key="index" @click="goMsg('../indexnav2/articleInner',list.article_id)">
					<view class="activity_lisy_img">
						<image :src="list.thumb" mode=""></image>
					</view>
					<view class="activity_lisy_conent">
						<view class="lisy_cone">
							{{list.title}}
						</view>
						<text>{{list.add_time}}</text>
					</view>
					<view class="liasy_conent">
						{{list.description}}
					</view>
				</view>
				<uniLoadMore v-if="allPages!=1"  :loadingType="loadingType" :contentText="contentText" ></uniLoadMore>
			</view>
	</view>
	
	
</template>

<script>
	import uniLoadMore from '../../../components/uni-load-more.vue';
	export default {
		components: {//2注册组件
			uniLoadMore
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular:true,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				banner_list:[],
				page:1,
				contentList:[],
				allPages:'',
				loadingText: '加载中...',
				loadingType: 0,//定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown:'上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				}
				
			}
		},
		onReachBottom:function(){
			let _this=this;
			_this.events1();
		},
		created(){
			let _this=this;
		},
		mounted(){
			let _this=this;
			//baner
			_this.getBanner();	
			_this.events1()
		},	
		methods:{
			goMsg(url,id){
				if(id!=''){
					url = url+'?id='+id
				}
				uni.navigateTo({
					url:url
				})
			},
			
			//banner
			getBanner:function(){
				let _this=this;
				let data={
					id:9,
				};
				_this.$axios(_this.$baseUrl.banner,data).then(res =>{
					if(res.data.status==1){
						_this.banner_list=res.data.result.banner;
					}
				}).catch(error =>{
					
				})
			},
			// 列表
			events1:function(){
				let _this=this;
				let data={
					type:9,
					page:_this.page,
					Hot:_this.Hot,
					New:_this.New,
				};
				if (_this.loadingType !== 0) {//loadingType!=0;直接返回
					return false;
				}
				_this.loadingType = 1;
				uni.showNavigationBarLoading()
				_this.$axios(_this.$baseUrl.events1,data).then(res =>{
					if(res.data.status==1){
						if (res.data.result.articles == null ||res.data.result.articles==undefined ||res.data.result.articles=='' ) {//没有数据
						    _this.loadingType = 2;
						    uni.hideNavigationBarLoading();//关闭加载动画
						    return;
						}
						 _this.page++
						_this.contentList = _this.contentList.concat(res.data.result.articles)
						_this.allPages = res.data.result.pages;
						_this.loadingType = 0;//将loadingType归0重置
						uni.hideNavigationBarLoading();//关闭加载动画
					}else{
						_this.loadingType = 2;
						uni.hideNavigationBarLoading();//关闭加载动画
						return;
					}
				}).catch(error =>{
					
				})
			}
			
		}
}	
	
</script>

<style>
	.livr_box{
		padding: 0 26upx;
	}
	.swiper {
		width: 100%;
		height: 410upx;
	}

	.swiper-item {
		width: 100%;
		height: 100%;
	}
	.swiper-item>image {
		width: 100%;
		height: 100%;
	}
	.live_banner{
		width: 100%;
		margin-top:60upx;
	}
	.live_banner_top{
		font-size: 32upx;
		color: #333333;		
		margin-bottom: 39upx;
		display: flex;
		justify-content: space-between;
		font-weight: 550;
	}
	.box_conent{
		font-size: 24upx;
		color: #333333;
		line-height: 24upx;
	}
	.scroll-view_H{
		display: flex;
	}
	.scroll-view_H {
		/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item_P{
		display: inline-block;
		width: 80%;
		height: 300upx;
		font-size: 36upx;
		margin-right: 5%;	
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 100%;
		font-size: 36upx;		
	}
	.scroll-view-item_P:nth-child(3){
		margin-right: 0;
	}
	.scroll-view-item_H  image{
		width: 100%;
		height: 100%;
	}
	.tet_atore{
		width: 100%;
		color: #333333;
		font-size: 28upx;
		line-height: 24upx;
		margin-top: 30upx;
	}
	uni-image{
		width: 100%;
		height: 100%;
	}
	.edge_list{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 56upx;
		flex-wrap: wrap;
	}
	.edge_list_conent{
		display: flex;
		justify-content: space-between;
		width: 45%;
		box-shadow: 0.5px 0.5px 6.5px -0.5px rgba(0,0,0,0.1);
		padding: 28upx 10upx 42upx 12upx;
		margin-bottom: 24upx;
		border-radius: 10upx;
	}
	.edga_conent{
		font-size: 28upx;
		color: #333333;
		line-height: 24upx;
	}
	.edge_bott{
		font-size: 20upx;
		color: #999999;
		line-height: 24upx;
	}
	.edge_lis_img{
		width: 70upx;
		height: 79upx;
	}
	.edge_lis_img image{
		width: 100%;
		height: 100%;
	}
	.colo_opi{
		display: flex;
		color: #FD8727;
		font-size: 24upx;
	}
	.colo_opi text{
		margin-right: 20upx;
		letter-spacing: 2upx;
	}
	.edge_title{
		margin-bottom: 22upx;
		font-size: 28upx;
	}
	.play_top_img{
		width: 12upx;
		height: 24upx;
		margin-top: 4upx;
	}
	.play_top_img image{
		width: 100%;
		height: 100%;
	}
	.tet_atore_img{
		display: flex;
		flex-wrap: wrap;
		margin: 19upx 0 16upx;
		font-size: 10upx;
		color: #666666;
	}
	.tet_atore_img text{
		margin-left: 8upx;
		font-size: 20upx;
		margin-top: -4upx;
	}
	.tsore_img{
		width: 22upx;
		height: 25upx;
	}
	.img_opi{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.img_opi text{
		position: absolute;
		bottom: 6%;
		right: 5%;
		color: #FFFFFF;
		font-size: 28upx;
	}
	.tsore_img image{
		width: 100%;
		height: 100%;
	}
	.tetore_ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.tetore_ul text{
		font-size: 20upx;
		color: #999999;
		padding: 8upx 16upx;
		margin-right: 14upx;
		background: #F7F7F7;
	}
	.activity_center{
		width: 100%;
		margin-top: 77upx;
		margin-bottom: 30upx;
	}
	.activity_lisy_img{
		width: 100%;
		height: 360upx;
	}
	.activity_lisy_img image{
		width: 100%;
		height: 100%;
	}
	.activity_lisy_conent{
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-top: 30upx;
		margin-bottom: 22upx;
	}
	.lisy_cone{
		color: #333333;
		font-size: 28upx;
	}
	.activity_lisy_conent text{
		color: #666666;
		font-size: 22upx;
	}
	.liasy_conent{
		color: #666666;
		font-size: 22upx;
		line-height: 31upx;
	}
</style>
