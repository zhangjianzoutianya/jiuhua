<template>
	<view>
		<view class="logo">
			<image src="../../../static/user/logo.png" mode=""></image>
		</view>
		<view class="name">
			甜蜜
		</view>
		<view class="title">
			*为了您的账号安全，请绑定您的手机号*
		</view>
		<view class="input-view">
			<view class="view-inp">
				<view class="input">
					<input type="number" value="" placeholder="请输入您的手机号" />
				</view>
			</view>
			<view class="view-inp">
				<view class="code">
					发送验证码
				</view>
				<view class="input">
					<input type="number" value="" placeholder="请输入验证码" />
				</view>
			</view>
			<view class="view-inp">
				<view class="input">
					<input type="number" value="" placeholder="请设置6-18位密码" />
				</view>
			</view>
		</view>
		
		<view class="btn">
			确定绑定
		</view>
		<view class="agreement">
            点击确定，代表同意九华<text>《用户协议》</text>
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

<style scoped>
	.logo {
		width: 182upx;
		height: 182upx;
		margin: 0 auto;
		margin-top: 40upx;
	}

	.logo>image {
		width: 100%;
		height: 100%;
	}

	.name {
		width: 100%;
		text-align: center;
		margin-top: 19upx;
		height: 30upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 30upx;
	}

	.title {
		width: 100%;
		height: 30upx;
		font-size: 28upx;
		text-align: center;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		line-height: 30upx;
		margin-top: 25upx;
	}

	.input-view {
		width: 630upx;
		overflow: hidden;
		margin: 0 auto;
		margin-top: 70upx;
	}

	.view-inp {
		width: 100%;
		height: 106upx;
		border-bottom: 1upx solid rgba(230, 230, 230, 1);
	}

	.code {
		width: 131upx;
		height: 34upx;
		border: 1upx solid rgba(201, 0, 9, 1);
		border-radius: 17upx;
		text-align: center;
		line-height: 34upx;
		font-size: 22upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(200, 0, 10, 1);
		float: right;
		margin-top: 37upx;
	}

	.input {
		width: 400upx;
		height: 106upx;
		overflow: hidden;
	}

	.input>input {
		width: 400upx;
		height: 106upx;
		line-height: 106upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}
	.btn {
		width:631upx;
height:80upx;
background:rgba(200,0,10,1);
opacity:0.5;
border-radius:40upx;
font-size:30upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,255,255,1);
line-height:80upx;
text-align: center;
margin: 0 auto;
margin-top: 80upx;
	}
	.agreement {
		width: 100%;
		height: 73upx;
		text-align: center;
		line-height: 73upx;
		font-size:24upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(153,153,153,1);
	}
	.agreement > text {
		color:rgba(200,0,10,1);
	}
</style>
