import request from './request'

// 用户登录
export const postLogin = body => {
  return request({
      url: 'admin/login',
      method: 'post',
      data: body
  })
}


// 保存用户信息
export const postUsersInfo = body => {
  return request({
      url: 'admin/rest/usersData/postList',
      method: 'post',
      data: body
  })
}

// 获取用户信息
export const getUsersInfo = (query) => {
  return request({
      url: 'admin/rest/usersData/getList',
      method: 'get',
      params: query
  })
}

// 修改用户信息
export const editUsersInfo = (body) => {
  return request({
      url: "admin/rest/usersData/editList",
      method: 'post',
      data: body
  })
}
// 删除用户
export const deleteUsersInfo = (body) => {
  return request({
      url: "admin/rest/usersData/deleteList",
      method: 'post',
      data: body
  })
}