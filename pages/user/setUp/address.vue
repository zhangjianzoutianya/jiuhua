<template>
	<view id="app">
		<view class="adress_con">
			<view class="adress_list" v-for="(item , index) in addressList">
				<view class="adress_txt">
					<view class="adress_name">
						{{item.consignee}}
						<text>{{item.mobile}}</text>
					</view>
					<view class="adress_t">
						{{item.province}}{{item.city}}{{item.district}}{{item.address}}
					</view>
				</view>
				<view class="adress_btn">
					<view class="adress_btn1" :class="{'active':item.is_default}"><text></text>设为默认地址</view>
					<view class="adress_btn2">
						<view @click="goAdress(item.address_id,item.consignee,item.mobile,item.province,item.city,item.district,item.address,item.is_default)"><image src="../../../static/user/adress_bj.png"></image>编辑</view>
						<view @click="deleteFun(item.address_id)"><image src="../../../static/user/adress_sc.png"></image>删除</view>
					</view>
				</view>
			</view>

			<view class="adress_add" @click="addAddress()">
				<image src="../../../static/user/adress_add.png"></image>
				添加新地址
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				channel:1,
				token:'',
				addressList:'',
			}
		},
		created(){
			let _this=this;
			uni.getStorage({
				key: 'token',
				success: function (res) {
					_this.token=res.data;
				}
			});
		},
		mounted(){
			let _this=this;
			_this.getAddressList();
		},	
		methods: {
			goAdress(id,consignee,mobile,province,city,district,address,is_default) {
				uni.navigateTo({
					url: "address_inner?id="+id+"&consignee="+consignee+"&mobile="+mobile+"&province="+province+"&city="+city+"&district="+district+"&address="+address+"&is_default="+is_default+"",
				})
			},
			addAddress() {
				uni.navigateTo({
					url: "address_add",
				})
			},
			getAddressList() {
				let _this=this;
				let data={
					token:_this.token,
					channel:_this.channel,
				};
				_this.$axios(_this.$baseUrl.addressList,data).then(res =>{
					if(res.data.status==1){
						_this.addressList=res.data.result;
					}
				}).catch(error =>{
					
				})
			},
			deleteFun(address_id){
				let _this=this;
				uni.showModal({
					title: '提示',
					content: '确认要删除该地址吗？',
					success: function (res) {
						if (res.confirm) {
							let data={
								channel:1,
								token:_this.token,
								address_id:address_id,
							};
							_this.$axios(_this.$baseUrl.delAddress,data).then(res =>{
								if(res.data.status==1){
									_this.getAddressList();
								}
							}).catch(error =>{
								
							})
						} else if (res.cancel) {
							
						}
					}
				});
				
			}
		},
		onShow(){
			let _this=this;
			//console.log(this.$store.getters.resturantName);
			_this.getAddressList();
		}
	}
</script>

<style>
	#app {
		background-color: #fff;
		width: 100%;
		min-height: 100%;
		overflow: hidden;
	}
	.adress_con{
		width: 100%;
		border-top: 1upx solid rgba(228,228,228,1);
		padding-bottom: 96upx;
	}
	.adress_list{
		width: 100%;
		margin-bottom: 20upx;
	}
	.adress_txt{
		padding: 26upx 22upx;
		border-bottom: 1upx solid rgba(235,235,235,1);
	}
	.adress_name{
		width: 100%;
		position: relative;
		height:22upx;
		font-size:28upx;
		color:rgba(51,51,51,1);
		margin-bottom: 32upx;
	}
	.adress_name text{
		position: absolute;
		top: 0;
		right: 0;
		height:22upx;
		font-size:28upx;
		color:rgba(51,51,51,1);
	}
	.adress_t{
		font-size:28upx;
		color:rgba(102,102,102,1);
		line-height:35upx;
	}
	.adress_btn{
		padding: 0 25upx;
		line-height: 80upx;
		display: flex;
		justify-content: space-between;
	}
	.adress_btn1{
		font-size:26upx;
		color:rgba(51,51,51,1);
	}
	.adress_btn1.active{
		color:rgba(201,0,9,1);
	}
	.adress_btn1 text{
		display: inline-block;
		width: 31upx;
		height: 31upx;
		border:2upx solid rgba(34,32,48,1);
		margin-right: 10upx;
		border-radius: 100%;
		-webkit-transition:background-image 0.3s ease;	
		transition:background-image 0.3s ease;
		position: relative;
		top: 6upx;
	}
	.adress_btn1.active text{
		border:2upx solid #c90009;
		width: 31upx;
		height: 31upx;
		background-image: url(../../../static/user/adress_on.png);
		background-position: center;
		background-size: 105% 105%;
	}
	.adress_btn2{
		height:24upx;
		font-size:24upx;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.adress_btn2 view{
		display: inline-block;
		margin-left: 27upx;
	}
	.adress_btn2 view image{
		display: inline-block;
		width: 24upx;
		height: 24upx;
		margin-right: 18upx;
		vertical-align: -3upx;
	}
	.adress_add{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		line-height: 96upx;
		height: 96upx;
		font-size:32upx;
		font-weight:500;
		color:rgba(255,255,255,1);
		text-align: center;
		background:rgba(201,0,9,1);
	}
	.adress_add image{
		width: 49upx;
		height: 49upx;
		margin-right: 16upx;
		vertical-align: -12upx;
	}
	
	
</style>
