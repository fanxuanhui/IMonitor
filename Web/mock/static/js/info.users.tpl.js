webpackJsonp([4],{

/***/ 43:
/***/ function(module, exports) {

	module.exports = "<!--\n    用户信息\n    UsersInfoVm\n-->\n<style>\n  .component-panel {\n    border-left: none;\n    border-right: none;\n    border-radius: 0;\n    box-shadow: 0 0 4px 2px rgba(0,0,0,.1);\n  }\n  .component-panel > .panel-heading {\n    background-color: #FFFFFF;\n  }\n  .component-panel > .panel-heading .iconfont {\n    font-size: 12px;\n  }\n  .component-panel-table {\n    border-bottom: 1px solid #ddd;\n  }\n  .component-panel-table > thead > tr > th, .component-panel-table > tbody > tr > td {\n    text-align: center;\n    vertical-align: middle;\n  }\n</style>\n<div class=\"panel panel-default component-panel\">\n  <div class=\"panel-heading clearfix\">\n    用户信息\n    <div class=\"pull-right\">\n      <button class=\"btn btn-sm btn-success\" ng-click=\"UsersInfoVm.editUser()\"><i class=\"iconfont icon-add\"></i>添加用户</button>\n    </div>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"row\">\n      <div class=\"col-md-4 form-inline\">\n        <div class=\"form-group\">\n          <label for=\"_display_num\">显示条数</label>\n          <select name=\"display_num\" id=\"_display_num\" class=\"form-control\">\n            <option value=\"10\">10</option>\n            <option value=\"20\">20</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-md-offset-4 form-inline\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputName2\" placeholder=\"请输入关键字\">\n          <button class=\"btn btn-primary\">搜索</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <table class=\"table table-hover component-panel-table\">\n    <thead>\n    <tr>\n      <th>登录名</th>\n      <th>中文名</th>\n      <th>邮箱</th>\n      <th>手机号</th>\n      <th>状态</th>\n      <th>权限</th>\n      <th>操作</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr ng-repeat=\"data in UsersInfoVm.table.data track by $index\">\n      <td>{{data.loginName}}</td>\n      <td>{{data.cnName}}</td>\n      <td>{{data.email}}</td>\n      <td>{{data.phone}}</td>\n      <td>{{data.status}}</td>\n      <td>{{data.limit}}</td>\n      <td>\n        <button class=\"btn btn-sm btn-default\" ng-click=\"UsersInfoVm.editUser(data.id)\">编辑</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n  <div class=\"clearfix\">\n    <ul class=\"pagination pull-right\">\n      <li>\n        <a href=\"#\" aria-label=\"Previous\">\n          <span aria-hidden=\"true\">&laquo;</span>\n        </a>\n      </li>\n      <li><a href=\"#\">1</a></li>\n      <li>\n        <a href=\"#\" aria-label=\"Next\">\n          <span aria-hidden=\"true\">&raquo;</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>";

/***/ }

});