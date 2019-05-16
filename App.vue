<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	uni-tabbar{
		height:98upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 13upx 0px rgba(217, 217, 217, 0.35);
	}
	.uni-tabbar__item:nth-child(2) .uni-tabbar__icon{
		width: 42upx;
		height: 35upx;
	}
	.uni-tabbar__item:nth-child(3) .uni-tabbar__icon{
		width: 42upx;
		height: 40upx;
	}
	.uni-tabbar__item:nth-child(4) .uni-tabbar__icon{
		width: 44upx;
		height: 40upx;
	}
	uni-tabbar .uni-tabbar__label{
		font-size: 24upx !important;
	}
</style>
