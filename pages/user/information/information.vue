<template>
	<view id="app">
		<view class="logo" @click="logo">
			<view class="logo-img">
				<image :src="logoImage" mode=""></image>
			</view>
			<view class="title">
				头像
			</view>
		</view>
		<view class="option">
			<view class="option-view">
				<view class="v1">
					{{userList.mobile}}
				</view>
				<view class="v2">
					登陆账号
				</view>
			</view>
			<view class="option-view"  @click="nickname('nickname',userList.nickname)">
				<image src="../../../static/user/more.png" mode=""></image>
				<view class="v1">
					{{userList.nickname}}
				</view>
				<view class="v2">
					昵称
				</view>
			</view>
			<view class="option-view">
				<image src="../../../static/user/more.png" mode=""></image>
				<!-- <view class="v1" v-html="userList.sex==0?'保密':userList.sex==1?'男':'女'"></view> -->
				<view class="v1">
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="uni-input">{{array[index].name}}</view>
					</picker>
				</view>
				<view class="v2">
					性别
				</view>
			<!-- 	<view class="uni-list-cell-db">
					
				</view> -->
			</view>
			<view class="option-view">
				<image src="../../../static/user/more.png" mode=""></image>
				<view class="v1">
					<!-- {{userList.birthday}} -->
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
				<view class="v2">
					生日
				</view>
			</view>

		</view>
		<view class="option-view2">
			<image src="../../../static/user/more.png" mode=""></image>

			<view class="v3">
				修改密码
			</view>
		</view>
	</view>
</template>

<script>
	function getDate(type) {
		const date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${day}`;
	}
	export default {
		data() {
			return {
				index: 0,
				array: [{name:'保密'},{name:'男'},{name: '女'} ],
				logoImage: "",
				token:'',
				userList:{},
				date: getDate({
					format: true
				}),
				startDate:getDate('start'),
				endDate:getDate('end'),
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
		mounted:function() {
			let _this = this;
			_this.userInfo();
		},
		methods: {
			bindPickerChange: function(e) {
				var _this = this;
				this.index = e.target.value;
				_this.editUser1()
			},
			logo() {
				var _this = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						_this.logoImage = res.tempFilePaths[0];
						_this.editUser();
					}
				});
			},
			nickname(url,name){
				if(name!=''){
					url = url+'?name='+name
				}
				uni.navigateTo({
					url:url
				})
			},
			bindDateChange: function(e) {
				var _this = this;
				_this.date = e.target.value
				_this.editUser2();
			},
			userInfo:function(){
				let _this=this;
				let data={
					channel:1,
					token:_this.token,
				};
				_this.$axios(_this.$baseUrl.userInfo,data).then(res =>{
					if(res.data.status==1){
						_this.userList = res.data.result.user;
						_this.logoImage = res.data.result.user.head_pic;
						_this.index = res.data.result.user.sex;
						_this.date = res.data.result.user.birthday;
					}
				}).catch(error =>{
					
				})
			},
			//修改头像
			editUser:function(){
				let _this=this;
				let data={
					channel:1,
					token:_this.token,
					img:_this.logoImage
				};
				_this.$axios(_this.$baseUrl.editUser,data).then(res =>{
					if(res.data.status==1){
						uni.showToast({
							title: res.data.msg,
							icon:'success',
							position:'center',
							duration: 2000
						})
					}else{
						uni.showToast({
							title: res.data.msg,
							icon:'fail',
							position:'center',
							duration: 2000
						})
					}
				}).catch(error =>{
					
				})
			},
			//修改男女
			editUser1:function(){
				let _this=this;
				let data={
					channel:1,
					token:_this.token,
					sex:_this.index,
				};
				_this.$axios(_this.$baseUrl.editUser,data).then(res =>{
					if(res.data.status==1){
						uni.showToast({
							title: res.data.msg,
							icon:'success',
							position:'center',
							duration: 2000
						})
					}else{
						uni.showToast({
							title: res.data.msg,
							icon:'fail',
							position:'center',
							duration: 2000
						})
					}
				}).catch(error =>{
					
				})
			},
			//修改生日
			editUser2:function(){
				let _this=this;
				let data={
					channel:1,
					token:_this.token,
					birth:_this.date,
				};
				_this.$axios(_this.$baseUrl.editUser,data).then(res =>{
					if(res.data.status==1){
						uni.showToast({
							title: res.data.msg,
							icon:'success',
							position:'center',
							duration: 2000
						})
					}else{
						uni.showToast({
							title: res.data.msg,
							icon:'fail',
							position:'center',
							duration: 2000
						})
					}
				}).catch(error =>{
					
				})
			},
		},
		onShow(e) {
			let _this = this;
			_this.userInfo();
		}
	}
</script>

<style>
	#app {
		background-color: #F7F7F7;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.logo {
		width: 100%;
		height: 150upx;
		overflow: hidden;
		background-color: rgb(255, 255, 255);
		margin-top: 20upx;
	}

	.logo-img {
		width: 107upx;
		height: 107upx;
		border-radius: 50%;
		margin: 21.5upx;
		float: right;
		overflow: hidden;
	}

	.logo-img>image {
		width: 100%;
		height: 100%;
	}

	.title {
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 150upx;
		margin-left: 31upx;
	}

	.option {
		width: 100%;
		margin-top: 20upx;
		overflow: hidden;
		background-color: rgb(255, 255, 255);
	}

	.option-view {
		width: 698upx;
		height: 98upx;
		border-bottom: 1upx solid rgb(221, 221, 221);
		overflow: hidden;
		margin: 0 auto;
	}

	.option-view:last-child {
		border-bottom: 1upx solid rgba(255, 255, 255, 1);
	}

	.option-view2 {
		width: 100%;
		height: 98upx;
		overflow: hidden;
		margin: 0 auto;
		margin-top: 38upx;
		background-color: rgb(255, 255, 255);
	}

	.option-view2>image {
		width: 14upx;
		height: 24upx;
		margin-top: 37upx;
		float: right;
		margin-left: 20upx;
		margin-right: 26upx;
	}

	.option-view>image {
		width: 14upx;
		height: 24upx;
		margin-top: 37upx;
		float: right;
		margin-left: 20upx;
	}

	.v3 {
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 98upx;
		margin-left: 31upx;
	}

	.v1 {
		float: right;
		line-height: 98upx;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.v2 {
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 98upx;
	}

	.option-view1 {
		width: 100%;
		height: 80upx;
		overflow: hidden;
		text-align: center;
		margin-top: 86upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		background-color: rgba(255, 255, 255, 1);
		color: rgba(51, 51, 51, 1);
		line-height: 80upx;
	}
	.uni-input{
		width: 375upx;
		text-align: right;
	}
</style>
