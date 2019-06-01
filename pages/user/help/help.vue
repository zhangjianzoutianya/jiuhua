<template>
	<view>
		<view class="help-img">
			<image src="../../../static/user/help/bannerBg.jpg" mode=""></image>
			<view class="help-text">
				您好，<br />
				我们为您提供更多帮助
			</view>
			<view class="search">
				<image src="../../../static/user/help/search.png" mode="" @click="articleHelp()"></image>
				<view class="search-input">
					<input type="text" value="" placeholder="输入关键词搜索问题与答案" placeholder-style="color:rgba(255,255,255,1);" v-model="keys" confirm-type="search" @confirm="articleHelp()"/>
				</view>
			</view>
		</view>
		<view>
			<view class="problem">
				常见问题
			</view>
			<view class="problem-info" v-for="(list,index) in contList" :key="index">
				<view class="problem-info1">
					Q：{{list.title}}
				</view>
				<view class="problem-info2" v-html="list.content">
					
				</view>
			</view>
			<uniLoadMore v-if="allPages!=1"  :loadingType="loadingType" :contentText="contentText" ></uniLoadMore>
		</view>
		
		<view class="" style="height: 108upx; background: #FFFFFF;">
			
		</view>
	<!-- 	<view class="view-more">
			查看更多<image src="../../../static/user/help/more.png" mode=""></image>
		</view> -->
		<view class="customer-service">
			<image src="../../../static/user/help/customer_service.png" mode=""></image>
			联系客服
		</view>
		<view class="customer-service-bg">
			
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
				keys:'',
				page:1,
				contList:[],
				allPages:'',
				cony:'',
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
			_this.articleHelp();
		},
		mounted:function(){
			var _this = this;
			_this.articleHelp();
		},
		methods: {
			//搜索
			articleHelp:function(){
				let _this=this;
				if(_this.cony!=_this.keys){
					_this.cony = _this.keys
					_this.page = 1;
					_this.contList = [];
				}
				let data={
					keys:_this.keys,
					page:_this.page,
				};
				_this.loadingType = 1;
				uni.showNavigationBarLoading()
				_this.$axios(_this.$baseUrl.articleHelp,data).then(res =>{
					if(res.data.status==1){
						if (res.data.result.search == null ||res.data.result.search==undefined ||res.data.result.search=='' ) {//没有数据
						    _this.loadingType = 2;
						    uni.hideNavigationBarLoading();//关闭加载动画
						    return;
						}
						_this.page++
						_this.contList = _this.contList.concat(res.data.result.search)
						_this.allPages = res.data.result.pages;
					}
				}).catch(error =>{
					
				})
			},
		}
	}
</script>

<style>
	.help-img {
		width: 100%;
		height: 336upx;
		overflow: hidden;
		position: relative;
	}

	.help-img>image {
		width: 100%;
		height: 100%;
	}

	.help-text {
		width: 500px;
		font-size: 38upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 65upx;
		position: absolute;
		top: 44upx;
		left: 23upx;
	}

	.search {
		position: absolute;
		left: 25upx;
		bottom: 40upx;
		width: 700upx;
		height: 78upx;
		background: rgba(255, 255, 255, 0.28);
		border-radius: 10px;
	}

	.search>image {
		width: 32upx;
		height: 32upx;
		margin: 23upx;
		float: left;
	}

	.search-input {
		width: 600upx;
		height: 78upx;
		overflow: hidden;
	}

	.search-input>input {
		width: 600upx;
		height: 78upx;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 78upx;
	}

	.problem {
		width: 100%;
		height: 97upx;
		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		line-height: 97upx;
		padding-left: 27upx;
		border-bottom: 1upx solid rgba(238, 238, 238, 1);
	}

	.problem-info {
		width: 100%;
		overflow: hidden;
		/* height: 149upx; */
		border-bottom: 1upx solid rgba(238, 238, 238, 1);
	}

	.problem-info1 {
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		margin-top: 30upx;
		padding-left: 27upx;
		padding-bottom: 10upx;
	}

	.problem-info2 {
		width: 700upx;
		font-size: 24upx;
		padding-left: 27upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		line-height: 40upx;
		padding-bottom: 30upx;
	}

	.view-more {
		width: 162upx;
		height: 50upx;
		border: 1upx solid rgba(249, 63, 75, 1);
		border-radius: 6upx;
		text-align: center;
		font-size: 22upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(201, 0, 9, 1);
		line-height: 50upx;
		margin: 0 auto;
		margin-top: 79upx;
	}

	.view-more>image {
		width: 16upx;
		height: 16upx;
		margin-left: 10upx;
	}

	.customer-service {
		width: 698upx;
		height: 68upx;
		background: linear-gradient(0deg, rgba(201, 0, 9, 1) 0%, rgba(255, 69, 78, 1) 100%);
		border-radius: 10upx;
		font-size: 28upx;
		text-align: center;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 68upx;
		position: fixed;
		left: 50%;
		bottom: 20upx;
		transform: translateX(-50%);
		z-index: 99;
	}
	.customer-service-bg{
		width: 100%;
		background: #FFFFFF;
		height: 108upx;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 98;
	}
	.customer-service>image {
		width: 24upx;
		height: 24upx;
		margin-right: 10upx;
	}
</style>
