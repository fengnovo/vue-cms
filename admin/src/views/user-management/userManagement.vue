<template>
  <div class="user-management">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="user-management-content">
      <div class="user-management-header">
        <el-form :inline="true" :model="searchForm" class="demo-form-inline">
          <el-form-item>
            <el-input v-model.trim="searchForm.userId" placeholder="请输入用户Id" size="medium"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearch" size="medium" icon="el-icon-search">查询</el-button>
            <el-button @click="onRefresh" size="medium" icon="el-icon-refresh">清空</el-button>
            <el-button type="success" icon="el-icon-plus" size="medium" @click="addOpenBtn">添加</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="user-management-table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="parent.name" label="上级姓名" width="180" />
          <el-table-column prop="age" label="年龄" width="180" />
          <el-table-column prop="sex" label="性别" width="180" :formatter="(row, column, value) => { return value === '0' ? '女': '男' }" />
          <el-table-column prop="_id" label="ID" />
          <el-table-column label="编辑">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">Edit</el-button>
              <el-button size="mini" @click="handleDelete(scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 添加人员信息 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="30%" @close="closeDialog">
      <div class="dialog-userform">
        <el-form ref="userForm" :model="userForm" label-width="80px">
          <el-form-item label="选择父级">
            <el-select v-model="userForm.parentId" placeholder="请选择父级">
              <el-option :label="item.name" :value="item._id" v-for="item of tableData" :key="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="userForm.name" size="medium" />
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="userForm.age" size="medium" />
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="userForm.sex" placeholder="请选择性别" size="medium">
              <el-option label="女" value="0"></el-option>
              <el-option label="男" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="图片上传">
           <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addUserBtn(dialogTitle)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getUsersInfo, postUsersInfo, editUsersInfo, deleteUsersInfo } from '@/api/userApi'
export default {
  name: 'userManagement',
  data(){
    return{
     tableData:[],
     searchForm:{
       userId:''
     },
     dialogVisible: false,
     dialogTitle: '添加人员',
     userForm:{
       name: '',
       age: '',
       sex: '1',
       parentId: null
     },
     uploadUrl:'http://localhost:3000/admin/upload',
     fileList: [],
     imageUrl:''
    }
  },
  created(){
    this.ininTableData()
  },
  methods:{
    async ininTableData(){
      const {data: res} = await getUsersInfo({pageNum: 100})
      this.tableData = res.data
    },
    async onSearch(){
      const {data: res} = await getUsersInfo({userId: this.searchForm.userId})
      this.tableData = res.data
    },
    onRefresh(){
      this.ininTableData()
    },
    addOpenBtn(){
      this.dialogTitle = '添加人员'
      this.dialogVisible = true
    },
    closeDialog(){
       Object.assign(this.$data.userForm, this.$options.data().userForm)
    },
    addUserBtn(){
      if (this.dialogTitle === '添加人员') {
        postUsersInfo(this.userForm).then(() => {
          this.$message({
              message: '添加成功',
              type: 'success'
            });
          this.dialogVisible = false
          this.ininTableData()
        })
       } else {
          editUsersInfo(this.userForm).then(()=>{
            this.dialogVisible = false
            this.ininTableData()
          })
       }
    },
    handleEdit(row){
      this.dialogVisible = true
      this.dialogTitle = '编辑人员'
      this.userForm = {...this.userForm, ...row}
    },
   handleDelete(row){
     deleteUsersInfo(row).then(()=>{
       this.ininTableData()
     })
    },
    // 上传成功
    handleAvatarSuccess(res, file) {
      console.log(res, file)
      this.imageUrl = res.url
      // this.imageUrl = URL.createObjectURL(file.raw);
    },
    // 上传之前
    beforeAvatarUpload(file) {
      console.log(file)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.user-management{
  .user-management-content{
    padding: 20px;
  }
  ::v-deep .el-dialog__footer{
    border-top: 1px solid #f2f2f2;
    text-align: center;
  }
}
.avatar-uploader{
  ::v-deep{
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
}
</style>
