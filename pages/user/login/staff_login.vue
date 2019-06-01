<template>
	<view id="app">
		<view class="logo">
			<image src="../../../static/user/login/logo1.png" mode=""></image>
		</view>
		<view class="user-view">
			<view class="user-img">
				<image src="../../../static/user/login/user.png" mode=""></image>
			</view>
			<view class="user-input">
				<input type="number" value="" placeholder="请输入您的手机号" />
			</view>
		</view>
		<view class="user-view">
			<view class="code">
				发送验证码
			</view>
			<view class="user-img">
				<image src="../../../static/user/login/verification_code.png" mode=""></image>
			</view>
			<view class="user-input">
				<input type="number" value="" placeholder="请输入验证码" />
			</view>
		</view>
		<view class="login">
			登 陆
		</view>
		<view class="job-number">
			<view class="job">
				去绑定员工工号
			</view>
		</view>
		<view class="weixin">
			<view class="weixin-text">
				微信登录
			</view>
			<view class="weixin-inco">
				<image src="../../../static/user/login/weixin.png" mode=""></image>
			</view>
		</view>
		<view class="statement">
			登录即代表你同意<text>《用户使用条款和隐私声明》</text>
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

		}
	}
</script>

<style>
	#app {
		overflow: hidden;
	}
	.logo {
		width: 141upx;
		height: 125upx;
		margin-top: 100upx;
		margin-left: 305upx;
		overflow: hidden;
		margin-bottom: 68upx;
	}

	.logo>image {
		width: 100%;
		height: 100%;
	}

	.user-view {
		width: 630upx;
		height: 106upx;
		margin: 0 auto;
		overflow: hidden;
		border-bottom: 1px solid rgba(230, 230, 230, 1);
	}

	.user-img {
		width: 34upx;
		height: 39upx;
		margin-top: 33upx;
		margin-right: 36upx;
		float: left;
	}

	.user-img>image {
		width: 100%;
		height: 100%;
	}

	.user-input {
		width: 360upx;
		height: 106upx;
		overflow: hidden;
	}
	
	.user-input>input {
		width: 360upx;
		height: 106upx;
	
		line-height: 106upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.code {
		width: 150upx;
		float: right;
		text-align: right;
		height: 106upx;
		line-height: 106upx;
		font-size: 22upx;
		font-family: PingFang-SC-Regular;
		font-weight: 400;
		color: rgba(200, 0, 10, 1);
	}

	.login {
		width: 631upx;
		height: 80upx;
		background: rgba(200, 0, 10, 1);
		opacity: 0.5;
		border-radius: 40upx;
		margin: 0 auto;
		text-align: center;
		line-height: 80upx;
		font-size: 30upx;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		margin-top: 72upx;
	}

	.job-number {
		width: 631upx;
		overflow: hidden;
		margin: 0 auto;
		margin-top: 20upx;
	}

	.job {
		font-size: 22upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(200, 1, 11, 1);
		width: 631upx;
		float: right;
		text-align: right;
	}

	.weixin {
		width: 100%;
		overflow: hidden;
		margin-top: 58upx;
	}

	.weixin-text {
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(204, 204, 204, 1);
		text-align: center;
	}

	.weixin-inco {
		width: 83upx;
		height: 83upx;
		margin: 0 auto;
		overflow: hidden;
		margin-top: 38upx;
	}

	.weixin-inco>image {
		width: 100%;
		height: 100%;
	}

	.statement {
		width: 100%;
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		text-align: center;
		margin-top: 82upx;
	}

	.statement>text {
		color: rgba(200, 0, 10, 1);
	}
</style>
