<template>
	<view id="app">
		<view class="modify">
			<view class="modify-img">
				<image src="../../../static/user/close.png" mode=""></image>
			</view>
			<view class="modify-input">
				<input type="text" value="" placeholder="请输入昵称" />
			</view>
		</view>
		<view class="modify-text">
			4-20个字符、可由中文、字母、数字、组成
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
	#app {
		overflow: hidden;
	}

	.modify {
		width: 100%;
		height: 94upx;
		border-bottom: 1upx solid rgba(228, 228, 228, 1);
		border-top: 1upx solid rgba(228, 228, 228, 1);
	}

	.modify-img {
		width: 25upx;
		height: 25upx;
		overflow: hidden;
		float: right;
		border-radius: 50%;
		font-size: 0;
		text-align: center;
		line-height: 25upx;

		margin: 34.5upx 20upx;
	}

	.modify-img>image {
		width: 100%;
		height: 100%;
		vertical-align: middle;
	}

	.modify-input {
		width: 500upx;
		height: 94upx;
		margin-left: 26upx;
		overflow: hidden;
	}

	.modify-input>input {
		width: 500upx;
		height: 94upx;
		font-size: 28upx;
		font-family: PingFang-SC-Regular;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		line-height: 94upx;
	}
	.modify-text {
		width: 100%;
		height: 94upx;
		font-size:26upx;
		font-family:PingFang-SC-Regular;
		font-weight:bold;
		color:rgba(153,153,153,1);
		line-height:94upx;
		padding-left: 26upx;
	}
</style>
