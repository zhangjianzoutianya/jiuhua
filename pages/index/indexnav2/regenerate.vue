<template>
	<view>
		<view class="banner_img">
			<image :src="banner" mode=""></image>
		</view>
		<view class="sec1">
			<view class="sec-inner">
				<view class="sec1_fex sec1">
					<view class="sec1_fex_list" @click="goMsg('garbage_collection')">
						<image  src="../../../static/index/sec2_type1.png" mode=""></image>
						<view class="text">可回收垃圾</view>
					</view>
					<view class="sec1_fex_list" @click="goMsg('garbage_food')">
						<image src="../../../static/index/sec2_type2.png" mode=""></image>
						<view class="text">厨余垃圾</view>
					</view>
					<view class="sec1_fex_list" @click="goMsg('garbage_harmful')">
						<image src="../../../static/index/sec2_type3.png" mode=""></image>
						<view class="text">有害垃圾</view>
					</view>
					<view class="sec1_fex_list" @click="goMsg('garbage_other')">
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
					<view class="sec4-content-list" @click="goMsg(list.is_video==0?'articleInner':'videoInner',list.article_id)" v-for="(list,index) in contentList" :key="index" >
						<view class="img">
							<image v-if="list.is_video==0" :src="list.thumb" mode=""></image>
							<video v-else src="" controls></video>
							<view class="sec4_play" v-if="list.is_video==1">
								<image src="../../../static/index/sec2_plays.png" mode=""></image>
							</view>
						</view>
						<view class="flex-right">
							<view class="title">{{list.title}}</view>
							<view v-if="list.is_video==1" class="videoss">视频</view>
							<view class="title2">
								<view class="title2_1" v-if="list.is_hot==1">热</view>
								<text>服务到家</text>
								<text>{{list.discuss_num}}评论</text>
								<text>{{list.add_time}}</text>
							</view>
						</view>
					</view>
					<uniLoadMore v-if="allPages!=1"  :loadingType="loadingType" :contentText="contentText" ></uniLoadMore>
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
		data() {
			return {
				banner:{},
				page:1,
				contentList:[],
				allPages:'',
				loadingText: '加载中...',
				loadingType: 0,//定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown:'上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				}
			}
		},
		onReachBottom:function(){
			let _this=this;
			_this.events1();
		},
		created(){
			let _this=this;
		},
		mounted(){
			let _this=this;
			//baner
			_this.getBanner();	
			
			_this.events1();	
		},	
		methods: {
			goMsg(url,id){
				if(id!=''){
					url = url+'?id='+id
				}
				uni.navigateTo({
					url:url
				})
			},
			
			//banner
			getBanner:function(){
				let _this=this;
				let data={
					id:7,
				};
				_this.$axios(_this.$baseUrl.banner,data).then(res =>{
					if(res.data.status==1){
						_this.banner=res.data.result.banner[0].ad_code;
					}
				}).catch(error =>{
					
				})
			},
			// 列表
			events1:function(){
				let _this=this;
				let data={
					type:1,
					page:_this.page,
					Hot:_this.Hot,
					New:_this.New,
				};
				if (_this.loadingType !== 0) {//loadingType!=0;直接返回
					return false;
				}
				_this.loadingType = 1;
				uni.showNavigationBarLoading()
				_this.$axios(_this.$baseUrl.events1,data).then(res =>{
					if(res.data.status==1){
						if (res.data.result.articles == null ||res.data.result.articles==undefined ||res.data.result.articles=='' ) {//没有数据
						    _this.loadingType = 2;
						    uni.hideNavigationBarLoading();//关闭加载动画
						    return;
						}
						 _this.page++
						_this.contentList = _this.contentList.concat(res.data.result.articles)
						_this.allPages = res.data.result.pages;
						_this.loadingType = 0;//将loadingType归0重置
						uni.hideNavigationBarLoading();//关闭加载动画
					}else{
						_this.loadingType = 2;
						uni.hideNavigationBarLoading();//关闭加载动画
						return;
					}
				}).catch(error =>{
					
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
		background:#6FC562;
		position: absolute;
		left: 0;
		top: 15upx;
	}
	.sec2-inner .title{
		font-size:32upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(63,63,63,1);
		letter-spacing: 1upx;
		display: inline-block;
	}
	.title .videoss{
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
		height:75upx;
		font-size:30upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:1.3;
		overflow: hidden;
	}
	.sec4-content-list .title2{
		display: flex;
		align-items: center;
		margin-top: 40upx;

	}
	.sec4-content-list .title2 text{
		font-size:24upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		margin-right: 15upx;
		letter-spacing: 1upx;
		flex-shrink: 0;

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
