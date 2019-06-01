<template>
	<view>
		<view class="sec1">
			<view class="sec-inner">
				<view class="art-tit">
					{{content.title}}
				</view>
				<view class="art-tit2">
					<text>服务到家</text>
					<text>1小时前</text>
				</view>
				<view class="art-content">
					<view class="art-content-inner1" v-html="content.content">
					</view>
				</view>
			</view>
		</view>
	
		<view class="sec2">
			<view class="sec-inner sec2-inner">
				<view class="ipt">
					<input type="text" value="" placeholder="写评论" v-model="contentIpt" confirm-type="search" @confirm="conmmentAdds()"/>
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
		
		<view class="hundredSurnamesNewsInner_sec2_content">
			<view class="uls" >
				
				<view v-if="contentList.length>=1">
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
				<view class="lis" v-else>
					<view style="height:200upx;text-align:center;font-size:32upx;color:#666;line-height:200upx;">暂无评论</view>
				</view>
			</view>
			<view class="" style="height: 134.5upx;"></view>
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
				console.log(JSON.stringify(data))
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
		width: 699upx;
		margin: 0 auto;
	}
	.art-tit{
		margin-top: 40upx;
		font-size:30upx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		line-height:1;
		letter-spacing: 1upx;
	}
	.art-tit2{
		display: flex;
		margin-top: 40upx;
	}
	.art-tit2 text{
		font-size:24upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		margin-right: 30upx;
	}
	.art-content{
		margin-top: 40upx;
	}
	.art-content-inner1{
		font-size:26upx;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:1.5;
	}
	.art-content-inner2{
		margin-top: 40upx;
	}
	.art-content-inner2 .art-content-inner2-img{
		width: 699upx;
		height: 281upx;
	}
	.art-content-inner3 .text{
		font-size:26upx;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height: 1.5;
		text-indent: 2em;
		margin-top: 40upx;
	}
	.sec2{
		width: 100%;
		padding: 40upx 0;
		border-top: 1px solid rgba(241,241,241,1);
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		z-index: 999;
	}
	.sec2-inner{
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
