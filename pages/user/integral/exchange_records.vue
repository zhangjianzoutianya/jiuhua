<template>
	<view>
		<view class="comm">
			<view class="comm-info">
				<view class="comm-img">
					<image src="../../../static/user/integral/comm001.png" mode=""></image>
				</view>
				<view class="comm-title">
					<view class="comm-text">
						拉克边桌简约时尚，公主风格
					</view>
					<view class="comm-msg">
						<view class="comm-data">
							-200积分+10元
						</view>
						<view class="comm-time">
							2019-05-05  12:12
						</view>
					</view>
				</view>
			</view>
			<view class="comm-info">
				<view class="comm-img">
					<image src="../../../static/user/integral/comm002.png" mode=""></image>
				</view>
				<view class="comm-title">
					<view class="comm-text">
						普鲁林三分式悬挂储物件普鲁林三分式悬挂储物件
					</view>
					<view class="comm-msg">
						<view class="comm-data">
							-200积分+10元
						</view>
						<view class="comm-time">
							2019-05-05  12:12
						</view>
					</view>
				</view>
			</view>
			<view class="comm-info">
				<view class="comm-img">
					<image src="../../../static/user/integral/comm003.png" mode=""></image>
				</view>
				<view class="comm-title">
					<view class="comm-text">
						特提亚工作灯高端品质特提亚工作灯高端品质
                        
					</view>
					<view class="comm-msg">
						<view class="comm-data">
							-200积分+10元
						</view>
						<view class="comm-time">
							2019-05-05  12:12
						</view>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.comm {
		width: 100%;
		overflow: hidden;
	}
	.comm-info {
		width: 100%;
		height: 189upx;
		border-top: 1upx solid rgba(238,238,238,1);
		overflow: hidden;
	}
	.comm-img {
		width: 170upx;
		height: 125upx;
		margin: 30upx 25upx;
		float: left;
		overflow: hidden;
		border-radius: 10upx;
	}
	.comm-img > image {
		width: 100%;
		height: 100%;
	}
	.comm-title {
		width: 500upx;
		height: 125upx;
		margin-top: 30upx;
		overflow: hidden;
	}
	.comm-text {
		width: 100%;
		height: 80upx;
		line-height: 40upx;
		overflow: hidden;
		font-size:28upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(51,51,51,1);
	}
	.comm-msg {
		width: 100%;
		height: 25upx;
		margin-top: 15upx;
		overflow: hidden;
	}
	.comm-data {
		float: right;
		text-align: right;
		font-size:24upx;
		line-height: 25upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(201,0,9,1);
	}
	.comm-time {
		font-size:24upx;
		line-height: 25upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(153,153,153,1);
	}
</style>
