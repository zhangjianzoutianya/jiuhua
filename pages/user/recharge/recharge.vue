<template>
	<view id="app">
		<view class="money">
			<view class="money-text">
				充值金额
			</view>
			<view class="money-input">
				<input type="number" value="" placeholder="输入充值金额" />
			</view>
		</view>
		<view class="mode">
			支付方式
		</view>
		<view class="payment-method">
			<view class="weixim">
				<view class="choice">
					<image src="../../../static/user/recharge/mark.png" mode=""></image>
				</view>
				<view class="inco">
					<image src="../../../static/user/recharge/weixin.png" mode=""></image>
				</view>
				<view class="weixin-payment">
					微信支付
				</view>
			</view>
		</view>
		<view class="recharge" @click="recharge">
			充 值
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			recharge() {
				uni.navigateTo({
					url: 'recharge_success'
				})
			}
		}
	}
</script>

<style scoped>
	#app {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: #F7F7F7;
	}

	.money {
		width: 100%;
		height: 112upx;
		overflow: hidden;
		background-color: #FFFFFF;
		border-top: 1upx solid rgba(238, 238, 238, 1);
		;
	}

	.money-text {
		font-size: 30upx;
		line-height: 112upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		float: left;
		padding-left: 28upx;
		padding-right: 41upx;
	}

	.money-input {
		width: 400upx;
		height: 112upx;
		overflow: hidden;
	}

	.money-input>input {
		width: 100%;
		height: 100%;
		font-size: 30upx;
		line-height: 112upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	.mode {
		width: 100%;
		height: 92upx;
		padding-left: 25upx;
		font-size:28upx;
		line-height: 92upx;
		margin-top: 30upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(153,153,153,1);
	}
	.payment-method {
		width: 100%;
		overflow: hidden;
		background-color: #FFFFFF;
	}
	.weixim {
		width: 100%;
		height: 113upx;
		overflow: hidden;
	}
	.choice {
		width: 49upx;
		height: 49upx;
		margin-top: 32upx;
		margin-right: 27upx;
		overflow: hidden;
		float: right;
		border-radius: 50%;
	}
	.choice > image {
		width: 100%;
		height: 100%;
	}
	.inco {
		width: 51upx;
		height: 42upx;
		overflow: hidden;
		margin-left: 26upx;
		margin-top: 35.5upx;
		margin-right: 33upx;
		float: left;
	}
	.inco > image {
		width: 100%;
		height: 100%;
	}
	.weixin-payment {
		line-height: 113upx;
		font-size:30upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(102,102,102,1);
	}
	.recharge {
		width:685upx;
height:87upx;
background:rgba(201,0,9,1);
border-radius:44upx;
font-size:36upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(239,239,244,1);
line-height:87upx;
text-align: center;
margin: 0 auto;
margin-top: 196upx;
	}
</style>
