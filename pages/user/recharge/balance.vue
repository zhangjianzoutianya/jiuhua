<template>
	<view>
		<view class="balance-head">
			<view class="balanceBg">
				<image src="../../../static/user/recharge/balanceBg.jpg" mode=""></image>
			</view>
			<view class="money">
				<view class="money-count">
					{{user_money}}
				</view>
				<view class="money-text">
					账户余额（元）
				</view>
			</view>
		</view>
		<view class="record">
			余额消费记录
		</view>
		<view class="consumption">
			<view class="consumption-view" v-for="(list,index) in contentList" :key="index">
				<view class="consumption-view1">
					<view>
						<text class="t2">{{list.account}}</text>
					</view>
					<view>
						{{list.pay_time}}
					</view>
				</view>
				<view class="consumption-view2">
					<view>
						{{list.pay_name}}
					</view>
					<view>
						{{list.pay_status}}
					</view>
				</view>
			</view>
		<uniLoadMore v-if="allPages!=1"  :loadingType="loadingType" :contentText="contentText" ></uniLoadMore>
		</view>
		<view class="null"></view>
		<view class="operation">
			<view class="cash-withdrawal">
				<view>
					提现
				</view>
			</view>
			<view class="recharge">
				<view @click="recharge">
					充值
				</view>
			</view>
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
				token:'',
				page:1,
				allPages:'',
				contentList:[],
				user_money:'',
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
			_this.userConsume()
		},
		mounted:function(){
			let _this=this;
			_this.userConsume()
		},
		created:function(){
			var _this = this;
			uni.getStorage({
				 key: 'token',
				 success: function (res) {
					 _this.token = res.data
				}
			})
		},
		methods: {
			recharge() {
				uni.navigateTo({
					url: 'recharge'
				})
			},
			//记录
			userConsume:function(){
				let _this=this;
				let data={
					channel:1,
					token:_this.token,
					page:_this.page,
				};
				_this.loadingType = 1;
				uni.showNavigationBarLoading()
				_this.$axios(_this.$baseUrl.userConsume,data).then(res =>{
					if(res.data.status==1){
						if (res.data.result.recharge == null ||res.data.result.recharge==undefined ||res.data.result.recharge=='' ) {//没有数据
						    _this.loadingType = 2;
						    uni.hideNavigationBarLoading();//关闭加载动画
						    return;
						}
						_this.page++
						_this.contentList = _this.contentList.concat(res.data.result.recharge);
						_this.user_money = res.data.result.user_money;
						_this.allPages = res.data.result.pages;
						_this.loadingType = 0;//将loadingType归0重置
						uni.hideNavigationBarLoading();//关闭加载动画
					}else{
						_this.loadingType = 2;
						uni.hideNavigationBarLoading();//关闭加载动画
					}
				}).catch(error =>{
					
				})
			},
		}
	}
</script>

<style>
	.balanceBg {
		width: 100%;
		height: 237upx;
		overflow: hidden;
		position: relative;
	}

	.balanceBg>image {
		width: 100%;
		height: 100%;
	}

	.money {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
	}

	.money-count {
		font-size: 74upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		text-align: center;
		color: rgba(255, 255, 255, 1);
		line-height: 150upx;
	}

	.money-count>text {
		font-size: 50upx;
	}

	.money-text {
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		text-align: center;
		color: rgba(255, 255, 255, 1);
	}

	.record {
		width: 100%;
		height: 77upx;
		line-height: 77upx;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		padding-left: 27upx;
		background: rgba(241, 239, 242, 1);
	}

	.consumption {
		width: 100%;
		overflow: hidden;
	}

	.consumption-view {
		width: 100%;
		height: 154upx;
		border-bottom: 1upx solid rgba(238, 238, 238, 1);
		overflow: hidden;
	}

	.consumption-view1 {
		width: 280upx;
		height: 154upx;
		overflow: hidden;
		float: right;
		margin-right: 26upx;
	}

	.consumption-view1>view:nth-child(1) {
		font-size: 28upx;
		height: 30upx;
		width: 100%;
		line-height: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		margin-top: 46upx;
		text-align: right;
	}

	.consumption-view1>view:nth-child(2) {
		font-size: 24upx;
		height: 26upx;
		width: 100%;
		line-height: 26upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		margin-top: 18upx;
		text-align: right;
	}

	.t1 {
		color: rgba(9, 187, 7, 1);
	}

	.t2 {
		color: rgba(201, 0, 9, 1);
	}

	.consumption-view2 {
		width: 440upx;
		height: 154upx;
		overflow: hidden;
		float: right;
	}

	.consumption-view2>view:nth-child(1) {
		font-size: 28upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		width: 100%;
		height: 30upx;
		line-height: 30upx;
		padding-left: 26upx;
		margin-top: 46upx;
	}

	.consumption-view2>view:nth-child(2) {
		font-size: 22upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		width: 100%;
		height: 24upx;
		line-height: 24upx;
		margin-top: 18upx;
		padding-left: 26upx;
	}

	.operation {
		position: fixed;
		width: 100%;
		height: 98upx;
		display: flex;
		left: 0;
		bottom: 0;
		z-index: 10;
		overflow: hidden;
		background-color: rgba(255, 255, 255, 1);
	}

	.operation>view {
		flex: 1;
	}

	.cash-withdrawal>view {
		width: 327upx;
		height: 60upx;
		background: rgba(255, 228, 229, 1);
		border-radius: 10upx;
		margin: 19upx auto;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(201, 0, 9, 1);
		text-align: center;
		line-height: 60upx;
	}

	.recharge>view {
		width: 327upx;
		height: 60upx;
		background: rgba(201, 0, 9, 1);
		border-radius: 10upx;
		margin: 19upx auto;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		line-height: 60upx;
	}

	.null {
		width: 98upx;
		height: 98upx;
	}
</style>
