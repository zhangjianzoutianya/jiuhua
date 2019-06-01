<template>
	<view>
		<view class="comm">
			<view class="comm-info" v-for="(list,index) in contentList" :key="index">
				<view class="comm-img">
					<image :src="list.original_img" mode=""></image>
				</view>
				<view class="comm-title">
					<view class="comm-text">
						{{list.integral_name}}
					</view>
					<view class="comm-msg">
						<view class="comm-data">
							{{list.exchange_integral}}积分+{{list.shop_price}}元
						</view>
						<view class="comm-time">
							{{list.add_time}}
						</view>
					</view>
				</view>
			</view>
			<uniLoadMore v-if="allPages>1"  :loadingType="loadingType" :contentText="contentText" ></uniLoadMore>
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
				token:'',
				page:1,
				allPages:'',
				contentList:[],
				loadingText: '加载中...',
				loadingType: 0,//定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown:'上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				}
			}
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
		onReachBottom:function(){
			let _this=this;
			_this.userExchange()
		},
		mounted:function(){
			let _this=this;
			_this.userExchange()
		},
		methods: {
			//记录
			userExchange:function(){
				let _this=this;
				let data={
					channel:1,
					token:_this.token,
					page:_this.page,
				};
				_this.loadingType = 1;
				uni.showNavigationBarLoading()
				_this.$axios(_this.$baseUrl.userExchange,data).then(res =>{
					if(res.data.status==1){
						if (res.data.result.list == null ||res.data.result.list==undefined ||res.data.result.list=='' ) {//没有数据
						    _this.loadingType = 2;
						    uni.hideNavigationBarLoading();//关闭加载动画
						    return;
						}
						_this.page++
						_this.contentList = _this.contentList.concat(res.data.result.list);
						_this.allPages = res.data.result.pages;
						_this.loadingType = 0;//将loadingType归0重置
						uni.hideNavigationBarLoading();//关闭加载动画
					}else{
						_this.loadingType = 2;
						uni.hideNavigationBarLoading();//关闭加载动画
					}
				}).catch(error =>{
					
				})
			},
		}
	}
</script>

<style>
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
