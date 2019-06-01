<template>
	<view>
		<view class="record">
			<view class="record-view" v-for="(list,index) in contentList" :key="index">
				<view class="money">
					<view>
						+{{list.account}}
					</view>
					<view>
						<text :class="list.pay_status==1?'t1':'t2'" v-text="list.pay_status==1?'充值成功':'充值失败'"></text>
					</view>
				</view>
				<view class="record-image">
					<image src="../../../static/user/recharge/phone.png" mode=""></image>
				</view>
				<view class="amount">
					<view>
						{{list.pay_name}}
					</view>
					<view>
						{{list.pay_time}}
					</view>
				</view>
			</view>
			<uniLoadMore v-if="allPages!=1"  :loadingType="loadingType" :contentText="contentText" ></uniLoadMore>
		</view>
		<view class="null"></view>
		<view class="recharge">
			<view @click="recharge">
				充 值
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
			_this.userRecharge()
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
		mounted:function(){
			var _this = this;
			_this.userRecharge()
		},
		methods: {
			recharge() {
				uni.navigateTo({
					url: 'recharge'
				})
			},
			//记录
			userRecharge:function(){
				let _this=this;
				let data={
					channel:1,
					token:_this.token,
					page:_this.page,
				};
				_this.loadingType = 1;
				uni.showNavigationBarLoading()
				_this.$axios(_this.$baseUrl.userRecharge,data).then(res =>{
					if(res.data.status==1){
						if (res.data.result.recharge == null ||res.data.result.recharge==undefined ||res.data.result.recharge=='' ) {//没有数据
						    _this.loadingType = 2;
						    uni.hideNavigationBarLoading();//关闭加载动画
						    return;
						}
						_this.page++
						_this.contentList = _this.contentList.concat(res.data.result.recharge) 
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
	.record {
		width: 100%;
		overflow: hidden;
	}

	.record-view {
		width: 100%;
		height: 153upx;
		border-top: 1upx solid rgba(238, 238, 238, 1);
		overflow: hidden;
	}

	.money {
		width: 180upx;
		height: 100%;
		float: right;
		margin-right: 27upx;
		overflow: hidden;
	}

	.money>view:nth-child(1) {
		width: 100%;
		height: 30upx;
		line-height: 30upx;
		text-align: right;
		margin-top: 46upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.money>view:nth-child(2) {
		width: 100%;
		height: 22upx;
		margin-top: 18upx;
		font-size: 20upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		text-align: right;
	}

	.t1 {
		color: rgba(9, 187, 7, 1);
	}

	.t2 {
		color: rgba(201, 0, 9, 1);
	}

	.record-image {
		width: 70upx;
		height: 70upx;
		overflow: hidden;
		background: rgba(201, 0, 9, 1);
		border-radius: 50%;
		margin-left: 26upx;
		margin-top: 41.5upx;
		float: left;
		margin-right: 33upx;
		position: relative;
	}

	.record-image>image {
		width: 27upx;
		height: 41upx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.amount {
		overflow: hidden;
		height: 100%;
	}

	.amount>view:nth-child(1) {
		font-size: 28upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		height: 30upx;
		line-height: 30upx;
		margin-top: 45upx;
	}

	.amount>view:nth-child(2) {
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		height: 26upx;
		line-height: 26upx;
		margin-top: 14upx;
	}

	.recharge {
		width: 100%;
		height: 98upx;
		position: fixed;
		z-index: 10upx;
		background: #FFFFFF;
		overflow: hidden;
		left: 0;
		bottom: 0;
	}

	.recharge>view {
		width: 699upx;
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
