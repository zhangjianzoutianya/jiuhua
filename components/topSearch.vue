<template name="topSearch">
	<view class="top_search">
		<view class="top_search_map"><text>{{title}}</text><image src="../static/index/topSearch_icon.png"></image></view>
		<image class="top_search_icon" src="../static/index/topSearch_s.png"></image>
		<input confirmtype="text" placeholder="输入意向位置/业态">
		<view class="top_search_m"><image src="../static/index/topSearch_m.png"></image></view>
	</view>
</template>

<script>
	export default {
		name: "topSearch",
		props:{
			title:{
				type: String,
				default: ""
			}
		},
		data() {
			return {
				
			}
		},
		created(){
			
		},
		mounted(){
			
		},
		methods: {
			
		}
	}	
</script>

<style scoped>
	.top_search{
		width: 497upx;
		padding: 10upx 87upx 10upx 166upx;
		position: relative;
	}
	.top_search input{
		width:447upx;
		height:60upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 7upx 0px rgba(191, 191, 191, 0.35);
		border-radius:10upx;
		font-size:24upx;
		text-align: center;
		color:rgba(153,153,153,1);
		line-height: 60upx;
		padding-left: 50upx;
	}
	.top_search_map{
		position: absolute;
		top: 10upx;
		left: 26upx;
		line-height: 60upx;
	}
	.top_search_map text{
		font-size: 30upx;
		color:rgba(51,51,51,1);
		margin-right: 8upx;
	}
	.top_search_map image{
		width: 17upx;
		height: 9upx;
		display: inline-block;
		vertical-align: 10upx;
	}
	.top_search_m{
		position: absolute;
		top: 10upx;
		right: 17upx;
		line-height: 60upx;
	}
	.top_search_m image{
		width: 26upx;
		height: 28upx;
	}
	.top_search_icon{
		width: 32upx;
		height: 32upx;
		position: absolute;
		top: 24upx;
		left: 38.4%;
	}
</style>
