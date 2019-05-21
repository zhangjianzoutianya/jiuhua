<template>
	<view>
		<view class="sec1">
			<view class="sec-inner sec1-inner">
				<view class="">
					<view class="img">
						<image class="imgR" src="../../../static/index/sec2_but2.png" mode=""></image>
						<view class="imgs-abs">
							<image src="../../../static/index/sec2_plays.png" mode=""></image>
						</view>
					</view>
					<view class="tit1">
						大数据让垃圾分类回收更加精细化
					</view>
					<view class="tit2">
						1000次播放
					</view>
				</view>
			</view>
		</view>
		
		<view class="sec2">
			<view class="sec2_abs"></view>
			<view class="sec-inner sec2-inner">
				<view class="title">相关推荐</view>
				
				<view class="sec4-content">
					<view class="sec4-content-list" @click="goMsg('articleInner')">
						<view class="img">
							<image src="../../../static/index/sec2_but1.png" mode=""></image>
						</view>
						<view class="flex-right">
							<view class="title">锻造生态环保为打好污染防治攻坚战保驾护航</view>
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
							<!-- <text class="videoss">视频</text> -->
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
		<view class="sec3">
			<view class="sec-inner sec3-inner">
				<view class="ipt">
					<input type="text" value="" placeholder="写评论" />
				</view>
				<view class="img1">
					<image src="../../../static/index/xiaoxi1.png" mode=""></image>
					<view class="img1-abs">
						20
					</view>
				</view>
				<view class="img2">
					<image src="../../../static/index/xiaoxi2.png" mode=""></image>
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
	.sec-inner{
		width: 698upx;
		margin: 0 auto;
	}
	.sec1{
		margin-top: 40upx;
	}
	.sec1-inner .img{
		position: relative;
		border-radius: 20upx;
		overflow: hidden;
		font-size: 0;
	}
	.sec1-inner .img:after{
		content: '';
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.5);
	}
	.sec1-inner .img .imgR{
		width: 698upx;
		height: 418upx;
	}
	.imgs-abs{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		z-index: 1;
	}
	.imgs-abs image{
		width: 89upx;
		height: 89upx;
	}
	.sec1-inner .tit1{
		font-size:30upx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		margin-top: 20upx;
	}
	.sec1-inner .tit2{
		font-size:24upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		margin-top: 20upx;
	}
	.sec2{
		margin-top: 40upx;
		position: relative;
	}
	.sec2_abs{
		width:7upx;
		height:30upx;
		background:#6FC562;
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
	}
	.sec2-inner .videoss{
		width: 70upx;
		height: 28upx;
		background: #FF0018;
		font-size:24upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		white-space: normal;
		line-height: 28upx;
		border-radius: 5upx;
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
	
	.sec3{
		margin-top: 40upx;
		padding: 40upx 0;
		border-top: 1px solid rgba(241,241,241,1);
	}
	.sec3-inner{
		display: flex;
		align-items: center;
		/* padding-left: 79upx; */
		justify-content: space-between;
	}
	.ipt input{
		width:530upx;
		height:49upx;
		background:rgba(240,240,240,1);
		border-radius:10upx;
		outline: none;
		border: none;
		font-size: 24upx;
		padding-left: 20upx;
		letter-spacing: 2upx;
	}
	.img1{
		position: relative;
	}
	.img1 image{
		width:31upx;
		height:29upx;
	}
	.img2 image{
		width:26upx;
		height:29upx;
	}
	.img1-abs{
		height: 18upx;
		position: absolute;
		left: 50%;
		top:0;
		background:linear-gradient(-86deg,rgba(255,0,24,1),rgba(255,114,0,1));
		border-radius:6upx;
		font-size:18upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height: 18upx;
		text-align: center;
		padding: 0 5upx;
	}
</style>
