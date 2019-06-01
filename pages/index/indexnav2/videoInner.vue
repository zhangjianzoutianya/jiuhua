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
						{{content.title}}
					</view>
					<view class="tit2">
						{{content.click}}次播放
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
		
		<view class="hundredSurnamesNewsInner_sec2_content">
			<view class="uls" >
				<view class="lis" v-if="contentList.length>=1">
					<view style="height:200upx;text-align:center;font-size:32upx;color:#666;line-height:200upx;">暂无评论</view>
				</view>
				<view v-else >
					<view v-for="(list,index) in contentList"  class="lis" :key="index">
						<view class="detail_pingjia_f1 clearfix" >
							<view class="detail_pingjia_f1_left clearfix fl" >
								<view class="detail_pingjia_f1_img">
									<image :src="list.img" mode=""></image>
								</view>
								<view class="detail_pingjia_f1_txt">
									<view class="detail_pingjia_f1_txt1">{{list.user_id}}</view>
									<view class="detail_pingjia_f1_txt2">
										{{list.add_time}}
									</view>
								</view>
							</view>
						<!-- 	<view class="detail_pingjia_f1_right fr">
								<image src="" mode=""></image>
								<text >100</text>
							</view> -->
						</view>
						 <view class="content_pinglun_content">{{list.content}}</view>
					</view>
					<uniLoadMore v-if="allPage!=1"  :loadingType="loadingType" :contentText="contentText" ></uniLoadMore>
				</view>
			</view>
			<view class="" style="height: 134.5upx;"></view>
		</view>
		
		<view class="sec3">
			<view class="sec-inner sec3-inner">
				<view class="ipt">
					<input type="text" value="" placeholder="写评论" v-model="contentIpt" confirm-type="search" @confirm="conmmentAdds()" />
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
	import uniLoadMore from '../../../components/uni-load-more.vue';
	export default {
		 components: {//2注册组件
			uniLoadMore
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
		data() {
			return {
				id:'',
				content:{},
				contentList:[],
				allPage:'',
				page:1,
				loadingText: '加载中...',
				loadingType: 0,//定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown:'上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				},
				contentIpt:'',
				token:'',
			}
		},
		onReachBottom:function(){
			let _this=this;
			_this.getComment();
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			let _this = this;
			_this.id = option.id;
		},
		mounted() {
			let _this = this;
			_this.eventDetail();
			_this.getComment();
		},
		methods: {
			// 列表
			eventDetail:function(){
				let _this=this;
				let data={
					id:_this.id
				};
				_this.$axios(_this.$baseUrl.eventDetail,data).then(res =>{
					if(res.data.status==1){
						_this.content = res.data.result
					}
				}).catch(error =>{
					
				})
			},
			//评论列表
			getComment:function(){
				let _this=this;
				let data={
					article_id:_this.id,
					page:_this.page,
				};
				// if (_this.loadingType !== 0) {//loadingType!=0;直接返回
				// 	return false;
				// }
				_this.loadingType = 1;
				uni.showNavigationBarLoading();
				_this.$axios(_this.$baseUrl.getComment,data).then(res =>{
					if(res.data.status==1){
						if (res.data.result.comment == null ||res.data.result.comment==undefined ||res.data.result.comment=='' ) {//没有数据
						    _this.loadingType = 2;
						    uni.hideNavigationBarLoading();//关闭加载动画
						    return;
						}
						_this.page++
						console.log(res)
						_this.contentList = _this.contentList.concat(res.data.result.comment)
						_this.allPage = res.data.result.pages;
						_this.loadingType = 0;//将loadingType归0重置
						uni.hideNavigationBarLoading();//关闭加载动画
					}else{
						_this.loadingType = 2;
						uni.hideNavigationBarLoading();//关闭加载动画
					}
				}).catch(error =>{
					
				})
			},
			//发表评论
			conmmentAdds:function(){
				let _this=this;
				let data={
					channel:1,
					token:_this.token,
					article_id:_this.id,
					content:_this.contentIpt,
					anonymous:1,
				};
				_this.$axios(_this.$baseUrl.conmmentAdds,data).then(res =>{
					if(res.data.status==1){
						_this.contentIpt='';
						_this.contentList = [];
						_this.page = 1;
						let data1 = {
							article_id:_this.id,
							page:_this.page,
						};
						_this.$axios(_this.$baseUrl.getComment,data1).then(res =>{
							if(res.data.status==1){
								_this.contentList = res.data.result.comment
							}
						},(error) =>{
							
						})
						uni.showToast({
							title: res.data.msg,
							'icon':'success',
							'position':'center',
							duration: 2000
						})
					}else{
						uni.showToast({
							title: res.data.msg,
							'icon':'fail',
							'position':'center',
							duration: 2000
						})
					}
				}).catch(error =>{
					
				})
			}
		}
	}
</script>

<style>
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
		padding: 40upx 0;
		border-top: 1px solid rgba(241,241,241,1);
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #fff;
		z-index: 999;
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
	
	/*  */
	.lis {
		padding: 24upx 15upx;
		border-bottom: 1px solid #eee;
	}
	.detail_pingjia_f1_left {
		height: 80upx;
	}
	.detail_pingjia_f1_img {
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		overflow: hidden;
		display: inline-block;
		float: left;
	}
	.detail_pingjia_f1_img image{
		width: 100%;
		height: 100%;
	}
	.detail_pingjia_f1_txt {
		height: 80upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		float: left;
		margin-left: 16upx;
	}
	
	.detail_pingjia_f1_txt1 {
		font-size: 28upx;
		color: #1a1a1a;
		line-height: 1;
	}
	
	.detail_pingjia_f1_txt2 {
		font-size: 22upx;
		line-height: 1;
		color: #333;
		margin-top: 14upx;
	}
	.detail_pingjia_f1_right image {
		display: inline-block;
		vertical-align: middle;
		width: 28upx;
		margin-top: 26upx;
	}
	
	.detail_pingjia_f1_right text {
		display: inline-block;
		vertical-align: middle;
		font-size: 22upx;
		color: #666;
		margin-top: 26upx;
		margin-left: 10upx;
	}
	
	.content_pinglun_content {
		font-size: 26upx;
		color: #333333;
		line-height: 1.5;
		margin-top: 15upx;
		padding-left: 96upx;
		margin-bottom: 4upx;
	}
	
	.hundredSurnamesNewsInner_bot1 image {
		display: inline-block;
		vertical-align: middle;
		height: 28upx;
	}
	
	.hundredSurnamesNewsInner_bot1 text {
		display: inline-block;
		vertical-align: middle;
		font-size: 24upx;
		color: #999;
		line-height: 1;
		margin-left: 17upx;
	}
	
	.hundredSurnamesNewsInner_bot2 image {
		display: inline-block;
		vertical-align: middle;
		height: 28upx;
		margin-left: 28upx;
	}
	.hundredSurnamesNewsInner_bot {
		padding: 28upx 17upx;
		background: #f6f7f7;
	}
	.sec1{
		padding-bottom: 30upx;
		border-bottom: 1px solid #eee;
	}
</style>
