<template>
	<view>
		<view class="integral">
			<view class="integral-img">
				<image :src="banner.ad_code" mode=""></image>
			</view>
			<view class="integral-text">
				<view class="integral-txt">
					{{allNum}}
				</view>
				<view class="integral-txt1">
					总积分
				</view>
				<view class="shop" @click="shop">
					积分商城
				</view>
			</view>
			<view class="rule" @click="rule">
				积分规则
			</view>
			<view class="sign-in" @click="signIn">
				签到
			</view>
		</view>
		<view class="detailed-text">
			积分明细
		</view>
		<view class="detailed">
			<view class="detailed-view" v-for="(list,index) in point_list" :key="index">
				<view class="raction" :class="list.is_add==1?'positive-number':'negative'" >
					<text v-text="list.is_add==1?'+':'-'"></text>{{list.pay_points}}
				</view>
				<view class="detailed-title">
					<view class="detailed-name">
						{{list.desc}}
					</view>
					<view class="detailed-time">
						{{list.change_time}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner:{},
				token:'',
				allNum:'',
				point_list:[],
			}
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
		mounted(){
			let _this=this;
			//baner
			_this.getBanner();	
			_this.userPoint()
		},
		methods: {
			rule() {
				uni.navigateTo({
					url: "integral_rule",
				})
			},
			shop() {
				uni.navigateTo({
					url: "integral_mall",
				})
			},
			signIn() {
				uni.navigateTo({
					url: "sign_in",
				})
			},
			
			//banner
			getBanner:function(){
				let _this=this;
				let data={
					id:10,
				};
				_this.$axios(_this.$baseUrl.banner,data).then(res =>{
					if(res.data.status==1){
						_this.banner=res.data.result.banner[0];
					}
				}).catch(error =>{
					
				})
			},
			//积分记录
			userPoint:function(){
				let _this=this;
				let data={
					channel:1,
					token:_this.token,
				};
				_this.$axios(_this.$baseUrl.userPoint,data).then(res =>{
					if(res.data.status==1){
						_this.allNum = res.data.result.user_points;
						_this.point_list = res.data.result.point_list;
					}
				}).catch(error =>{
					
				})
			},
			
		}
	}
</script>

<style>
	.integral {
		width: 100%;
		height: 238upx;
		overflow: hidden;
		position: relative;
	}

	.integral-img {
		width: 100%;
		height: 100%;
	}

	.integral-img>image {
		width: 100%;
		height: 100%;
	}

	.integral-text {
		position: absolute;
		top: 0;
		left: 225upx;
		width: 300upx;
	}

	.integral-txt {
		width: 100%;
		height: 131upx;
		line-height: 131upx;
		text-align: center;
		font-size: 74upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
	}

	.integral-txt1 {
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		text-align: center;
		font-weight: 500;
		line-height: 24upx;
		color: rgba(255, 255, 255, 1);
	}
	.shop {
		width: 190upx;
		height: 52upx;
		background: rgba(255, 255, 255, 0.4);
		margin: 19upx auto;
		line-height: 52upx;
		border-radius: 26upx;
		font-size: 28upx;
		text-align: center;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}

	.rule {
		width: 110upx;
		height: 33upx;
		background: rgba(255, 255, 255, 0.4);
		border-radius: 17upx;
		font-size: 20upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		line-height: 33upx;
		position: absolute;
		top: 18upx;
		right: 18upx;
		z-index: 20;
	}
	.sign-in {
		width: 128upx;
		height: 44upx;
		background: rgba(0, 0, 0, 0.25);
		border-radius: 22upx 0 0 22upx;
		position: absolute;
		right: 0;
		top: 69upx;
		text-align: center;
		font-size: 26upx;
		line-height: 44upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}

	.detailed-text {
		width: 750upx;
		height: 77upx;
		background: rgba(241, 239, 242, 1);
		font-size: 30upx;
		line-height: 77upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		padding-left: 27upx;
	}
	.detailed {
		width: 100%;
		overflow: hidden;
	}
	.detailed-view {
		width: 100%;
		height: 153upx;
		border-bottom: 1upx solid rgba(238,238,238,1);
		overflow: hidden;
	}
	.raction {
		width:100upx;
		height:30upx;
		line-height: 30upx;
		font-size:28upx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		float: right;
		text-align: right;
		margin: 61.5upx 29upx;
	}
	.positive-number {
		color:rgba(9,187,7,1);
	}
	.negative {
		color:rgba(201,0,9,1);
	}
	.detailed-title {
		margin-left: 28upx;
		overflow: hidden;
	}
	.detailed-name {
		height: 30upx;
		line-height: 30upx;
		font-size:28upx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		margin-top: 45upx;
	}
	.detailed-time {
		height: 26upx;
		line-height: 26upx;
		margin-top: 14upx;
		font-size:24upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
</style>
