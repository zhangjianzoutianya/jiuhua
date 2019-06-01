<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :circular="circular" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="(item , index) in banner_list">
							<view class="swiper-item">
								<image width="100%" :src="item.ad_code" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	<!-- 选项 -->
		<view class="sec2_fex sec2">
			<view class="sec2_fex_list" @click="goMsg('regenerate')">
				<image  src="../../../static/index/sec2_1.png" mode=""></image>
				<view class="text">再生科普</view>
			</view>
			<view class="sec2_fex_list" @click="goMsg('circulation_station')">
				<image src="../../../static/index/sec2_2.png" mode=""></image>
				<view class="text">附近循环站</view>
			</view>
			<view class="sec2_fex_list">
				<image src="../../../static/index/sec2_3.png" mode=""></image>
				<view class="text">再生源</view>
			</view>
		</view>
		<view class="sec3">
			<view class="sec3-inner sec-inner">
				<view class="sec3-inner-flex">
					<view class="sec3-inner-flex-list">
						<image src="../../../static/index/sec2_4.png" mode=""></image>
					</view>
					<view class="sec3-inner-flex-list">
						<image src="../../../static/index/sec2_5.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="sec4">
			<view class="sec4_abs"></view>
			<view class="sec-inner sec4-inner">
				<view class="sec4-inner-titflex">
					<text>环保资讯</text>
					<view class="more">
						<text>了解更多</text>
						<image src="../../../static/index/xiayige.png" mode=""></image>
					</view>
				</view>
				
				<view class="sec4-content">
					<view class="sec4-content-list" v-for="(list,index) in contentList" :key="index" @click="goMsg('articleInner',list.article_id)">
						<view class="img">
							<image src="list.thumb" mode=""></image>
						</view>
						<view class="title">{{list.title}}</view>
						<view class="title2">
							<view class="title2_1" v-if="list.is_hot==1">热</view>
							<text>服务到家</text>
							<text>{{list.discuss_num}}评论</text>
							<text>{{list.add_time}}</text>
						</view>
					</view>
					<uniLoadMore v-if="allPages!=1"  :loadingType="loadingType" :contentText="contentText" ></uniLoadMore>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniLoadMore from '../../../components/uni-load-more.vue';
	export default{ 
		 components: {//2注册组件
			uniLoadMore
		},
		data(){
			return{
				indicatorDots: true,
				autoplay: true,
				interval: 4000,
				duration: 800,
				circular:true,
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
			_this.events1();
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
					id:6,
				};
				_this.$axios(_this.$baseUrl.banner,data).then(res =>{
					if(res.data.status==1){
						_this.banner_list=res.data.result.banner;
					}
				},(error) =>{
					
				})
			},
			// 列表
			events1:function(){
				let _this=this;
				let data={
					type:6,
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
	.swiper {
		width: 100%;
		height: 328upx;
	}

	.swiper-item {
		width: 100%;
		height: 100%;
	}

	.swiper-item>image {
		width: 100%;
		height: 100%;
	}
	.sec2{
		margin-top: 20upx;
	}
	.sec2_fex{
		display: flex;
	}
	.sec2_fex_list{
		width: 33.33333%;
		vertical-align: middle;
		text-align: center;
	}
	.sec2_fex_list image {
		width: 112upx;
		height: 112upx;
	}
	.sec2_fex_list .text{
		font-size:28upx;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height: 1;
	}
	.sec3{
		margin-top: 50upx;
	}
	.sec-inner{
		width: 694upx;
		margin: 0 auto;
	}
	.sec3-inner-flex{
		display: flex;
		justify-content: space-between;
	}
	.sec3-inner-flex-list {
		width: 338upx;
		height: 172upx;
	}
	.sec3-inner-flex-list image{
		width: 100%;
		height: 100%;
	}
	.sec4{
		margin-top: 50upx;
		position: relative;
	}
	.sec4-inner-titflex{
		display: flex;
		justify-content: space-between;
	}
	.sec4-inner-titflex>text{
		font-size:30upx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		line-height:55upx;
	}
	.sec4-inner-titflex .more{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.sec4-inner-titflex .more text{
		font-size:26upx;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(153,153,153,1);
		line-height:55upx;
		margin-right: 15upx;
	}
	.sec4-inner-titflex .more image{
		width: 13upx;
		height: 23upx;
	}
	.sec4_abs{
		width:7upx;
		height:30upx;
		background:rgba(60,123,249,1);
		position: absolute;
		left: 0;
		top: 10upx;
	}
	.sec4-content-list{
		padding: 40upx 0;
		border-top: 1px solid rgba(234,234,234,1);
	}
	.sec4-content-list .img image{
		width: 694upx;
		height: 265upx;
	}
	.sec4-content-list .title{
		font-size:28upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		letter-spacing: 2upx;
		margin-top: 10upx;
	}
	.sec4-content-list .title2{
		margin-top: 15upx;
		display: flex;
		align-items: center;
	}
	.sec4-content-list .title2 text{
		font-size:24upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		margin-right: 15upx;
		letter-spacing: 1upx;
	}
	.sec4-content-list .title2 .title2_1{
		font-size: 16upx;
		width: 22upx;
		height: 22upx;
		line-height: 22upx;
		text-align: center;
		border: 1px solid crimson;
		color: #DC143C;
		margin-right: 15upx;
		border-radius: 5upx;
		font-weight: bold;
	}
	.sec4-content-list:first-child{
		border: none;
	}
</style>
