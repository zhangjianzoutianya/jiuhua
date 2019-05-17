<template>
	<view>
		<view class="banner_img">
			<image src="../../../static/index/sec2_banner2.png" mode=""></image>
		</view>
		<view class="sec1">
			<view class="sec-inner">
				<view class="sec1_fex sec1">
					<view class="sec1_fex_list">
						<image  src="../../../static/index/sec2_type1.png" mode=""></image>
						<view class="text">可回收垃圾</view>
					</view>
					<view class="sec1_fex_list">
						<image src="../../../static/index/sec2_type2.png" mode=""></image>
						<view class="text">厨余垃圾</view>
					</view>
					<view class="sec1_fex_list">
						<image src="../../../static/index/sec2_type3.png" mode=""></image>
						<view class="text">有害垃圾</view>
					</view>
					<view class="sec1_fex_list">
						<image src="../../../static/index/sec2_type4.png" mode=""></image>
						<view class="text">其他垃圾</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="sec2">
			<view class="sec2_abs"></view>
			<view class="sec-inner sec2-inner">
				<view class="title">最新科普知识</view>
				
				<view class="sec4-content">
					<view class="sec4-content-list" @click="goMsg('articleInner')">
						<view class="img">
							<image src="../../../static/index/sec2_but1.png" mode=""></image>
						</view>
						<view class="flex-right">
							<view class="title">锻造生态环保为打好污染防治攻坚战保驾护航</view>
							<view class="videoss">视频</view>
							<view class="title2">
								<view class="title2_1">热</view>
								<text>服务到家</text>
								<text>1088评论</text>
								<text>1小时前</text>
							</view>
						</view>
					</view>
					<view class="sec4-content-list">
						<view class="img">
							<image src="../../../static/index/sec2_but2.png" mode=""></image>
							<view class="sec4_play">
								<image src="../../../static/index/sec2_plays.png" mode=""></image>
							</view>
						</view>
						<view class="flex-right">
							<view class="title">生态环境部召开部常务会议生态环境部召开部常务会议 </view>
							<view class="videoss">视频</view>
							<view class="title2">
								<!-- <view class="title2_1">热</view> -->
								<text>服务到家</text>
								<text>1088评论</text>
								<text>1小时前</text>
							</view>
						</view>
					</view>
					<view class="sec4-content-list">
						<view class="img">
							<image src="../../../static/index/sec2_but2.png" mode=""></image>
						</view>
						<view class="flex-right">
							<view class="title">生态环境部召开部常务会议</view>
							<view class="title2">
								<view class="title2_1">热</view>
								<text>服务到家</text>
								<text>1088评论</text>
								<text>1小时前</text>
							</view>
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
			goMsg(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>
<style>
.banner_img image{
	width: 750upx;
	height: 333upx;
}
.sec-inner{
	width: 694upx;
	margin: 0 auto;
}
.sec1{
		margin-top: 40upx;
	}
	.sec1_fex{
		display: flex;
	}
	.sec1_fex_list{
		width: 25%;
		vertical-align: middle;
		text-align: center;
	}
	.sec1_fex_list image {
		width: 104upx;
		height: 104upx;
	}
	.sec1_fex_list .text{
		font-size:30upx;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.sec2{
		margin-top: 40upx;
		position: relative;
	}
	.sec2_abs{
		width:7upx;
		height:30upx;
		background:rgba(60,123,249,1);
		position: absolute;
		left: 0;
		top: 8upx;
	}
	.sec2-inner .title{
		font-size:32upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(63,63,63,1);
		letter-spacing: 1upx;
		display: inline-block;
	}
	.sec2-inner .videoss{
		width: 60upx;
		height: 28upx;
		background: #FF0018;
		font-size:24upx;
		display: inline-block;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		white-space: normal;
		line-height: 28upx;
		border-radius: 10upx;
		text-align: center;
	}
	.sec4-content-list{
		padding: 40upx 0;
		border-top: 1px solid rgba(234,234,234,1);
		display: flex;
	}
	.sec4-content-list .img{
		position: relative;
	}
	.sec4-content-list .img image{
		width: 261upx;
		height: 172upx;
	}
	.sec4-content-list .title{
		height:70upx;
		font-size:30upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:1.3;
		overflow: hidden;
	}
	.sec4-content-list .title2{
		margin-top: 15upx;
		display: flex;
		align-items: center;
		margin-top: 50upx;

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
	.sec4-content-list .flex-right{
		padding-left: 19upx;
	}
	.sec4_play{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		width: 53upx;
		height: 53upx;
	}
	.sec4-content-list .sec4_play image{
		width: 53upx;
		height: 53upx;
	}
</style>
